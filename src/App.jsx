import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import LetterScreen from "./screens/LetterScreen";
import GalleryScreen from "./screens/GalleryScreen";
import NotFound from "./screens/NotFound";

function App() {
  const location = useLocation();

  const [ toggle, setToggle ] = useState(false);
  const [ active, setActive ] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname)
  }, [location])
  
  return (
    <>
        <div className={`fixed z-50 top-0 w-full h-[6%] ${active === "/gallery" ? "bg-black" : active === "/shikasletter" ? "bg-white" : "bg-[#1e2d42]"} flex items-center justify-center`}>
          <div className='lg:w-[30%] xl:w-[25%] md:w-[40%] md:flex hidden w-[45%] h-full text-white uppercase text-[10px] items-center justify-evenly'>
            <span className={`${active === "/" ? "font-extrabold" : "font-thin"} ${active === "/shikasletter" && "text-black"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`}><Link to="/">home</Link></span>
            <span className={`${active === "/shikasletter" ? "font-extrabold text-black" : "font-thin"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`}><Link to="shikasletter">shika's letter</Link></span>
            <span className={`${active === "/gallery" ? "font-extrabold" : "font-thin"} ${active === "/shikasletter" && "text-black"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`}><Link to="gallery">gallery</Link></span>
          </div>
          <div className='absolute right-3 top-2 md:hidden visible hover:opacity-50 active:opacity-25 cursor-pointer select-none' onClick={() => {
            setToggle(!toggle)
          }}>
            <ion-icon size="large" name="menu-sharp" style={{color: active === "/shikasletter" ? "black" : "white"}}></ion-icon>
          </div>

          <div className={`${toggle ? "visible" : "hidden"} absolute md:hidden right-3 top-14 h-[120px] p-2 py-5 flex flex-col items-center justify-evenly  text-white uppercase text-[10px] w-[120px] border-2 border-white border-solid ${active === "/gallery" ? "bg-black" : active === "/shikasletter" ? "bg-white" : "bg-[#1e2d42]"} bg-[#1e2d42]`}>
            <span className={`${active === "/" ? "font-bold" : "font-thin"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`}><Link to="/">home</Link></span>
            <span className={`${active === "/shikasletter" ? "font-bold" : "font-thin"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`}><Link to="shikasletter">shika's letter</Link></span>
            <span className={`${active === "/gallery" ? "font-bold" : "font-thin"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`}><Link to="gallery">gallery</Link></span>
          </div>
        </div>
        <Routes>
          <Route path="/gallery" element={<GalleryScreen />}/>
          <Route path="/shikasletter" element={<LetterScreen />}/>
          <Route path="/" element={<HomeScreen />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </>
  )
}

export default App;
