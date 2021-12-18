<template>
	<div id="app">
		<div class="nav">
			<div class="nav-part">
				<img src="@/assets/images/instagram-logo.svg" alt="Instagram logo" class="app-logo">
				<span class="app-name">Fipugram</span>
				<router-link to="/" class="nav-link">Home</router-link> |
				<router-link to="/login" class="nav-link">Login</router-link> |
				<router-link to="/signup" class="nav-link">Sign up</router-link>
				
			</div>
			<div class="nav-part">
				<form action="">
					<input type="text" id="nav-search" placeholder="Search" v-model="store.searchTerm">
				</form>
			</div>
			<div class="nav-part">
				<img src="@/assets/images/instagram-compass-icon.png" alt="Compass icon" class="nav-icon">
				<img src="@/assets/images/instagram-heart-icon.png" alt="Heart icon" class="nav-icon">
				<img src="@/assets/images/instagram-user-icon.png" alt="Profile icon" class="nav-icon">
			</div>
			<button type="button" role="button" id="toggler" class="vert-center" data-toggle="collapse"
                 aria-controls="list-nav" aria-expanded="false" aria-label="Toggle navigation">
         	<span class="navbar-toggle-icon">
               <img src="@/assets/images/menu-rounded-solid.svg" alt="Menu icon" class="menu-icon">
            </span>
         </button>
    	</div>
		<router-view/>
	</div>
</template>

<script>
import store from "@/store.js"

export default {
	name: "app",
	data() {
		return {
			store
		}
	}
}
</script>

<style lang="scss">
	#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	}

	#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
	}
	
	@import './assets/css/style.css';
</style>
