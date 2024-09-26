import Navbar from "@/components/shared/Navbar";
import "./globals.css";

export const metadata = {
  title: 'Title',
  description: 'C',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          <div>
            {children}
          </div>
        </body>
    </html>
  )
}
