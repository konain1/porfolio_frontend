import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="Crafting responsive and user-friendly interfaces using modern technologies like React, Tailwind CSS, and JavaScript."
         
        />
        <Card
          title="Backend Development"
          des="Building robust and scalable server-side applications with Node.js, Express, and databases like MongoDB or MySQL."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="coming soon...."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="coming soon...."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Designing intuitive and engaging user experiences with a focus on usability, accessibility, and aesthetics."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Deploying and managing websites on reliable hosting platforms, ensuring optimal performance and uptime."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features