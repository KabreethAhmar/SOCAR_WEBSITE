import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import Form from '@/components/Form';

const contact = () => {
  return (
    <section>
            <div className="container mx auto">
                {/* Text and Illustrations */}
                <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
                    {/* Text */}
                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center gap-x-4 text-primary text-lg mb-4' >
                            Get in Touch!
                        </div>
                        <h1 className='h1 max-w-md mb-8'>To know about SOCAR.</h1>
                        <p className='subtitle max-w-[400px]'>
                        Thank you for taking time to explore SOCAR Webpage. If you have any inquiries, collaboration opportunities, feel free to reach out using the contact form below or through any of the channels listed.
                        </p>
                    </div>
                    {/* Illustrations */}
                    <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'>
                    </div>
                </div>
                {/* Infomation Text and Form */}
                <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
                    {/* Infomation */}
                    <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
                        {/* Mail */}
                        <div className='flex items-center gap-x-8'>
                            <MailIcon
                                size={18}
                                className='text-primary'/>
                            <div> kabreeth.20221129@iit.ac.lk </div>
                        </div>
                        {/* Address */}
                        <div className='flex items-center gap-x-8'>
                            <HomeIcon
                                size={18}
                                className='text-primary'/>
                            <div> 59/1, Sri Vipulasena Mawatha, Colombo-10, Sri Lanka </div>
                        </div>
                        {/* Phone */}
                        <div className='flex items-center gap-x-8'>
                            <PhoneCall
                                size={18}
                                className='text-primary'/>
                            <div> +94 76 702 1010 </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
                        {/* Mail */}
                        <div className='flex items-center gap-x-8'>
                            <MailIcon
                                size={18}
                                className='text-primary'/>
                            <div> hassan.20220675@iit.ac.lk </div>
                        </div>
                        {/* Address */}
                        <div className='flex items-center gap-x-8'>
                            <HomeIcon
                                size={18}
                                className='text-primary'/>
                            <div>  </div>
                        </div>
                        {/* Phone */}
                        <div className='flex items-center gap-x-8'>
                            <PhoneCall
                                size={18}
                                className='text-primary'/>
                            <div></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
                        {/* Mail */}
                        <div className='flex items-center gap-x-8'>
                            <MailIcon
                                size={18}
                                className='text-primary'/>
                            <div> sarah.20220644@iit.ac.lk </div>
                        </div>
                        {/* Address */}
                        <div className='flex items-center gap-x-8'>
                            <HomeIcon
                                size={18}
                                className='text-primary'/>
                            <div>  </div>
                        </div>
                        {/* Phone */}
                        <div className='flex items-center gap-x-8'>
                            <PhoneCall
                                size={18}
                                className='text-primary'/>
                            <div>  </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
                        {/* Mail */}
                        <div className='flex items-center gap-x-8'>
                            <MailIcon
                                size={18}
                                className='text-primary'/>
                            <div> samry.20221534@iit.ac.lk </div>
                        </div>
                        {/* Address */}
                        <div className='flex items-center gap-x-8'>
                            <HomeIcon
                                size={18}
                                className='text-primary'/>
                            <div>  </div>
                        </div>
                        {/* Phone */}
                        <div className='flex items-center gap-x-8'>
                            <PhoneCall
                                size={18}
                                className='text-primary'/>
                            <div>  </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
                        {/* Mail */}
                        <div className='flex items-center gap-x-8'>
                            <MailIcon
                                size={18}
                                className='text-primary'/>
                            <div> aaysha.20221493@iit.ac.lk </div>
                        </div>
                        {/* Address */}
                        <div className='flex items-center gap-x-8'>
                            <HomeIcon
                                size={18}
                                className='text-primary'/>
                            <div>  </div>
                        </div>
                        {/* Phone */}
                        <div className='flex items-center gap-x-8'>
                            <PhoneCall
                                size={18}
                                className='text-primary'/>
                            <div>  </div>
                        </div>
                    </div>
                    <Form></Form>
                </div>
        </div>
    </section>
  );
};

export default contact