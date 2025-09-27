import { FC } from "react";
import { asText, Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ButtonLink";

/**
 * Props for `Artwork`.
 */
// export type ArtworkProps = SliceComponentProps<Content.ArtworkSlice>;
export type ArtworkProps = SliceComponentProps<Content.ArtworkSlice>;

/**
 * Component for "Artwork" Slices.
 */
const Artwork: FC<ArtworkProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden bg-black py-16 text-white md:py-24"
    >
     <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3 lg:grid-rows[auto,auto]">
        <FadeIn className="translate-y-16 opacity-0 lg:col-span-2 lg:row-span-2" vars={{duration:1}} start="top 70%">
          <PrismicNextImage field={slice.primary.bgimage} className="w-full h-auto object-cover" />
        </FadeIn>
        <FadeIn className="translate-y-16 space-y-6 self-start bg-white/10 p-10 opacity-0 lg:col-start-3 lg:row-start-1">
          <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
            <PrismicText field={slice.primary.heading} />
          </h2>
          <div className="max-w-lg text-base text-gray-300">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </FadeIn>
        <FadeIn className="animate-in opacity-0 relative translate-y-16 self-end bg-white/10 will-change-transform" vars={{duration:1, delay:1}}>
          <PrismicNextImage field={slice.primary.image} className="mx-auto -mt-10 w-full -rotate-12 md:-mt-10 drop-shadow-lg rounded-md" />
          <div className="flex justify-between p-10 pt-10">
            <div className="space-y-1">
              <h3 className="font-display text-4xl "><PrismicText field={slice?.primary.heading} fallback="Artwork"/></h3>
              <p className="mt-2 text-gray-400">Artwork multi media</p>
            {/* <ButtonLink document={artwork} variant="Secondary" className="mt-6">Shop Now</ButtonLink> */}
            </div>
            {/* <p className="mt-4 text-gray-400" aria-label="Product price"><span>{formattedPrice}</span></p> */}
          </div>
        </FadeIn>
       
      </div>
    </Bounded>
  );
};

export default Artwork;
