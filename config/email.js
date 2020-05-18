const nodemailer = require('nodemailer');

const email = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'asovitorio@gmail.com',
        pass:""
    }
});
module.exports = email;