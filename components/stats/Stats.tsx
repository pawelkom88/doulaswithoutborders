import  SocialMedia  from './SocialMedia';
import Stat from "./Stat";
export default function Stats({}) {
  return (
    <section className="mx-auto mt-8 flex max-w-screen-2xl flex-col items-center justify-between gap-10 p-4 md:px-8 lg:flex-row lg:gap-8">
      <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
        <Stat />
        <Stat />
        <Stat />
      </div>
      <SocialMedia     />
    </section>
  );
}
