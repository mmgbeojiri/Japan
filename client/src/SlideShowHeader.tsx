import React from "react"
import "./index.css";

import Hokkaido from "./assets/Hokkaido.png"
import Honshu from "./assets/Honshu.png"
import Shikoku from "./assets/Shikoku.png"
import Kyushu from "./assets/Kyushu.png"

function Header() {

  const scrollItBy = (x: number):undefined => {
    const heroGallery = document.getElementById("scroller")
    heroGallery?.scrollBy(x, 0)
    console.log("ah")
  } 
    return (
        <>
        <header className="flex flex-1 flex-row light" id="home">
      <div className="relative text-center bg-blue-50 h-[50rem] items-center" id="hero">
      
      <div className='overflow-clip duration-100 overflow-x-hidden items-center flex snap-x flex-row h-full' id="scroller">
      <img src={Hokkaido} className="image" alt="Hokkaido"/>
      <img src={Honshu} className="image" alt="Honshu" />
      <img src={Shikoku} className="image" alt="Shikoku" />
      <img src={Kyushu} className="image" alt="Kyushu" />
      </div>

      <div className='overflow-x-clip absolute top-0 bg-black h-full w-screen opacity-50 p-0 '></div>

      <div className='absolute top-0 p-8 text-left text-slate-50 flex flex-col h-full justify-around'>
          <div className='flex flex-col justify-center gap-4'>
          <h1 className='text-5xl text-bold'>Japan</h1>
          <h2 className='text-2xl '>"From Hokkaido, to Honshu, to Shikoku, to Kyushu."</h2>
          <a href="#about" ><button className="button max-w-32">Learn More</button></a>
          </div>
        </div>
      </div>

      <div className='absolute flex justify-between bottom-8 w-full'>
      <button className='navButton' onClick={
        (e) => {
          e.preventDefault()
          scrollItBy(-500)
        }
      }>&lt;</button>
      <button className='navButton' onClick={
        (e) => {
          e.preventDefault()
          scrollItBy(500)
        }
      }>&gt;</button>
      </div>

    </header>
    </>
    )
}

export default Header