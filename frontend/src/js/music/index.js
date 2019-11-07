import angular from 'angular';

// Create the module where our functionality can attach to
let MusicModule = angular.module('app.music', []);

// Include our UI-Router config settings
import MusicConfig from './music.config';
MusicModule.config(MusicConfig);

// Controllers
import MusicCtrl from './music.controller';
MusicModule.controller('MusicCtrl', MusicCtrl);

import MusicDetCtrl from './musicDetails.controller';
MusicModule.controller('MusicDetCtrl', MusicDetCtrl);

export default MusicModule;
