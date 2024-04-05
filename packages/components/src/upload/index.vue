<template>
	<div>
		<div class="table">
			<div class="table-cell">
				<div class="modal">
					<div id="profile">
						<div v-show="!imageUrl" class="dashes" @click="openFileInput"></div>
						<label v-show="!imageUrl">Click to browse or drag an image here</label>
						<img v-show="imageUrl" class="preview" :src="imageUrl" />
					</div>
					<div class="editable">
						<MIcon class="icon" size="20" name="carbon:edit"></MIcon>
						<h1 contenteditable @input="updateFileName">{{ fileName }}</h1>
					</div>
					<div class="stat">
						<div class="label">Size</div>
						<div class="num">{{ fileSize }}</div>
					</div>
					<div class="stat">
						<div class="label">Type</div>
						<div class="num">{{ fileType }}</div>
					</div>
					<button @click="handleUpload2Sever">upload</button>
				</div>
			</div>
		</div>
		<input ref="fileInput" type="file" id="mediaFile" accept="image/*" @change="handleFileChange" />
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import MIcon from '../icon';

export default {
	name: 'MUpload',
	components: {
		MIcon
	},
	props: {},
	computed: {},
	setup(props, { emit }) {
		const fileInput = ref<HTMLElement | null>(null);

		const openFileInput = () => {
			if (fileInput.value) fileInput.value.click();
		};

		const imageUrl = ref<string>('');
		const fileName = ref('no');
		const fileSize = ref('no');
		const fileType = ref('no');

		const handleFileChange = (event) => {
			const file = event.target.files[0];
			if (file) {
				const reader = new FileReader();
				reader.onload = () => {
					imageUrl.value = reader.result as string;
				};
				reader.readAsDataURL(file);
				fileName.value = file.name;
				fileSize.value = parseFloat((file.size / 1024).toFixed(2)) + 'KB';
				fileType.value = file.type.split('/')[1];
			}
		};

		const updateFileName = (event) => {
			fileName.value = event.target.textContent;
		};

		function handleUpload2Sever() {
			emit('upload', {
				name: fileName.value,
				size: fileSize.value,
				type: fileType.value
			});
		}

		return {
			handleUpload2Sever,
			handleFileChange,
			openFileInput,
			fileInput,
			imageUrl,
			fileSize,
			fileType,
			fileName,
			updateFileName
		};
	}
};
</script>

<style lang="scss" scoped>
// ----- Personal preference -----
*,
*:before,
*:after {
	box-sizing: border-box;
}

// ----- Variable Declarations -----
@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

// ----- Styles -----
body,
html {
	min-height: 100vh;
	background: #666;
	font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
		'Lucida Grande', sans-serif;
	font-weight: 300;
}
.table {
	display: table;
	width: 100%;
	height: 100vh;
	position: absolute;
}
.table-cell {
	display: table-cell;
	vertical-align: middle;
}
.modal {
	width: 300px;
	height: 400px;
	margin: 0 auto;
	background: #fff;
	box-shadow: 0 40px 50px rgba(black, 0.35);
	padding: 40px;
}
#mediaFile {
	position: absolute;
	top: -1000px;
}
#profile {
	border-radius: 100%;
	width: 200px;
	height: 200px;
	margin: 0 auto;
	position: relative;
	top: -80px;
	margin-bottom: -80px;
	cursor: pointer;
	background: #f4f4f4;
	display: table;
	background-size: cover;
	background-position: center center;
	box-shadow: 0 5px 8px rgba(black, 0.35);
	.dashes {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 100%;
		width: 100%;
		height: 100%;
		border: 4px dashed #ddd;
		opacity: 1;
	}
	.preview {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 100%;
		width: 100%;
		height: 100%;
		opacity: 1;
	}
	label {
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		padding: 0 30px;
		color: grey;
		opacity: 1;
	}
	&.dragging {
		background-image: none !important;
		.dashes {
			animation-duration: 10s;
			animation-name: spin;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
			opacity: 1 !important;
		}
		label {
			opacity: 0.5 !important;
		}
	}
	&.hasImage {
		.dashes,
		label {
			opacity: 0;
			pointer-events: none;
			user-select: none;
		}
	}
}
h1 {
	width: 200px;
	white-space: nowrap; /* 防止文本换行 */
	overflow: hidden; /* 隐藏溢出的文本 */
	text-overflow: ellipsis; /* 显示省略号 */
	margin-top: 20px;
	text-align: center;
	font-size: 28px;
	font-weight: normal;
	letter-spacing: 1px;
}
.stat {
	width: 50%;
	text-align: center;
	float: left;
	padding-top: 20px;
	border-top: 1px solid #ddd;
	.label {
		font-size: 11px;
		font-weight: bold;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
	.num {
		font-size: 21px;
		padding: 3px 0;
	}
}
.editable {
	position: relative;
	.icon {
		position: absolute;
		top: 10px;
		right: -20px;
		opacity: 0.3;
	}
}
button {
	width: 100%;
	-webkit-appearance: none;
	line-height: 40px;
	color: #fff;
	border: none;
	background-color: #ea4c89;
	margin-top: 30px;
	font-size: 13px;
	-webkit-font-smoothing: antialiased;
	font-weight: bold;
	letter-spacing: 1px;
	text-transform: uppercase;
}
// ----- Mobile styles -----
@media only screen and (max-device-width: 736px) {
}
</style>
