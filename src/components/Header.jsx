import React from 'react'
import logo from '../images/logo.png'

function Header(){
    return(
        <>
            <header className='flex justify-between bg-yellow-700'>
                <a href="/"><button className='size-24 rounded-full'><img src={logo} alt="logo"/></button></a>
                <a href="AboutUs" className='p-5  font-bold'>ABOUT US</a>
                <a href="Blog" className='p-5  font-bold'>BLOGS</a>
                <a href="Academics" className='p-5 font-bold'>ACADEMICS</a>
                <a href="Student" className='p-5 font-bold'>STUDENTS' CORNER</a>
                <a href="Parent" className='p-5 font-bold'>PARENTS' PORTAL</a>
                <a href="EventsNews" className='p-5 font-bold'>EVENTS & NEWS</a>
                <a href="Contact" className='p-5 font-bold'>CONTACT</a>

            </header>
        </>
    )
}
export default Header;