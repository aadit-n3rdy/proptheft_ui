<script setup>
import LogoComponent from '../components/LogoComponent.vue'
</script>

<template>
	<form>
		<div id="content">
			<LogoComponent />
			<div id="title">Login</div>
			<div class="field-container">
				<label for="email">Email</label>
				<input type="email" name="email" id="email" required/>
			</div>
			<div class="field-container">
				<label for="password">Password</label>
				<input type="password" name="password" id="password" required/>
			</div>
			<div id="buttons-container">
				<input type="submit" id="submit" value="Login"/>
			</div>
		</div>
	</form>
</template>

<style scoped>
@import url('../assets/login_signup.css')
</style>
