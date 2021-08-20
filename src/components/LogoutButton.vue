<template>
    <div>
        <button id="logoutButton" @click="logoutAction">Logout</button>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import router from '../router'

    export default {
        name: "LogoutButton",
        methods: {
            //removes login token cookie and redirects to login page on button click
            logoutAction() {
                cookies.remove('loginToken');
                    router.push('/');
            }
        }
    }
</script>

<style scoped>
    #logoutButton {
        cursor: pointer;
        height: 5vh;
        width: fit-content;
        padding: 0 2vw 0 2vw;
        color: white;
        background-color: #f81717;
        font-size: 2em;
        border-radius: 15px;
        margin-left: 70vw;
    }
    #logoutButton:active {
        background-color: #d11515;
    }
</style>