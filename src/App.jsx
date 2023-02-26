import { Route, Routes } from 'react-router-dom'
import DogInfoCard from './components/dog-info-card'
import MainPage from './components/main-page'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <MainPage /> }/>
      <Route path='/:id' element={ <DogInfoCard /> } />
    </Routes>
  )
}

export default App