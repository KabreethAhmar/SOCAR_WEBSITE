'use client'

import React, {useState} from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
    {
        image: '/work/5.png',
        category: 'LSAS Test',
        name: 'Dr. Liobowitz Test',
        Description: 'Measures the social anxiety score',
        link: '/',
        github: '/',
    },
    {
        image: '/work/6.png',
        category: 'AI&AR Chatbot',
        name: 'Text to Speech',
        Description: 'Text to Speech feature ',
        link: '/',
        github: '/',
    },
    {
        image: '/work/6.png',
        category: 'AI&AR Chatbot',
        name: 'Speech to Text',
        Description: 'Speech to Text',
        link: '/',
        github: '/',
    },
    {
        image: '/work/6.png',
        category: 'AI&AR Chatbot',
        name: 'AR Avatar',
        Description: 'Augmented Reality Chatbot',
        link: '/',
        github: '/',
    },
    {
        image: '/work/8.png',
        category: 'Games',
        name: 'Games to reduce social anxiety',
        Description: '',
        link: '/',
        github: '/',
    },
];

// Remove Category Duplication
const uniqueCategories = ['All Features', ...new Set(projectData.map(item => item.category))];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('All Features');

    const filteredProjects = projectData.filter(project => {
        return category === 'All Features'
        ? project
        :project.category === category;
    });

return (
    <section className='min-h-screen pt-12'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                Features
            </h2>
            {/* Tabs */}
            <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                    {categories.map((category, index) => {
                        return (
                        <TabsTrigger
                        onClick={() => setCategory(category)}
                            value={category}
                            key={index}
                            className='capitalize w-[162px] md:w-auto'>
                                {category}
                        </TabsTrigger>
                        )
                    })}
                </TabsList>
                {/* Tabs Content */}
                <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {filteredProjects.map((project, index) => {
                        return <TabsContent value={category} key={index}>
                            <ProjectCard project={project} />
                        </TabsContent>
                    })}
                </div>
            </Tabs>
        </div>
    </section>
)
}

export default Projects;