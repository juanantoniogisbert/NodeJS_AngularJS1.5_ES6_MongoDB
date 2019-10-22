// const resolvers = {
//     Query: {
//         // allSectors: async (parent, args, { Projects }) => {
//         //     const projects = await Projects.aggregate().project({sector:1}).group({ _id: {"sector": "$sector"}, "count":{$sum:1}}).sort({count:-1,_id:1})
//         //     return projects.map(x => {
//         //         x.sector = x._id.sector.toString();
//         //         return x;
//         //     })
//         // },
//         allDeportes: async (parent, args, { Deporte }) => {
//             return Deporte.find({});
//         }
//     },
// }
// module.exports = resolvers;

import { merge } from 'lodash';

// .exec() is used at the end of the GET mongoose queries so it doesn't run twice

const QueryResolvers = {
  Query: {
      message: () => 'Hello World!'
  }
}

import DeprotesRes from "../../src/resolvers/deportes/deportes.resolver";

const resolvers = merge(
  QueryResolvers,
  DeprotesRes
);

export default resolvers;