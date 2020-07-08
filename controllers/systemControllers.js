const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_PASS;
const fetch = require('node-fetch');
const API_BASE = process.env.API_BASE
require('dotenv').config()
const bcrypt = require('bcrypt');
const senhaAdm = process.env.USER_PASS;

const systemControllers = {

  index: async (req, res) => {
    const token = req.session.token
    const usuario = jwt.verify(token, jwtSecret)

    const listaUsuarios = await fetch(`${API_BASE}/usuario`, {
      method: "GET",
      //  body: JSON.stringify(req.body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    const resposta = await listaUsuarios.json()
    const nomeList = [];
   
    console.log(Object.keys(resposta)[0])
    if (Object.keys(resposta)[0] == 'err') {

      const msg = 'Usuario desativado'
      req.flash('nivel', msg)
      res.redirect('/login')
    }else{
      resposta.forEach(nome => {
        nomeList.push(nome.pessoas.nome)
      });
    }
   
    const msgCadastro = req.flash('cadastro')
   msgCadastro> 0?"usuário cadastrado com sucesso":"";
   console.log( msgCadastro>0?"usuário cadastrado com sucesso":"teste")
    res.render('./system/menu', {
      usuario,
      resposta,
      nomeList,
      msgCad:msgCadastro.length>0?"usuário cadastrado com sucesso":""
    });
  },
  cadastroMenbroView: (req, res) => {
    res.render('./system/pessoaLista');
  },
  logout: (req, res) => {
    req.session.token = "";
    res.redirect('/login')
  },
  cadastroUsuario: async (req, res) => {
    const [avatar] = req.files
    const foto = (arq) => {
      if (arq == undefined) {
        return "avatar.png"
      } else {
        return arq.filename
      }
    }
     let image = foto(avatar)
     const usuario = req.body
     usuario.image = image
     usuario.senha = bcrypt.hashSync(senhaAdm,10)
     const token = req.session.token
     try {
       
      const cadastroUsuario = await fetch(`${API_BASE}/usuario`, {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
         'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      const resposta = await cadastroUsuario.json()
      msg = `Usuário ${resposta.email} cadastrado com sucesso!`
      req.flash('cadastro',msg)
         res.redirect('/system')

     } catch (error) {
      res.status(400).json(error)
     }
    
   
   
    

  }


}

module.exports = systemControllers;