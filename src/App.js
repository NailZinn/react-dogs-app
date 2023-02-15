import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DogList from './components/dog-list'
import DogCardInfo from './components/dog-info-card'
import DogService from './services/dog-serivce'

const App = () => {

  const [dogs, setDogs] = useState([])
  const [selectedDogId, setId] = useState(-1)

  useEffect(() => {    
    const dogService = new DogService()
    dogService.getDogs()
      .then((dogs) => setDogs(dogs.sort((dog1, dog2) => sort(dog1.breeds[0].name, dog2.breeds[0].name))))
  }, [])

  const sort = (item1, item2) => {
    if (item1 < item2) return -1
    if (item1 > item2) return 1
    return 0
  }

  const onDogSelected = (id) => setId(id)

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <DogList dogs={ dogs } onDogSelected={ onDogSelected } /> }/>
        <Route path='/:id' element={ <DogCardInfo dog={ dogs.find(dog => dog.breeds[0].id === selectedDogId) } /> } />
      </Routes>
    </Router>
  )
}

export default App