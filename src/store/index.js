import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    battleOptions: ["Rock", "Paper", "Scissors"],
    userWin: 0,
    computerWin: 0,
    tieGame: 0,
    usersChoice: '',
    usersImg: '',
    computerChoice: '',
    computerImg: '',
  },
  mutations: {
    gameData(state, gameInfo) {
      //first index of gameInfo array is user choice
      //second index of gameInfo array is computer choice
      //third index of gameInfo array is battle outcome

      state.usersChoice = gameInfo[0];
      state.computerChoice = gameInfo[1];
      
      if(gameInfo[0] == "rock") {
        state.usersImg = 'https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png';
        setTimeout(() => {
          state.usersImg = '';
      }, 2000);
      } else if(gameInfo[0] == "paper") {
        state.usersImg = 'https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/paper.png';
        setTimeout(() => {
          state.usersImg = '';
      }, 2000);
      } else if (gameInfo[0] == "scissors") {
        state.usersImg = 'https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/scissors.png';
        setTimeout(() => {
          state.usersImg = '';
      }, 2000);
      }

      if(gameInfo[1] == "rock") {
        state.computerImg = 'https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png';
        setTimeout(() => {
          state.computerImg = '';
      }, 2000);
      } else if(gameInfo[1] == "paper") {
        state.computerImg = 'https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/paper.png';
        setTimeout(() => {
          state.computerImg = '';
      }, 2000);
      } else if (gameInfo[1] == "scissors") {
        state.computerImg = 'https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/scissors.png';
        setTimeout(() => {
          state.computerImg = '';
      }, 2000);
      }

      if(gameInfo[2] == "tieGame") {
        state.tieGame += 1;
      } else if(gameInfo[2] == "userWin") {
        state.userWin += 1;
      } else if(gameInfo[2] == "computerWin") {
        state.computerWin += 1;
      }
    }
  },
  actions: {
  },
  getters: {
  }
})
