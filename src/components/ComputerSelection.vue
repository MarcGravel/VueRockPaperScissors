<template>
    <div id="computerContainer">
        <h1 id="playerComputer">Computer</h1>
        <!--image only displays once user clicks button and computer makes choice-->
        <img id="computerImg" v-if="showComputerImg != ''" :src="showComputerImg" alt="Computer game img">
    </div>
</template>

<script>
    export default {
        name: "ComputerSelection",
        computed: {
            showComputerImg() {
                return this.$store.state.computerImg;
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    #computerContainer {
        display: grid;
        grid-template-rows: 1fr 3fr 0.5fr 1fr;
        justify-items: center;
        align-items: center;
    }
    #playerComputer {
        grid-row: 1;
        font-size: 4em;
        color: #ce4949;
    }
    #computerImg {
        grid-row: 2;
        width: 20vw;
    }
</style>