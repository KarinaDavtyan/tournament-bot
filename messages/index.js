module.exports = {

  start: `

  *Welcome!*

Before we start the tournament, every player has to register.

Please type /register to register at the tournament.
Every player has to send /register.

When ready, the administrator has to type /go to? start the tournament.

Players can send /next to know the next opponent.
If not playing, you can have fun watching some random /pic

You can also play a single match 1 VS 1 by sending /quick
    `,

  help: `

  To start a tournament you have to add me to a Telegram group.

Then type /start to start a tournament!
Every player has to register before the tournament starts.
Once the tournament has started, only the group administrator can send me commands, except /next.
Players can type /next to know the next opponent.

You can control me by sending these commands:

/start - start the registration process
/register - register at the tournament
/go - start the tournament
/next - show next opponent
/game - start the next game
/deletetournament - delete an existing tournament
/help - list of commands and help
    `,

  alreadyPlaying: `You are already set up a tournament, send /go to start or /help to see more options.`,

  alreadyRegistered: `You have already been registered.`,

  userNotPlaying: `You are not playing in this tournament`,

  userRegistered: (username, playerCount) => {
    return `${username} has been registered! Current players registered: ${playerCount}.`
  },

  registrationClosed: `Registrations are closed. Send /start to begin a tournament or /help to see more options.`,

  notPlaying: `There is no tournament running in this chat, send /start to begin or /help to see more options`,

  notAdmin: (chatAdmin) => {
    return `Only ${chatAdmin} can send me commands!`
  },

  newTournament: (playerCount) => {
    return `New tournament created with ${playerCount} players! Send /game when you want to start playing.`
  },

  wildcard: (wildcards) => {
    if(wildcards.length === 1) {
      return `
        ${wildcards[0].name} is lucky and gets a free pass for this round.`
    } else {
      const wildcardNames = wildcards.map(wildcard => wildcard.name);
      const wildcardString = wildcards.join(`\r\n`);
      return `
      The following players will get a free pass for this round:
      ${wildcards}
      `
    }
  },

  opponent: (username, opponent) => {
    return `${username} your opponent is ${opponent}`
  },

  undecidedOpponent: `Your opponent has not been decided yet`,

  knockedOut: `You have already been knocked out!`,

  game: (round, player1, player2) => {
  return   `${round}
The next game is between ${player1} and ${player2}!
Send /result ${player1}-${player2} to declare the winner.`
  },

  gameNotStarted: `You haven't started this game  yet, send /game to begin`,

  resultFormat: `Please send your /result in the correct format e.g 5-4`,

  winner: (winner) => {
     return `Congratulations! ${winner} won the tournament.`
  }
}
