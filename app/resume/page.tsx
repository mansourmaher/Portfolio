"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  FaJava,
  FaPython,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
import Image from "next/image";

const Education = [
  {
    title: "Bachelor of Science in Computer Science",
    location: "University of California, Los Angeles",
    date: "2018 - 2022",
    description:
      "I am currently pursuing a Bachelor of Science in Computer Science at the University of California, Los Angeles. I have taken courses in computer programming, data structures, algorithms, and software engineering. I have also completed internships at technology companies, where I gained experience in software development and project management.",
  },
  {
    title: "High School Diploma",
    location: "Los Angeles High School",
    date: "2014 - 2018",
    description:
      "I graduated from Los Angeles High School with a high school diploma. I took advanced placement courses in computer science, mathematics, and science. I also participated in extracurricular activities, such as the robotics club and the math club.",
  },
  {
    title: "Online Courses",
    location: "Coursera, Udemy, Codecademy",
    date: "2016 - Present",
    description:
      "I have taken online courses in computer programming, web development, and data science. I have completed courses in Python, JavaScript, HTML, CSS, and SQL. I have also completed courses in machine learning, data analysis, and data visualization.",
  },
];
const Exeperience = [
  {
    title: "Software Developer Intern",
    company: "Google",
    date: "Summer 2021",
    description:
      "I worked as a software developer intern at Google during the summer of 2021. Ideveloped software applications using Java, Python, and JavaScript. Icollaborated with a team of software engineers to design and implement new features for Google products. I also participated in code reviews,testing, and debugging.",
  },
  {
    title: "Software Engineering Intern",
    company: "Facebook",
    date: "Summer 2020",
    description:
      "I worked as a software engineering intern at Facebook during the summer of 2020. Ideveloped software applications using React, Node.js, and MongoDB. Icollaborated with a team of software engineers to design and implement new features for Facebook products. I also participated in code reviews,testing, and debugging.",
  },
  {
    title: "Web Development Intern",
    company: "Amazon",
    date: "Summer 2019",
    description:
      "I worked as a web development intern at Amazon during the summer of 2019. Ideveloped web applications using HTML, CSS, and JavaScript. Icollaborated with a team of web developers to design and implement new features for Amazon products. I also participated in code reviews,testing, and debugging.",
  },
];
const Skills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaReact /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
    ],
  },
  {
    title: "Database Management",
    skills: [
      { name: "MySQL", icon: <FaReact /> },
      { name: "MongoDB", icon: <FaVuejs /> },
      { name: "PostgreSQL", icon: <FaAngular /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <FaReact /> },
      { name: "Docker", icon: <FaVuejs /> },
      { name: "Kubernetes", icon: <FaAngular /> },
      { name: "Jenkins", icon: <FaNodeJs /> },
      { name: "AWS", icon: <FaHtml5 /> },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: <FaReact /> },
      { name: "Communication", icon: <FaVuejs /> },
      { name: "Teamwork", icon: <FaAngular /> },
      { name: "Time Management", icon: <FaNodeJs /> },
      { name: "Leadership", icon: <FaHtml5 /> },
    ],
  },
];

const AboutMe = {
  title: "About Me",
  description:
    "I am a software developer with a passion for technology. I have experience in web development, mobile app development, and software engineering. I am proficient in programming languages such as Java, Python, and JavaScript. I have worked at technology companies such as Google, Facebook, and Amazon. I am currently pursuing a Bachelor of Science in Computer Science at the University of California, Los Angeles. I am looking for opportunities to work on exciting projects and collaborate with talented individuals.",
};
function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transform: "scale(1) rotate(0deg)",
      }}
      className="flex justify-center items-center min-h-[80vh] "
    >
      <div className="container mx-auto  ">
        {" "}
        <Tabs
          defaultValue="Exeperience"
          className="flex flex-col xl:flex-row gap-4 items-start"
        >
          <TabsList className="flex flex-col  w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="Exeperience">Experience</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>

            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="AboutMe">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full ">
            <TabsContent value="Education">
              kdfvkdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            </TabsContent>
            <TabsContent value="Exeperience">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", delay: 0.4 }}
                className="gap-4 flex flex-col"
              >
                <h1 className="font-extrabold text-4xl text-white">
                  My Experience
                </h1>
                <p className="text-white/50 italic">
                  I have completed internships at technology companies, where I
                  gained experience in software development and project
                  management.
                </p>
                <ScrollArea className="h-[70vh]">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
                    {Exeperience.map((exp, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col gap-4 border-b-2 border-white/50  p-4"
                        >
                          <h1 className="font-extrabold text-2xl text-white">
                            <span>{index + 1}) </span>
                            {exp.title}
                          </h1>
                          <p className="text-white/50 italic">{exp.company}</p>
                          <p className="text-white/50 italic">{exp.date}</p>
                          <p className="text-white/50 italic">
                            {exp.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>
            <TabsContent value="Skills">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", delay: 0.4 }}
              >
                <p className="text-white font-extrabold text-4xl">My skills </p>
                <p className="py-4 text-white/50 italic">
                  I have experience in web development, mobile app development,
                  and software engineering. I am proficient in programming
                  languages such as Java, Python, and JavaScript. I have worked
                  at technology companies such as Google, Facebook, and Amazon.
                </p>
                <div>
                  {Skills.map((skill, index) => {
                    return (
                      <motion.div className="px-8">
                        <h1 className="text-xl text-white">
                          {index + 1}) {skill.title}
                        </h1>
                        <div className="grid grid-cols-3">
                          {skill.skills.map((icon, index) => {
                            return (
                              <div className="text-white py-4 px-6 flex flex-col items-center">
                                <div className="text-6xl  ">{icon.icon}</div>
                                <p>{icon.name}</p>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </TabsContent>
            <TabsContent value="AboutMe">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", delay: 0.4 }}
              >
                <h1 className="font-extrabold text-4xl text-white">
                  {AboutMe.title}
                </h1>
                <p className="text-white/50 italic">{AboutMe.description}</p>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
