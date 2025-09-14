import { FC } from "react";
import { asText, Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import clsx from "clsx";


/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery: FC<GalleryProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading}
        components={{
          
          heading2:({children})=>(
            <h2 className="text-balance text-center text-5xl font-medium md:text-7xl ">{children}</h2>
          ),
          em:({children})=>(
            <em className="bg-no-repeat bg-cover bg-center outline-orange-500 bg-clip-text not-italic text-transparent"
    style={{backgroundImage:"url(/fire.gif)"}}>{children}</em>
          )
        }

      } />
      <div className="glass-container mx-auto mt-10 mb-5 w-fit bg-gray-900/80">
        <PrismicNextImage field={slice.primary.image} className=""  />
      </div>
      <div className="text-balance mx-auto mt-5 max-w-md text-center text-gray-300">
      <PrismicRichText field={slice.primary.body} />
      </div>
      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">

      {slice.primary.repeatable.map((item) => (
        <div className={clsx("glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4", item.wide ? "md:col-span-2":"col-span-1")} key={ asText(item.title)}>
          <div className="h3 text-2xl">
            <PrismicText field={item.title} />
          </div>
          <div className="max-w-md text-balance text-slate-300">
            <PrismicRichText field={item.body} />
          </div>
          <PrismicNextImage field={item.image} className="max-h-45 w-auto mx-auto rounded-md" />
        </div>
      ))}
      </div>
    </Bounded>
  );
};

export default Gallery;
