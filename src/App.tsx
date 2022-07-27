import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Home from "./pages/Home"
import { GithubProvider } from "./context/github/GithubContext"
import { AlertProvider } from "./context/alert/AlertContext"

export const App: React.FC<{}> = (props) => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="container">
            <Navbar title="Github Finder" />
            <div className="content_container">
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
