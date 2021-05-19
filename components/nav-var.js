import Link from 'next/link'

const NavBar=()=>{
  return (<nav className="h-10 w-full flex space-x-8 justify-end bg-green-200 border-b-2 border-green-900 items-center p-4">
    <Link href="/">
      <a>
        Home
      </a>
    </Link>
    <Link href="/about">
      <a>
        About
      </a>
    </Link>
    <Link href="/random">
      <a>
        Random Stuff
      </a>
    </Link>
  </nav>)
}
export default NavBar