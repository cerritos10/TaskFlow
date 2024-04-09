import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import typography from '../../assets/typography/typography';
import { motion } from "framer-motion"

const navLinks = [
    {
        name: 'Tablero',
        icon: DashboardIcon,
    },
    {
        name: 'Miembros',
        icon: PersonIcon,
    }
]

const { h1, fontFamily, span } = typography

const CustomParagraph = styled('p')({
    fontSize: '18px', // Tamaño de fuente para la etiqueta <p>
    fontFamily: fontFamily,
});

const CustomSpan = styled('span')({
    fontSize: span.fontSize, // Tamaño de fuente para la etiqueta <p>
    fontFamily: span.fontFamily,
    fontWeight: span.fontWeight
});

const variants = {
    expanded: { width: '15%' },
    nonExpanded: { width: '5%' }
}

function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isExpanded, setIsExpanded] = useState(true)

    return (
        <>
            <motion.div
                animate={
                    isExpanded ? 'expanded' : 'nonExpanded'
                }
                variants={variants}
                className={'py-12 flex flex-col border-r-1 w-[15%] h-screen bg-midnight-950 text-midnight-50 text-xl relative' + (isExpanded ? ' px-10' : ' px-6')}>
                <div className={'logo-div flex space-x-3 items-center' + (isExpanded ? ' justify-center' : ' ')}>
                    <CustomParagraph>
                        Logo
                    </CustomParagraph>
                    <span className={isExpanded ? 'block' : 'hidden'}>TaskFlow</span>
                </div>

                <div onClick={() => setIsExpanded(!isExpanded)} className='w-5 h-5 bg-midnight-900 rounded-full absolute -right-[10.5px] top-12 flex items-center justify-center cursor-pointer'>
                    {
                        isExpanded ? <ArrowLeftIcon /> : <ArrowRightIcon/>
                    }
                </div>

                <div className='mt-10 flex flex-col space-y-8 cursor-pointer'>
                    {navLinks.map((item, index) => (
                        <div key={index} className={'flex space-x-3 p-2 rounded-md' + (activeIndex === index ? ' bg-[#2c3356] text-midnight-50 hover:' : '') + (!isExpanded ? ' w-[42px]' : '')}
                            onClick={() => setActiveIndex(index)}
                        >
                            <item.icon />
                            <CustomSpan className={isExpanded ? 'block' : 'hidden'}>{item?.name}</CustomSpan>
                        </div>
                    ))}

                </div>
            </motion.div>
        </>
    )
}

export default Sidebar
