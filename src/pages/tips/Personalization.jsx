import React from 'react'
import { useOutletContext } from "react-router-dom";
import { Link } from 'react-router-dom';
const Performance = () => {
	const props = useOutletContext();
	return (
		<div className='overflow-x-clip overflow-y-auto orange-scrollbar scrollbar relative font-[100] w-[calc(100vw-280px)] max-[1000px]:w-full h-[calc(100svh-77px)]  pl-8 pt-10'>
			<div className='relative h-full   flex flex-col gap-2'>
				<div className="pr-8 titlebar w-full flex text-[40px] items-start justify-between">
					<div className="title">Registry Tweaks</div>

					<svg onClick={() => {
						props.setnavOpened(true)
						// console.log("Click")
					}} className='relative z-1 box-content mt-3 p-1  shrink-0 w-[32px] h-[32px] max-[1000px]:block hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z" /></svg>
				</div>
				<main className='pr-8 flex flex-col gap-10 items-start'>
					<div className="content text-[18px] text-[#dbdbdb] relative z-1">Registry tweaks can be used to change certain personalization settings that aren't accessible through the Settings app when Windows isn't activated. These tweak files make editing the Windows Registry easier by applying the required changes automatically.</div>

					<div className="art1 flex flex-col gap-1 items-start ">
						<div className="find font-[400] text-[22px]">How to Apply a Registry File</div>
						<div className="content text-[18px] text-[#dbdbdb] relative z-1">1. Double-click the .reg file.</div>
						<div className="content text-[18px] text-[#dbdbdb] relative z-1">2. Click Yes when prompted by User Account Control.</div>
						<div className="content text-[18px] text-[#dbdbdb] relative z-1">3. Click Yes to confirm adding the information to the Windows Registry.</div>
						<div className="content text-[18px] text-[#dbdbdb] relative z-1">4. Restart Windows Explorer or your computer if required for the change to take effect.</div>


					</div>
					<div className="art1 flex flex-col gap-1 items-start ">
						<div className="find font-[400] text-[22px]">Included Tweaks</div>
						<div className='flex flex-col gap-4 items-start'>
							<div className="content text-[18px] text-[#dbdbdb] relative z-1">Each tweak includes both an Apply file and an Undo file, allowing you to restore the default behavior at any time.</div>
							<div className="content text-[18px] text-[#dbdbdb] relative z-1">The following Registry tweaks are included:</div>
							<div className="art1 flex flex-col w-full gap-1 items-start ">
								<div className='w-full' >
									<div className="content w-full text-[18px] text-[#dbdbdb] relative z-1">1. Dark Mode</div>
									<div className="mb-4 buttons w-full flex items-center gap-8 max-[438px]:flex-col max-[438px]:gap-2 max-[438px]:">
										<a href={`${import.meta.env.BASE_URL}assets/registry/Dark Mode.reg`} download="Dark Mode.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Apply</a>
										<a href={`${import.meta.env.BASE_URL}assets/registry/Dark Mode undo.reg`} download="Dark Mode undo.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Undo</a>
									</div>
								</div>
								<div className="content text-[18px] text-[#dbdbdb] relative z-1">2. Auto Colorization</div>
								<div className="mb-4 buttons w-full flex items-center gap-8 max-[438px]:flex-col max-[438px]:gap-2 max-[438px]:">
										<a href={`${import.meta.env.BASE_URL}assets/registry/Auto Colorization.reg`} download="Auto Colorization.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Apply</a>
										<a href={`${import.meta.env.BASE_URL}assets/registry/Auto Colorization undo.reg`} download="Auto Colorization undo.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Undo</a>
									</div>
								<div className="content text-[18px] text-[#dbdbdb] relative z-1">3. Transparent Taskbar</div>
								<div className="mb-4 buttons w-full flex items-center gap-8 max-[438px]:flex-col max-[438px]:gap-2 max-[438px]:">
										<a href={`${import.meta.env.BASE_URL}assets/registry/Transparent Taskbar.reg`} download="Transparent Taskbar.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Apply</a>
										<a href={`${import.meta.env.BASE_URL}assets/registry/Transparent Taskbar undo.reg`} download="Transparent Taskbar undo.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Undo</a>
									</div>
								<div className="content text-[18px] text-[#dbdbdb] relative z-1">4. Small Taskbar Icons</div>
								<div className="mb-4 buttons w-full flex items-center gap-8 max-[438px]:flex-col max-[438px]:gap-2 max-[438px]:">
										<a href={`${import.meta.env.BASE_URL}assets/registry/Small Taskbar Icons.reg`} download="Small Taskbar Icons.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Apply</a>
										<a href={`${import.meta.env.BASE_URL}assets/registry/Small Taskbar Icons undo.reg`} download="Small Taskbar Icons undo.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Undo</a>
									</div>
								<div className="content text-[18px] text-[#dbdbdb] relative z-1">5. Offline Search</div>
								<div className="mb-4 buttons w-full flex items-center gap-8 max-[438px]:flex-col max-[438px]:gap-2 max-[438px]:">
										<a href={`${import.meta.env.BASE_URL}assets/registry/Offline Search.reg`} download="Offline Search.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Apply</a>
										<a href={`${import.meta.env.BASE_URL}assets/registry/Offline Search undo.reg`} download="Offline Search undo.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Undo</a>
									</div>
								<div className="content text-[18px] text-[#dbdbdb] relative z-1">6. Classic Context Menu (Windows 11)</div>
								<div className="mb-4 buttons w-full flex items-center gap-8 max-[438px]:flex-col max-[438px]:gap-2 max-[438px]:">
										<a href={`${import.meta.env.BASE_URL}assets/registry/Classic Context Menu.reg`} download="Classic Context Menu.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Apply</a>
										<a href={`${import.meta.env.BASE_URL}assets/registry/Classic Context Menu undo.reg`} download="Classic Context Menu undo.reg" className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>Undo</a>
									</div>
							</div>
							<div className="content text-[18px] text-[#dbdbdb] relative z-1">If you're looking for additional Windows customization, you can explore more Registry tweaks from trusted sources online.</div>
						</div>
					</div>

					<div className="art3 flex flex-col gap-1 items-start mb-10">
						<div className="comp text-[rgb(255,160,80)] font-[400] relative z-1">Note: Only use Registry files from trusted sources. Registry files downloaded from unknown sources may contain unwanted or harmful changes.</div>
						<div className="buttons w-full flex items-center gap-8 max-[438px]:flex-col-reverse  max-[438px]:gap-2 max-[438px]:">
							<Link to='/tips/update' className='flex items-center justify-center w-[170px] max-[438px]:w-full relative z-1 mt-4 text-[18px] bg-[rgb(32,16,0)] cursor-pointer hover:bg-[rgb(64,32,0)]  font-[400] p-3 px-8 border-b-2 text-[rgb(255,128,0)] border-[rgb(255,128,0)] '>← Previous</Link>
							
						</div>
					</div>

				</main>
			</div>
		</div>
	)
}

export default Performance
