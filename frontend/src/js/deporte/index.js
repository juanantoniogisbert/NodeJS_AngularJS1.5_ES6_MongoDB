import angular from 'angular';

// Create the module where our functionality can attach to
let deporteModule = angular.module('app.deporte', []);

// Include our UI-Router config settings
import DeporteConfig from './deporte.config';
deporteModule.config(DeporteConfig);


// Controllers
import DeporteCtrl from './deporte.controller';
deporteModule.controller('DeporteCtrl', DeporteCtrl);


export default deporteModule;
