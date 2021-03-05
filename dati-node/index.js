const express = require('express')
var app = express()
var sqlQuery = require('./sql')

app.get('/', (req, res) => {
  res.send('百万答题服务器')
})

app.get('/api/datiProblem', async (req, res) => {
  // 解决跨域
  res.append('Access-Control-Allow-Origin', '*')
  res.append('Access-Control-Allow-Content-Type', '*')

  // 获取答题的数据
  let page = req.query.page ? req.query.page : 1
  let strSql = `select * from demo limit ${page * 10},10`
  let result = await sqlQuery(strSql)
  res.send(result)
})

app.listen(8080, () => {
  console.log('Server Start')
})
