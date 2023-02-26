export default class EmailService {

  _requestInfo = {
    method: 'POST'
  }

  async sendEmail(emailTo, message) {
    await fetch(`https:/localhost:7162/api.email?email=${emailTo}&message=${message}`, this._requestInfo)
  }
}