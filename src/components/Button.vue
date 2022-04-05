<template>
  <button 
		class="button"
		:disabled="disabled"
	>
		{{text}}
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		text: {type: String},
		disabled: {type: Boolean}
	}
}
</script>

<style lang="scss" scoped>
.button{
	font-family: "Times New Roman", Times, serif;
	background-color: #fc9f25;
	border: none;
	border-radius: 3px;
	padding: 8px 20px;
	font-size: 12px;
	color: white;
	cursor: pointer;
	&:disabled {
		background-color: #e8e8e8;
		cursor: default;
	}
}
</style>