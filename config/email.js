const nodemailer = require('nodemailer');

const email = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'asovitorio@gmail.com',
        pass:"Ale1228579"
    }
});
module.exports = email;