
type ParamProps = {
  params: Promise<{ uid: string }>;
};

export default async function Page({ params }: ParamProps) {
  const uid = (await params).uid;
  return (
    <div>Hi {uid}</div>
  );

}
// import { Metadata } from "next";
// import { notFound } from "next/navigation";

// import { asText, filter } from "@prismicio/client";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";

// // Define the expected params type for the page
// type Params = Promise<{ uid: string }>;

// // Define the page props type
// // type PageProps = {
// //   params: PageParams;
// //   searchParams?: { [key: string]: string | string[] | undefined };
// // };

// export default async function Page({ params }: { params: Params }) {
// const { uid } = await params;
  
//  // const { uid } = params;
//   const client = createClient();
//   const page = await client.getByUID("page", uid).catch(() => notFound());

//   // <SliceZone> renders the page's slices.
//   return <SliceZone slices={page.data.slices} components={components} />;
// }

// export async function generateMetadata({params}: {params: Params }): Promise<Metadata> {
//   const { uid } = await params;
//   const client = createClient();
//   const page = await client.getByUID("page", uid).catch(() => notFound());

//   return {
//     title: asText(page.data.title),
//     description: page.data.meta_description,
//     openGraph: {
//       title: page.data.meta_title ?? undefined,
//       images: [{ url: page.data.meta_image.url ?? "" }],
//     },
//   };
// }

// export async function generateStaticParams() {
//   const client = createClient();

//   // Get all pages from Prismic, except the homepage.
//   const pages = await client.getAllByType("page", {
//     filters: [filter.not("my.page.uid", "home")],
//   });

//   return pages.map((page) => ({
//     uid: page.uid,
//   }));
// }
