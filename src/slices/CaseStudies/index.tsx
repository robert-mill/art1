import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import Bounded from "@/components/Bounded";

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies: FC<CaseStudiesProps> = async ({ slice }) => {
 console.log("🚀 ~ CaseStudies ~ slice:", slice)
 
  const client = createClient();
  const caseStudies = await Promise.all(
    slice.primary.case_study.map(async (item)=>{
      
      if(isFilled.contentRelationship(item.case_study)){
        return await client.getByID<Content.CaseStudyDocument>(item.case_study.id)
      }
    })
  )
  console.log("🚀 ~ CaseStudies ~ caseStudies:", caseStudies)
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
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
      <div className="mt-20 grid gap-16">
        
        
        {caseStudies.map((caseStudy, index) => {
    return (<div key={caseStudy?.id} className="relative grid gap-4 opacity-85 transition-opacity duration-400 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <div className="col-span-1 flex flex-col gap-4">

              <h3 className="text-4xl">
                <PrismicText field={caseStudy?.data.company}/>
              </h3>
              <div className="max-w-md">
                <PrismicRichText field={caseStudy?.data.description}/>
              </div>
              <PrismicNextLink document={caseStudy} className="after:absolute after:inset-0 hover:underline">
                Read <PrismicText field={caseStudy?.data.company}/> case study
              </PrismicNextLink>
              </div>
              <PrismicNextImage field={caseStudy?.data.logo_image}  quality={100} className={clsx("rounded-xl lg:col-span-2", index%2 && "md:-order-1")}/>
          </div>);
})}
      </div>
      
    </Bounded>
  );
};

export default CaseStudies;
