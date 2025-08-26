import './globals.css';

export const metadata = {
  title: 'FundTek Capital Group',
  description: 'Fast, reliable funding for your business.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="p-4 bg-blue-700 text-white">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">FundTek Capital Group</h1>
            <nav className="space-x-6">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/apply" className="hover:underline">Apply</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>

        <main className="max-w-5xl mx-auto p-6">{children}</main>

        <footer className="p-4 mt-12 bg-gray-200 text-center text-sm">
          © {new Date().getFullYear()} FundTek Capital Group. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
