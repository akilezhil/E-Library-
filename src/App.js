import React from 'react'
import Book from './components/Book'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Sample from './Sample'
import Shimmer from './components/Shimmer'


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Book/>
      {/* <Shimmer/> */}
      <Footer/>
    </div>
  )
}

export default App