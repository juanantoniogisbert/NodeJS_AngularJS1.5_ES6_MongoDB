export default class Deporte {
  constructor(AppConstants, $http, $q, ClientGraphQL) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
    this._GQL = ClientGraphQL;
  }

  // getDeportes(){
  //   return this._$http({
  //     url: `${this._AppConstants.api}/deportes`,
  //     method: 'GET'
  //   }).then((res)=> res.data.deporte);
  // }


  // --- GRAPHQL ---
  // getDeportes(){
  //   return this._$http({
  //     url: `${this._AppConstants.api}/graphql/graphql?query={deportes{ name type}}`,
  //     method: 'GET'
  //   }).then((res)=> res.data.data.deportes);
  // }

  getDeporte(slug) {
    return this._$http({
      url: this._AppConstants.api + '/deportes/' + slug,
      method: 'GET',
    }).then((res) => res.data.projects);
  }

  favorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/deportes/' + slug + '/favorite',
      method: 'POST'
    })
  }

  unfavorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/deportes/' + slug + '/favorite',
      method: 'DELETE'
    })
  }

  getDeportes() {
    let query = `
    query getDeportes{
      deportes {
        slug
        name
        type
      }
    }`;
    return this._GQL.get(query);
  }

  getCACA(slug) {
    // console.log(slug);
    
    let query = `
      query getDetails {
        deporte(slug:"${slug}") {
          slug
          name
          type
          price
          devices
          canales
          pais
          calidad
          countFav
        }
      }
    `;
    return this._GQL.get(query);
  }
}





  