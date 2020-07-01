const {Op} = require('sequelize');
const {Pessoa,Usuario,sequelize} = require('../../models/');
const bcrypt = require('bcrypt');
const usuarioApiController = {
    index: async (req,res) =>{
   

    },
    create: async (req,res) =>{
    let {nome,data_nascimento,sexo,telefone,image,cep,logradouro,numero,complemento,bairro,cidade,uf,email,senha,status} = req.body
    let pessoa = {nome,data_nascimento,sexo,telefone,image,cep,logradouro,numero,complemento,bairro,cidade,uf}
    const senhaHash = bcrypt.hashSync(senha,10)
          try {
            const result = await sequelize.transaction(async (t) =>{
                const pessoaCadastro =await Pessoa.findOrCreate({
                    where: {
                      nome: pessoa.nome,
                    },
                    defaults: pessoa,
                    transaction: t
                  });   
                let usuario = {
                    email,
                    senha:senhaHash,
                    status,
                    pessoa_id:pessoaCadastro[0].id}
                    const usuarioCadastro = await Usuario.findOrCreate({
                        where: {
                          email:usuario.email,
                        },
                        defaults: usuario,
                        transaction: t
                      });   
                    console.log(usuario)
                  const pessoaUsuario = {
                        pessoaCadastro,
                        usuarioCadastro
                      }
                      return pessoaUsuario;
         })
         return res.status(201).json(result);
       } catch (error) {
             return res.status(400).json(error);
       }
    },
    update: async (req,res) =>{

    },
   
   delete: async (req,res) =>{

    },
   
}


module.exports = usuarioApiController;