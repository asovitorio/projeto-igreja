require('dotenv').config()
const tokenTeste = require('./middlewares/authApi')
const teste = {
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
    port:process.env.DB_PORT,
    email:process.env.EMAIL_USER,
    senha:process.env.EMAIL_PASS,
    jwt:process.env.JWT_PASS,

 }

 console.log(teste)

 console.log(tokenTeste.auth)
 