import { createBrowserRouter} from "react-router-dom";
import PerfHome from './pages/performance/Home'
import Drivers from './pages/performance/Drivers'
import Startup from './pages/performance/Startup'
import Power from './pages/performance/Power'
import Storage from './pages/performance/Storage'
import Antivirus from './pages/performance/Antivirus'
import TipsHome from './pages/tips/Home'
import Installation from './pages/tips/Installation'
import Update from './pages/tips/Update'
import Personalization from './pages/tips/Personalization'
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,

        children: [
            {
                index: true,
                element: <PerfHome />
            },
            {
                path: "performance/home",
                element: <PerfHome />
            },
            {
                path: "performance/drivers",
                element: <Drivers />
            },
            {
                path: "performance/startup",
                element: <Startup />
            },
            {
                path: "performance/power",
                element: <Power />
            },
            {
                path: "performance/storage",
                element: <Storage />
            },
            {
                path: "performance/antivirus",
                element: <Antivirus />
            },
            {
                path: "tips/home",
                element: <TipsHome />
            },
            {
                path: "tips/installation",
                element: <Installation />
            },
            {
                path: "/tips/update",
                element: <Update />
            },
            {
                path: "/tips/personalization",
                element: <Personalization />
            }
        ]
    }
])

export default router
