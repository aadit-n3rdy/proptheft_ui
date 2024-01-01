<script setup>
import LogoComponent from '../components/LogoComponent.vue'
import { ref} from 'vue';
import axios from 'axios';

const emailV = ref('')
const passwordV = ref('')

async function subm(e) {
	console.log(e)
	console.log(emailV.value)
	console.log(passwordV.value)
	const params = new URLSearchParams()
	params.append('mail', emailV.value)
	params.append('pass', passwordV.value)
	await axios.post('http://localhost:3000/uauth/login', params)
	return false
}

function login() {
	router.push('/view')
}
</script>

<template>
	<form @submit="subm">
		<div id="content">
			<LogoComponent />
			<div id="title">Login</div>
			<div class="field-container">
				<label for="email">Email</label>
				<input type="email" name="email" id="email" required v-model="emailV"/>
			</div>
			<div class="field-container">
				<label for="password">Password</label>
				<input type="password" name="password" id="password" required v-model="passwordV"/>
			</div>
			<div id="buttons-container">
				<input type="submit" id="submit" @click="() => $router.push('/view')" value="Login"/>
			</div>
		</div>
	</form>
</template>

<style scoped>
@import url('../assets/login_signup.css')
</style>
