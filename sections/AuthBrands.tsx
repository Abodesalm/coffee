

export default function AuthBrands() {
  return (
    <div className="pad h-[400px] flex flex-col items-center ">
      <h3 className="lg:text-[24px]">Authorized Distributor Coffee Brands</h3>
      <div className="flex felx-row justify-center gap-10 lg:gap-6 mt-8 items-center w-full">
        <div className="w-[200px] h-[250px] lg:h-[220px] flex justify-center items-center back"><div className="w-[160px] h-[200px] rounded-[5px] auth-1 bg-cover bg-center "></div></div>
        <div className="w-[200px] h-[250px] lg:h-[220px] flex justify-center items-center back"><div className="w-[160px] h-[200px] rounded-[5px] auth-2 bg-cover bg-center "></div></div>
        <div className="w-[200px] h-[250px] lg:h-[220px] flex justify-center items-center back"><div className="w-[160px] h-[200px] rounded-[5px] auth-3 bg-cover bg-center "></div></div>
      </div>
    </div>
  )
}
