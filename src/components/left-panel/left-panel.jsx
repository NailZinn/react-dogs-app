import FilterForm from '../filter-form/filter-form'
import EmailForm from '../email-form/email-form'
import './left-panel.css'

const LeftPanel = ({ onFiltersChanged }) => {

  return (
    <div className='left-panel'>
      <FilterForm onFiltersChanged={ onFiltersChanged } />
      <EmailForm />
    </div>
  )
}

export default LeftPanel