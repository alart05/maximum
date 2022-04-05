<template>
	<div class="page__success">
		<div class="success__title">Ваша заявка отправлена</div>
		<img class="success__img" src="@/assets/success_img.png">
		<router-link :to="{ name: 'Main'}">
			<div class="success__text" >Заполнить новую заявку</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Success'
}
</script>

<style>
.page__success{
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.success__img{
	width: 350px;
}
.success__title{
	font-size: 30px;
	color: #565656;
	margin-bottom: 35px;
}
.success__text{
	font-size: 16px;
	color: #565656;
	cursor: pointer;
	margin-top: 10px;
}
</style>