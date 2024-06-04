import Btn from "@/components/Btn";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pad flex flex-row justify-around">
      <div>
        img
        <div className="flex flex-row">
          <Link href=''></Link>
          <Link href=''></Link>
          <Link href=''></Link>
          <Link href=''></Link>
        </div>
      </div>
      
      <div className="flex flex-col">
        <h3>Quick Link</h3>
        <Link href='#header'>Home</Link>
        <Link href='#about'>About</Link>
        <Link href='#service'>Service</Link>
        <Link href='#contact'>Contact</Link>
      </div>

      <div className="flex flex-col">
        <h3>Contact</h3>
        <p>+963 997 203 291</p>
        <p>EMAIL</p>
        <p>address</p>
        <p>address</p>
      </div>

      <div className="flex flex-col">
        <h3>Subscribe Newsletter</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolor.</p>
        <input type="email" />
      </div>

    </footer>
  )
}
