import angular from 'angular';

// Create the module where our functionality can attach to
let GameModule = angular.module('app.game', []);

// Include our UI-Router config settings
import GameConfig from './game.config';
GameModule.config(GameConfig);

// Controllers
import GameCtrl from './game.controller';
GameModule.controller('GameCtrl', GameCtrl);

import GameDetCtrl from './gameDetails.controller';
GameModule.controller('GameDetCtrl', GameDetCtrl);

export default GameModule;
