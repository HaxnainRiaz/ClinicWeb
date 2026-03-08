import "./globals.css";

export const metadata = {
  title: "Medify Clinic | Expert Medical Care for You and Your Family",
  description:
    "Book appointments with experienced specialists, access personalized care, and get the support you need — with a modern, patient-first clinic experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
