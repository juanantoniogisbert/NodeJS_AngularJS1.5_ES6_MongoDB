function create_game(parent, args, context, info) {
    return context.prisma.createGame({
        slug: args.slug,
        title: args.title,
        description: args.description,
        type: args.type,
        favoritesCount: args.favoritesCount,
    })
}
  
    module.exports = {
        create_game,
    }
  