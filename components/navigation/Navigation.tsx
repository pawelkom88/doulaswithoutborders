import logo from "@/public/images/logo.webp";
import Link from "next/link";
import Image from "next/image";
import MobileMenuBtn from "./MobileMenuBtn";

const links = [
  { id: 1, title: "about", url: "/" },
  { id: 2, title: "referrals", url: "/" },
  { id: 3, title: "get involved", url: "/" },
  { id: 4, title: "projects", url: "/" },
  { id: 5, title: "contact", url: "/" },
];

export default function Navigation() {
  return (
    <header className="mb-2 flex items-center justify-between py-4">
      <Link href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl">
        <Image src={logo} width={100} height={100} alt="logo" className="w-16 lg:w-24" />
        <span className="sr-only">Doulas Without Borders logo - click to go back to homepage</span>
      </Link>

      <nav className="hidden gap-12 lg:flex">
        {links.map(link => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className="text-sm font-archivo uppercase tracking-widest text-primary-clr">
              {link.title}
            </Link>
          );
        })}
      </nav>

      <a
        href="https://www.crowdfunder.co.uk/were-raising-14995-to-continue-our-vital-work?experiment=c#start"
        target="_blank"
        rel="noopener"
        className="group hidden gap-2 rounded-lg border-2 border-primary-clr bg-white px-8 py-2 text-center text-lg font-semibold uppercase text-primary-clr transition duration-200 hover:bg-primary-clr hover:text-white lg:flex lg:items-center lg:justify-center">
        <svg
          aria-hidden
          width={35}
          fill="#124680"
          className="animate-pulse pb-2 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          id="heart-donation">
          <path d="M21.5 22.7s.1 0 0 0l6.6 6.6c.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9l6.6-6.6c1.7-1.4 2.5-3.6 2.1-5.8-.4-2.4-2.3-4.3-4.6-4.8-1.8-.4-3.7.1-5.1 1.2-.5.4-.9.8-1.2 1.3-.3-.5-.7-.9-1.2-1.3-1.4-1.1-3.3-1.6-5.1-1.2-2.3.5-4.2 2.4-4.6 4.8-.2 2.2.6 4.4 2.3 5.8zm-.2-5.5c.3-1.6 1.5-2.8 3.1-3.2 1.2-.3 2.4 0 3.4.8.9.8 1.5 1.9 1.5 3.1 0 .6.4 1 1 1s1-.4 1-1c0-1.2.5-2.3 1.5-3.1 1-.8 2.2-1.1 3.4-.8 1.5.3 2.8 1.6 3.1 3.2.3 1.5-.3 3-1.5 3.9-.1.1-.2.1-.2.2L31 27.9c-.4.4-1 .4-1.4 0l-6.4-6.4c-.1-.1-.1-.2-.2-.2-1.4-1-1.9-2.5-1.7-4.1zM40.3 30.5v2h1.5V34h2v-1.5h1.5v-2h-1.5V29h-2v1.5zM10.8 15h2v-1.5h1.5v-2h-1.5V10h-2v1.5H9.3v2h1.5zM49 6h2V5h1V3h-1V2h-2v1h-1v2h1zM59.3 40h-10c-.6 0-1 .4-1 1v2.5c-1.1-.5-2.8-1.3-4.4-2.4-3.1-2.1-14.7-6-15.3-6.1-.5-.1-4.8-1.1-6.1 1.5-1.3 2.6 1.1 5.1 1.2 5.2.1.1.1.1.2.1l6.7 4.2c-1.2.7-3.2 1.6-5.7 2l-3.6-4.6c-.3-.5-2.1-3.3-4.5-3.8-1-.2-2 0-2.9.5-2.5 1.6-1.9 4.2-1.3 5.4l.4.6c-3-1-5.1-2-5.1-2.1 0 0-.1 0-.1-.1-1.4-.5-4.1-.7-5.2 1.5-1.3 2.6 1.1 5.1 1.2 5.2.1.1.1.1.2.1.1.4 8 5.3 17.2 6.3 3.4.4 7.4.6 11.3.6 4.7 0 9.4-.3 13-1.2l-.5-1.9c-6.2 1.5-16.6 1.3-23.6.5-8.1-.9-15.5-5.2-16.5-5.8-.3-.3-1.3-1.6-.7-2.8.5-1.1 2.4-.6 2.7-.5.8.4 6.5 3.1 13.2 4.1 7.3 1 12.5-3 12.8-3.2.3-.2.4-.5.4-.8 0-.3-.2-.6-.5-.8l-7.9-4.9c-.3-.3-1.3-1.6-.7-2.8.5-1 2.9-.7 3.8-.5.1 0 11.9 4 14.8 5.9 2.2 1.5 4.5 2.4 5.6 2.9V59c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V41c-.1-.6-.6-1-1.1-1zm-38.9 8c-1.6-.2-3.1-.6-4.6-.9l-1.7-2.5c-.1-.2-.9-1.7.7-2.7.4-.3.8-.4 1.3-.3 1.4.3 2.8 2.2 3.3 2.9 0 0 0 .1.1.1l2.8 3.5c-.6 0-1.2 0-1.9-.1zm37.9 10h-8V42h8v16z"></path>
        </svg>
        <span>donate</span>
      </a>

      <MobileMenuBtn />
    </header>
  );
}
