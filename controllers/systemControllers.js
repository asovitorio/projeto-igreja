const systemControllers = {

    index: (req, res) => {
        res.render('./system/menu');
    },
    cadastroMenbroView: (req, res) => {
        res.render('./system/pessoaLista');
    }

}

module.exports = systemControllers;