"use client"

import { useState } from "react"
import "./App.css"
import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/Header"
import Home from "./pages/Home"
import MyNewPage from "./pages/MyNewPage"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "mynewpage":
        return <MyNewPage />
      case "home":
      default:
        return <Home />
    }
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="jkr-ui-theme">
      <div className="App">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderCurrentPage()}
      </div>
    </ThemeProvider>
  )
}

export default App
