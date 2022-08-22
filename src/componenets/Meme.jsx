import React, { useState } from 'react'
import memesData from '../memesData'

export default function Meme() {

    const [meme,setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/39t1o.jpg"
    })
    const [allMemeImages,setAllMemeImages] = useState(memesData)
    
  

    function getMemeImg(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        

        // setMemeImg( )
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        console.log("hahhah")

    }
  return (
   <main>
     <img 
        src={meme.randomImage}
        className="meme-image"
    />


     
        <div className='form'>
        <span className='intro-text'><strong>Welcome to Meme Generator!</strong><br/>Click "Generate a new  meme image !” to get a new random meme , then customize it with any text you like!</span>
            <input
                type="text"
                className='form-input'
                placeholder='Top text'
             />
            <input
                type="text"
                className='form-input'
                placeholder='Bottom text'
            />
      
            <button
                className='form-button'
                onClick={getMemeImg}
                >
                Generate a new meme image !
             </button>
      
        </div>
 
   
   </main>
  )
}
