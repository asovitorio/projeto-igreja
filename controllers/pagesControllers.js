
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


}

module.exports = pagesControllers;