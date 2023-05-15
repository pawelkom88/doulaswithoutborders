import Image from "next/image";
import React from "react";
import sectionImage from "@/public/images/a-mother-holding-newborn-little-hand.webp";
import Link from "next/link";

export default function Section() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                width={sectionImage.width}
                height={sectionImage.height}
                className="absolute inset-0 h-full w-full object-cover"
                src={sectionImage}
                placeholder="blur"
                blurDataURL={sectionImage.blurDataURL}
                alt=""
              />
            </div>
          </div>

          <div className="relative flex items-center bg-sky-500/5 ">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-sky-500/5"></span>

            <div className="px-4 py-8 sm:p-16 ">
              <h2 className="text-heading2 font-bold text-primary-clr">
                Supporting Childbearing Women & People Experiencing Disadvantage
              </h2>

              <p className="mt-4 text-lg text-gray-900">
                Doulas Without Borders is a UK wide network of volunteers offering accessible,
                grassroots services to women and childbearing people experiencing multiple
                disadvantage and financial hardship during pregnancy, birth and early parenthood.
                Our focus is on providing the emotional, physical and informational support which is
                crucial during pregnancy, birth and early mother/parenthood. ​ A calm, supported
                mother or parent who is able to bond with their baby moves society one step closer
                to a resilient, connected and well-adapted next generation.
              </p>

              <Link
                href="/"
                aria-label="Learn more"
                className="mt-8 inline-block rounded border-2 border-primary-clr bg-primary-clr px-12 py-3 font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-primary-clr">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
