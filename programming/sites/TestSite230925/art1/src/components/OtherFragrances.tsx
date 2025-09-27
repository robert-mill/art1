import { createClient } from "@/prismicio";
import { formatPrice } from "@/utils/formatters";
import { PrismicNextImage} from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { TransitionLink } from "@/components/TransitionLink";


type OtherFragrancesProps = {
    currentFragranceUid: string;
}

export const OtherFragances = async ({currentFragranceUid}:OtherFragrancesProps) =>{
    const client = createClient();
    const allFragrances = await client.getAllByType("fragrance");
    const otherFragrances = allFragrances.filter((fragrance)=>fragrance.uid !== currentFragranceUid)

    return (
        <div className="container mx-auto px-4">
            <h2 className="font-display mb-8 text-3xl text-white md:text-4xl">You may also like</h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {otherFragrances.map((fragrance)=>(
                    <li key={fragrance.id}>
                        <TransitionLink document={fragrance} className="group">
                            <div className="relative aspect-square transition-transform group-hover:scale-105">
                                <PrismicNextImage field={fragrance.data.bottle_image} width={600} height={600} className="h-auto w-full"/>
                            </div>
                            <div className="mt-8 space-y-1 text-white">
                                <h3 className="font-display text-2xl">
                                    <PrismicText field={fragrance.data.title} />
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    Eau de Parfum
                                </p>
                                <p className="font-base font-light">
                                    {formatPrice(fragrance.data.price)}
                                </p>
                                
                            </div>
                        </TransitionLink>

                    </li>
                ))}
            </ul>
        </div>  
    )
}
