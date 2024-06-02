import Link from "next/link";

export default function Btn({children='', clas='', to='#header', status='btn'}) {
  
  const btnStatus = ' border border-2 '
  const linkStatus = ' hover:border hover:border-2 py-[0.4rem] '
  const stat = () => {
    if(status == 'btn'){return btnStatus}
    else if (status == 'link'){return linkStatus}
  }

  return (
    <Link href={to} className={' py-[0.7rem] px-6 rounded-full border-main transition text-[14px] font-bold ' +stat()+ clas}>{children}</Link>
  )
}
