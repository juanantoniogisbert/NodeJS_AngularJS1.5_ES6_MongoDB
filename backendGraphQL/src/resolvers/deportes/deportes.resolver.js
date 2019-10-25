const mongoose = require('mongoose');
const Deporte = mongoose.model('Deporte');

const resolvers = {
    Query: {
      deporte: (root, {slug}) => {
        return Deporte.findOne({slug: slug}).exec();
      },
      deportes: (root, {limit, offset}) => {
        return Deporte.find().skip(offset).limit(limit).exec();
      }
    },
    // Mutation: {
    //     createRestaurant: (root, {input}) => {
    //         const restaurant = new Restaurant(input);
    
    //         // no .exec();
    //         restaurant.save();
    //         return restaurant;
    //     }
    // },
    // Deporte: {
    //     deportes: (parent) => {
    //         return Deporte.findOne({_id: parent.slug}).exec();
    //     }
    // }
};

export default resolvers;