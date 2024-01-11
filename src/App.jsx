import './App.css'
import AdditionalInfo from './components/AdditionalInfo'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'

function App() {
  const handleLocation = (event) => {
    const id = event.target.id + "-section"
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth' })
    console.log(element)
  }

  return (
    <>
    <h1 style={{ fontSize: '100px', marginBottom: '25px'}}>Who is Jesse Hantula?</h1>
      <Header id='header' handleLocation={handleLocation} />
      <Intro />
      <Projects />
      <AdditionalInfo />
      <Footer />
    </>
  )
}

export default App
