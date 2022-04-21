import React from 'react'
import AlgorithmSteps from './Components/AlgorithmSteps'
import CarouselHome from './Components/CarouselHome'
import ImageComparison from './Components/ImageComparison'
import Navbar from './Components/Navbar'
import Team from './Components/Team'


const App = () => {
  return (
    <>
      <Navbar />
      <CarouselHome />
      <AlgorithmSteps />
      <ImageComparison />
      <Team />

    </>
  )
}

export default App