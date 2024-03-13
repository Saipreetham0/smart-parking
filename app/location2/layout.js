import "../styles/globals.css";

import Sidebar from "../components/NavBar/slidebar";

import Providers from "../providers";

export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Sidebar />
          <main className="mt-20">{children}</main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
