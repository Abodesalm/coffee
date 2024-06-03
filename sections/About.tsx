import Btn from "@/components/Btn";
import Image from "next/image";
import image from '../public/images/coffee-2.png'


export default function About() {
  return (
    <div className="pad h-[480px] mt-12 flex flex-row justify-between " id="about">
      <div>
        <Image src={image} alt="image" width={500}/>
      </div>
      <div className="back flex flex-col justify-between items-start w-[600px] px-8 py-4">
        <h2>About us</h2>
        <p className=" space-2 font-normal text-[14px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque consequatur quaerat nostrum doloremque, sint rerum quam placeat molestias odio doloribus quibusdam iste, ab ex praesentium consectetur explicabo? Consequatur deleniti repellendus, adipisci cupiditate, officiis culpa id ea minima iusto dolor ipsa veritatis itaque ex animi sed similique exercitationem sequi quis lorem ipsum.</p>
        <Btn>shop now</Btn>
      </div>
    </div>
  )
}
