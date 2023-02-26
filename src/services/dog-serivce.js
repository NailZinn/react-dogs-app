export default class DogService {
  
  getDogs = (pageNumber, pageSize, filters) => {

    const requestInfo = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters)
    }
    
    return fetch(`https://localhost:7170/api.dogs?pagenumber=${pageNumber}&pagesize=${pageSize}`, requestInfo)
      .then((body) => body.json())
  }

  getDogById = (id) => {

    const requestInfo = {
      method: 'GET'
    }

    return fetch(`https://localhost:7170/api.dogs/${id}`, requestInfo)
      .then((body) => body.json())
  }
}