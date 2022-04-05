<template>
	<input :placeholder="placeholder" v-model="myText" class="input">
</template>

<script>
export default {
	name: 'Input',
	props: {
		placeholder: {type: String},
		text: {type: String}
	},
	data() {
		return {
			myText: ''
		}
	},
	mounted() {
		this.myText = this.text
	},
	watch: {
		myText() {
			this.$emit('text', this.myText)
		},
		text() {
			this.myText = this.text
		}
	}
}
</script>

<style lang="scss" scoped>
.input{
	font-family: 'Times New Roman', Times, serif;
  border: 1px solid #adadad;
	border-radius: 4px;
	padding: 6px;

	&:focus {
		outline: 0;
	}
}
</style>