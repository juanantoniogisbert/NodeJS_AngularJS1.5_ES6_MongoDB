var sgMail = require('@sendgrid/mail');
var sgApiKey = require('../credentials/credentials.json');
sgMail.setApiKey(sgApiKey.SENDGRID_API_KEY);

exports.sendEmail = function(req, res) {
    var emailTo = '';
    var emailFrom = '';
    var body = '';
    console.log(req);
    switch (req.body.type) {
        case 'user':
          emailTo = req.body.to;
          emailFrom = req.body.from;
          body = '<body>' +
            '<div id="contact-email">' +
            '<div> <h1>Contact with Crowcode</h1> <h4>Subject: ' + req.body.subject +
            '</h4> </div>' +
            '<section>' +
            'Name:<p>' + req.body.name + '</p>' +
            'Email: <p>' + req.body.to + '</p>' +
            'Message:<p> Pronto recibira una respuesta <br />' + req.body.text + '</p></section>' +
            '</div>' +
            ' </body>';
          break;
        case 'admin':
          emailTo = req.body.to;
          emailFrom = req.body.from;
          body = '<body>' +
            '<div id="contact-email">' +
            '<div> <h1>Contact with Crowcode</h1> <h4>Subject: ' + req.body.subject +
            '</h4> </div>' +
            '<section>' +
            'Name:<p>' + req.body.name + '</p>' +
            'Email: <p>' + req.body.to + '</p>' +
            'Message:<p>' + req.body.text + '</p></section>' +
            '</div>' +
            ' </body>';
          break;
    }
    var template =
        '<html>' +
        '<head>' +
        '<meta charset="utf-8" />' +
        '<style>' +
        '* {' +
        'box-sizing: border-box;' +
        '-webkit-box-sizing: border-box;' +
        '-moz-box-sizing: border-box;' +
        '-webkit-font-smoothing: antialiased;' +
        '-moz-font-smoothing: antialiased;' +
        '-o-font-smoothing: antialiased;' +
        'font-smoothing: antialiased;' +
        'text-rendering: optimizeLegibility;}' +
        ' body { color: #C0C0C0; font-family: Arial, san-serif;}' +
        ' h1 { margin: 10px 0 0 0;}' +
        ' h4 { margin: 0 0 20px 0;}' +
        ' #contact-email {' +
        'background-color: rgba(72, 72, 72, 0.7);' +
        'padding: 10px 20px 30px 20px;' +
        ' max-width: 100%;' +
        ' float: left;' +
        'left: 50%;' +
        'position: absolute;' +
        'margin-top: 30px;' +
        ' margin-left: -260px;' +
        ' border-radius: 7px;' +
        '-webkit-border-radius: 7px;' +
        '-moz-border-radius: 7px;}' +
        ' #contact-email p { font-size: 15px; margin-bottom: 10px;' +
        'font-family: Arial, san-serif; }' +
        ' #contact-email p {' +
        'width: 100%;' +
        'background: #fff;' +
        'border: 0;' +
        '-moz-border-radius: 4px;' +
        '-webkit-border-radius: 4px;' +
        ' border-radius: 4px;' +
        ' margin-bottom: 25px;' +
        ' padding: 10px; }' +
        '@media only screen and (max-width: 580px) {' +
        '#contact-form {' +
        ' left: 3%;' +
        ' margin-right: 3%;' +
        ' width: 88%;' +
        ' margin-left: 0;' +
        ' padding-left: 3%;' +
        ' padding-right: 3%; } }' +
        '</style>' +
        '</head>' + body + '</html>';

    var email = {
        from: emailFrom,
        to: emailTo,
        subject: req.body.subject,
        text: req.body.text,
        html: template
    };

    sgMail.send(email, function(error, info) {
        if (error) {
            res.status('401').json({
                err: "No se ha podido enviar el correo"
            });
        } else {
            res.status('200').json({
                success: true
            });
        }
    });
};
