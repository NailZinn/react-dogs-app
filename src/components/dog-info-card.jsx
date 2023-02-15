import { Card } from "antd"
import DogInfo from "./dog-info"

const DogCardInfo = ({ dog }) => {
  return (
    <Card
      style={{ width: 300, marginLeft: 500, marginTop: 200 }}
      cover={ <img alt={`${dog.breeds[0].name}`} src={`${dog.url}`} /> }>
      <DogInfo dog={ dog } />
    </Card>
  )
}

export default DogCardInfo