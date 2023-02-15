export default class DogService {
  
  _requestInfo = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'live_9aA2Sl9WDuP4DlV1gWwWdHoXtRQwjKRsgLPBcpVgN4e6JZD0jp3DsX4DnDunV4Mc'
    }
  }

  getDogs = () => {
    return fetch('https://api.thedogapi.com/v1/images/search?format=json&limit=10&has_breeds=1', this._requestInfo)
      .then((body) => body.json())
  }
}