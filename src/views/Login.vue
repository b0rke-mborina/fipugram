<template>
	<div class="about">
		<h1>This is a login page</h1>
		<div class="login-div">
			<form>
				<div class="form-group">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" v-model="username" aria-describedby="emailHelp" placeholder="Enter email" id="exampleInputEmail1" class="form-input" />
					<small id="emailHelp" class="form-text" >We'll never share your email with anyone else.</small>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1" class="form-label">Password</label>
					<input type="password" v-model="password" placeholder="Password" id="exampleInputPassword1" class="form-input" />
				</div>
				<button type="button" @click="login()" class="form-submit-button">Submit</button>
			</form>
		</div>
	</div>
</template>

<script>
import { firebase } from "@/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
	name: "login",
	data() {
		return {
			username: "",
			password: ""
		}
	},
	methods: {
		login() {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, this.username, this.password)
				.then(
					(result) => {
						console.log("Uspjesna prijava.", result);
						//this.$router.replace({ name: "Home" });
						//this.$router.push({ name: "Home" });
					}
				)
				.catch(
					function(error) {
						console.log("Greska", error);
					}
				);
		}
	}
}
</script>

<style lang="scss">
	@import '../assets/css/login-signup-style.css';
</style>