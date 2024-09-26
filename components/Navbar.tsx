import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";

function Navbar() {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="Flexibble" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
        <div className="flexCenter gap-4">
          {session ? (
            <>
              User Photo <Link href="/create-project" />
            </>
          ) : (
            <AuthProvider />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
