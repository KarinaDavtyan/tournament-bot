const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('../db.js');

const PlayerSchema = new mongoose.Schema({
  telegram_id: Number,
  first_name: String,
});

const Player = mongoose.model('player', PlayerSchema);

Player.createPlayer = playerInfo => {
  const { telegram_id, first_name } = playerInfo;
  const newPlayer = new Player({
    telegram_id,
    first_name,
  });
  return newPlayer.save();
};

Player.findOrCreate = playerInfo => {
  const { telegram_id } = playerInfo;
  const player = Player.findOne({telegram_id});
  if (!player) return Player.createPlayer(playerInfo);
  return player;
};

module.exports = Player;
