import Btn from "@/components/Btn";
import Image from "next/image";
import image from '../public/images/coffee-2.png'


export default function About() {
  return (
    <div className="pad h-[550px] lg:h-[700px] mt-12 lg:mt-4 flex flex-row lg:flex-col justify-between items-center " id="about">
      <div className=" self-center">
        <Image src={image} alt="image" width={500} className="lg:w-[300px] md:w-[250px] "/>
      </div>
      <div className="back flex flex-col justify-between items-start w-[600px] px-8 py-4 md:w-[100%] ">
        <h2>About us</h2>
        <p className=" space-2 font-normal text-[14px] md:text-[10px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque consequatur quaerat nostrum doloremque, sint rerum quam pla-<br/>ceat molestias odio doloribus quibusdam iste, ab ex praesentium consectetur explicabo? Consequatur deleniti repellendus, adipisci cupiditate, officiis culpa id ea minima iusto dolor ipsa veritatis itaq-<br/>ue ex animi sed similique exercitationem sequi quis lorem ipsum.</p>
        <Btn clas="md:text-[10px]">shop now</Btn>
      </div>
    </div>
  )
}
