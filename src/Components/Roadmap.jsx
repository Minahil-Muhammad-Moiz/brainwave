import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "..//constants";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import Button from "./Button";

const Roadmap = () => {
  return (
    <Section id="roadmap" className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading title="What we're working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => (
            <div
              key={item.id}
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              } `}
            >
              <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    src={grid}
                    alt="grid"
                    className="w-full"
                    width={550}
                    height={550}
                  />
                </div>
                <div className="relative z-1">
                  <div className="mx-auto">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      width={630}
                      height={420}
                      className="w-full"
                    />
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Gradient />
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
