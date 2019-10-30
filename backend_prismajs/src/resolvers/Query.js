async function game(parent, { id }, context) {
  return context.prisma.game({ id })
}

async function games(parent, args, context) {
  return context.prisma.games({})
}

module.exports = {
  game,
  games,
}
