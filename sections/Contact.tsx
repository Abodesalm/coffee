import Btn from "@/components/Btn";


export default function Contact() {
  return (
    <div className="pad ">
      <div className="p-2 flex flex-row ">

        <div className="flex flex-col ">
          <h2>Contact us</h2>
          <h3>Email :</h3>
          <p>example@example.com</p>
          <h3>Phone :</h3>
          <p>+963 997 203 291</p>
          <h3>Address :</h3>
          <p>Address somewhere</p>
        </div>

        <div className="flex flex-col ">
          <input type="text"/>
          <input type="text"/>
          <input type="email"/>
          <input type="password"/>
          <Btn/>
        </div>

        <div className="flex flex-col ">
          <Btn/>
          <Btn/>
          <Btn/>
          <Btn/>
        </div>
      </div>
    </div>
  )
}
