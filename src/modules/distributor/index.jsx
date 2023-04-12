import Accordion from "@/layouts/accordion/Accordion";
import AccordionList from "@/layouts/accordion/AccordionList";

function distributor() {
  return (
    <div id="distributor">
      <div
        className="grid place-items-center"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h1 className="font-bold">DISTRIBUTOR</h1>
      </div>
      <div className="mt-10 grid place-items-center gap-5">
        <Accordion title="Jabar" content="Bandung" />
        <AccordionList title="Jatim" content="Surabaya" />
        <AccordionList title="Sulawesi" content="Aceh" />
      </div>
    </div>
  );
}

export default distributor;
