import angular from 'angular';

// Create the module where our functionality can attach to
let detailsModule = angular.module('app.details', []);

// Include our UI-Router config settings
import DetailsConfig from './details.config';
detailsModule.config(DetailsConfig);


// Controllers
import DetailsCtrl from './details.controller';
detailsModule.controller('DetailsCtrl', DetailsCtrl);


export default detailsModule;
