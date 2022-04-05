<template>
  <div class="page__main">
		<div class="block">
			<div class="block__header">
				<span>Ваш филиал</span>
				<span class="star">*</span>
			</div>
			<Select 
				class="select" 
				@select="city.select = $event"
				:select="city.select"
				:options="listOfCity"
				:placeholder="city.placeholder"
				:disabled="city.online"
			/>
			<div>
				<Checkbox 
					@check="city.online = $event; city.select=city.placeholder" 
					text="Онлайн"
					:check="city.online"
				/>
			</div>
		</div>

		<div class="block">
			<div class="block__header">
				<span>Тема обращения</span>
				<span class="star">*</span>
			</div>
			<div class="block__radio">
				<Radio 
					@check="titleReport.select = $event; titleReport.custom = ''"
					:check-false="titleReport.custom ? true : false"
					text="Недоволен качеством услуг"
					name="theme"
				/>
			</div>
			<div class="block__radio">
				<Radio 
					@check="titleReport.select = $event; titleReport.custom = ''" 
					:check-false="titleReport.custom ? true : false"
					text="Расторжение договора" 
					name="theme" 
				/>
			</div>
			<div class="block__radio">
				<Radio 
					@check="titleReport.select = $event; titleReport.custom = ''" 
					:check-false="titleReport.custom ? true : false"
					text="Не приходит письмо активации на почту" 
					name="theme" 
				/>
			</div>
			<div class="block__radio">
				<Radio 
					@check="titleReport.select = $event; titleReport.custom = ''" 
					:check-false="titleReport.custom ? true : false"
					text="Не работает личный кабинет" 
					name="theme" 
				/>
			</div>
			<Input 
				@text="titleReport.custom = $event" 
				:text="titleReport.custom"
				placeholder="Другое"
			/>
		</div>

		<div class="block">
			<div class="block__header">
				<span>Описание проблемы</span>
				<span class="star">*</span>
			</div>
			<Textarea 
				placeholder="Введите текст"
				@text="description = $event"
			/>
		</div>

		<div class="block">
			<div class="block__header">
				<span>Загрузка документов</span>
			</div>
			<div class="block__download">
				<div>Приложите, пожалуйста, полноэкранный скриншот.</div>
				<div>Это поможет быстрее рещить проблему</div>
			</div>
			<input type="file" ref="file">
		</div>

		<Button 
			:disabled="!canSubmit" 
			text="ОТПРАВИТЬ"
			@click.native="send()"
		/>
  </div>  
</template>

<script>
import Select from '@/components/Select.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import Textarea from '@/components/Textarea.vue'
import Checkbox from '@/components/Checkbox.vue'
import Radio from '@/components/Radio.vue'
import axios from 'axios'
export default {
	components: {
		Select,
		Input,
		Button,
		Textarea,
		Checkbox,
		Radio
	},
	data() {
		return {
			listOfCity: [],
			city: {
				select: 'Выберите город',
				online: false,
				placeholder: 'Выберите город'
			},
			titleReport: {
				custom: '',
				select: ''
			},
			description: ''
		}
	},
	mounted() {
		axios.get('https://6196084574c1bd00176c6ff1.mockapi.io/api/v1/cities')
			.then(response => {
				this.listOfCity = response.data
			})
			.catch(error => {
				console.log(error);
			});
	},
	computed: {
		canSubmit() {
			if (this.description && 
				(this.titleReport.custom || this.titleReport.select) &&
				(this.city.online || (this.city.select && this.city.select !== this.city.placeholder))
			) {
				return true
			} else {
				return false
			}
		}
	},
	methods: {
		send() {
			// для отправки файла надо использовать formdata 
			axios.post('https://6196084574c1bd00176c6ff1.mockapi.io/api/v1/send-form', {
				description: this.description,
				title: this.titleReport.select ? this.titleReport.select : this.titleReport.custom,
				city: this.city.online ? 'online' : this.city.select,
			})
			.then(response => {
				if (response.data.success) {
					this.$router.push({ name: 'Success' })
				} else {
					alert('Ошибка отправки заявки')
				}
			})
			.catch(error => {
				console.log(error);
				alert('Ошибка отправки заявки')
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.page__main{
	width: 900px;
	border: 1px solid #adadad;
	margin: 20px auto;
	padding: 40px;
	font-size: 16px;
	color: #565656;
}
.block {
	margin-bottom: 20px;
}
.star{
	color: red;
	margin-left: 5px;
}
.block__header{
	margin-bottom: 10px;
}
.block__radio {
	margin-bottom: 10px;
}
.block__download {
	font-size: 14px;
	margin-bottom: 10px;
}
.online{
	padding-left: 5px;
}
.select{
	margin-bottom: 15px;
	padding: 5px;
	width: 200px;
}
</style>