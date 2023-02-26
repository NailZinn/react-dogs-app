import './error-indicator.css'

const ErrorIndicator = ({ message }) => {
  return (
    <div className='error-message'>
      { message }
    </div>
  )
}

export default ErrorIndicator