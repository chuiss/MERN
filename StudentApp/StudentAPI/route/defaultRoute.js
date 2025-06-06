let expressObj = require("express")

let router = expressObj.Router({}) //options - strict, readonly etc



router.get('/', (req, res) => {
    res.send('Hello World! This is the default route')
  })
  
router.get('/new', (req, res) => {
    res.send("<h2>I know Express is very powerful</h2>")
})
  
router.get('/test', (req, res) => {

    console.log(req)
    console.log(req.query)
    res.json({
        server : "Express",
        endpoint : "Test",
        api : "RestFul"
    })
})

router.get('/hello',(req, res)=>{
    res.sendFile(globalThis.rootPath+"/public/index.html")
})

// router.get('/showAlert.js',(req, res)=>{
//   res.sendFile(__dirname+"/showAlert.js")
// })


//route param
  //http://localhost:9000/test/2500?name=test&type=queryString
  router.get('/test/:id', (req, res) => {
    console.log(req.params["id"])
    console.log(req.query)
    res.json({
        server : "Express",
        endpoint : "Test",
        api : "RestFul"
    })
  })
//route param with query string
//query string is a part of url which is used to pass the data to the server
  //http://localhost:9000/queryString?name=test&session=queryString
  router.get('/queryString', (req, res) => {    
    console.log(req.query)
    res.json({
        name : req.query["Name"],
        session : req.query["session"],
        api : "RestFul"
    })
  })


//wild card operator
router.all('/{*any}', (req, res, next) => {
    res.send(globalThis.rootPath + "/public/notFound.html")
  })


module.exports = router;  