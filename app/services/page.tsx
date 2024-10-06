"use client";
import { motion } from "framer-motion";
import { BsArrow90DegRight, BsArrowDownRight, BsArrowRight } from "react-icons/bs";

function Services() {
  const services = [
    {
      num: "01",
      title: "Web Design",
      description:
        "We design websites that are visually appealing and easy to navigate. We use the latest web technologies to create a site that is both beautiful and functional.",
    },
    {
      num: "02",
      title: "Web Development",
      description:
        "We develop websites that are fast, responsive, and secure. We use the latest web technologies to create a site that is both beautiful and functional.",
    },
    {
      num: "03",
      title: "Mobile App Development",
      description:
        "We develop mobile apps that are fast, responsive, and secure. We use the latest mobile technologies to create an app that is both beautiful and functional.",
    },
    {
      num: "04",
      title: "SEO",
      description:
        "We help businesses get found online. We use the latest SEO techniques to improve your website's search engine ranking and drive more traffic to your site.",
    },
  ];
  return (
    <section className="min-h-[80vh] flex flex-col justify-center mx-auto  py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 2,
            
          }}
          transition={{ duration: 0.4, ease: "easeIn", delay: 0.4 }}
        
          className="text-white grid grid-cols-1 md:grid-cols-2 gap-[80px] "
        >
          {services.map((services, index) => {
            return (
              <div key={index}  >
                <div className="flex items-center justify-between my-4">
                  {" "}
                  <h1 className="text-6xl font-extrabold">{services.num}</h1>
                  <BsArrowDownRight className="text-white w-8 h-8 border rounded-full p-1 hover:border-blue-400 hover:text-blue-400  hover:-rotate-45" />
                </div>

                <h1 className="font-extrabold mb-4">{services.title}</h1>
                <p className="text-white/50 italic">{services.description}</p>
                <div className="border-b-2 border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
