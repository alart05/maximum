<template>
  <label class="container">
		<input 
			type="radio" 
			:value="text" 
			:name="name"
			v-model="checked"
		>
		{{text}}
		<span class="checkmark"></span>
	</label>
</template>

<script>
export default {
	name: 'Radio',
	props: {
		text: {type: String},
		name: {type: String},
		checkFalse: {type: Boolean}
	},
	data() {
		return {
			checked: ''
		}
	},
	mounted() {
		this.checked = this.check
	},
	watch: {
		checked() {
			if (this.checked) {
				this.$emit('check', this.checked)
			}
		},
		checkFalse() {
			if (this.checkFalse) {
				this.checked = ''
			}
		}
	}
}
</script>

<style lang="scss" scoped>

.container {
  display: block;
  position: relative;
  padding-left: 24px;
	line-height: 20px;
	width: max-content;
  cursor: pointer;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
	border: 1px solid #adadad;
  border-radius: 50%;
}
.container:hover input ~ .checkmark {
  background-color: #e8e8e8;
}
.container input:checked ~ .checkmark {
  border-color: #565656;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
	top: 3px;
	left: 4px;
	width: 10px;
	height: 11px;
	border-radius: 50%;
	background: #565656;
}
</style>