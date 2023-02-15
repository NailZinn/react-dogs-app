import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const DogCard = ({ breedName, url, id, onDogSelected }) => (
  <Link to={ `${id}` }>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={ url } />}
      onClick={ () => onDogSelected(id) }>
      <Meta title={ breedName } />
    </Card>
  </Link>
)

export default DogCard;