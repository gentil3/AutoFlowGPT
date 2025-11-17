import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/autoflowgpt-logo.svg"
            alt="AutoFlowGPT"
            width={40}
            height={40}
          />
          <div>
            <p className="text-lg font-bold text-blue-900 dark:text-sky-200">
              AutoFlowGPT
            </p>
            <p className="text-xs text-gray-600 dark:text-slate-400">
              AI-Powered Business Automation
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <Link href="/automation-library" className="hover:text-blue-600">
            Library
          </Link>
          <Link href="/simulator" className="hover:text-blue-600">
            Simulator
          </Link>
          <Link href="/calculator" className="hover:text-blue-600">
            Calculator
          </Link>
          <Link href="/chatbot" className="hover:text-blue-600">
            Chat
          </Link>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Book Call
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
