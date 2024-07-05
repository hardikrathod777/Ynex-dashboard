import './Header.css'
import logo from '../../assets/download (1).png'
import flag from '../../assets/download.jpeg'
import admin_img from '../../assets/admin.jpeg'
import { RiMenu2Line } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiFullscreenFill } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";

function Header() {
    return (
        <>
            <header className="header">
                    <div className='col-xxl-12 d-flex'>
                        <div className='d-flex logo-img'>
                            <img src={logo} />
                        </div>
                        <div className='header-menu d-flex justify-content-between'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <RiMenu2Line className='menu-bar-i'/>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <BiSearchAlt2 className='menu-search-i'/>
                                </div>
                                <div className='flag-img'>
                                    <img src={flag} className='flag-img' />
                                </div>
                                <div style={{position:'relative'}} className='notifi-hover'>
                                    <IoNotificationsOutline className='menu-notifications-i' />
                                    <div className='notification-hover'>
                                        <div style={{padding:'16px'}}>
                                            <p className='notification-p'>
                                                Notification
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <RiFullscreenFill className='menu-screen-i'/>
                                </div>
                                <div className='d-flex' style={{margin:'0px 11px'}}>
                                    <div>
                                        <img src={admin_img} className='admin-img' />
                                    </div>
                                    <div style={{paddingLeft:'10px'}}>
                                        <p className='admin-name'>
                                            Json Taylor
                                        </p>
                                        <p className='admin-work'>
                                            Web Designer
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <CiSettings className='menu-setting-i'/>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>
        </>
    )
}

export default Header