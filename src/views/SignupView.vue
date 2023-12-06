<script setup>
import LogoComponent from '../components/LogoComponent.vue'
</script>

<template>
	<form>
		<div id="content">
			<LogoComponent />
			<div id="title">Signup</div>
			<div class="field-container">
				<label for="email">Email</label>
				<input type="email" name="email" id="email" required/>
			</div>
			<div class="field-container">
				<label for="password">Password</label>
				<input type="password" name="password" id="password" required/>
			</div>
			<div class="field-container">
				<label for="confirm-password">Confirm Password</label>
				<input type="password" name="confirmPassword" id="confirm-password" required/>
			</div>
			<div id="buttons-container">
				<input type="submit" id="submit" value="Signup"/>
			</div>
		</div>
	</form>
</template>

<style scoped>
@import url('../assets/login_signup.css');
</style>
