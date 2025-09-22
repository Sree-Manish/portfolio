import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {

  useEffect(()=>{
    window.scrollTo(0,0,{behaviour: "smooth"});
  })

  return (
    <>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default App;
