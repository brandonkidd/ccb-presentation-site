export const metadata = {
  title: 'CCB Landscape Services - Digital Marketing Strategy',
  description: 'Comprehensive digital marketing strategy and analysis prepared by Noble House Agency'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
