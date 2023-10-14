# Icon 图标

<div style="display: flex; justify-content: space-around; margin: 40px;">

<MIcon
			name="material-symbols:10k-outline"
			color="black"
			size="40"
			flip="Vertical"
			:rotate="0"
		></MIcon>

</div>

```vue
<MIcon
	name="material-symbols:10k-outline"
	color="black"
	size="40"
	flip="Vertical"
	:rotate="0"
></MIcon>
```

# API

## Props

| 参数   | 说明         | 类型            | 可选值                | 默认值 |
| ------ | ------------ | --------------- | --------------------- | ------ |
| name   | iconify 标记 | string          | ——                    | ——     |
| color  | 图标颜色     | string          | ——                    | ——     |
| size   | 图标大小     | string / number | ——                    | ——     |
| filp   | 翻转方向     | string          | Horizontal / Vertical | ——     |
| rotate | 选择角度     | number          | ——                    | ——     |
