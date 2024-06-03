import Btn from "@/components/Btn";
import Image from "next/image";
import Link from "next/link";
import logo from '../public/images/coffee-logo.png'

export default function Navbar() {
  return (
    <nav className="h-[100px] pad flex flex-row justify-between items-center">
      <div className="">
        <Image src={logo} alt="logo" width={80}/>
      </div>

      <div className="flex flex-row w-1/2 justify-around items-center">
        <Btn status="link" to='#header'>Home</Btn>
        <Btn status="link" to='#about'>About</Btn>
        <Btn status="link" to='#service'>Service</Btn>
        <Btn status="link" to='#faqs'>Faqs</Btn>
        <Btn status="link" to='#contact'>Contact Us</Btn>
      </div>

      <div className="flex flex-row w-[25%] justify-around items-center">
        <p>+963 997 203 291</p>
        <Btn to={'#header'} >Get In Touch</Btn>
      </div>
    </nav>
  )
}
