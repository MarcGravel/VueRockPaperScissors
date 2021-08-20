<template>
    <div id="loginPage">
        <h1 id="welcomeMsg">Login to Play: Rock-Paper-Scissors</h1>
        <div id="loginForm">
            <label for="emailInput">Enter Your Email:</label>
            <!--v-model sets the user input in data-->
            <input type="text" id="emailInput" v-model="userInfo.email" @keydown.enter="submitWithEnterButton">
            <label for="passwordInput">Enter Your Password:</label>
            <input type="password" id="passwordInput" v-model="userInfo.password" @keydown.enter="submitWithEnterButton">
            <input id="submitBtn" type="submit" value="Submit" @click="loginAttempt">
            <div id="messageBox">
                <p id="invalidInput">Invalid Input. Try again</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
import router from '../router'

    export default {
        name: "LoginPage",
        data() {
            return {
                userInfo: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            //sends API call to check user login info
            //if successfull it sets cookie and redirects user to game page
            //if not, error message is displayed
            loginAttempt() {
                axios.request({
                    url: "https://reqres.in/api/login",
                    method: "POST",
                    headers: {
                    "Content-type": "application/json"
                    },
                    data: {
                        email: this.userInfo.email,
                        password: this.userInfo.password
                    }
                }).then((response) => {
                    cookies.set('loginToken', response.data.token);
                    router.push('Game');
                }).catch((error) => {
                    console.log(error);
                    document.getElementById('invalidInput').style.display = 'inline';
                    this.userInfo.email = '';
                    this.userInfo.password = '';
                })
            },
            //allows user to submit the form by hitting enter button while inputs are selected 
            submitWithEnterButton() {
                this.loginAttempt();
            }
        }
    }
</script>

<style scoped>
    #loginPage {
        margin-bottom: 20vh;
        display: grid;
        justify-items: center;
    }

    #welcomeMsg {
        margin-bottom: 10vh;
        color: #F08080;
        font-size: 4em;
        background-color: #fbc4abb7;
        padding: 1vh 2vw 1vh 2vw;
        border-radius: 40px;
    }

    #loginForm {
        background-color: #F4978E;
        border: 5px #F08080 solid;
        border-radius: 70px;
        height: 30vh;
        width: 30vw;
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        align-items: center;
    }

    label {
        margin-left: 3vw;
        align-self: end;
        font-size: 1.2em;
    }

    #emailInput, #passwordInput {
        width: 25vw;
        height: 3vh;
        justify-self: center;
        background-color: #FBC4AB;
        border: 2px #F08080 solid;
        font-size: 1.2em;
    }

    #submitBtn {
        cursor: pointer;
        height: 5vh;
        width: fit-content;
        justify-self: center;
        align-self: end;
        font-size: 1.2em;
        margin-left: 15vw;
        padding: 0 2vw 0 2vw;
        border: none;
        border-radius: 12px;
        color: whitesmoke;
        background-color: #24a0ed;
    }

    #submitBtn:hover, #emailInput:hover, #passwordInput:hover {
        border: 1px whitesmoke solid;
    }

    #submitBtn:active {
        background-color: #1e83c2;
    }

    #messageBox {
        display: grid;
        justify-items: center;
    }

    #invalidInput {
        display: none;
        font-size: 1.5em;
        font-weight: bold;
        color: white;
    }
</style>