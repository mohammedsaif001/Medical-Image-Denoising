import React from 'react'
import CarouselHome from './Components/CarouselHome'
import ImageComparison from './Components/ImageComparison'
import Navbar from './Components/Navbar'
import Steps from './Components/Steps'
import Team from './Components/Team'


const App = () => {
  return (
    <>
      <Navbar />
      <CarouselHome />
      <Steps />
      <ImageComparison />
      <Team />

    </>
  )
}

export default App