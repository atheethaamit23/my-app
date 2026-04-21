import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <h1>My ERP Company</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
