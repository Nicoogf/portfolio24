import { Inter } from "next/font/google";
import View from "@/app/ui/dashboard/View/page"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171717">
        <div className="max-w-[78rem] mx-auto">
            <div>
            </div>    
            {children}
        </div>
        
      </body>
    </html>
  );
}
