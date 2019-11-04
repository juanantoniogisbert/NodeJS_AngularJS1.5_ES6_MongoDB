export default class Game {
    constructor(AppConstants, $http, $q, ClientPrisma) {
        'ngInject';
    
        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$q = $q;
        this._GQL = ClientPrisma;
    }

    getGame() {
        let query = `
            {
                games{
                    id
                    name
                    type
                }
            }
        `;
        return this._GQL.get(query);
    }

    getGameID(id) {
        let query = `
            {
                game(id: "${id}"){
                    id
                    name
                    type
                }
            }
        `;
        return this._GQL.get(query);
    }
};