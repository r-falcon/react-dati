import axios from 'axios'

let baseUrl = 'http://localhost:8080/'

let resFun = {
  async daTiFun() {
    let page = parseInt(Math.random() * 1600)
    let reqUrl = `${baseUrl}api/datiProblem?page=${page}`
    let res = await axios.get(reqUrl)
    return res.data
  },
}

export default resFun
