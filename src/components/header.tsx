import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-2xl">Meal Planner</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="#features" className="transition-colors hover:text-primary">Features</a>
              <a href="#pricing" className="transition-colors hover:text-primary">Pricing</a>
              <a href="#about" className="transition-colors hover:text-primary">About</a>
              <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle/>
              <div className="hidden md:flex items-center space-x-2">
                <Link href={"/login"}>
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link href={"/register"}>
                  <Button>Sign up</Button>
                </Link>
              </div>
            </div>
          </div>
        </header>
    )
}