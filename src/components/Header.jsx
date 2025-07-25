"use client"

import { ThemeToggle } from "./ThemeToggle"

export default function Header({ currentPage, setCurrentPage }) {
  const handleBrandNewClick = () => {
    console.log("Brand_New clicked") // Debug log
    setCurrentPage("mynewpage")
  }

  const handleusedClick = () => {
    console.log("Brand_New clicked") // Debug log
    setCurrentPage("used")
  }

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <button
          onClick={() => setCurrentPage("home")}
          className="-m-1.5 p-1.5 cursor-pointer bg-transparent border-none"
        >
          <span className="text-gradient text-4xl">JK-MOBILE</span>
        </button>
      </div>
      <div className="flex items-center gap-x-6">
        <div className="flex gap-x-6">
          <button
            onClick={handleBrandNewClick}
            className={`text-sm font-semibold leading-6 transition-colors cursor-pointer bg-transparent border-none ${
              currentPage === "BrandNew" ? "text-blue-600" : "text-foreground hover:text-primary"
            }`}
          >
            BRAND_NEW
          </button>
          <button
            onClick={handleusedClick}
            className={`text-sm font-semibold leading-6 transition-colors cursor-pointer bg-transparent border-none ${
              currentPage === "BrandNew" ? "text-blue-600" : "text-foreground hover:text-primary"
            }`}
          >
            Used
          </button>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
