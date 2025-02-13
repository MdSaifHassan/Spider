// import { Poppins } from "next/font/google";
// import "./globals.css";
// import Container from "../components/Container/Container";
// import Footer from "../module/footer";
// import Header from "../components/Header/Header";

// const inter = Poppins({
//   weight: "400",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Container>
//           <Header />
//           {children}
//         </Container>
//         <Footer />
//       </body>
//     </html>
//   );
// }




import { Poppins } from "next/font/google";
import "./globals.css";
import Container from "../components/Container/Container";
import Footer from "../module/footer";
import Header from "../components/Header/Header";
import ReduxProvider from "../components/providers/ReduxProvider";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider> 
          <Container>
            <Header />
            {children}
          </Container>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
