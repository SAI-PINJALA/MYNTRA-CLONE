import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Searchbox from './Searchbox'
import Icon from './Icon'

const Home = () => {
    return (
        <section className='h-[80px] bg-white shadow-xl flex justify-center'>
            <article className='h-[100%] w-[93%]  flex'>

                <div className='h-[100%] w-[10%] flex justify-center items-center'>
                    <Logo></Logo>
                </div>

                <div className='h-[100%] w-[45%] '>
                    <Menu></Menu>
                </div>

                <div className='h-[100%] w-[30%] flex items-center'>
                    <Searchbox></Searchbox>
                </div>

                <div className='h-[100%] w-[15%] '>
                    <Icon></Icon>
                </div>
                

            </article>

        </section>
    )
}

export default Home