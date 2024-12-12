import './index.css'

import Navbar from './Navbar'
import Header from './SlideShowHeader'
import About from './About'
import Stats from './Stats'
import Visit from "./Visit"
import Footer from "./Footer"

function App() {


  return (<>
     
  <div className="flex flex-col overflow-x-hidden">
    <Navbar />
    <Header />
    <About /> 
    <Stats />
    <Visit />
    <Footer />
      </div>
  </>
  )
}

export default App
