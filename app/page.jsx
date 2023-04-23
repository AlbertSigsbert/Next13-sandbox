import Link from "next/link";

const HomePage = () => {
  return (
    <div className="mx-[6%] my-8">
      <h1 className="text-2xl font-bold my-2">Welcome to Next13</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/team">Team</Link></li>
      </ul>
    </div>
  )
}

export default HomePage