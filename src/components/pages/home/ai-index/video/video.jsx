'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import ParallaxVocabulary from './parallax-vocabulary';

const Video = () => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [inView, ref]);

  return (
    <div
      className="relative z-0 mx-auto -mt-48 aspect-square max-w-[1160px] xl:mt-[-152px] xl:max-w-[860px] lg:mt-[-117px] lg:max-w-[680px] sm:-mt-[52px] sm:max-w-[91%]"
      ref={ref}
    >
      <video
        className="mix-blend-lighten [filter:brightness(1)_contrast(105%)_saturate(100%)]"
        controls={false}
        width={1160}
        height={1160}
        ref={videoRef}
        loop
        playsInline
        muted
      >
        <source src="/videos/pages/home/ai-loop.mp4" type="video/mp4" />
        <source src="/videos/pages/home/ai-loop.webm" type="video/webm" />
      </video>
      <ParallaxVocabulary className="absolute left-1/2 top-[15.5%] w-[1280px] -translate-x-1/2 xl:top-8 xl:w-[930px] lg:-top-14 lg:w-[740px] md:top-[48%] md:w-[110%] md:-translate-x-1/2 md:-translate-y-1/2" />
    </div>
  );
};

export default Video;
