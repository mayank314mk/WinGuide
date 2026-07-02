import React from 'react'
import NavbarOption from './NavbarOption'
const Navbar = ({ select,  navOpened}) => {
  // console.log(navOpened.navOpened);
  return (
    
    <nav className='text-[18px] font-extralight relative'>
      {/* {select.leftSelect ? <ul className='navbar w-70 bg-blue-900 h-full flex flex-col'>
        <li className='bg-cyan-900 h-12 flex items-center pl-3 '>Home</li>
        <li className='bg-cyan-800 h-12 flex items-center pl-3 '>About</li>
        <li className=' h-12 flex items-center pl-3 '>Contact</li>
        <li className=' h-12 flex items-center pl-3 '>Performance</li>
      </ul> : <ul className='navbar w-70 bg-blue-900 h-full flex flex-col'>
        <li className='bg-cyan-900 h-12 flex items-center pl-3 '>Home</li>
        <li className='bg-cyan-800 h-12 flex items-center pl-3 '>About</li>
        <li className=' h-12 flex items-center pl-3 '>Contact</li>
        <li className=' h-12 flex items-center pl-3 '>Tips</li>
      </ul>} */}
      <ul className={`relative z-2 max-[1000px]:absolute  ${navOpened.navOpened?'max-[1000px]:left-full':'max-[1000px]:left-[-280px]'} transition-all duration-300 navbar w-70 h-[calc(100svh-77px)] pt-3 pb-3 flex flex-col ${select.leftSelect ? 'bg-[rgb(0,8,16)]' : 'bg-[rgb(16,8,0)]'}`}>
        <NavbarOption props={{ select, first: "Home", second: "Home", delay: "25ms" , navOpened:navOpened}} />
        <NavbarOption props={{ select, first: "Drivers", second: "Installation", delay: "50ms" }} />
        <NavbarOption props={{ select, first: "Startup", second: "Update", delay: "75ms" }} />
        <NavbarOption props={{ select, first: "Power", second: "Personalization", delay: "100ms" }} />
        <NavbarOption props={{ select, first: "Storage", second: "", delay: "125ms" }} />
        <NavbarOption props={{ select, first: "Antivirus", second: "", delay: "150ms" }} />
        <NavbarOption props={{ select, first: "Github", second: "Github", delay: "200ms" }} />
        <NavbarOption props={{ select, first: "LinkedIn", second: "LinkedIn", delay: "250ms" }} />
        <NavbarOption props={{ select, first: "Developed By: Mayank", second: "Developed By: Mayank", delay: "300ms" }} />
      </ul>
    </nav>
  )
}

export default Navbar
