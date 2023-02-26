import { useState } from 'react'
import DogList from "../dog-list"
import Header from "../header"
import LeftPanel from "../left-panel"
import './main-page.css'

const MainPage = () => {
   
  const [filters, setFilters] = useState({
    lifeSpan: { min: 6, max: 16, },
    weight: { min: 2, max: 91, },
    height: { min: 20, max: 89 }
  })

  const onFiltersChanged = (filters) => setFilters(filters)

  return (
    <>
      <Header />
      <div className="main-page">
        <LeftPanel onFiltersChanged={ onFiltersChanged } />
        <DogList filters={ filters } />  
      </div>
    </>
  )
}

export default MainPage