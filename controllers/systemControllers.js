const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_PASS; 
const fetch = require('node-fetch');
const API_BASE = process.env.API_BASE 

const systemControllers = {

    index: async (req, res) => {
        const token = req.session.token 
        const usuario = jwt.verify(token,jwtSecret)
      
        const listaUsuarios = await fetch(`${API_BASE}/usuario`,{
            method: "GET",
              //  body: JSON.stringify(req.body),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
        })
        const resposta = await listaUsuarios.json()
        console.log(Object.keys(resposta)[0]) 
        if(Object.keys(resposta)[0]=='err'){
           
           const msg = 'Nivel de acesso negado!'
            req.flash('nivel',msg)
            res.redirect('/login')
        }
         res.render('./system/menu',{usuario,resposta});
    },
    cadastroMenbroView: (req, res) => {
        res.render('./system/pessoaLista');
    },
    logout:(req,res) =>{
        req.session.token = "";
       res.redirect('/login')
    }

}

module.exports = systemControllers;