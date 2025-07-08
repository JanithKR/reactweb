
export default function Header() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="text-gradient text-4xl">JK-MOBILE</span>
        </a>
      </div>
      <div className="flex gap-x-12">
        <a
          href="https://www.ideabeam.com/mobile/brands"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
        >
          Brand_New
        </a>
        <a
          href="https://your-second-website.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
        >
          Used
        </a>
      </div>
    </nav>
  )
}
