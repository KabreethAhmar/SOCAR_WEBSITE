import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, MoonIcon } from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Mohamed Rafeek Kabreeth Ahmar',
    },
    {
        icon: <User2 size={20} />,
        text: 'Mohamed Suqry Mohamed Samry',
    },
    {
        icon: <User2 size={20} />,
        text: 'Aaysha Fazal Mohamed',
    },
    {
        icon: <User2 size={20} />,
        text: 'Sarah Maryam',
    },
    {
        icon: <User2 size={20} />,
        text: 'Hassan Latiff',
    },
]


const qualificationData = [
    {
        title: 'AI&AR Chatbot',
        data: [
            {
                feature4: 'Text to Speech',
                feature5: 'Speech to Text',
                feature6: 'AR Avatar'
            },
        ]
    },
    {
        title: 'LSAS Test',
        data: [
            {
                feature1: 'Dr. Liobowitz Test',
                feature2: '',
                feature3: ''
            },
        ]
    }
]


const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Machine Learning',
            },
            {
                name: 'Backend Development',
            },
            {
                name: 'Web Development',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
        ]
    }
]


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About the app</h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/hero/developer3.png' />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className='w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Overview</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Features</TabsTrigger>
                                {/* <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger> */}
                            </TabsList>
                            {/* tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Undergraduates behind the app</h3>
                                        {/* <p className="subtitle max-w-xl mx-auto xl:mx-0">Mohamed Rafeek Kabreeth Ahmar</p>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">Mohamed Suqry Mohamed Samry</p>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">Aaysha Fazal Mohamed</p>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">Sarah Maryam</p>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">Hassab Lattif</p> */}
                                        {/* icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className="flex items-center" key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {/* languages */}
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            Core Features
                                        </h3>
                                        {/* experience & education wrapper */}
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* experience */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'LSAS Test').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'LSAS Test').data.map((item, index)=>{
                                                        const {feature1, feature2, feature3} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{feature1}</div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{feature2}</div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{feature3}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'AI&AR Chatbot').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'AI&AR Chatbot').data.map((item, index)=>{
                                                        const {feature4, feature5, feature6} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{feature4}</div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{feature5}</div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{feature6}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skills */}
                                <TabsContent value='skills'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8"> My Top Skills </h3>
                                        {/* skills */}
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skills list */}
                                            <div>
                                                {getData(skillData, 'skills').data.map((item, index)=> {
                                                    const {name} = item;
                                                    return (
                                                        <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                            <div className="font-medium">{name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* tools */}
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">
                                                Tools
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* tool list */}
                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(skillData, 'tools').data.map((item, index)=>{
                                                    const {imgPath} = item;
                                                    return (
                                                        <div key={index}>
                                                            <Image 
                                                                src={imgPath}
                                                                width={48}
                                                                height={48}
                                                                alt=""
                                                                priority
                                                            />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About