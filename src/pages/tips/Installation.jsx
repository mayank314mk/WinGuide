import React from 'react'
import { useOutletContext } from "react-router-dom";
import { Link } from 'react-router-dom';
const Performance = () => {
  const props = useOutletContext();
  return (
    <div className='overflow-x-clip overflow-y-auto orange-scrollbar scrollbar relative font-[100] w-[calc(100vw-280px)] max-[1000px]:w-full h-[calc(100svh-77px)]  pl-8 pt-10'>
      <div className='relative h-full   flex flex-col gap-2'>
        <div className="pr-8 titlebar w-full flex text-[40px] items-start justify-between">
          <div className="title">Use Genuine Windows</div>

          <svg onClick={() => {
            props.setnavOpened(true)
            // console.log("Click")
          }} className='relative z-1 box-content mt-3 p-1  shrink-0 w-[32px] h-[32px] max-[1000px]:block hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z" /></svg>
        </div>
        <main className='pr-8 flex flex-col gap-10 items-start'>
          <div className='flex flex-col gap-4 items-start'>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">Installing Windows from Microsoft's official website ensures you receive a clean, secure, and stable version of the operating system. It also guarantees compatibility with future updates and reduces the risk of modified or malicious system files.</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">If your computer has 4 GB RAM or less or older hardware, Windows 10 is generally recommended for better performance. Otherwise, choose the version that best suits your hardware and preferences.</div>
          </div>
          <div className="art1 flex flex-col gap-1 items-start ">
            <div className="find font-[400] text-[22px]">Download Windows</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">1. Visit the official Microsoft Windows download page.</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">2. Download the Media Creation Tool.</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">3. Use it to create a bootable USB drive and install Windows.</div>


          </div>
          <div className="art1 flex flex-col gap-1 items-start ">
            <div className="find font-[400] text-[22px]">Activation</div>
            <div className='flex flex-col gap-4 items-start'>
              <div className="content text-[18px] text-[#dbdbdb] relative z-1">The only significant limitations of using Windows without activation are the "Activate Windows" watermark and restricted personalization options in the Settings app.</div>
              <div className="content text-[18px] text-[#dbdbdb] relative z-1">Many personalization settings can still be changed using Registry files. You can find commonly used Registry files in the Customization section of this guide.</div>
            </div>
                      </div>
          <div className="art1 flex flex-col gap-1 items-start ">
            <div className="find font-[400] text-[22px]">Avoid Unofficial Activators</div>
            <div className="content text-[18px] text-[#dbdbdb] relative z-1">Avoid using unofficial Windows activators or modified Windows versions. These tools can compromise your system's security, affect stability, and may introduce unwanted software or malware.</div>



          </div>


          {/* <div className="art3 flex flex-col gap-1 items-start mb-10"> */}
            

            <div className="mb-10 buttons w-full flex items-center gap-8 max-[438px]:flex-col-reverse  max-[438px]:gap-2 max-[438px]:">
              <Link to='/tips/home' className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>← Previous</Link>
              <Link to='/tips/update' className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Next →</Link>
            </div>
          {/* </div> */}

        </main>
      </div>
    </div>
  )
}

export default Performance
