import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spin } from "antd"
import DogService from "../../services/dog-serivce"
import DogInfo from "../dog-info"
import './dog-info-card.css'
import Header from "../header"
import ErrorIndicator from "../error-indicator"

const DogInfoCard = () => {

  const { id } = useParams()

  const [dog, setDog] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const onLoadingEnd = (dog) => {
    setDog(dog)
    setIsLoading(false)
  }

  const onError = (error) => {
    setIsLoading(false)
    setIsError(true)
  }

  useEffect(() => {
    const dogService = new DogService()
    dogService.getDogById(id)
      .then(onLoadingEnd)
      .catch(onError)
  }, [id])

  const content =     
    <>
      <div className='info-card'>
        <img className='dog-image' alt={ dog.name } src={ dog.imageUrl } width={ 250 } /> 
        <DogInfo dog={ dog } />
      </div>
    </>

  const errorMessage = 
    <>
      <p>Could not find requested dog. Wanna check available dogs?</p>
      <a href='http://localhost:3000'>home</a>
    </>   

  return (
    <>
      <Header />
      { 
        isLoading ? 
          <Spin className='loader' size='large' /> 
          : isError ?
            <ErrorIndicator message={ errorMessage } /> 
              : content 
      }
    </>
  )
}

export default DogInfoCard