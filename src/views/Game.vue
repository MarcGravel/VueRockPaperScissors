<template>
    <div id="gameContainer">
        <!--Will only display if login token set-->
        <div id="logoutContainer" v-if="this.getLoginToken !== null">
            <LogoutButton />
        </div>
        <h1 id="notLoggedMsg" v-if="this.getLoginToken === null">Not logged in, redirecting to login...</h1>
        <!--Will only display if login token set-->
        <div id="componentContainer" v-if="this.getLoginToken !== null">
            <UsersSelection />
            <ComputerSelection />
            <Scoreboard />
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import router from '../router'
import UsersSelection from '../components/UsersSelection.vue'
import ComputerSelection from '../components/ComputerSelection.vue'
import Scoreboard from '../components/Scoreboard.vue'
import LogoutButton from '../components/LogoutButton.vue'

    export default {
        name: "Game",
        components: {
            UsersSelection,
            ComputerSelection,
            Scoreboard,
            LogoutButton
        },
        computed: {
            //gets login token
            getLoginToken() {
                return cookies.get('loginToken');
            }
        },
        //if login token not there, this will not allow game page to mount
        //will display message and redirect to login
        beforeMount() {
            if (this.getLoginToken === null) {
                setTimeout(() => {
                    router.push('/');
                }, 2000);
            }
        }
    }
</script>

<style scoped>
    #gameContainer {
        display: grid;
        width: 100vw;
        height: 100vh;
        justify-items: center;
        align-items: center;
    }

    #notLoggedMsg {
        font-size: 3em;
        color: #F08080;
    }

    #componentContainer {
        width: 80vw;
        height: 80vh;
        background-color: #F8AD9D;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 4fr 1fr;
        border-radius: 20px;
    }
</style>