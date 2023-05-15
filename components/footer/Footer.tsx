import Image from "next/image";
import logo from "@/public/images/logo.webp";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="text-white xl:col-span-1">
            <Link href="/">
              <Image src={logo} width={100} height={100} alt="logo" />
              <span className="sr-only">
                Doulas Without Borders logo - click to go back to homepage
              </span>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider ">XYZ</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <a href="./templates.html" className="text-base font-normal">
                      {" "}
                      link
                    </a>
                  </li>

                  <li>
                    <a href="https://wickedlabs.dev/" className="text-base font-normal">
                      {" "}
                      link
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold uppercase tracking-wider ">XYZ</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <a href="https://www.wickedbackgrounds.com/" className="text-base font-normal">
                      link
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.colorsandfonts.com/.html"
                      className="text-base font-normal">
                      link
                    </a>
                  </li>

                  <li>
                    <a href="https://www.wvsc.dev/.html" className="text-base font-normal">
                      link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider ">Legal</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <a href="./license.html" className="text-base font-normal">
                      link
                    </a>
                  </li>
                  <li>
                    <a href="./privacy.html" className="text-base font-normal">
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a href="./terms.html" className="text-base font-normal">
                      {" "}
                      Terms{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
