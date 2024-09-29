import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default function WebsiteLayout({ children }) {
    return (

        <div>
            <Navbar />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>

    )
}
