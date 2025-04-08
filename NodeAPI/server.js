import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/new', (req, res) => {
    res.send("<h2>I know Express is very powerful</h2>")
})

app.get('/test', (req, res) => {
    res.json({
        server: "express",
        endpoint: '/test',
        api: 'restful',
    })
})
console.log("Rest API is running on port 9000")

app.listen(9000)