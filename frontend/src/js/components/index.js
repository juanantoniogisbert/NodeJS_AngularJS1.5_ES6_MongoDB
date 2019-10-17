import angular from 'angular';

let componentsModule = angular.module('app.components', []);


import ListErrors from './list-errors.component'
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import FollowBtn from './buttons/follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

import ArticleMeta from './article-helpers/article-meta.component';
componentsModule.component('articleMeta', ArticleMeta);

import FavoriteBtn from './buttons/favorite-btn.component';
componentsModule.component('favoriteBtn', FavoriteBtn);

import ArticlePreview from './article-helpers/article-preview.component';
componentsModule.component('articlePreview', ArticlePreview);

import ListPreview from './article-helpers/list-preview.component';
componentsModule.component('listPreview', ListPreview);

import ListPagination from './article-helpers/list-pagination.component';
componentsModule.component('listPagination', ListPagination);


import DeporteList from './deporte-helpers/deporte-list.component';
componentsModule.component('deportelist', DeporteList);

import DeporteMeta from './deporte-helpers/deporte-meta.component';
componentsModule.component('deportemeta', DeporteMeta);

import DeportePreview from './deporte-helpers/deporte-preview.component';
componentsModule.component('deportepreview', DeportePreview);






import ListDepor from './deportes/deportes-details.component';
componentsModule.component('listdepor', ListDepor);

import BtnDepor from './deportes/deportes-fav.component';
componentsModule.component('btndepor', BtnDepor);

export default componentsModule;
