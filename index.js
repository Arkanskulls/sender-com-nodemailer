const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const port = 3002
//edite sua informaçoes aqui, lembrar de alterar ou ocutar ao afzer git
const smtp = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: '2525',
        //secure: false, //verificar com provedor de e-mail umbler n utiliza
        auth: {         //login e senha do google
            user: "3xxxxxxx",
            pass: "dxxxxxxxxx"
        }

})

//informaçoes do email que vai ser enviado
const configEmail = {
    from:"noreplay@celke.com.br", // email do ndoemailer
    to: "gxxxxxxxx@gmail.com", // enviar para
    subject: "testando testando",
    text: "<p>RunBoddy <strong>deu certo</strong></p>"
}
smtp.sendMail(configEmail, (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log("e-mail eviado com sucesso")
})

/*new Promise ((resolve, reject) => {
    smtp.sendMail(configEmail)
    .then(res => {
        smtp.close()
        return resolve(res)
    }).catch(erro => (erro => {
        console.log(erro);
        smtp.close();
        return reject(erro);

    }))
        
})*/

//app.get("/",(req,res) => res.send('ta rodando a bagaça'))


app.listen(port, () => {console.log('Running on port ${port}!');});