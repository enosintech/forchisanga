import React, { useEffect, useRef, useState } from 'react'
import Lottie from "lottie-react";

import birthday from "../assets/animations/birthday.json";
import loader from "../assets/animations/loader.json";
import chisanga from "../assets/images/chisanga.png";

const WishesComponent = (props) => {
  return (
    <div className={`w-[200px] h-[250px] rounded-2xl hover:shadow-4xl hover:scale-110 transition-all ${props.name === "Shikayuni" ? "bg-red-800 animate-cardbounce" : "bg-[#141f2f]"} border-2 drop-shadow-2xl`}>
      <div className='w-full h-[80%] p-3 flex items-center justify-center uppercase font-thin text-[12px] text-justify text-white overflow-scroll no-scrollbar'>
        {props.wish}
      </div>
      <div className='w-full h-[20%] flex items-center justify-center uppercase text-center font-semibold font-opensans text-white text-[13px] border-t-[0.25px] no-scrollbar'>
        from {props.name}
      </div>
    </div>
  )
}

function HomeScreen() {
  const year = new Date().getFullYear();

  const formRef = useRef();

  const [ form, setForm ] = useState({
    wish: "",
    name: ""
  })

  const [ loading, setLoading ] = useState(false);
  const [wishData, setWishData ] = useState([]);
  const [ trackWish, setTrackWish ] = useState(false);

  const dayC = useRef(null);
  const hourC = useRef(null);
  const minC = useRef(null);
  const secC = useRef(null);

  const fetchWishData = async () => {
    const response = await fetch("https://forchisanga-api.onrender.com/api/wish")
    
    const data = await response.json()

    if(data.status === "ok"){
      setWishData(data.wishes)
    }
  }

  useEffect(() => {
    fetchWishData()
  },[trackWish])

  const handleChange = (e) => {
      const { name, value } = e.target;

      setForm({...form, [name] : value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setTrackWish(!trackWish)
    const response = await fetch("https://forchisanga-api.onrender.com/api/wish/new", {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify({
        wish: form.wish,
        name: form.name
      })
    })

    const data = await response.json();

    console.log(data.error)

    if(data.status === "ok"){
      setLoading(false)
      setTrackWish(!trackWish)
      setForm({
        wish: "",
        name: ""
      })
      alert("Wish Submitted Successfully");
    } else {
      setTrackWish(!trackWish)
      setLoading(false)
      alert("Wish not submitted. Please do not leave any fields blank.");
    }
  }

  const addZero = (time) => {
    return time < 10 ? `0${time}` : time;
  }

  const countDown = () => {
    const date = "7 NOV 2024";
    const currentDate = new Date();
    const targetDate = new Date(date);

    const totalSeconds = (targetDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds/3600) % 24;
    const days = Math.floor(totalSeconds/3600/24);

    dayC.current.innerHTML = addZero(days);
    hourC.current.innerHTML = addZero(hours);
    minC.current.innerHTML = addZero(minutes);
    secC.current.innerHTML = addZero(seconds);
  }

  useEffect(() => {
    countDown();

    setInterval(countDown, 1000);
  }, [])

  
  return (
    <div>
      <div className='relative h-screen w-screen bg-[#1e2d42] lg:grid grid-cols-2 grid-rows-2 pt-[50.4px] md:flex md:flex-col'>
        <div className='relative lg:row-span-2 hidden lg:flex items-start justify-center'>
          <div className='absolute xl:-top-20 lg:top-36 xl:w-full w-[80%] h-full'>
            <img src={chisanga} className='w-full h-[800px] object-contain animate-astrobounce mask' alt="Chisanga's Face"/>
          </div>
        </div>
        <div className='h-[50%] lg:h-full flex flex-col items-center justify-center'>
          <div className='relative w-[80%] h-[70%]'>
            <Lottie 
              className='h-full w-full absolute z-10'
              animationData={birthday}
            />
          </div>
          <div className='w-[80%] h-[30%] flex items-center justify-center'>
            <h1 className='font-ds font-bold text-[40px] md:text-[45px] lg:text-[60px] xl:text-[70px] text-white'>
              Chisanga Mulenga
            </h1>
          </div>
        </div>
        <div className='h-[40%] lg:h-full flex items-center justify-center'>
          <div className='w-[80%] h-[80%] bg-[#141f2f] rounded-2xl drop-shadow-2xl shadow-2xl flex flex-col items-center'>
            <div className='h-[15%] w-full flex items-center justify-center'>
              <h1 className='text-[14px] text-center uppercase tracking-wider text-gray-500 font-opensans font-normal'>make a wish</h1>
            </div>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='w-[80%] h-[80%]'
              >
              <div className='w-full h-full'>
                <div className='w-full h-[50%] flex items-center justify-center'>
                  <textarea 
                    name="wish"
                    value={form.wish}
                    onChange={handleChange}
                    placeholder="Wish Chisanga a Happy Birthday! It can even be belated, It doesn't matter."
                    className='w-full h-full outline-black p-3 font-opensans font-thin text-[15px] resize-none bg-white placeholder:text-gray-400 rounded-md'
                  />
                </div>
                <div className='w-full h-[25%] flex items-center justify-center'>
                  <input 
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder='What is your Name?'
                    className='w-full h-[60%] outline-black px-3 font-opensans font-thin text-[15px] bg-white placeholder:text-gray-400 rounded-md'
                  />
                </div>
                <div className='w-full h-[25%] flex items-center justify-center'>
                  <button
                    type='submit'
                    className='w-[50%] h-full bg-black font-opensans text-[15px] uppercase font-extrabold rounded-2xl hover:opacity-50 active:opacity-25 cursor-pointer text-white'
                  >
                    {loading ? "submitting..." : "submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 mx-auto w-[33px] h-[15%] flex items-center justify-center'>
          <div className='w-full h-[50%] rounded-2xl border-4 flex items-center justify-center'>
            <div className='bg-white rounded-full h-[16px] w-[16px] animate-updown'>

            </div>
          </div>
        </div>

      </div>
      <div  className='h-screen w-screen bg-[#1e2d42] pt-[50.4px]'>
        <div className='relative w-full h-full'>
          <div className='absolute w-[80%] h-[10%] left-0 right-0 mx-auto z-20'>
            <div className='w-full h-[30%] text-[14px] flex items-center justify-center uppercase tracking-wider text-gray-500 font-opensans font-normal'>
              your next birthday
            </div>
            <div className='w-full h-[70%] flex items-start mt-2 justify-center gap-1 font-bold text-white font-opensans text-[15px]'>
              <div className='flex flex-col items-center justify-center'>
                <p ref={dayC} className='text-[18px] day'>00</p>
                <span className='text-[6px] uppercase font-opensans tracking-wider text-white font-normal'>Days</span>
              </div>
              :
              <div className='flex flex-col items-center justify-center'>
                <p ref={hourC} className='text-[18px] hour'>00</p>
                <span className='text-[6px] uppercase font-opensans tracking-wider text-white font-normal'>Hours</span>
              </div>
              :
              <div className='flex flex-col items-center justify-center'>
                <p ref={minC} className='text-[18px] minute'>00</p>
                <span className='text-[6px] uppercase font-opensans tracking-wider text-white font-normal'>Minutes</span>
              </div>
              :
              <div className='flex flex-col items-center justify-center'>
                <p ref={secC} className='text-[18px] second'>00</p>
                <span className='text-[6px] uppercase font-opensans tracking-wider text-white font-normal'>Seconds</span>
              </div>
            </div>
          </div>
          <div className='absolute w-[80%] h-[80%] border-4 border-white shadow-2xl drop-shadow-2xl rounded-2xl z-20 left-0 right-0 top-0 bottom-0 my-auto mx-auto bg-white'>
            <h1 className='w-full h-[10%] flex items-center justify-center uppercase text-lg font-opensans font-semibold text-black'>for your heart</h1>
            <div className='relative w-full h-[90%] border-t-[0.25px] border-solid border-gray-300 flex items-start py-5 gap-5 justify-center flex-wrap overflow-scroll'>
            {wishData.length > 0 
            ?
            wishData.map((wish, index) => (
                <WishesComponent 
                  key={wish.id}
                  index={index}
                  {...wish}
                />
              ))
            :
            <div className='w-full h-full flex flex-col items-center justify-center'>
              <Lottie 
              className='h-[30%] w-full'
              animationData={loader}
              />
              <span className="font-semibold font-opensans text-gray-500">Fetching Wishes...</span>
            </div>
            }
            </div>
          </div>
          <div className='absolute w-full h-full bg-[#1e2d42] z-10'></div>
          <div className='absolute w-full h-[80%] bottom-0 bg-black mask2 z-10'></div>
          <div className='absolute bottom-0 h-[6%] w-full flex items-center justify-center text-[10px] text-gray font-thin z-[10] text-white'>
            ©{year} Enos Nsamba Jr. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen;
