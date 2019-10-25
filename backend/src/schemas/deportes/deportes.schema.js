
import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        deporte(slug: String!): Deportes!
        deportes(limit: Int, offset: Int): [Deporte]
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

    type Deportes {
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