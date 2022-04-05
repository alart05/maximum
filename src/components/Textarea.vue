<template>
	<textarea :placeholder="placeholder" class="textarea" v-model="text"/>
</template>

<script>
export default {
	name: 'Textarea',
	props: {
		placeholder: {type: String}
	},
	data() {
		return {
			text: ''
		}
	},
	watch: {
		text() {
			this.$emit('text', this.text)
		}
	}
}
</script>

<style lang="scss" scoped>
.textarea {
	min-width: 100%;
	max-width: 100%;
	min-height: 60px;
	border: 1px solid #adadad;
	border-radius: 4px;
	padding: 6px;
	font-family: 'Times New Roman', Times, serif;

	&:focus {outline: 0;}
}
</style>