<template>
	<a
		:target="target"
		:href="href"
		class="link"
		:class="[type, { disabled: disabled }]"
		@click="handleClick"
		><span>
			<slot />
		</span>
	</a>
</template>

<script lang="ts">
export default {
	name: 'MLink',
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'default', // 默认类型为字符串
			validator: (value: string) =>
				['primary', 'success', 'warning', 'danger', 'info', 'default'].includes(value) // 校验值是否在枚举中
		},
		href: String,
		target: {
			type: String,
			default: '_self', // 默认类型为字符串
			validator: (value: string) => ['_blank', '_parent', '_self', '_top'].includes(value) // 校验值是否在枚举中
		}
	},
	setup(props, { emit }) {
		function handleClick(event: MouseEvent) {
			if (!props.disabled) emit('click', event);
		}

		return {
			handleClick
		};
	}
};
</script>

<style lang="scss" scoped>
.link {
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	vertical-align: middle;
	position: relative;
	text-decoration: none;
	outline: none;
	cursor: pointer;
	padding: 0;
	font-size: 14px;
	font-weight: 500;
	text-decoration: none;
	text-decoration-thickness: 3px;
	text-underline-offset: 5px;
}
.link:hover {
	text-decoration: underline;
}
.warning {
	color: #e6a23c;
}
.primary {
	color: #409eff;
}
.success {
	color: #67c23a;
}
.danger {
	color: #f56c6c;
}
.info {
	color: #909399;
}
.default {
	color: #cfd3dc;
}

.disabled {
	opacity: 0.6;
	cursor: not-allowed;
}

.disabled:hover {
	text-decoration: none;
}
</style>
