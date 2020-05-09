const Email = require('../config/email');
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
        res.render('contato',{nav:nav})
    },
    sistema: (_req,res)=>{
        const nav = {
            index:"active",
            home:"",
            sobre:"",
            contato:"",
            sistema:"active",
            classBody:"home-body",
            titulo:"Igreja Batista"
        }
        res.render('sistema',{nav:nav})
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
            titulo:"Igreja Batista"
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
        
         return res.render('contato', {msg:"Enviada com Sucesso! Obrigado...",nav:nav});
         
 
    }


}

module.exports = pagesControllers;