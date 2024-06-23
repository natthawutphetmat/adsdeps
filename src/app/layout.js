import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import "./modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/nav'
import Footer from './components/Footer'
import Line from './line/page'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "รับทำโฆษณาGoogleAdsสายเทา โฆษณาสายเทาเพื่อธุรกิจของคุณ",
  description: "รับทำโฆษณาออนไลน์สายเทา ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook",
  keywords: "ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา",
  image:"https://www.adsdeps.com/img/ads.jpg",
  name: "adsmanager",
  canonical:'https://adsdeps.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
       <Line />
        
        {children}
        <Footer />
        
      </body>
     
    </html>
  );
}
