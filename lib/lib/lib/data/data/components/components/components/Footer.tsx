export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} AutoFlowGPT. Built in Montreal, Quebec,
          Canada.
        </p>
        <p className="text-xs text-gray-400">
          Michael Gentile • 514-771-9875 • Michaelgentile31@gmail.com
        </p>
      </div>
    </footer>
  );
}
