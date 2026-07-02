import React from 'react'
import { useOutletContext } from "react-router-dom";
import { Link } from 'react-router-dom';
const Performance = () => {
  const props = useOutletContext();
  return (
    <div className='overflow-x-clip overflow-y-auto orange-scrollbar scrollbar relative font-[100] w-[calc(100vw-280px)] max-[1000px]:w-full h-[calc(100svh-77px)]  pl-8 pt-10'>
      <div className='relative h-full   flex flex-col gap-2'>
        <div className="pr-8 titlebar w-full flex text-[40px] items-start justify-between">
          <div className="title">Windows Update</div>

          <svg onClick={() => {
            props.setnavOpened(true)
            // console.log("Click")
          }} className='relative z-1 box-content mt-3 p-1  shrink-0 w-[32px] h-[32px] max-[1000px]:block hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z" /></svg>
        </div>
        <main className='pr-8 flex flex-col gap-10 items-start'>
          <div className="content text-[18px] text-[#dbdbdb] relative z-1">Keeping Windows up to date helps improve security, stability, hardware support, and compatibility with the latest software and games. Installing updates also ensures you receive bug fixes and important system improvements.</div>

          <div className="art1 flex flex-col gap-1 items-start ">
            <div className="find font-[400] text-[22px]">How to Check for Updates</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">1. Open Settings → Windows Update.</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">2. Click Check for updates.</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">3. Download and install any available updates.</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">4. Restart your computer if prompted.</div>


          </div>
          <div className="art1 flex flex-col gap-1 items-start ">
            <div className="find font-[400] text-[22px]">Optional Updates</div>
              <div className="content text-[18px] text-[#dbdbdb] relative z-1">If available, open Advanced options → Optional updates and install any recommended updates. These may include additional drivers, firmware updates, or other hardware-related updates that are not installed automatically.</div>
          </div>



          <div className="mb-10 buttons w-full flex items-center gap-8 max-[438px]:flex-col-reverse  max-[438px]:gap-2 max-[438px]:">
            <Link to='/tips/installation' className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>← Previous</Link>
            <Link to='/tips/personalization' className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Next →</Link>
          </div>

        </main>
      </div>
    </div>
  )
}

export default Performance
