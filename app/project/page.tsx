"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper"; // Import tipe Swiper
import "swiper/css";
import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Machine Learning",
    title: "Handlips",
    description: "HandLips is a sign language translation project that utilizes three machine learning components: computer vision, natural language processing, and voice recognition.",
    stack: [{ name: "Tensorflow" }, { name: "Python" }, { name: "MobileNetV2" }],
    image: '/assets/handlips.png',
    live: '',
    github: "https://github.com/HandLips"
  },
  {
    num: "02",
    category: "Frontend",
    title: "ATHA MABEL",
    description: "A website project from a wood furniture shop for a company profile. A website to introduce company to a customer.",
    stack: [{ name: "Tailwind.css" }, { name: "Laravel" }, { name: "Javascript" }],
    image: '/assets/project3.png',
    live: 'https://athamebel.kahasolusi.com/',
    github: "https://github.com/Saidill/PAD2_COMPRO"
  },
  {
    num: "03",
    category: "Frontend",
    title: "AUTOMACH",
    description: "AutoMach is a website project for the final assignment of the web programming 1 course. The website is an e-commerce platform focused on automotive products.",
    stack: [{ name: "Html 5" }, { name: "Css" }, { name: "PHP" }, { name: "Javascript" }],
    image: '/assets/project1.png',
    live: '',
    github: "https://github.com/Saidill/AutoMach"
  },
  {
    num: "04",
    category: "Machine Learning",
    title: "Deteksi Padi",
    description: "Developed a machine learning model using Computer Vision to detect diseases in rice plants",
    stack: [{ name: "Python" }, { name: "Tensorflow" }],
    image: '/assets/padi.png',
    live: '',
    github: "https://github.com/Saidill/deteksi_padi_ml"
  },
  {
    num: "05",
    category: "Frontend",
    title: "Simlab BPJK Dashboard",
    description: "The website application is developed for the Construction Services Development Agency. It is designed to facilitate the BPJK in receiving construction testing orders.",
    stack: [{ name: "Tailwind.css" }, { name: "PHP" }, { name: "Javascript" }, { name: "Laravel" }],
    image: '/assets/project2.png',
    live: '',
    github: ""
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperInstance) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">{item.name}</li>
                ))}
              </ul>
              <div className="border border-white/60"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View on live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View on GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[450px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  <Image src={project.image} alt={project.title} width={700} height={500} className="object-contain h-full" />
                </SwiperSlide>
              ))}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles="text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
