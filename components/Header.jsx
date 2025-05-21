import Link from "next/link"

export default function Header() {

  return (
    <div className="flex text-center justify-center gap-16">
      <h3 className="transition-all duration-300 hover:text-accent">
        <Link href="/">Home</Link>
      </h3>
      <h3 className="transition-all duration-300 hover:text-accent">
        <Link href="/contact">Contact</Link>
      </h3>
      <h3 className="transition-all duration-300 hover:text-accent">
        <Link href="/about">About</Link>
      </h3>
    </div>
  );
}
