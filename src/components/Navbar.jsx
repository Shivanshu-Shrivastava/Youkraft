import React from 'react'
import img from './../Img/s.png'

function Navbar() {

    //  Some Javascript code for navbar responsivenss
    function menu() {
        const menu = document.getElementById('menu')
        const writ = document.getElementById('writ')
        menu.classList.toggle('canmenu')
        if (menu.classList.contains('canmenu')) {
            writ.innerText = 'close'
        } else {
            writ.innerText = 'menu'
        }
    }
    return (
        
        <nav data-aos="fade-down" class=" sticky-top navbar navbar-expand-lg navbar-light f-600">
            {/* <div class="navbar-brand " href="#">Shivanshu</div> */}
            <a class="navbar-brand" href="#">
                <img src={img} width="45" height="45" alt="" />
            </a>
            <button onClick={menu} id='menu' class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span id='writ' class=" material-icons">
                    menu
                </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item  ">
                        <a class="nav-link linkB  px-0 px-lg-5 d-inline-block"  href="#exper">Home </a>
                    </li>
                    
                    <li class="nav-item  ">
                        <a class="nav-link linkB px-0 px-lg-5  d-inline-block" href="#about">Contact Me </a>
                    </li>
                    


                </ul>

            </div>
        </nav>
    )
}

export default Navbar
