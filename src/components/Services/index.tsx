import ServiceCard from "../ServiceCard";

export default function Services() {
  return (
    <section className="px-20 flex flex-col text-center space-y-8 mt-8">
      <h2>Serviços</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>

      <div className="flex flex-wrap gap-8 justify-between">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
}