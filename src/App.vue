


<template>
  <div class="view Login" v-if="state.username === '' || state.username === null">
    <form class="login-form" @submit.prevent="Login">
		
			<h1>Login chat</h1>
			<label for="username">USERNAME</label>
			<input type="text" v-model="inputUsername" placeholder="username..."/>
			<input type="submit" value="Login" />
	
    </form>
</div>
  <div class="view Chat">
	<header>
		<button class = "logout">Keluar</button>
		<h1>Halo, {{ state.username }}</h1>
	</header>
	<section class="chatbox">
		//message

	</section>
	<footer>
		<form @submit.prevent="SendMessage" class="tulisan"> 
			<input type="text" v-model="inputMessage" placeholder = "Tulis Pesan"/>
			<input type="submit"  Value = "Send"/>

		</form>
	</footer>
	
  </div>
 
</template>


<script>
import { reactive, onMounted, ref } from 'vue';

import db from './db';
import { Database } from '@firebase/database';
 
export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  setup(){
	const inputUsername = ref("");
	const inputMessage = ref("");
	const state = reactive({
		username:"",
		message: []
	})
	const Login = () => {
		if (inputUsername.value != "" || inputUsername.value != null){
			state.username = inputUsername.value;
			inputUsername.value ="";

		}
	}
	const SendMessage = ()=>{
		const messageRef = db.databases().ref("messages");

		if (inputMessage.value === "" || inputMessage.value === null){
			return;

		}
		const message ={
			username:state.username,
			content: inputMessage.value
		}
		messageRef.push(message);
		inputMessage.value = "";
	}

    return{
		inputUsername,
		Login,
		state,
		inputMessage,
		SendMessage

	}
  }
}
</script>

<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

* {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.view {
	display: flex;
	justify-content: center;
	min-height: 100vh;
	background-color: #ffffff;
	
}
.logout{
	margin-top: 20%;
	margin-right:500%;
}
.form-login{
	padding-top:100%;
}
.tulisan{
	padding-top:300%;
	}
.chatbox{
	padding-top:10%;
}
</style>
