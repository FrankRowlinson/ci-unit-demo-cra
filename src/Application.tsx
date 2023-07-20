import { FC } from "react"
import { Routes, Route, Link } from "react-router-dom"

import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Support } from "./pages/Support"

export const Application: FC = () => {
  const home = <Home />
  const about = <About />
  const support = <Support />

  return (
    <div>
      <nav>
        <Link data-testid="link-home" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/support">Support</Link>
      </nav>
      <Routes>
        <Route path="/about" element={about} />
        <Route path="/support" element={support} />
        <Route path="/" element={home} />
      </Routes>
    </div>
  )
}
