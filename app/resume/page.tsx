"use client";

import { info } from 'console';
import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs,FaPython} from 'react-icons/fa'
import {SiTailwindcss,SiNextdotjs,SiPandas,SiMysql,SiLaravel,SiJupyter} from 'react-icons/si'

//about
const about = {
  title : "About Me",
  description :
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum tempora quisquam illum vero impedit reprehenderit? Temporibus ipsa numquam asperiores eveniet,dicta sunt itaque quos perspiciatis vero inventore, fuga odit recusandae',
  info:[
    {
      fieldName : "Name",
      fieldValue : "Saidl Halim"
    },
    {
      fieldName : "Phone",
      fieldValue : "(+62) 081 324 159 714"
    },
    {
      fieldName : "Experience",
      fieldValue : "2+ Years"
    },
    {
      fieldName : "Email",
      fieldValue : "saidilhalim25@gmail.com"
    },
  ]
}

const experience = {
  title  : "My Experience",
  items:[
    {
      description : "I entered college by choosing a software engineering technology study program, then learn algorithms to data structures and early stage application development.",
      position : "Beginning Of College",
      year : "2022"
    },
    {
      description : "In my first year of college, I created a frontend web project called AutoMech. The website is an e-commerce platform focused on automotive products.",
      position : "AutoMech|Frontend",
      year : "2023"
    },
    {
      description : "My campus formed a team, one of which was me with my four college friends to work on a project given by a campus partner to improve existing features and add new features on the admin side",
      position : "SIM-LAB BPJK|Frontend",
      year : "2023"
    },
    {
      description : "My campus formed a team of me and four college friends to work on a project from a wood furniture shop, creating a company profile and enhancing existing features on the admin side",
      position : "Atha Mable|Frontend",
      year : "2024"
    },
    
  ]
}

const education = {
  title  : "My Education",
  items:[
    {
      institution : "SMAS Uggulan Ar-Rahman",
      position : "High School Student",
      year : "2019 - 2022"
    },
    {
      institution : "Software Engineering major at Gadjah Mada University",
      position : "College Student",
      year : "2022 - present"
    },
  ]
}

const skills = {
  title  : "My Skills",
  skillList:[
    {
      icon : <FaHtml5/>,
      name : "Html 5",
    },
    {
      icon : <FaCss3/>,
      name : "Css 3",
    },
    {
      icon : <FaJs/>,
      name : "JavaScript",
    },
    {
      icon : <FaReact/>,
      name : "React",
    },
    {
      icon : <FaNodeJs/>,
      name : "Node.JS",
    },
    {
      icon : <FaPython/>,
      name : "Python",
    },
    {
      icon : <SiTailwindcss/>,
      name : "Tailwind.Css",
    },
    {
      icon : <SiNextdotjs/>,
      name : "Next.Js",
    },
    {
      icon : <SiPandas/>,
      name : "Pandas",
    },
    {
      icon : <SiMysql/>,
      name : "Mysql",
    },
    {
      icon : <SiLaravel/>,
      name : "laravel",
    },
    {
      icon : <SiJupyter/>,
      name : "Jupyter",
    },
  ]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip'
import {ScrollArea} from '@/components/ui/scroll-area'
import {motion} from 'framer-motion'


const resume = () => {
  return (
    <motion.div 
    initial={{opacity : 0}}
    animate={{
      opacity : 1,
      transition : {delay:2.4, duration:0.4, ease:"easeIn"}
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent className='w-full' value='experience'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item,index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-full py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.year}</span>
                          <h3 className='text-xl mx-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                          <span className=''></span>
                          <p className='text-white/60'>{item.description}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent className='w-full' value='education'>
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item,index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-full py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.year}</span>
                          <h3 className='text-md mx-w-[260px] min-h-[60px] text-center lg:text-left'>{item.institution}</h3>
                          <div className='flex items-center gap-3'>
                          
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent className='w-full h-full' value='skills'>
             <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <div>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>
                  })}
                </ul>
             </div>
            </TabsContent>
            <TabsContent className='w-full text-center xl:text-left' value='about'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item,index)=>{
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span>{item.fieldName}</span>
                        <span>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default resume