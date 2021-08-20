<template>
    <div id="usersContainer">
        <h1 id="player">You</h1>
        <!--this only displays if there is no score on scoreboard yet-->
        <h1 id="readyPlayMsg" v-if="isGameUnderway">Choose weapon to begin!</h1>
        <!--image only displays once user clicks button-->
        <img id="usersImg" v-if="showUsersImg != ''" :src="showUsersImg" alt="users game img">
        <h3 id="chooseMsg">Choose your weapon:</h3>
        <div id="btns">
            <button id="rockBtn" @click="computeGame('rock')">Rock</button>
            <button id="paperBtn" @click="computeGame('paper')">Paper</button>
            <button id="scissorsBtn" @click="computeGame('scissors')">Scissors</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UsersSelection",
        computed: {
            //gets specific image from store 
            showUsersImg() {
                return this.$store.state.usersImg;
            },
            //checks to see if the game has started already
            isGameUnderway() {
                let count = 0
                count += (this.$store.state.userWin + 
                            this.$store.state.computerWin +
                            this.$store.state.tieGame)

                if(count == 0) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        methods: {
            //creates and collects game data and pushes to an array to commit to store 
            computeGame(usersChoice) {
                //first index of array will be user choice
                //second index of array will be computer choice
                //third index of array will be battle outcome
                let gameInfo = [];

                //pushes user button press to array
                gameInfo.push(usersChoice);
                
                //uses method below to create computer choice and push to array
                let computerChoice = this.makeComputerChoice();
                gameInfo.push(computerChoice);

                //sends user and computer choices to method and receives final outcome
                let battleOutcome = this.battleOutcome(usersChoice, computerChoice);
                gameInfo.push(battleOutcome);
                
                return this.$store.commit("gameData", gameInfo);
            },
            //creates random computer choice for game and returns
            makeComputerChoice() {
                let randomNum = Math.floor(Math.random() * 3) + 1;
                    if(randomNum == 1) {
                        return "rock";
                    } else if(randomNum == 2) {
                        return "paper";
                    } else if(randomNum == 3) {
                        return "scissors";
                    }
            },
            //decides winner depending on arguments passes from players
            battleOutcome(usersChoice, computerChoice) {
                if(usersChoice == computerChoice) {
                    return "tieGame";
                } else if (usersChoice == "rock" && computerChoice == "paper") {
                    return "computerWin";
                } else if (usersChoice == "rock" && computerChoice == "scissors") {
                    return "userWin";
                } else if (usersChoice == "paper" && computerChoice == "scissors") {
                    return "computerWin";
                } else if (usersChoice == "paper" && computerChoice == "rock") {
                    return "userWin";
                } else if (usersChoice == "scissors" && computerChoice == "rock") {
                    return "computerWin";
                } else if (usersChoice == "scissors" && computerChoice == "paper") {
                    return "userWin";
                }
            }
        }
    }
</script>

<style scoped>
    #usersContainer {
        display: grid;
        grid-template-rows: 1fr 3fr 0.5fr 1fr;
        justify-items: center;
        align-items: center;
    }
    #player {
        grid-row: 1;
        font-size: 4em;
        color: #ce4949;
    }
    #readyPlayMsg {
        text-align: center;
        grid-row: 2;
        font-size: 3em;
    }
    #usersImg {
        grid-row: 2;
        display: block;
        width: 20vw;
    }
    #chooseMsg {
        grid-row: 3;
        font-size: 2em;
        color: #ce4949;
    }
    #btns {
        margin-bottom: 6vh;
        grid-row: 4;
    }
    button {
        cursor: pointer;
        margin-left: 1vw;
        margin-right: 1vw;
        width: 8vw;
        height: 4vh;
        background-color: #FFDAB9;
        border: 2px #F08080 solid;
        border-radius: 12px;
        font-size: 1.2em;
    }
    button:active {
        background-color: #c58f5f;
    }
</style>