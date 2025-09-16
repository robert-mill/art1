"use client"
//import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage} from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import  usePrefersReducedMotion  from '@/hooks/usePrefersReducedMotion';

export default function AnimatedContent({slice}: {slice:Content.HeroSlice}) {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);
  useGSAP(()=>{
    if(prefersReducedMotion){
        gsap.set(".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow", {opacity:1})
        return;
    }


    const ti = gsap.timeline({defaults:{ease:"power2.inOut"}});


    ti.fromTo(".hero__heading",{scale:0.5},{scale:1, opacity:1, duration:1.4})
    ti.fromTo(".hero__body",{y:20},{y:0, opacity:1, duration:1.2}, "-=0.6")
    ti.fromTo(".hero__button",{scale:1.5},{scale:1, opacity:1, duration:1.3},"-=0.8")
    ti.fromTo(".hero__image",{y:100},{y:0, opacity:1, duration:1.3}, "+=0.3")
    ti.fromTo(".hero__glow",{scale:0.5},{scale:1, opacity:1, duration:1.8},"-=1")


  }, {scope:container})
  return (
    <div className="relative" ref={container}>
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
          <PrismicRichText field={slice.primary.heading}
        components={{
          
          heading1:({children})=>(
            <h1 className="hero__heading text-balance text-center text-5xl font-medium md:text-8xl opacity-0">{children}</h1>
          ),
          em:({children})=>(
            <em className="bg-no-repeat bg-cover bg-center outline-orange-500 bg-clip-text not-italic text-transparent"
    style={{backgroundImage:"url(/fire.gif)"}}>{children}</em>
          )
        }

      } />
        )}
        {isFilled.richText(slice.primary.body) && (
          <div className="hero__body mx-auto mt-6 max-w-md text-balance text-gray-300 opacity-0">
            <PrismicRichText field={slice.primary.body} />
          </div>
        )}
        {isFilled.link(slice.primary.button_link) && (
          <ButtonLink className="hero__button mt-8 opacity-0" field={slice.primary.button_link}>
            {slice.primary.button_label}
          </ButtonLink>
        )}
        {isFilled.image(slice.primary.image) && (

          <div className="hero__image glass-container mx-auto mt-16 w-fit bg-gray-900/80 opacity-0">
            <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter opacity-0" />
            <PrismicNextImage className="rounded-md" field={slice.primary.image} />
          </div>
        )}
      </div>
  )
}
