import Image from "next/image";
import React from "react";
import refugee from "@/public/images/a-refugee-woman-with-two-little-kids.webp";

export default function Testimonials() {
  return (
    <>
      <div className="container mx-auto my-12 lg:my-24 px-6">
        <section className="mb-12 text-center text-gray-800">
          <h2 className="mb-12 text-heading2 font-bold">Testimonials</h2>
          <div className="relative" data-bs-ride="">
            <div className="-inner relative w-full overflow-hidden">
              <div className="-item relative float-left w-full">
                <Image
                  src={refugee}
                  width={220}
                  height={292}
                  alt="refugee"
                  className="mx-auto h-56 w-56 rounded-full object-cover object-top mb-8"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-3 text-xl font-bold">Syrian woman</h5>
                    <p className="mb-4 font-medium">mother of 4</p>
                    <p className="mb-6">
                      &quot; I had no one here, all my sisters and mother are still in Syria. I had
                      never been to hospital for birth and I was very scared. I did not know what I
                      was being asked. When the Doula’s came, they were like angels, they explained
                      to me, they listened to me, they always made me feel safe. Every day I thank
                      God for them. I could go to have my baby and not worry about my children or my
                      husband. &quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className=" absolute bottom-0 left-0 top-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
              type="button"
              data-bs-target="#ExampleCaptions"
              data-bs-="prev">
              <span className="inline-block bg-no-repeat" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className=" absolute bottom-0 right-0 top-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
              type="button"
              data-bs-target="#ExampleCaptions"
              data-bs-="next">
              <span className=" inline-block bg-no-repeat" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </>
  );
}
