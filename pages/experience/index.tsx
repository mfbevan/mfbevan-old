import type { NextPage } from "next";
import { ExperienceCard } from "../../components/cards/ExperienceCard";
import { experiences } from "../../content";

const Experience: NextPage = () => {
  return (
    <>
      {experiences.map((_exp) => (
        <ExperienceCard key={_exp.title} experience={_exp} />
      ))}
    </>
  );
};

export default Experience;
