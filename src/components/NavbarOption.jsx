import { React, useState } from 'react'
import { NavLink } from "react-router-dom";

const NavbarOption = (props) => {
  // console.log(props)
  let isContact = false;
  if (props.props.first == 'Github' || props.props.first == 'LinkedIn' || props.props.first == 'Developed By: Mayank') {
    isContact = true;
  }

  return (
    <li className={`text-[#ededed] relative overflow-hidden   ${props.props.first == 'Developed By: Mayank' ? 'h-8' : 'h-12'} ${props.props.first == 'Github' ? 'mt-auto' : ''}`}>
      {!isContact ? <div><NavLink to={"/performance/" + props.props.first.toLowerCase()} >{({ isActive }) => (<div style={{ transitionDelay: props.props.delay }} className={` ${isActive ? 'text-[rgb(0,128,255)] ' : ''} justify-between font-[100] absolute w-full transition-[translate,opacity] duration-300 ${!isContact ? `${props.props.select.rightSelect
        ? "-translate-x-full opacity-0"
        : "translate-x-0 opacity-100"
        }` : ''}
            flex items-center pl-6 pr-4 ${props.props.first == 'Developed By: Mayank' ? ' font-[400] text-[14px] h-8 cursor-auto ' : `h-12 ${!props.props.select.rightSelect ? 'hover:bg-[rgb(0,16,32)]' : 'hover:bg-[rgb(32,16,0)]'} `}`}><div>{props.props.first}</div>{props.props.first == 'Home' ? <svg onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
              props.props.navOpened.setnavOpened(false)
        }} className=' relative z-1 box-content mt-3 p-1  shrink-0 w-[30px] h-[30px] max-[1000px]:block hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg> : ''}</div>)}

      </NavLink>
      </div> : <a href={props.props.first != 'Developed By: Mayank' ? props.props.first == 'Github' ? 'https://github.com/mayank314mk' : 'https://www.linkedin.com/in/mayank-8a1233257/' : undefined} target="_blank"
        rel="noopener noreferrer">
        <div style={{ transitionDelay: props.props.delay }} className={`font-[100] absolute w-full transition-[translate,opacity] duration-300 ${!isContact ? `${props.props.select.rightSelect
          ? "-translate-x-full opacity-0"
          : "translate-x-0 opacity-100"
          }` : ''}
            flex items-center pl-6 ${props.props.first == 'Developed By: Mayank' ? 'text-[grey] font-[400] text-[14px] h-8 cursor-auto' : `h-12 ${!props.props.select.rightSelect ? 'hover:bg-[rgb(0,16,32)]' : 'hover:bg-[rgb(32,16,0)]'} `}`}>{props.props.first}</div>
      </a>}

      {!isContact ? <div><NavLink to={"/tips/" + props.props.second.toLowerCase()} className={({ isActive }) =>
        isActive ? "text-[rgb(255,128,0)]" : ""}>
        <div style={{ transitionDelay: props.props.delay }} className={`justify-between font-[100] absolute w-full transition-[translate,opacity] duration-300  
          ${props.props.select.rightSelect
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
          }  h-12 flex items-center pl-6 pr-4 hover:bg-[rgb(32,16,0)]`}><div>{props.props.second}</div>{props.props.first == 'Home' ? <svg onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
              props.props.navOpened.setnavOpened(false)
        }} className='relative z-1 box-content mt-3 p-1  shrink-0 w-[30px] h-[30px] max-[1000px]:block hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg> : ''}</div>
      </NavLink></div> : ''}

    </li>
  )
}

export default NavbarOption
