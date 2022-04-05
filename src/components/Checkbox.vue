<template>
  <label class="checkbox">{{text}}
		<input type="checkbox" v-model="checked">
		<span class="checkmark"></span>
	</label>
</template>

<script>
export default {
	name: 'Checkbox',
	props: {
		text: {type: String},
		check: {type: Boolean}
	},
	data() {
		return {
			checked: false
		}
	},
	mounted() {
		this.checked = this.check
	},
	watch: {
		checked() {
			this.$emit('check', this.checked)
		},
		check() {
			this.checked = this.check
		}
	}
}
</script>

<style lang="scss" scoped>

.checkbox {
	display: block;
	position: relative;
	padding-left: 28px;
	line-height: 22px;
	width: max-content;
	cursor: pointer;
}
.checkbox input {
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
  height: 20px;
  width: 20px;
	border: 1px solid #adadad;
	border-radius: 4px;
}
.checkbox:hover input ~ .checkmark {
  background-color: #e8e8e8;
}
.checkbox input:checked ~ .checkmark {
  border-color: #565656;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox input:checked ~ .checkmark:after {
  display: block;
}
.checkbox .checkmark:after {
	left: 7px;
	top: 2px;
	width: 5px;
	height: 10px;
	border: solid #565656;
	border-width: 0 2px 2px 0;
	transform: rotate(45deg);
}
</style>