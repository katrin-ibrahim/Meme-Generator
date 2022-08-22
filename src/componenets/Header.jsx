import React from 'react'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';

export default function Header() {
  return (
    // <div className='header-container'>
       <div className='header-container'>
        <span className="lens-icon">
            <CropOriginalIcon  fontSize='x-large'/>
        </span>
        <span>Meme Generator</span>
       </div>
    
  )
}
