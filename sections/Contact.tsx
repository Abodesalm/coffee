import Btn from "@/components/Btn";


export default function Contact() {
  return (
    <div className="pad " id="contact">
      <div className="h-[460px] back px-[4rem] py-[2rem] pb-[4rem] flex flex-row justify-between items-center ">

        <div className="flex flex-col justify-center gap-4 ">
          <h2>Contact us</h2>
          <div className="flex flex-col justify-center gap-5">
            <div>
              <h4>Email :</h4>
              <p className="text-[13px] font-normal">example@example.com</p>
            </div>
            <div>
              <h4>Phone :</h4>
              <p className="text-[13px] font-normal">+963 997 203 291</p>
            </div>
            <div>
              <h4>Address :</h4>
              <p className="text-[13px] font-normal">Address somewhere in<br/>the left side of<br/>the store in that<br/>place u go.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 mt-[6rem] ">
          <input type="text" placeholder="name" className="input"/>
          <input type="text" placeholder="last name" className="input"/>
          <input type="email" placeholder="email" className="input"/>
          <input type="password" placeholder="password" className="input"/>
          <Btn>submit now</Btn>
        </div>

        <div className="flex flex-col w-1/3 ">
{/*           <Btn/>
          <Btn/>
          <Btn/>
          <Btn/> */}
        </div>
      </div>
    </div>
  )
}
