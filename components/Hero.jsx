

"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

// import {
//     RiBriefcase4Fill,
//     RiTeamFill,
//     RiTodoFill,
//     RiArrowDownSLine,
// } from "react-icons/ri"

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri';


import Badge from "./Badge";
import Socials from "./Socials";
import DevImg from "./DevImg";

const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* text */}
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Stepping into new realities!</div>
                        <h1 className="h1 mb-4">SOCAR</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">for Autistic Individuals with Social Anxiety.
                        </p>
                        {/* buttons */}
                        <div className="flex flex-xol gap-y-3 md:fkex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href=''>
                                <Button className='gap-x-2'>
                                    Contact us
                                    <Send size={18} />
                                </Button>
                                <Button  variant className='gap-x-2'>
                                    Read me
                                    <Download size={18} />
                                </Button>
                            </Link>
                        </div>
                        {/* Socials */}
                        <Socials
                            containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                            iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
                        />
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex relative">
                        {/* badge 1 */}
                        {/* <Badge 
                            containerStyles='absolute top-[24%] -left-[5rem]'
                            icon={<RiBriefcase4Fill/>} 
                            endCountNum={0} 
                            badgeText='Years of Experience' 
                        /> */}
                        {/* badge 2 */}
                        {/* <Badge 
                            containerStyles='absolute top-[80%] -left-[1rem]'
                            icon={<RiBriefcase4Fill/>} 
                            endCountNum={6} 
                            endCountText='k'
                            badgeText='Finished projects' 
                        /> */}
                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                        <DevImg 
                            containerStyles='bg-hero_shape w-[510px] h-[600px] bg-no-repeat relative bg-bottom' 
                            imgSrc='/hero/developer4.png'
                        />
                    </div>
                </div>
                <div className="hidden md:flex absolute left-2/4 button-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className='text-3xltext-primary'/>
                </div>
            </div>
        </section>
    )
};

export default Hero