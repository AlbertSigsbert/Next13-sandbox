import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="py-4 flex justify-between">
        <h1 className="text-4xl font-bold">NextJS 13</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/team">Team</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
