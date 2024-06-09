import Link from "next/link";
import { Button } from "./ui/button";
//componnents
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-semibold text-4xl">
            SAIDIL<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* MobileNav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
