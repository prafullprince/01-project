import Link from 'next/link'
import React from 'react'
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight 
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />
        <div className='p-4 relative z-10 w-full text-center'>
            <h1>Master the art of music</h1>
            <p>Dive into our comprehensive courses and transform your music skills.Join to unloack your true potential.</p>
            <div className='mt-4'>
                <Link href={"/courses"}>
                    Explore Courses
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
