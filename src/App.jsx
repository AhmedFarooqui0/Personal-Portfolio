import { useEffect, useState } from 'react'
import { Nav, Hero, About, Skills, Projects, Education, Achievements, Contact, Footer } from './sections/Sections.jsx'
export default function App() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' })
    document.querySelectorAll('section[id]').forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <Nav active={active} />
    <main id="main"><Hero /><About /><Skills /><Projects /><Education /><Achievements /><Contact /></main>
    <Footer />
  </>)
}
