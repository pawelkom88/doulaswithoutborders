import { partners } from "@/data/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Partners() {
  return (
    <section>
      <div className="container mx-auto my-8 space-y-6 p-6 text-center lg:my-24 lg:space-y-8 lg:p-8">
        <h2 className="text-heading2 font-bold text-primary-clr">Proudly Partnering with</h2>
        {/* create array of images alt id and map */}
        <Marquee speed={20}>
          <div className="flex justify-between gap-24">
            {partners.map(partner => {
              return (
                <a key={partner.id} href={partner.link} target="_blank" rel="noopener">
                  <Image
                    src={partner.image}
                    width={250}
                    height={200}
                    alt={partner.alt}
                    className="aspect-auto h-full w-full object-contain"
                  />
                  <span className="sr-only">{partner.alt}</span>
                </a>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
