import { useState, useEffect } from "react"
import { Spin } from "antd"
import DogService from "../../services/dog-serivce"
import DogCard from "../dog-card"
import ErrorIndicator from "../error-indicator"
import Footer from "../footer"
import './dog-list.css'

const DogList = ({ filters }) => {

  const [dogs, setDogs] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(16)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const onFooterChanged = (pageNumber, pageSize) => {
    setPageNumber(pageNumber)
    setPageSize(pageSize)
  }

  const onLoadingEnd = (dogs) => {
    setDogs(dogs)
    setIsLoading(false)
  }

  const onError = (error) => {
    setIsLoading(false)
    setIsError(true)
  }

  useEffect(() => {    
    const dogService = new DogService()
    dogService.getDogs(pageNumber, pageSize, filters)
      .then(onLoadingEnd)
      .catch(onError)
  }, [pageNumber, pageSize, filters])

  const content = 
    <div className='container'>
      <div className='dog-container'>
        { dogs.length !== 0 ? dogs.map((dog) => <DogCard key={ dog.id } dog={ dog } />) : <>No dogs matched conditions</> }
      </div>
      { dogs.length !== 0 && <Footer onFooterChanged={ onFooterChanged } /> }
    </div>

  return (
    <>
      { 
        isLoading ? 
          <Spin className='loader' size='large' />
          : isError ? 
            <ErrorIndicator message='Ooops... Doggies are really busy. We trynna fix it ASAP.' /> 
              : content
      }
    </>
  )
}

export default DogList