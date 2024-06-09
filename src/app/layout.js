import "./globals.css";


export const metadata = {
  title: "FloodHelp",
  charSet: "utf-8"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viweport" content="width: device-width, initial-scale=1">
        </meta>
      </head>
      <body >{children}</body>
    </html>
  );
}
