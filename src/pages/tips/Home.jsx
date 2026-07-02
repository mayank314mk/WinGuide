import React from 'react'
import { useOutletContext } from "react-router-dom";
import { Link } from 'react-router-dom';

const Home = () => {
  const props=useOutletContext();
  // console.log(props)
  return (
    <div className=' relative font-[100] w-[calc(100vw-280px)] max-[1000px]:w-full h-[calc(100svh-77px)]  pl-8 pt-10 '>
      <div className='relative h-full w-full overflow-clip flex flex-col gap-2'>
        <div className="pr-[34px] titlebar w-full flex text-[40px] items-start justify-between">
          <div className="title">WinGuide: Tips</div>

          <svg onClick={()=>{
            props.setnavOpened(true)
            // console.log("Click")
          }} className='relative z-1 box-content mt-3 p-1  shrink-0 w-[32px] h-[32px] max-[1000px]:block hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z" /></svg>
        </div>
        <main className='pr-8 flex flex-col gap-4 items-start h-full'>
          <div className="content text-[18px] text-[#dbdbdb] relative z-1">Improve your Windows experience with practical tips that enhance security, stability, compatibility, and everyday usability.</div>
          <div className="comp text-[rgb(255,160,80)] font-[400] relative z-1">Supports Windows 10 & Windows 11</div>
          <Link to='/tips/installation' className='relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Get Started →</Link>
          <svg className='absolute right-[-10%] bottom-[-30%] h-[600px] w-[600px] opacity-10 z-0' xmlns="http://www.w3.org/2000/svg" fill='rgb(128,64,0)' strokeWidth={0.1} x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
            <path d="M12 16L3 16 3 23.75 12 24.988zM12 5L3 6.25 3 14 12 14zM14 4.75L14 14 27 14 27 3zM14 16L14 25.25 27 27 27 16z"></path>
          </svg>
          {/* <button className='bg-[rgb(0,16,32)] cursor-pointer hover:bg-[rgb(0,8,16)] font-[400] p-3 px-8 border-0 text-[white] border-[rgb(0,64,128)] '>Get Started →</button> */}

        </main>
      </div>
    </div>
  )
}

export default Home
