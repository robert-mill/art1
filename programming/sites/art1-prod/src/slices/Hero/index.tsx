import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ButtonLink";
import { RevealText } from "./RevealText";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FadeIn vars={{scale:1, opacity:.5}} className="absolute inset-0 scale-125 opacity-0">
        <PrismicNextImage field={slice.primary.image} alt="" priority fill className="object-cover " />
      </FadeIn>
      <div className="flex relative h-screen flex-col justify-center"> 

        <RevealText 
          field={slice.primary.heading} 
          id="hero-heading" 
          className="font-display max-w-xl text-6xl leading-tight text-neutral-50 md:text-7xl lg:text-8xl"
        
        />
         

        <FadeIn vars={{delay:1, duration:1.3}} className="mt-6 max-w-md translate-y-8 text-lg text-neutral-100">
          <PrismicRichText field={slice.primary.body} />
        </FadeIn>
        <FadeIn className="mt-8 translate-y-5" vars={{delay:1.7, duration:1.1}}>
          {slice.primary.button.map((link) => (
            <ButtonLink
              key={link.key}
              field={link}
              className="w-fit"
              variant="Secondary"
            />
            
          ))}
        </FadeIn>
      </div>
     
    </Bounded>
  );
};

export default Hero;
