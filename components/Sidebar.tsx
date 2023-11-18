"use client"

import Image from "next/image"
import Link from "next/link"
import {Montserrat} from "next/font/google"
import {cn} from "@/lib/utils"
import { 
    LayoutDashboard, 
    MessageSquare, 
    ImageIcon, 
    VideoIcon,
    Music,
    Code,
    Settings
} from "lucide-react";
import { usePathname } from "next/navigation"

const montserrat = Montserrat({
    weight: "600", subsets: ["latin"]
}); 

function Sidebar() {

    const pathname = usePathname()

    const routes = [
        {
            label: "Dashboard",
            icon: LayoutDashboard, 
            href: "/dashboard",
            color: "text-[#FF5E00]",
        },
        {
            label: "Conversation",
            icon: MessageSquare, 
            href: "/conversation",
            color: "text-[#FF5E00]",
        },
        {
            label: "Image Generation",
            icon: ImageIcon, 
            href: "/image",
            color: "text-[#FF5E00]",
        },

        {
            label: "Code Generation",
            icon: Code, 
            href: "/code",
            color: "text-[#FF5E00]",
        },
      
    ]

  return (
    <div className="space-y-4 py-4 flex flex-col h-full
    bg-[#006587] text-white">
        <div className="px-3 py-2 flex-1">
            <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                <div className="relative w-9 h-9 mr-4">
                    <Image
                      fill
                      alt="logo"
                      src="/jarvis.png"
                    />
                </div>
                <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                    J.A.R.V.I.S
                </h1> 
            </Link>
        <div className="space-y-1">
            {routes.map((route) => (
                <Link
                 href={route.href}
                 key={route.href}
                 className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href ? "text-white bg-white/10" : "text-white"
                 )}
                >
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
                  </div>
                </Link>
            ))}
        </div>
        </div>
       
    </div>
  )
}

export default Sidebar
