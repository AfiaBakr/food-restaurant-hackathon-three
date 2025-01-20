 
import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md";

const CheckoutPage=()=> {
  return (
    <div >
      {/* Background Section */}
      <header className="bg-cover bg-center h-52 flex flex-col text-center" style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}>
                <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-wide mt-16">Check Out Page</h1>
                <div className="flex items-center justify-center text-sm lg:text-2xl">
                <h1 className="text-white">Home</h1><MdKeyboardArrowRight className="text-white"/><h1 className="text-[#ff9f0d]"><u>Check Out</u></h1>
                </div>      
      </header>
      <div className="container w-screen lg:mx-auto px-2 lg:px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Forms */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#333333] mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-screen lg:w-full px-1 lg:px-3 py-2 border border-[#adb7be] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f0d] focus:border-[#ff9f0d]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#333333] mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-screen lg:w-full px-1 lg:px-3 py-2 border border-[#adb7be] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f0d] focus:border-[#ff9f0d]"
                    
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-screen lg:w-full px-1 lg:px-3 py-2 border border-[#adb7be] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f0d] focus:border-[#ff9f0d]"
                    
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#333333] mb-1">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-screen lg:w-full px-1 lg:px-3 py-2 border border-[#adb7be] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f0d] focus:border-[#ff9f0d]"
                    
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#333333] mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-screen lg:w-full px-1 lg:px-3 py-2 border border-[#adb7be] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f0d] focus:border-[#ff9f0d]"
                    
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-[#333333] mb-1">
                    Country
                  </label>
                  <select
                    id="country"
                    className="w-screen lg:w-full px-1 lg:px-3 py-2 border border-[#abd7be] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f0d] focus:border-[#ff9f0d]"
                  >
                    <option value="">Choose country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                  </select>
                </div>
              </div>

              <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-[#333333] mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-screen lg:w-full px-1 lg:px-3 py-2 border border-[#adb7bd] rounded-md  focus:outline-none focus:ring-2 focus:ring-[#ff9f0d] focus:border-[#ff9f0d]"
                    placeholder="Choose city"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-[#333333] mb-1">
                    Zip code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    className="w-screen lg:w-full px-1 lg:px-3 py-2 border border-[#adb7be] rounded-md  focus:outline-none focus:ring-2 focus:ring-[#ff9f0d] focus:border-[#ff9f0d]"
                    
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address1" className="block text-sm font-medium text-[#333333] mb-1">
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  className="w-screen lg:w-full px-1 lg:px-3 py-2 border border-[#adb7be] rounded-md  focus:outline-none focus:ring-2 focus:ring-[#ff9f0d] focus:border-[#ff9f0d]"
                  
                />
              </div>

              <div>
                <label htmlFor="address2" className="block text-sm font-medium text-[#333333] mb-1">
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  className="w-screen lg:w-full px-1 lg:px-3 py-2 border border-[#adb7be] rounded-md   focus:ring-2 ring-[#ff9f0d] focus:border-[#ff9f0d]"
                  
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sameAsShipping"
                className="h-4 w-4 rounded border-[#adb7be] text-[#ff9f0d] ring-[#ff9f0d]"
              />
              <label htmlFor="sameAsShipping" className="text-sm text-[#333333]">
                Same as shipping address
              </label>
            </div>
          </div>

          <div className="w-auto flex pt-4">
            <button className="pl-2 py-2 border border-[#adb7be] rounded-md text-sm font-medium text-[#333333] w-52 h-12 lg:w-72 Lg:h-12 lg:px-3">
              Back to cart
            </button>
            <button className="pr-2 ml-4 lg:pr-0 lg:ml-40 py-2 bg-[#ff9f0d] text-white rounded-md  text-sm font-medium  w-52 h-12 lg:w-72 Lg:h-12">
            Proceed to shipping
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className=" w-auto lg:w-[750px] px-1 lg:p-6 rounded-lg border border-[#adb7be]">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                  <Image
                    src={"checkout/Tikka.png"}
                    alt="Chicken Tikka Kebab"
                    width={83}
                    height={88}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Chicken Tikka Kebab</h3>
                  <p className="text-sm text-[#333333]">150 gm net</p>
                  <p className="text-sm text-[#333333]">50$</p>
                </div>
              </div>
            ))}
          </div>
            <div className="w-auto lg:w-[700px]">
          <div className="mt-6 lg:y-2 border-t pt-4">
            <div className="flex justify-between px-1 text-sm">
              <span className="text-[#333333]">Subtotal</span>
              <span className="font-medium">130$</span>
            </div>
            <div className="flex justify-between px-1 text-sm">
              <span className="text-[#333333]">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between px-1 text-sm">
              <span className="text-[#333333]">Discount</span>
              <span className="font-medium">25%</span>
            </div>
            <div className="flex justify-between px-1 text-sm">
              <span className="text-[#333333]">Tax</span>
              <span className="font-medium">54.76$</span>
            </div>
            <div className="flex justify-between px-1 border-t pt-2">
              <span className="font-semibold ">Total</span>
              <span className="font-semibold ">432.65$</span>
            </div>
          </div>

          <button className="w-screen lg:w-[700px] mt-6 mx-0 lg:px-6 py-3 bg-[#ff9f0d] text-white rounded-md text-sm font-medium ">
            Place an order
          </button>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default CheckoutPage;
