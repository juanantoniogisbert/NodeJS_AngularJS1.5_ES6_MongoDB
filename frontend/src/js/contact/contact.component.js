class fromContactCtrl {
    constructor(Contact, Toastr, $timeout, $state){
        'ngInject';

        this.nvalidContact = function(){
            Toastr.showToastr(
                'error',
                'Rellena todos los campos del formulario'
            );
        }

        this.nvalidContact = function () {
            console.log("Entra en la funcion");
            var data = {
                name: this.contact.inputName,
                from: "juanangisbert1996@gmail.com",
                type: 'user',
                subject: "Testeo",
                to: "juanangisbert1996@gmail.com",
                text: "this.contact.inputMessage"
            };
            // console.log(data.name);
            Contact.sendEmail(data).then(function(response){
                if(response){
                    Toastr.showToastr(
                        'success',
                        'Correo enviado correctamente'
                    );
                    $timeout( function(){
                        $state.go('app.home');
                    }, 4000 );
                }else{
                    // this.showButton = true;
                    Toastr.showToastr(
                        'error',
                        'Error al enviar el correo'
                    );
                }
            });
        };            
    }
}

let contactForm = {
    controller: fromContactCtrl,
    templateUrl: 'contact/fromContact.html'
};

export default contactForm;