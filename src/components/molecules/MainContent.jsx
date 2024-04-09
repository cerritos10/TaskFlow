// MainContent.js
import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import typography from '../../assets/typography/typography';
import { styled } from '@mui/material/styles';
import AddTask from './AddTask';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const { h2, fontFamily, span } = typography


const CustomH2 = styled('h2')({
  fontFamily: h2.fontFamily,
  fontWeight: h2.fontWeight
});

const CustomSpan = styled('span')({
  fontSize: span.fontSize, // Tamaño de fuente para la etiqueta <p>
  fontFamily: span.fontFamily,
  fontWeight: span.fontWeight
});

const MainContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <AddTask open={openDialog} closeAddTask={handleCloseDialog} fullScreen={fullScreen} />

      <div className='flex flex-col py-12 px-14'>
        <CustomH2 className='text-white'>Dashboard</CustomH2>

        <div className='flex space-x-8'>
          <div className='w-2/5 max-h-[82vh] overflow-auto border-solid rounded p-4 mt-5 bg-[#2c3356] text-white' style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
            <div className='flex justify-between'>
              <CustomSpan>TO DO</CustomSpan>
              <div onClick={() => handleOpenDialog()} className='cursor-pointer'>
                <AddIcon className='transform hover:scale-110' />
              </div>
            </div>
            <div className='w-full pt-4'>
              <div className='bg-[#47b874] mb-4 h-40 max-h-full border-solid rounded'>
                hola
              </div>
              <div className='bg-[#47b874] mb-4 h-40 max-h-full border-solid rounded'>
                hola2
              </div>
              <div className='bg-[#47b874] mb-4 h-40 max-h-full border-solid rounded'>
                hola3
              </div>
              <div className='bg-[#47b874] mb-4 h-40 max-h-full border-solid rounded'>
                hola3
              </div>
              <div className='bg-[#47b874] mb-4 h-40 max-h-full border-solid rounded'>
                hola3
              </div>
            </div>
          </div>

          <div className='w-2/5 h-[150px] border-solid rounded flex flex-col p-4 mt-5 bg-[#2c3356] text-white'>
            <CustomSpan>IN PROGRESS</CustomSpan>
          </div>
          <div className='w-2/5 h-[150px] border-solid rounded flex flex-col p-4 mt-5 bg-[#2c3356] text-white'>
            <CustomSpan>WAITING</CustomSpan>
          </div>
          <div className='w-2/5 h-[150px] border-solid rounded flex flex-col p-4 mt-5 bg-[#2c3356] text-white'>
            <CustomSpan>DONE</CustomSpan>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
