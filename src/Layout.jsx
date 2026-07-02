import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from 'react'
import Topbar from "./components/Topbar";

function Layout() {
    const [leftSelect, setleftSelect] = useState(true)
    const [rightSelect, setrightSelect] = useState(false)
    const [navOpened, setnavOpened] = useState(false)
    // console.log(navOpened)
    return (
        <>
            <Topbar select={{ leftSelect, rightSelect }} setSelect={{ setleftSelect, setrightSelect }} />
            <div className='flex'>
                <Navbar navOpened={{navOpened,setnavOpened}} select={{ leftSelect, rightSelect }} />
                <Outlet context={{navOpened,setnavOpened}}/>
            </div>
        </>
    );
}

export default Layout;