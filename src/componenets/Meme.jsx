import React, { useState } from 'react'
// import memesData from '../memesData'

export default function Meme() {

    const [meme,setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/39t1o.jpg"
    })



    const [allMemes,setAllMemes] = useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
  

    function getMemeImg(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
     

    }


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

  return (
   <main>
     <div className='meme'>
         <img
            src={meme.randomImage}
            className="meme-image"
             />
             <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
     </div>

        <div className='form'>
        <span className='intro-text'><strong>Welcome to Meme Generator!</strong><br/>Click "Generate a new  meme image !” to get a new random meme , then customize it with any text you like!</span>
            <input
                type="text"
                className='form-input'
                placeholder='Top text'
                name="topText"
                value={meme.topText}
                onChange={handleChange}
          
             />
            <input
                type="text"
                className='form-input'
                placeholder='Bottom text'
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                
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
