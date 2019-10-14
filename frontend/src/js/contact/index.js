import angular from 'angular';

//Create module
let moduleContact = angular.module('app.contact', []);

//Include route
import configContact from './contact.config';
moduleContact.config(configContact);

//Controllers
import contactCtrl from './contact.controller';
moduleContact.controller('contactCtrl', contactCtrl);

import contactForm from './contact.component';
moduleContact.component('contactForm', contactForm);

export default moduleContact;