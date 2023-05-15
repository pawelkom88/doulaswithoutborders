import Stats from "@/components/stats/Stats";
import React from "react";
import heroImage from "@/public/images/a-newborn-child-holded-by-a-doctor.webp";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative flex min-h-[30rem] items-center justify-center overflow-hidden rounded-lg py-16 shadow-lg md:py-20 xl:py-48">
        <Image
          src={heroImage}
          alt=""
          placeholder="blur"
          blurDataURL={heroImage.blurDataURL}
          priority={true}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-primary-clr opacity-60 mix-blend-multiply"></div>

        <div className="relative flex flex-col items-center p-4 sm:max-w-2xl">
          <p className="mb-4 text-center text-lg text-white sm:text-xl md:mb-8">
            Doulas Without Borders
          </p>
          <h1 className="mb-8 text-center text-heading font-bold leading-8 text-white md:mb-12 lg:leading-[4.2rem]">
            The UK’s Leading Doula Charity
          </h1>

          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Link
              href="#"
              className="inline-block rounded-lg bg-secondary-clr px-8 py-3 text-center text-sm font-semibold text-white transition duration-200 hover:bg-white hover:text-primary-clr uppercase tracking-widest">
             Join us
            </Link>
          </div>
        </div>
      </section>

      <Stats />
    </>
  );
}
