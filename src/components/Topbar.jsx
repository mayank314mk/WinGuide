import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Topbar = ({ select, setSelect }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.split('/')[1] == 'tips') {
      setSelect.setleftSelect(false);
      setSelect.setrightSelect(true);


    }
    else {
      setSelect.setleftSelect(true);
      setSelect.setrightSelect(false);
    }

  }, [])



  function perfSelect() {
    setSelect.setleftSelect(true);
    setSelect.setrightSelect(false);
  }

  function tipSelect() {
    setSelect.setleftSelect(false);
    setSelect.setrightSelect(true);
  }

  return (
    <div className='flex text-[18px] relative bg-[rgb(0,0,0)] '>
      <Link to="performance/home" onClick={perfSelect} className="cursor-pointer perf w-1/2 flex flex-col items-center justify-center pt-4 p-2 border-b-2 border-[#dbdbdb] text-[#dbdbdb]">
        <svg className={`transition-all duration-300   relative z-2 ${select.leftSelect ? 'text-[#0080ff]' : 'text-[#dbdbdb]'}`} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Lightning-Charge--Streamline-Bootstrap" height="24" width="24">
          <path d="M11.251 0.068a0.5 0.5 0 0 1 0.227 0.58L9.677 6.5H13a0.5 0.5 0 0 1 0.364 0.843l-8 8.5a0.5 0.5 0 0 1 -0.842 -0.49L6.323 9.5H3a0.5 0.5 0 0 1 -0.364 -0.843l8 -8.5a0.5 0.5 0 0 1 0.615 -0.09zM4.157 8.5H7a0.5 0.5 0 0 1 0.478 0.647L6.11 13.59l5.732 -6.09H9a0.5 0.5 0 0 1 -0.478 -0.647L9.89 2.41z" strokeWidth="1"></path>
        </svg>
        <div className={`transition-all duration-300  relative z-2 ${select.leftSelect ? 'text-[rgb(0,128,255)]' : ''}`}>Performance</div>
      </Link>
      <Link to="tips/home" onClick={tipSelect} className="cursor-pointer tips w-1/2 flex flex-col items-center justify-center pt-4 p-2 border-b-2 border-[#dbdbdb] text-[#dbdbdb]">
        <svg className={`transition-all duration-300   relative z-2 ${select.rightSelect ? 'text-[rgb(255,128,0)]' : 'text-[#dbdbdb]'}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" height="24" width="24" viewBox="0 0 24 24">
          <path d="M 11.982422 2.0019531 C 11.708422 2.0019531 11.433203 2.0168281 11.158203 2.0488281 C 8.1102031 2.4068281 5.5578906 4.8617656 5.0878906 7.8847656 C 4.7378906 10.129766 5.4471562 12.330734 7.0351562 13.927734 C 7.6571562 14.552734 8 15.334906 8 16.128906 L 8 18 C 8 20.206 9.794 22 12 22 C 14.206 22 16 20.206 16 18 L 16 16.123047 C 16 15.326047 16.323672 14.553906 16.888672 14.003906 C 18.249672 12.674906 19 10.898 19 9 C 19 7.003 18.143391 5.0975313 16.650391 3.7695312 C 15.364391 2.6255312 13.695422 2.0019531 11.982422 2.0019531 z M 1.9921875 3.2421875 A 0.730075 0.730075 0 0 0 1.46875 4.53125 L 2.46875 5.53125 A 0.75196 0.75196 0 1 0 3.53125 4.46875 L 2.53125 3.46875 A 0.730075 0.730075 0 0 0 1.9921875 3.2421875 z M 21.984375 3.2421875 A 0.730075 0.730075 0 0 0 21.46875 3.46875 L 20.46875 4.46875 A 0.75196 0.75196 0 1 0 21.53125 5.53125 L 22.53125 4.53125 A 0.730075 0.730075 0 0 0 21.984375 3.2421875 z M 11.982422 3.5019531 C 13.343422 3.5019531 14.648297 3.9936719 15.654297 4.8886719 C 16.827297 5.9326719 17.5 7.432 17.5 9 C 17.5 10.49 16.910797 11.885687 15.841797 12.929688 C 15.13862 13.614728 14.300928 14.52931 14.5625 15.5 L 9.4355469 15.5 C 9.2924352 14.530049 8.8421634 13.616937 8.0996094 12.871094 C 6.8516094 11.616094 6.2933594 9.8822813 6.5683594 8.1132812 C 6.9363594 5.7432812 8.9409844 3.8181094 11.333984 3.5371094 C 11.547984 3.5131094 11.766422 3.5019531 11.982422 3.5019531 z M 0.75 9.5 A 0.730075 0.730075 0 1 0 0.75 11 L 2.25 11 A 0.730075 0.730075 0 1 0 2.25 9.5 L 0.75 9.5 z M 21.75 9.5 A 0.730075 0.730075 0 1 0 21.75 11 L 23.25 11 A 0.730075 0.730075 0 1 0 23.25 9.5 L 21.75 9.5 z M 2.984375 14.242188 A 0.730075 0.730075 0 0 0 2.46875 14.46875 L 1.46875 15.46875 A 0.75196 0.75196 0 1 0 2.53125 16.53125 L 3.53125 15.53125 A 0.730075 0.730075 0 0 0 2.984375 14.242188 z M 20.992188 14.242188 A 0.730075 0.730075 0 0 0 20.46875 15.53125 L 21.46875 16.53125 A 0.75196 0.75196 0 1 0 22.53125 15.46875 L 21.53125 14.46875 A 0.730075 0.730075 0 0 0 20.992188 14.242188 z M 9.5 17 L 14.5 17 L 14.5 18 C 14.5 19.378 13.378 20.5 12 20.5 C 10.622 20.5 9.5 19.378 9.5 18 L 9.5 17 z"></path>
        </svg>
        <div className={`transition-all duration-300  relative z-2 ${select.rightSelect ? 'text-[rgb(255,128,0)]' : ''}`}>Tips</div>
      </Link>
      <div className={`transition-all duration-300 bg-[rgb(0,8,16)] left-0 colorBar absolute z-1 h-full w-1/2 border-b-2 border-[rgb(0,128,255)] ${select.rightSelect ? 'border-[rgb(255,128,0)] left-1/2 bg-[rgb(16,8,0)]' : ''}`}></div>
    </div>
  )
}

export default Topbar
