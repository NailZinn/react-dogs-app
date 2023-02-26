import { Form } from 'antd'
import EmailService from '../../services/email-service'
import './email-form.css'

const EmailForm = () => {

  const onReviewSubmitted = async (values) => {
    const emailService = new EmailService()
    await emailService.sendEmail(values.email, values.message)
    alert('Спасибо за отзыв')
  }

  return (
    <Form className='form' onFinish={ onReviewSubmitted }>
    <label>
      <b>Напишите отзыв</b>
    </label>
    <Form.Item className='form-item' name='message'>
      <textarea required maxLength='1000' />
    </Form.Item>
    <label>
      <b>Адрес электронной почты</b>
    </label>
    <Form.Item className='form-item' name='email'>
      <input required type='email' />
    </Form.Item>
    <button type='submit'>
      Отправить
    </button>
  </Form>
  )
}

export default EmailForm