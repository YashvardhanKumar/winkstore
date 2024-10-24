"use client"
import Link from "next/link";
import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
    const [searchOn, setSearchOn] = useState(false);
    return (
        <nav className="fixed w-full border-b-[0.5px] border-opacity-30 border-gray-300 p-3 flex justify-between items-center gap-8">
            <div className="flex items-center gap-3 text-xl">
                <CgShoppingBag className="h-8 w-8" />
                <div className=" font-poppins text-nowrap">Wink Store</div>
            </div>
            {!searchOn && (<div className="flex items-center gap-3 font-poppins">
                <FaLocationDot className="text-xl" />
                <div>
                    <div className="font-bold">Deliver in 10 minutes</div>
                    <div className="text-sm text-gray-400">123, California, United States</div>
                </div>
            </div>)}
            <form className={`${searchOn ? "" : "max-w-96"} w-full`} action="">
                <input type="text" placeholder="Search" onFocus={() => setSearchOn(true)} onBlur={() => setSearchOn(false)} className="bg-gray-800 opacity-50 p-2 rounded-lg outline outline-1 outline-gray-300 outline-offset-2 w-full " />
            </form>

            <div className="flex gap-3">
                <div className="flex gap-2 *:p-3 *:px-5 first:rounded-lg last:rounded-e-lg font-geist-sans ">
                    <Link href="/login" className="inline-flex gap-3 rounded-lg border border-white bg-white text-black">Login</Link>
                    <button className="inline-flex gap-3 rounded-lg border border-white relative">
                        <div>Cart</div>
                        <BiShoppingBag className="text-xl" />
                        <div className="absolute right-3 top-1.5 px-1.5 rounded-full bg-white text-black text-xs">1</div>
                    </button>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;