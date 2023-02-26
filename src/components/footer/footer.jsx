import { Pagination } from 'antd'
import './footer.css'

const Footer = ({ onFooterChanged }) => {

  const onChange = (pageNumber, pageSize) => {
    onFooterChanged(pageNumber, pageSize)
  }

  return (
    <div className='footer'>
      <Pagination
        onChange={ onChange }
        defaultCurrent={1}
        defaultPageSize={16}
        total={100}
        pageSizeOptions={[ 5, 10, 50, 100 ]} />
    </div>
  )   
}

export default Footer