// const router = require('express').Router();
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const Deporte = mongoose.model('Deporte');



// const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
// const { makeExecutableSchema } = require('graphql-tools');

// const typeDefs = require('../../src/schemas/schema');
// const resolvers = require('../../src/resolvers/resolvers');

// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import { makeExecutableSchema } from 'graphql-tools';
// import typeDefs from '../../src/schemas/schema';
// import resolvers from '../../src/resolvers/resolvers';

import { ApolloServer } from "apollo-server-express"
import typeDefs from "../../src/schemas/schema";
import resolvers from "../../src/resolvers/resolvers";


// const schema = makeExecutableSchema({
//   typeDefs, 
//   resolvers
// });


const SERVER = new ApolloServer({
  typeDefs,
  resolvers
});

export default SERVER;





// router.use('/graphql', bodyParser.json(), graphqlExpress({
//   schema,
//   context: {
//     Deporte
//   }
// }))

// router.use('/graphiql', graphiqlExpress({
//   endpointURL: '/graphql',
// }));

// router.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// module.exports = router;
