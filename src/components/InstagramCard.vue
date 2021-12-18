<template>
	<div class="ig-card">
		<div class="card-header">
			<span class="card-header-text">{{info.description}}</span>
		</div>
		<div class="card-photo">
			<img :src="info.url" alt="" class="ig-photo">
		</div>
		<div class="card-footer">
			<span class="card-footer-text">{{info.time}}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ["info"],
	name: "InstagramCard",
};
</script>

<style lang="scss">
@import '../assets/css/instagram-card-style.css';
</style>