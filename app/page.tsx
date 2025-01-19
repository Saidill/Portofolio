import Photo from "@/components/Photo"
import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"

const Home = () => {
  return (
   <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">FrontEnd|Machine Learning Enthusiast</span>
            <h1 className="h1">
              Hello I'm <br/> <span className="text-accent">Saidil Halim</span>
            </h1><br/>
            <p className="max-w-[500px] mb-9 text-white/80 xl:text-justify text-[14px]">
            I am a Software Engineering Technology student at Gadjah Mada University with a strong focus on machine learning and frontend development. I am passionate about exploring the transformative potential of machine learning to solve complex problems and develop intelligent systems. Simultaneously, I leverage my expertise as a Frontend Engineer to design intuitive and dynamic user experiences, delivering impactful solutions in my projects.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
              variant = "outline"
              size="lg"
              className="uppercase flex items-center gap-2 hover:text-primary"
              >
                <a href="/assets/CV-Saidil Halim.pdf" download={""}>Download CV</a>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center item-center
                text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 pt-2"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Home