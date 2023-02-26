import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import './dog-card.css'

const { Meta } = Card;

const DogCard = ({ dog }) => {

  const navigate = useNavigate()

  return (
    <Card
      onClick={ () => navigate(`${dog.id}`) }
      className='card'
      hoverable
      cover={ <img alt={ dog.name } src={ dog.imageUrl } /> }>
      <Meta title={ dog.name } />
    </Card>
  )
}

export default DogCard;