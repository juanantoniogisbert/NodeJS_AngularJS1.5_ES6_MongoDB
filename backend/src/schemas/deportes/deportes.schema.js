
import { gql } from 'apollo-server-express';

const typeDefs = gql`
    extend type Query {
        deporte(slug: String!): Deporte
        deportes(limit: Int, offset: Int): [Deporte]
        deportesCount: Int
    }

    type Deporte {
        slug: String!,
        name: String!,
        type: String,
        price: String,
        devices: String,
        canales: String,
        pais: String,
        calidad: String,
        countFav: String,
        author: String,
    }
`;

export default typeDefs;