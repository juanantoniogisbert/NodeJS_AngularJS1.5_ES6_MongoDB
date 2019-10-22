import { gql } from 'apollo-server-express';

const Query = gql`
    scalar Date
    type Query {
        message: String
    }
    type Mutation {
        _empty: String
    }
`;

import Deport from "../../src/schemas/deportes/deportes.schema";

const typeDefs = [
    Query,
    Deport
];

export default typeDefs;