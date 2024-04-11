import { Asterisk, ArrowDown } from 'lucide-react'
import { AnimatedTitle } from '@/components/motion/AnimatedTitle'
import { MotionDiv } from '@/components/motion'

import LogoSVG from '@/public/logo.svg'

export function Footer() {
  return (
    <footer className="px-1">
      <div className="relative mx-auto flex h-80 flex-col justify-between overflow-hidden rounded-4xl bg-primary-depth/90 pt-0 text-primary-foreground dark:bg-card sm:h-96 lg:h-[26rem] lg:w-[95%]">
        <div className="flex border-b-2 border-border/70 dark:border-card dark:bg-primary max-md:flex-col-reverse">
          <div className="group flex w-full flex-1 gap-12 overflow-hidden whitespace-nowrap border-border/70 py-2 text-lg capitalize max-md:border-t-2 sm:text-2xl md:border-r-2 md:py-4">
            <p className="flex animate-footer-marquee items-center gap-12 group-hover:paused">
              <span>start your language journey here.</span>
              <ArrowDown className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
              <span>learn anytime, learn anywhere.</span>
              <Asterisk className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
            </p>
            <p
              className="flex animate-footer-marquee items-center gap-12 group-hover:paused"
              aria-hidden="true"
            >
              <span>start your language journey here.</span>
              <ArrowDown className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
              <span>learn anytime, learn anywhere.</span>
              <Asterisk className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
            </p>
            <p
              className="flex animate-footer-marquee items-center gap-12 group-hover:paused"
              aria-hidden="true"
            >
              <span>start your language journey here.</span>
              <ArrowDown className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
              <span>learn anytime, learn anywhere.</span>
              <Asterisk className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
            </p>
          </div>
          <a
            className="flex items-center justify-end px-4 py-2 text-center font-semibold uppercase opacity-70 before:content-['@_'] after:content-['_*'] hover:opacity-100 sm:px-12 md:py-4 lg:text-2xl"
            href="https://github.com/elitenoire/trylingo"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="flex-grow select-none overflow-hidden">
          <AnimatedTitle className="md:absolute md:inset-x-0 md:-bottom-1/4">
            <p className="font-display text-[min(37vw,300px)] -tracking-widest dark:text-card-foreground">
              Lingo
            </p>
          </AnimatedTitle>
          <MotionDiv
            className="relative ml-auto flex h-full w-1/3 flex-col justify-end max-md:hidden"
            initial={{ y: '100%', x: '2%' }}
            whileInView={{ y: '15%' }}
            transition={{ type: 'spring', bounce: 0.4, duration: 1.2 }}
          >
            <div className="drop-shadow-2xl saturate-[0.7] dark:hue-rotate-[50deg]">
              <LogoSVG />
            </div>
          </MotionDiv>
        </div>
        <div className="absolute right-1/4 top-1/3 md:right-1/3 md:top-[30%]">
          <div className="group relative h-20 w-20 sm:h-28 sm:w-28 sm:text-lg lg:h-32 lg:w-32">
            <span className="absolute inset-0 animate-footer-pulse rounded-full bg-highlight group-hover:paused" />
            <span className="absolute inset-0 flex items-center justify-center font-bold uppercase underline decoration-wavy underline-offset-2 transition-transform duration-300 ease-out group-hover:scale-125">
              start
            </span>
          </div>
        </div>
      </div>
      <p className="my-4 px-1 text-center max-sm:text-sm">
        © 2024 — Lingo by{' '}
        <a
          href="https://github.com/elitenoire"
          target="_blank"
          className="font-semibold decoration-dotted transition hover:underline"
        >
          @elitenoire
        </a>{' '}
        +{' '}
        <a
          href="https://www.youtube.com/@codewithantonio"
          target="_blank"
          className="font-semibold decoration-dotted transition hover:underline"
        >
          @CodeWithAntonio
        </a>
        .
      </p>
    </footer>
  )
}
