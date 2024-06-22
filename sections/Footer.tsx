import Btn from "@/components/Btn";
import Image from "next/image";
import Link from "next/link";
import logo from './../public/images/coffee-logo.png'

export default function Footer() {
  return (
    <footer className="pad flex flex-row justify-around items-center">
      <div className="flex flex-col">
        <Image src={logo} alt="logo" width={100}/>
        <div className="flex flex-row">
          <Link href=''></Link>
          <Link href=''></Link>
          <Link href=''></Link>
          <Link href=''></Link>
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <h4 className="lg:text-[14px]">Quick Link</h4>
        <Link className="font-normal texr-[14px] lg:text-[10px]" href='#header'>Home</Link>
        <Link className="font-normal texr-[14px] lg:text-[10px]" href='#about'>About</Link>
        <Link className="font-normal texr-[14px] lg:text-[10px]" href='#service'>Service</Link>
        <Link className="font-normal texr-[14px] lg:text-[10px]" href='#contact'>Contact</Link>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="lg:text-[14px]">Contact</h4>
        <p className="font-normal texr-[14px] lg:text-[10px]">+963 997 203 291</p>
        <p className="font-normal texr-[14px] lg:text-[10px]">EMAIL</p>
        <p className="font-normal texr-[14px] lg:text-[10px]">address</p>
        <p className="font-normal texr-[14px] lg:text-[10px]">address</p>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="lg:text-[14px]">Subscribe Newsletter</h4>
        <p className="text-[12px] lg:text-[8px] font-normal">Lorem ipsum dolor sit amet, consectetur<br/>adipisicing elit. Sunt, dolor.</p>
        <input type="email" className="input w-[300px_!important] lg:w-[200px_!important]" placeholder="enter your email" />
      </div>

    </footer>
  )
}
