//2. Create an express setup, with a capability to expose end points for restful api
//3. Create an API with name CreateUser as get verb and pass user info such as name, session, address and age as query string
//4. Save the information passed in #3 to a json file name userInfo in local

let express = require('express');
const route = express.Router();
const fs = require('fs');
const app = express();


app.get('/', (req, res) => {
    res.send('Express setup is here');
});

app.get('/endpoint', (req, res) => {
    res.send('This is an endpoint');
});

app.get('/CreateUser', (req, res) => {
    const { name, session, address, age } = req.query;
    const userInfo = { name, session, address, age };
    fs.writeFile('userInfo.json', JSON.stringify(userInfo), (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Error saving user info');
        } else {
            res.send('User info saved successfully');
        }
    })
    res.json({
        name: name,
        session: session,
        address: address,
        age: age
    })
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
})