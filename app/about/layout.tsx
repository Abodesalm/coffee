
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "",
  description: "",
};


const kahta =({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <>
      {children}
    </>
  );
}

export default kahta