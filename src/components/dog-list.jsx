import DogGrid from "./dog-grid"

const DogList = ({ dogs, onDogSelected }) => {

  const elements = () => {
    const data = []

    for (let i = 4; i < dogs.length; i += 5) {
      data.push(dogs.slice(i - 4, i + 1))
    }

    return data.map((dogs) => <DogGrid key={ dogs[0].breeds[0].id } dogs={ dogs } onDogSelected={ onDogSelected }/>)
  }

  return (
    <>
      { elements() }
    </>
  )
}

export default DogList