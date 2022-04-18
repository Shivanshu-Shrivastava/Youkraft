import React from 'react'
import img from './../Img/bg2.jpg'

function Title() {
    return (
        <section style={{ height: 80 + 'vh' }} className='row p-3'>
            <div className='circle'></div>
            <div className='col-sm-12 my-auto col-md-6'>
                
                <h1>Hello, Everyone</h1>
                <h3>Title for this Beautiful Theme</h3>
            </div>
            <div className='col-sm-12 col-md-6'>
                <img style={{ height: 100 + '%' }} className='img-fluid rounded bs' src={img} />
            </div>

        </section>
    )
}

export default Title