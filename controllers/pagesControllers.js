const Email = require('../config/email');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_PASS; 
const pagesControllers = {
    index: (_req,res)=>{
        const nav = {
            index:"active",
            home:"",
            sobre:"",
            contato:"",
            sistema:"",
            classBody:"gradient",
            titulo:"Igreja Batista"
        }
        res.render('index',{nav:nav})
    },
    home: (_req,res)=>{
        const nav = {
            index:"",
            home:"active",
            sobre:"",
            contato:"",
            sistema:"",
            classBody:"gradient",
            titulo:"Igreja Batista"
        }
        res.render('home',{nav:nav})
    },
    sobre: (_req,res)=>{
        const nav = {
            index:"active",
            home:"",
            sobre:"active",
            contato:"",
            sistema:"",
            classBody:"gradient",
            titulo:"Igreja Batista"
        }
        res.render('sobre',{nav:nav})
    },
    contato: (_req,res)=>{
        const nav = {
            index:"active",
            home:"",
            sobre:"",
            contato:"active",
            sistema:"",
            classBody:"gradient",
            titulo:"Igreja Batista"
        }
        res.render('contato',{nav:nav,message:undefined})
    },
    sistema: (req,res)=>{
        const nav = {
            index:"active",
            home:"",
            sobre:"",
            contato:"",
            sistema:"active",
            classBody:"home-body",
            titulo:"Igreja Batista",
            teste:req.flash('title_msg'),
            permisao: req.flash('nivel')
        }

        console.log(req.flash('title_msg') + " teste")
        console.log(nav.permisao)
        res.render('sistema',{nav:nav})
    },
    senha: async (req,res)=>{
        const nav = {
            index:"active",
            home:"",
            sobre:"",
            contato:"",
            sistema:"active",
            classBody:"home-body",
            titulo:"Igreja Batista"
           
        }
        const {token} = req.params
        const usuarioToken = await jwt.verify(token,jwtSecret)
        console.log(usuarioToken)
        const usuario = {id:usuarioToken.id,nome:usuarioToken.email,status:usuarioToken.status}
        res.render('alterarSenha',{nav:nav, usuario, token})
    },
    senhaAlterada: (req,res)=>{
        const nav = {
            index:"active",
            home:"",
            sobre:"",
            contato:"",
            sistema:"active",
            classBody:"home-body",
            titulo:"Igreja Batista"
           
        }
       res.send(req.body)
    },
    email:(req,res) =>{
        const {nome, email, telefone, msg} = req.body;
        const nav = {
            index:"active",
            home:"",
            sobre:"",
            contato:"active",
            sistema:"",
            classBody:"gradient",
            titulo:"Igreja Batista",
           
        }
        let enviarEmail = {
            from:'asovitorio@gmail.com',
            to:'alebvitorio@gmail.com',
            subject:'Sistema Pequeno Grupo',
            html:`<ul>
                     <h1>Menssagem: Pequeno Grupo</h1>
                     <li>De: ${nome}</li>
                     <li>Email: ${email}</li>
                     <li>Telefone: ${telefone}</li>
                     <li>Menssagem: ${msg}</li>
                  </ul>`
        }
       
         Email.sendMail(enviarEmail,(erro)=>{
             if(erro){
                 console.log('DEU RUIM: ' + erro );
             }
         });
        
         return res.render('contato',{nav:nav, message:"Obrigado, em breve entraremos em contato"});
         
 
    }


}

module.exports = pagesControllers;