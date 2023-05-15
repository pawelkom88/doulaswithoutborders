import { cardInfo } from "@/data/data";
import Card from "./Card";

export default function About() {
  return (
    <section className="m-4 md:m-8">
      <div className="lg:my-12 container mx-auto my-4 space-y-2 p-4 text-center">
        <h2 className="text-heading2 font-bold text-primary-clr">
          Learn More About Our Services
          <br />
          and How We Can Help You
        </h2>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cardInfo.map(card => {
          return <Card key={card.id} info={card} />;
        })}
      </div>
    </section>
  );
}

// attribution
// maternity by Chiara Rossi from <a href="https://thenounproject.com/browse/icons/term/maternity/" target="_blank" title="maternity Icons">Noun Project</a>
