<template>
    <div id="theBoard">
        <h1 id="boardTitle">Scoreboard</h1>
        <div id="theScores">
            <h2>Wins</h2>
            <h2>Ties</h2>
            <h2>Loses</h2>
            <h1 class="scoreStyle">{{theUsersScore}}</h1>
            <h1 class="scoreStyle">{{theTiedGames}}</h1>
            <h1 class="scoreStyle">{{theComputerScore}}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Scoreboard",
        //takes in all score data and displays in template above 
        computed: {
            theUsersScore() {
                return this.$store.state.userWin; 
            },
            theComputerScore() {
                return this.$store.state.computerWin;
            },
            theTiedGames() {
                return this.$store.state.tieGame;
            }
        },
    }
</script>

<style scoped>
    #theBoard {
        grid-column: 1 / 3;
        justify-self: center;
        align-self: center;
        grid-row: 2;
        width: 40vw;
        height: 12vh;
        background-color: #FFDAB9;
        border-radius: 30px;
        display: grid;
        grid-template-rows: 1fr 2fr;
        justify-items: center;
        align-items: center;
    }
    #boardTitle {
        grid-row: 1;
        color: #a73c3c;
        text-decoration: underline;
    }
    #theScores {
        grid-row: 2;
        display: grid;
        grid-template-rows: 1fr 2fr;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        height: 100%;
        justify-items: center;
    }
    h2 {
        color: #ce4949;
    }
    .scoreStyle {
        font-size: 2.8em;
        color: #ce4949;
    }
</style>