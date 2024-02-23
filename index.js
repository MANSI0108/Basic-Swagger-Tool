const express = require("express")
const app = express()
const format = require("date-format")
const fs = require("fs-extra")
const swaggerUi = require("swagger-ui-express")
const YAML = require("yaml")
const PORT = 5000
const file = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json())
let courses = [

{
    id:"1",
    name:"NodeJS",
    Price:"299"
},
{
    id:"2",
    name:"ReactJS",
    Price:"399"
},
{
    id:"3",
    name:"JS",
    Price:"499"
},
{
    id:"4",
    name:"NextJS",
    Price:"599"
},
{
    id:"5",
    name:"NestJS",
    Price:"699"
}
]

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get('/api/v1/lco',(req,res)=>{
    res.send("hello from lco docs")
})

app.get('/api/v1/lcoObject',(req,res)=>{
    res.send({id:"1",name:"NodeJS",Price:"299"})
})

app.get('/api/v1/lcoArray',(req,res)=>{
    res.send(courses)
})

app.get('/api/v1/course/:coursId',(req,res)=>{
    const mycourse = courses.find((course)=>course.id === req.params.coursId)
    res.send(mycourse)
})

app.post('/api/v1/addcourse' , (req,res)=>{
    console.log(req.body);
    courses.push(req.body)
    res.send(req.body)
})
app.listen(PORT, () => {
    console.log("server is running...");
})
