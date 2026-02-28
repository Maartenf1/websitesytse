'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

import type { ImageItem } from '@/data/content';

export function FilmstripHero({ images }: { images: ImageItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);
  const pointerState = useRef({
    dragging: false,
    startX: 0,
    scrollStart: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    raf: 0 as number | 0
  });

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReducedMotion(media.matches);
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  const transition = useMemo(
    () => (reducedMotion ? 'duration-0' : 'duration-500'),
    [reducedMotion]
  );

  const stopMomentum = () => {
    const state = pointerState.current;
    if (state.raf) {
      cancelAnimationFrame(state.raf);
      state.raf = 0;
    }
  };

  const startMomentum = () => {
    if (reducedMotion || !stripRef.current) return;
    const state = pointerState.current;
    const el = stripRef.current;
    let velocity = state.velocity;

    const tick = () => {
      velocity *= 0.93;
      el.scrollLeft -= velocity * 18;
      if (Math.abs(velocity) < 0.01) {
        state.raf = 0;
        return;
      }
      state.raf = requestAnimationFrame(tick);
    };

    state.raf = requestAnimationFrame(tick);
  };

  return (
    <section className="container-page section-space space-y-6" aria-label="Hero met filmstrip">
      <div className="relative overflow-hidden rounded-2xl bg-sand">
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          width={1600}
          height={1067}
          priority
          placeholder="blur"
          blurDataURL={images[activeIndex].blurDataURL}
          sizes="(max-width: 1024px) 100vw, 66vw"
          className={`aspect-[3/2] w-full object-cover transition-opacity ${transition}`}
        />
      </div>
      <div
        ref={stripRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        onWheel={(event) => {
          if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            event.currentTarget.scrollLeft += event.deltaY;
          }
        }}
        onPointerDown={(event) => {
          const state = pointerState.current;
          stopMomentum();
          state.dragging = true;
          state.startX = event.clientX;
          state.scrollStart = event.currentTarget.scrollLeft;
          state.lastX = event.clientX;
          state.lastTime = performance.now();
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          const state = pointerState.current;
          if (!state.dragging) return;
          const now = performance.now();
          const dx = event.clientX - state.startX;
          event.currentTarget.scrollLeft = state.scrollStart - dx;
          const delta = event.clientX - state.lastX;
          const dt = Math.max(now - state.lastTime, 1);
          state.velocity = delta / dt;
          state.lastX = event.clientX;
          state.lastTime = now;
        }}
        onPointerUp={(event) => {
          const state = pointerState.current;
          state.dragging = false;
          event.currentTarget.releasePointerCapture(event.pointerId);
          startMomentum();
        }}
      >
        {images.map((image, index) => {
          const active = index === activeIndex;
          return (
            <button
              key={image.src}
              type="button"
              className="group relative min-w-40 flex-1 snap-start overflow-hidden rounded-xl border border-neutral-200 focus-visible:ring-2"
              aria-label={`Toon ${image.alt}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={260}
                loading="lazy"
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                sizes="(max-width: 768px) 45vw, 18vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <span
                aria-hidden
                className={`absolute inset-0 transition-opacity ${
                  active ? 'opacity-0' : 'opacity-30 group-hover:opacity-10'
                } bg-black`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
