import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"

const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <div className="inner-layout">
                <Outlet />
            </div>
        </>
    )
}

export default PublicLayout