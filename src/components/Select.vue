<template>
	<select class="select" v-model="selected" :disabled="disabled">
		<option default hidden>{{placeholder}}</option>
		<option 
			v-for="option in options" 
			:key="option.id" 
			:value="option.id"
		>
			{{ option.title }}
		</option>
	</select>
</template>

<script>
export default {
	name: 'Select',
	props: {
		placeholder: {type: String},
		select: {type: String},
		disabled: {type: Boolean},
		options: {type: Array}
	},
	data() {
		return{
			selected: ''
		}
	},
	mounted() {
		this.selected = this.select
	},
	watch: {
		selected() {
			if (this.selected !== this.placeholder) {
				this.$emit('select', this.selected)
			}
		},
		select() {
			this.selected = this.select
		}
	}
}
</script>

<style lang="scss" scoped>
	.select {
		font-family: 'Times New Roman', Times, serif;
		border-color: #adadad;
		border-radius: 4px;

	&:focus {
		outline: 0;
		}
	}
</style>