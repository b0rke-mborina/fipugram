<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
	 	<!--<div class="nav">
			<div class="nav-part">
				<img src="../assets/images/instagram-logo.svg" alt="Instagram logo" class="app-logo">
				<span class="app-name">Fipugram</span>
			</div>
			<div class="nav-part">
				<input type="text" id="nav-search" placeholder="Search">
			</div>
			<div class="nav-part">
				<img src="../assets/images/instagram-compass-icon.png" alt="Compass icon" class="nav-icon">
				<img src="../assets/images/instagram-heart-icon.png" alt="Heart icon" class="nav-icon">
				<img src="../assets/images/instagram-user-icon.png" alt="Profile icon" class="nav-icon">
			</div>
		</div>-->
		<div class="home-grid">
			<div class="home-grid-item"></div>
			<div class="home-grid-item">
				... ovdje ide Instagram story!
				<instagram-card v-for="card in filteredCards" :key="card" :info="card" />
				<!--<InstagramCard />
				{{ hello }}-->
			</div>
			<div class="home-grid-item">
				... ovdje ide desni stupac!
				<p v-for="card in cards" :key="card">Ovo je tekst... {{ card }}</p>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from '@/components/InstagramCard.vue'
import store from "@/store.js"

export default {
  name: 'Home',
  components: {
    InstagramCard
  },
  data() { // skraćeno od "data: function() {"
		return {
			/*hello: "world",*/
			cards: [
				{
					url: "https://picsum.photos/id/1/400/400",
					description: "laptop",
					time: "a few minutes ago"
				},
				{
					url: "https://picsum.photos/id/2/400/400",
					description: "laptop #2",
					time: "a few hours ago"
				},
				{
					url: "https://picsum.photos/id/3/400/400",
					description: "laptop #3",
					time: "an hour ago"
				},
				{
					url: "https://picsum.photos/id/4/400/400",
					description: "laptop #4",
					time: "a few seconds ago"
				}
			],
			store
		}
	},
	computed: {
		filteredCards() {
			let searchT=this.store.searchTerm;
			return this.cards.filter((card) => card.description.includes(searchT));
			/*
			let newCards=[];
			for (let card of this.cards) {
				if (card.description.indexOf(searchT)>=0) {
					newCards.push(card);
				}
			}
			return newCards;
			*/
		}
	}
}
</script>
