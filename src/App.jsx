import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import FloatingShapes from './components/FloatingShapes'

function App() {
  return (
    <>
      <div className="App">
        <FloatingShapes />
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default App;
