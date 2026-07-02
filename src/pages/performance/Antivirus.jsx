import React from 'react'
import { useOutletContext } from "react-router-dom";
import { Link } from 'react-router-dom';
const Home = () => {
  const props = useOutletContext();
  // console.log(props)
  return (
    <div className='overflow-x-clip overflow-y-auto blue-scrollbar scrollbar relative font-[100] w-[calc(100vw-280px)] max-[1000px]:w-full h-[calc(100svh-77px)]  pl-8 pt-10'>
      <div className='relative h-full w-full  flex flex-col gap-2'>
        <div className="pr-8 titlebar w-full flex text-[40px] items-start justify-between">
          <div className="title">Use Windows Defender</div>

          <svg onClick={() => {
            props.setnavOpened(true)
            // console.log("Click")
          }} className='relative z-1 box-content mt-3 p-1  shrink-0 w-[32px] h-[32px] max-[1000px]:block hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z" /></svg>
        </div>
        <main className='pr-8 flex flex-col gap-10 items-start'>
          <div className='flex flex-col gap-4 items-start'>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">For most home users, Windows Defender provides all the protection needed without installing additional antivirus software.</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">Many computers, especially laptops, come with a pre-installed third-party antivirus as promotional software. These programs often run continuously in the background and can reduce overall system performance. Unless you rely on their premium features, they're usually unnecessary.</div>
          </div>
          <div className="art1 flex flex-col gap-1 items-start ">
            <div className="find font-[400] text-[22px]">How to Uninstall a Third-Party Antivirus</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">1. Open Settings → Apps → Installed apps.</div>
            {/* <img src="/assets/images/ss1.PNG" className='relative z-1 py-4' alt="" /> */}
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">2. Select your antivirus software.</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">3. Click Uninstall and follow the on-screen instructions.</div>
            {/* <img src="/assets/images/ss1.PNG" className='relative z-1 py-4' alt="" /> */}
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">4. Restart your computer if prompted.</div>
           
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">Windows Defender will automatically become active once no other antivirus software is installed.</div>
            {/* <img src="/assets/images/ss2.2.PNG" className='relative z-1 ' alt="" /> */}
            {/* <img src="/assets/images/ss2.1.PNG" className='relative z-1 ' alt="" /> */}
            {/* <img src="/assets/images/ss2.3.PNG" className='relative z-1 ' alt="" /> */}
          </div>
          
          {/* <div className="art3 flex flex-col gap-1 items-start mb-10"> */}

            
            <div className=" mb-10 buttons w-full flex items-center gap-8 max-[438px]:flex-col-reverse   max-[438px]:gap-2 max-[438px]:">
              <Link to='/performance/storage' className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(0,16,32)] cursor-pointer hover:bg-[rgb(0,32,64)]  font-[400] p-3 px-8 border-b-2 text-[rgb(0,128,255)] border-[rgb(0,128,255)] '>← Previous</Link>
              {/* <button className='w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(0,16,32)] cursor-pointer hover:bg-[rgb(0,32,64)]  font-[400] p-3 px-8 border-b-2 text-[rgb(0,128,255)] border-[rgb(0,128,255)] '>Next →</button> */}

          </div>

          {/* <div className="comp text-[rgb(80,160,255)] font-[400] relative z-1">Supports Windows 10 & Windows 11</div>
          <button className='relative z-1 mt-4 text-[18px] bg-[rgb(0,16,32)] cursor-pointer hover:bg-[rgb(0,32,64)]  font-[400] p-3 px-8 border-b-2 text-[rgb(0,128,255)] border-[rgb(0,128,255)] '>Get Started →</button> */}
          {/* <svg className='absolute right-[-10%] bottom-[-30%] h-[600px] w-[600px] opacity-10 z-0' xmlns="http://www.w3.org/2000/svg" fill='rgb(0,64,128)' strokeWidth={0.1} x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
            <path d="M12 16L3 16 3 23.75 12 24.988zM12 5L3 6.25 3 14 12 14zM14 4.75L14 14 27 14 27 3zM14 16L14 25.25 27 27 27 16z"></path>
          </svg> */}
          {/* <button className='bg-[rgb(0,16,32)] cursor-pointer hover:bg-[rgb(0,8,16)] font-[400] p-3 px-8 border-0 text-[white] border-[rgb(0,64,128)] '>Get Started →</button> */}

        </main>
      </div>
    </div>
  )
}

export default Home
