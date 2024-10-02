import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              Hum & Classify
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80" href="/about">About</a>
            <a className="transition-colors hover:text-foreground/80" href="/blog">Blog</a>
            <a className="transition-colors hover:text-foreground/80" href="/demo">Demo</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button variant="outline">Try It Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;