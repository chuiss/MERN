//REST - Representational State Transfer - Consventions (Guidelines) Protocol

//HTTP/HTTPS - HyperText Transfer Protocol

//HTTP/s - is statless protocol so to save the information retrived/manipulated by this protocol we need to explicitely save
// this information to DB via Services, if it follow REST convention we say it restful

//Methods/Verbs used
//Get - to fetch
//Post - to create
//Update/Put - to udpate
//Patch - to update minimum info
//Delete - to delete info via id


//HTML - HyperText Markup Language , node structure like XML

//backend server to build REST API's

//node - http, requrest/ response, content-type ( can be used to build restful API's)

// we need to create a setup of command line interface so that we can fetch modules, intall them locally and use them over node framwork

//yarn or npm - CLI command line interface can be used to build the application

//initialize the application (NodeAPI) with packag.json 

//
//package.json is like a project informatio file which contains basiv information of project
//as name, version, entry file
//test instructions
//dependencies - list of modules used in the project

//npm init (enter - will initialize the project with default values)

// once package.json is created we can install modules or other packages using npm i <module name>
//npm i <module name> <installation>
//npm u <module name> <un-installation>


// once installaion of packages is done we dont share node_modules to repo but adding this to .gitignore and
// to install the already addes packages in package.js we directly run below command
// npm install <this will install all the dependcies mentioned in package json>