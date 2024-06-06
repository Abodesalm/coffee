import Collapse from "@/components/Collapse";


export default function Faqs() {
  return (
    <div className="pad min-h-[500px] flex flex-col items-center gap-6" id="faqs">
      <h2>Common Customer Questions</h2>
      <Collapse/>
      <Collapse/>
      <Collapse/>
      <Collapse/>
      <Collapse/>
    </div>
  )
}
