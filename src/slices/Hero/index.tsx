import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage} from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";

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
      className="text-center"
    >
      <div className="relative">
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
          <PrismicRichText field={slice.primary.heading}
        components={{
          
          heading1:({children})=>(
            <h1 className="text-balance text-center text-5xl font-medium md:text-8xl ">{children}</h1>
          ),
          em:({children})=>(
            <em className="bg-no-repeat bg-cover bg-center outline-orange-500 bg-clip-text not-italic text-transparent"
    style={{backgroundImage:"url(/fire.gif)"}}>{children}</em>
          )
        }

      } />
        )}
        {isFilled.richText(slice.primary.body) && (
          <div className="mx-auto mt-6 max-w-md text-balance text-gray-300">
            <PrismicRichText field={slice.primary.body} />
          </div>
        )}
        {isFilled.link(slice.primary.button_link) && (
          <ButtonLink className="mt-8" field={slice.primary.button_link}>
            {slice.primary.button_label}
          </ButtonLink>
        )}
        {isFilled.image(slice.primary.image) && (

          <div className="glass-container mx-auto mt-16 w-fit bg-gray-900/80">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <PrismicNextImage className="rounded-md" field={slice.primary.image} />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Hero;
