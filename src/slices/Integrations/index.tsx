import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import StarBackground from "./StarBackground";
import Image from "next/image";

import background from "./background.jpg";
import React, { JSX } from "react";

//import StylizedLogoMark from "./StylizedLogoMark";
// import SvgIcon from "./SvgIcon";
// import clsx from "clsx";
import AnimatedContent from "./AnimatedContent";




/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntergrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */

const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {

  
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />

      <div className="relative">
        <PrismicRichText field={slice.primary.heading} components={{
        heading2:({children})=>(
            <h2 className="text-balance text-center text-5xl font-medium md:text-7xl ">{children}</h2>
          ),
          em:({children})=>(
            <em className="bg-no-repeat bg-cover bg-center outline-orange-500 bg-clip-text not-italic text-transparent"
    style={{backgroundImage:"url(/fire.gif)"}}>{children}</em>
          )
      }}/>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        {/* <AnimatedContent slice={slice} /> */}
        <AnimatedContent slice={slice} />

      </div>
    </Bounded>
  );
};

export default Integrations;