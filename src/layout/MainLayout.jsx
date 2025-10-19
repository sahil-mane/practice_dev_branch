import { Outlet, useNavigate } from 'react-router-dom';
import SideBar from '../components/sideBar/sideBar';


const MainLayout = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/")
    }

    const linkData = [
        { link: "/", label: "Home" },
        { link: "/about", label: "About" },
        { link: "/contact", label: "contact us", }
    ]
    return (
        <div style={{ display: "flex" }}>
            <div className='sideBar' style={{ height: "100vh", border: "1px solid red" }}>
                <SideBar />
            </div>
            <div style={{ width: "100%", border: "3px solid pink" }}>
                <div style={{ border: "3px solid blue", width: "100%", height: "8%", backgroundColor: "pink", display: "flex", gap: "18px", alignItems: "center" }}>
                    {linkData.map((link, index) => {
                        return (
                            <a key={index} href={link.link}>{link.label}</a>
                        )
                    })}
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout