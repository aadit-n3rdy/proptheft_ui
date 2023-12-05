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

<style>
#title {
	font-size: 2rem;
	text-align: center;
	font-weight: bold;
	margin: 2rem;
}
#submit {
	padding: 0.5em 0.7em;
	font-size: 1.2em;
}
#content {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: lightgray;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem;
	width: max-content;
	margin: auto;
	gap: 0.5rem;
}
.field-container {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: left;
}
.field-container input {
	font-size: 1.5rem;
}
#buttons-container {
	margin-top: 2rem;
	width: 100%;
	display: flex;
	flex-direction:row-reverse;
}
</style>
