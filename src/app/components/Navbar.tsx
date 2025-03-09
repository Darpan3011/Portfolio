import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full bg-gray-900 py-4 z-50 shadow-md">
    <div className="container mx-auto flex justify-between items-center px-6">
      <Link href="#" className="text-2xl font-bold text-white hover:text-yellow-400">Darpan Kanani</Link>
      <div className="flex space-x-6">
        <Link href="#about" className="nav-link text-gray-300 hover:text-yellow-400" data-offset="150">About</Link>
        <Link href="#experience" className="nav-link text-gray-300 hover:text-yellow-400"data-offset="150">Experience</Link>
        <Link href="#projects" className="nav-link text-gray-300 hover:text-yellow-400"data-offset="150">Projects</Link>
        <Link href="#contact" className="nav-link text-gray-300 hover:text-yellow-400"data-offset="150">Contact</Link>
      </div>
    </div>
  </nav>
  );
}
