// import View from "@/app/ui/dashboard/View/page"
import LeftPage from "./Left/page";
import ViewPage from "@/app/ui/dashboard/View/page"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171717]">
        <div className="max-w-[78rem] mx-auto">
            <div className="gap-4 flex md:mt-5 flex-col md:flew-row">
                <LeftPage />
                {children}
                <ViewPage />
            </div>                
        </div>        
      </body>
    </html>
  );
}
