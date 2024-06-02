import Btn from "@/components/Btn"

export default function Services() {
  return (
    <div className="pad h-[500px] bg-amber-800/40 flex flex-col items-center " id="service">
      <h2>Our Services</h2>
      <div className="flex flex-row ">

        <div className="w-[200px] h-[300px] ">
          img
          <h3></h3>
          <Btn/>
        </div>

        <div className="w-[200px] h-[300px] ">
          img
          <h3></h3>
          <Btn/>
        </div>

        <div className="w-[200px] h-[300px] ">
          img
          <h3></h3>
          <Btn/>
        </div>
        
        <div className="w-[200px] h-[300px] ">
          img
          <h3></h3>
          <Btn/>
        </div>

      </div>
    </div>
  )
}
