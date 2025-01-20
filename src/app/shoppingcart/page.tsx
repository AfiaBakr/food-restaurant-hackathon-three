import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const ShoppingCart = () => {
    return (
        <main className='bg-white'>
            <header className="bg-cover bg-center h-52 flex flex-col text-center" style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}>
                <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-wide mt-16">Shopping Cart</h1>
                <div className="flex items-center justify-center text-sm lg:text-2xl">
                <h1 className="text-white">Home</h1><MdKeyboardArrowRight className="text-white"/><h1 className="text-[#ff9f0d]"><u>Shopping Cart</u></h1>
                </div>      
            </header>
            <section>
                <table>
                    
                </table>
            </section> 
            <section>
                <div className='grid grid-cols-2'>
                    <div className='col-span-1'></div>
                    <div className='col-span-2'></div>
                </div>
            </section> 
        </main>
    );
}


export default ShoppingCart;