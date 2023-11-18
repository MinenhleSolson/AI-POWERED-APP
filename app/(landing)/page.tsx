import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
   <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 ">

    <div className="flex items-centers justify-center mt-0">
        <div>
            <h1 className="text-5xl text-white font-bold">Welcome To J.A.R.V.I.S Worlds  most powerful AI</h1>
        </div>
    </div>

    <div className="flex items-centers justify-center m-5">
        <div>
            <h2 className="text-3xl text-white font-bold">Powered by GPT-3.5 Turbo</h2>
        </div>
    </div>
  
   <div className="flex items-center justify-center h-96">
    <Link href="/sign-in">
      <div className="bg-[#ff5e00] p-2 text-white ml-4 rounded-lg px-10">
        Login
      </div>
    </Link>
   
    <Link href="sign-up">
        <div className="bg-[#ff5e00] p-2 text-white ml-4 rounded-lg px-10">
          Register
        </div>
    </Link>
     </div>
   </div>
   )
}
