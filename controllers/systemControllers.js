const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_PASS; 
const fetch = require('node-fetch');
const API_BASE = process.env.API_BASE 

const systemControllers = {

    index: async (req, res) => {
        const token = req.session.token
        const usuario = jwt.verify(token,jwtSecret)
        console.log(usuario.pessoas)
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
      resposta.forEach(element => {
          console.log(element.status)
      });
        res.render('./system/menu',{usuario});
    },
    cadastroMenbroView: (req, res) => {
        res.render('./system/pessoaLista');
    }

}

module.exports = systemControllers;