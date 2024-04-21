'use client'
import { motion } from 'framer-motion';

const skillSet = [
    'Reactjs',
    'Nextjs',
    'Express',
    'Figma',
    'TypeScript',
    'Redux',
    'React Native',
    'Node.js',
    'MongoDB',
    'Firebase',
    'Git',
    'Tailwind CSS',
];

const Skills = () => {
    return (
        <section className='flex md:max-w-[1140px] w-full 2xl:max-w-[1440px] my-40 px-4 md:px-0'>
            <div className='grid grid-cols-1 gap-7 md:gap-0 md:grid-cols-2 items-center w-full'>
                <motion.h1
                    initial={{ x: -25, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className='text-4xl md:text-6xl 2xl:text-8xl font-black'
                >
                    SKILL-SET
                </motion.h1>
                <div className='flex flex-wrap gap-2 md:gap-3'>
                    {skillSet.map((skill, index) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.01 }}
                            key={index}
                            className='py-1 2xl:py-2 px-2 text-sm 2xl:text-base 2xl:px-4 hover:scale-110 transition-all hover:bg-slate-100 border text-gray-500 hover:text-gray-950 cursor-pointer rounded-full'>
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;