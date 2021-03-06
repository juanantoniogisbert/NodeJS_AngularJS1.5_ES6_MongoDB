import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);


import UserService from './user.service';
servicesModule.service('User', UserService);

import JwtService from './jwt.service'
servicesModule.service('JWT', JwtService);

import ProfileService from './profile.service';
servicesModule.service('Profile', ProfileService);

import ArticlesService from './articles.service';
servicesModule.service('Articles', ArticlesService);

import CommentsService from './comments.service';
servicesModule.service('Comments', CommentsService);

import TagsService from './tags.service';
servicesModule.service('Tags', TagsService);

import ContactService from './contact.service';
servicesModule.service('Contact', ContactService);

import ToastrService from './toastr.service';
servicesModule.service('Toastr', ToastrService);

import DeporteService from './deportes.service';
servicesModule.service('Deporte', DeporteService);

import GraphQLClientService from './graphql.service';
servicesModule.service('ClientGraphQL', GraphQLClientService);

import PrismaService from './prisma.service';
servicesModule.service('ClientPrisma', PrismaService);

import GamesPrismaService from './games.service';
servicesModule.service('Game', GamesPrismaService);

import MusicService from './music.service';
servicesModule.service('Music', MusicService);


export default servicesModule;
