<template>
	<div class="about">
		<h1>This is a signup page</h1>
		<div class="login-div">
			<form>
				<!--<div class="form-group">
					<label for="InputFirstName" class="form-label">First name</label>
					<input type="text" placeholder="e.g. Smith" id="InputFirstName" class="form-input" />
				</div>
				<div class="form-group">
					<label for="InputLastName" class="form-label">Last name</label>
					<input type="text" placeholder="e.g. John" id="InputLastName" class="form-input" />
				</div>
				<div class="form-group">
					<label for="InputDateOfBirth" class="form-label">Date of birth</label>
					<input type="date" id="InputDateOfBirth" class="form-input" />
				</div>-->
				<div class="form-group">
					<label for="InputEmail" class="form-label">Email address</label>
					<input type="email" v-model="username" aria-describedby="emailHelp" placeholder="Enter email" id="InputEmail" class="form-input" />
					<small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
				</div>
				<div class="form-group">
					<label for="InputPassword" class="form-label">Password</label>
					<input type="password" v-model="password" placeholder="Password" id="InputPassword" class="form-input" />
				</div>
				<div class="form-group">
					<label for="ReenterPassword" class="form-label">Reenter password</label>
					<input type="password" v-model="passwordReenter" placeholder="Password" id="ReenterPassword" class="form-input" />
				</div>
				<button type="button" @click="signup" class="form-submit-button">Submit</button>
			</form>
		</div>
	</div>
</template>

<script>
import { firebase } from "@/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
	name: "Signup",
	data() {
		return {
			username: "",
			password: "",
			passwordReenter: ""
		}
	},
	methods: {
		signup() {
			//console.log(firebase);
			const auth = getAuth();
			createUserWithEmailAndPassword(auth, this.username, this.password)
				.then(
					function() {
						console.log("Uspjesna registracija.");
					}
				)
				.catch(
					function(error) {
						console.log("Doslo je do greske", error);
					}
				);
			console.log("Nastavak");
		}
	}
};
</script>

<style lang="scss">
	@import '../assets/css/login-signup-style.css';
</style>