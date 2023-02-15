import { Row, Col } from "antd"
import DogCard from "./dog-card"

const DogGrid = ({ dogs, onDogSelected }) => {

  const elements = dogs.map((dog) => {
    return (
      <Col key={ dog.id }>
        <DogCard
          breedName={ dog.breeds[0].name }
          url={ dog.url }
          id={ dog.breeds[0].id }
          onDogSelected={ onDogSelected }/>
      </Col>
    )
  })

  return (
    <Row style={{ marginTop: 24 }} justify="space-around">
      { elements }
    </Row>
  )
}

export default DogGrid