<template>
	<div
		data-tilt
		data-tilt-perspective="1000"
		data-tilt-reset="false"
		data-tilt-max="5"
		class="tilt-wrap"
	>
		<div id="container">
			<nav>
				<ol>
					<li class="nav-left-wrap">
						<button @click.prevent="prevMonth()" class="calendar-btn">
							<span class="icon-arrow" aria-hidden="true">&#x3008;</span> Previous
						</button>
					</li>
					<li class="nav-center-wrap">
						<div class="select">
							<select :value="focusedDay.format('MMMM')" @input="setMonth($event.target.value)">
								<option v-for="month in months" :value="month" :key="month">
									{{ month }}
								</option>
							</select>
						</div>
						<div class="select">
							<select :value="focusedDay.format('YYYY')" @input="setYear($event.target.value)">
								<option v-for="year in calendarYears" :key="year" :value="year">
									{{ year }}
								</option>
							</select>
						</div>
					</li>
					<li class="nav-right-wrap">
						<button @click.prevent="nextMonth()" class="calendar-btn">
							Next <span class="icon-arrow" aria-hidden="true">&#x3009;</span>
						</button>
					</li>
				</ol>
			</nav>
			<div id="calendar" :class="'start-day-' + calendarMonthStartDay" ref="calendar">
				<div class="th-day"><span>mo</span><span class="day-longform">nday</span></div>
				<div class="th-day"><span>tu</span><span class="day-longform">esday</span></div>
				<div class="th-day"><span>we</span><span class="day-longform">dnesday</span></div>
				<div class="th-day"><span>th</span><span class="day-longform">ursday</span></div>
				<div class="th-day"><span>fr</span><span class="day-longform">iday</span></div>
				<div class="th-day"><span>sa</span><span class="day-longform">turday</span></div>
				<div class="th-day"><span>su</span><span class="day-longform">nday</span></div>
				<transition-group name="cell" tag="ol">
					<li
						class="td-day"
						v-for="day in calendarDays"
						v-bind:key="day.date.format('DD')"
						:class="{
							'day-today': day.date.format('MM-DD-YY') == today.format('MM-DD-YY'),
							'day-selected': day.date.format('MM-DD-YY') == focusedDay.format('MM-DD-YY')
						}"
					>
						<span @click="selectDay(day.date)">{{ day.date.format('D') }}</span>
					</li>
				</transition-group>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$smallScreen: 550px;
$largeScreen: 1600px;

@function between($to, $from, $toWidth, $fromWidth) {
	$slope: ($to - $from) / ($toWidth - $fromWidth);
	$base: $from - $slope * $fromWidth;

	@return calc(#{$base} + #{100vw * $slope});
}

@mixin between($property, $to, $from, $toWidth: $smallScreen, $fromWidth: $largeScreen) {
	#{$property}: $to;

	@media (min-width: $toWidth) {
		#{$property}: between($to, $from, $smallScreen, $largeScreen);
	}

	@media (min-width: $fromWidth) {
		#{$property}: $from;
	}
}

:root {
	@include between(font-size, 10px, 20px);
}

.tilt-wrap {
	width: 600px;
	transform-style: preserve-3d;
	margin: auto;
}

#body-bg {
	position: absolute;
	top: 0;
	left: 0;
	width: auto;
	height: 100%;
}

#container {
	position: relative;
	background: radial-gradient(
			farthest-corner at 20% -5%,
			white 0%,
			rgba(#f1faff, 0.5) 50%,
			rgba(#f1faff, 0) 100%
		),
		linear-gradient(-10deg, #d3d2d9, #edecf1 90%);
	box-shadow: 0 4rem 4rem -2rem rgba(#13222b, 0.2);
	border-radius: 0.2rem;

	&:before,
	&:after {
		display: block;
		content: '';
		position: absolute;
	}

	&:before {
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		height: 2px;
		width: 75%;
		background: linear-gradient(to right, rgba(white, 0.5), white, rgba(white, 0.25));
	}

	&:after {
		top: 0.2rem;
		width: 2px;
		height: calc(100% - 0.4rem);
		background: linear-gradient(to bottom, white, rgba(white, 0.25));
	}
}

#calendar {
	display: flex;
	flex-wrap: wrap;
	padding-bottom: calc(1% + 2vw);
	max-width: 50rem;
	margin: 2%;
	transition: all 0.6s ease-in-out;
	overflow: hidden;
}

.th-day,
.td-day {
	width: (100% / 7);
}

.th-day {
	text-align: center;
	text-transform: uppercase;
}

ol {
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
}

.td-day {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: calc(1% + 2vw);
	transform: translateZ(20px);

	span {
		width: 4rem;
		height: 4rem;
		padding-top: 0.4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		font-size: 2rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.6s ease-in-out;
	}
}

.day-today {
	transform: scale(1.2) translateZ(40px);
}

.day-today span {
	color: #48c3ff;
	background: linear-gradient(20deg, rgba(white, 0.5), rgba(white, 0.75));
	width: 4.75rem;
	height: 4.75rem;
	box-shadow: inset 0 -1px 1px 1px white, -0.3rem -0.5rem 1rem -0.25rem white,
		-0.3rem -1rem 2rem -1rem white, -0.3rem -0.5rem 3rem -1.5rem #00abff,
		0.5rem 2rem 4rem -1.75rem #030507;
}

.td-day:hover:not(.day-today) span {
	background: rgba(white, 0.5);
}

.day-selected:not(.day-today) span,
.day-selected:hover:not(.day-today) span {
	transform: scale3d(1.2, 1.2, 1.2);
	transform-origin: center center;
	background: linear-gradient(20deg, rgba(white, 0.5), rgba(white, 0.75));
	box-shadow: inset 0 -1px 1px 1px white, -0.3rem -1rem 2rem -1rem white,
		-0.3rem -0.5rem 3rem -1rem white, 0.3rem 0.5rem 2rem -1rem #1b2531;
}

.day-selected span {
	color: #ff1054;
}

@media (max-width: $smallScreen) {
	.day-longform {
		display: none;
	}
}
.day-longform {
	display: none;
}

.start-day-Tu > ol li:nth-child(1) {
	margin-left: (100% / 7);
}
.start-day-We > ol li:nth-child(1) {
	margin-left: (100% / 7) * 2;
}
.start-day-Th > ol li:nth-child(1) {
	margin-left: (100% / 7) * 3;
}
.start-day-Fr > ol li:nth-child(1) {
	margin-left: (100% / 7) * 4;
}
.start-day-Sa > ol li:nth-child(1) {
	margin-left: (100% / 7) * 5;
}
.start-day-Su > ol li:nth-child(1) {
	margin-left: (100% / 7) * 6;
}

.cell-enter-active,
.cell-leave-active {
	transition: all 0.6s ease-in-out;
}

.cell-enter,
.cell-leave-to {
	transform: translateX(-1rem);
	opacity: 0;
}

nav {
	background: linear-gradient(
			-20deg,
			#bebdc2,
			rgba(#e9e9eb, 0.5) 50%,
			rgba(#bebdc2, 0) 75%,
			#e9e9eb
		),
		linear-gradient(to bottom, #e9e9eb, rgba(white, 1));
	box-shadow: inset 0.1rem 0.05rem 0.2rem rgba(white, 0.25), 0px 0.2rem 0.3rem -0.2rem #737277,
		0px -1px 0px 0px rgba(white, 0.75), 0px -2px 2px -2px rgba(black, 0.5);
	position: relative;
	left: 0;
	width: 100%;
	padding: 0.25rem;
	box-sizing: border-box;
	z-index: 2;
	border-radius: 0.2rem;
	text-align: center;
	color: rgba(black, 0.5);
	transform: translateZ(5px);
	font-size: 0.9rem;

	&:before,
	&:after {
		display: block;
		content: '';
		position: absolute;
	}

	&:before {
		top: 1px;
		left: 1px;
		height: 1px;
		width: 100%;
		background: linear-gradient(
			to right,
			rgba(white, 0.2),
			rgba(white, 0.8),
			rgba(white, 0.25),
			rgba(white, 0.4) 90%,
			rgba(white, 0.2)
		);
	}

	&:after {
		top: 2px;
		left: 1px;
		width: 1px;
		height: calc(100% - 0.4rem);
		background: linear-gradient(to bottom, rgba(white, 0.6), rgba(white, 0.25));
	}

	ol {
		display: flex;
		justify-content: stretch;
		align-items: center;

		li {
			width: (100% / 3);
		}
	}
}

.nav-left-wrap {
	text-align: left;
}
.nav-right-wrap {
	text-align: right;
}

.calendar-btn {
	background: none;
	border: none;
	color: currentColor;
	cursor: pointer;
	outline: none;
}

.icon-arrow {
	font-weight: bold;
}

.nav-center-wrap {
	position: relative;
	top: 0.1rem;
	text-align: center;
	font-size: 1rem;
}

.select {
	position: relative;
	display: inline-block;
	transform: translateZ(1px);
	color: #555;
	outline: 0;
}
.select select {
	display: inline-block;
	width: 100%;
	margin: 0;
	padding: 0.5rem 2.25rem 0.5rem 1rem;
	line-height: 1.5;
	color: #555;
	background-color: transparent;
	border: 0;
	border-radius: 0.25rem;
	cursor: pointer;
	outline: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
/* Undo the Firefox inner focus ring */
.select select:focus:-moz-focusring {
	color: transparent;
	text-shadow: 0 0 0 #000;
}
/* Dropdown arrow */
.select:after {
	position: absolute;
	top: 50%;
	right: 1.25rem;
	display: inline-block;
	content: '';
	width: 0;
	height: 0;
	margin-top: -0.15rem;
	pointer-events: none;
	border-top: 0.35rem solid;
	border-right: 0.35rem solid transparent;
	border-bottom: 0.35rem solid transparent;
	border-left: 0.35rem solid transparent;
}

/* Focus */
.select select:focus {
}

/* Active/open */
.select select:active {
}

/* Hide the arrow in IE10 and up */
.select select::-ms-expand {
	display: none;
}

/* Media query to target Firefox only */
@-moz-document url-prefix() {
	/* Firefox hack to hide the arrow */
	.select select {
		text-indent: 0.01px;
		text-overflow: '';
		padding-right: 1rem;
	}

	/* <option> elements inherit styles from <select>, so reset them. */
	.select option {
		background-color: white;
	}
}

/* IE9 hack to hide the arrow */
@media screen and (min-width: 0\0) {
	.select select {
		z-index: 1;
		padding: 0.5rem 1.5rem 0.5rem 1rem;
	}
	.select:after {
		z-index: 5;
	}
	.select:before {
		position: absolute;
		top: 0;
		right: 1rem;
		bottom: 0;
		z-index: 2;
		content: '';
		display: block;
		width: 1.5rem;
		background-color: #eee;
	}
	.select select:hover,
	.select select:focus,
	.select select:active {
		color: #555;
		background-color: #eee;
	}
}
</style>

<script lang="ts">
import moment from 'moment';
import { computed, onUpdated, ref, watch } from 'vue';
export default {
	name: 'MCalendar',
	props: {
		value: {
			type: Date,
			default: new Date()
		}
	},
	setup(props, { emit }) {
		const calendar = ref<HTMLElement | null>(null);
		const height = ref('');
		const today = ref(moment());
		const focusedDay = ref(moment());
		const months = ref(moment.months());
		const calendarMonthStartDay = computed(() => {
			// for styling column offset when month doesn't start with Monday
			return moment(focusedDay.value).startOf('month').format('dd');
		});
		const calendarDays = computed(() => {
			let daysInMonth = moment(focusedDay.value).daysInMonth(),
				days: Array<{ date: moment.Moment }> = [];

			while (daysInMonth) {
				var current = moment(focusedDay.value).date(daysInMonth);

				days.push({
					date: moment(current)
				});

				daysInMonth--;
			}

			return days.reverse();
		});
		const calendarYears = computed(() => {
			var endYear = moment().add(5, 'years').year(),
				startYear = 1980,
				years: number[] = [];

			while (startYear <= endYear) {
				years.push(startYear++);
			}

			return years.reverse();
		});
		function nextMonth() {
			focusedDay.value = moment(focusedDay.value).add(1, 'months');
		}
		function prevMonth() {
			focusedDay.value = moment(focusedDay.value).subtract(1, 'months');
		}
		function setMonth(value) {
			focusedDay.value = moment().month(value);
		}
		function setYear(value) {
			focusedDay.value = moment().year(value);
		}
		function selectDay(day) {
			focusedDay.value = moment(day);
			emit('update:value', moment(day).toDate());
			emit('change', moment(day).toDate());
		}

		onUpdated(() => {
			if (calendar.value) {
				calendar.value.style.height = 'auto';
				var endHeight = getComputedStyle(calendar.value).height;
				calendar.value.style.height = height.value;
				calendar.value.offsetHeight; // force repaint
				calendar.value.style.height = endHeight;

				height.value = endHeight;
			}
		});

		watch(
			() => props.value,
			(newValue) => {
				focusedDay.value = moment(newValue);
			},
			{ immediate: true }
		);

		return {
			today,
			focusedDay,
			months,
			calendarMonthStartDay,
			calendarDays,
			calendarYears,
			nextMonth,
			prevMonth,
			setMonth,
			setYear,
			selectDay
		};
	}
};
</script>
