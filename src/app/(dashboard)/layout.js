import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Link from "next/link";


export default function DashboardLayout({ children }) {
    return (
        <div className="grid grid-cols-12 gap-10 p-5">
            <div className="col-span-2 bg-indigo-500 h-[calc(100vh-40px)] p-5 rounded text-white">
                <ul className='flex flex-col gap-5'>
                    <Link href='/'>Earnings</Link>
                    <Link href='/blog'>Orders</Link>

                    <Link href='/login'>Logout</Link>
                </ul>
            </div>
            <div className="col-span-10 bg-indigo-50 rounded p-5">
                {children}
            </div>
        </div>
    )
}
