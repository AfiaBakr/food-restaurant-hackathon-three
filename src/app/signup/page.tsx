import react from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

export default function SignUpPage() {
    return (
      <div className="min-h-screen bg-white">
        {/* Background Section */}
      <header className="bg-cover bg-center h-52 flex flex-col text-center" style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}>
                <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-wide mt-16">Sign Up</h1>
                <div className="flex items-center justify-center text-sm lg:text-2xl">
                <h1 className="text-white">Home</h1><MdKeyboardArrowRight className="text-white"/><h1 className="text-[#ff9f0d]"><u>Sign Up</u></h1>
                </div>      
      </header> 
           
        {/* Signup Form */}
        <section className="py-16">
          <div className="container mx-auto max-w-md bg-white  rounded-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
            <form>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full  border rounded px-3 py-2 focus:ring focus:ring-yellow-300" 
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Password</label>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span>Remember me?</span>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
              >
                Sign Up
              </button>
              <p className="text-center mt-4">
                <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
              </p>
            </form>
            <div className="text-center mt-8">
              <p>OR</p>
              <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
                <Image src="/signup/Google.png" alt="Google" width={20} height={20} className="h-6 mr-10" />
                Sign up with Google
              </button>
              <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
                <Image src="/signup/Apple.png" alt="Apple" width={20} height={20} className="h-6 mr-10" />
                Sign up with Apple
              </button>
            </div>
          </div>
        </section>       
        
      </div>
    );
  }