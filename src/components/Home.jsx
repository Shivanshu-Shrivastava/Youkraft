import React from 'react'
import Brading from './Brading'
import Navbar from './Navbar'
import Title from './Title'
function Home() {
  return (
    <div>
        <Navbar />
        <main className='container'>
            <Title />
            <article className='p-33'>
                <Brading />
            </article>
        </main>

    </div>
  )
}

export default Home