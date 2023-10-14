# Input 输入框

<div style="display: flex; justify-content: space-around; margin: 40px;">

<MInput
    		v-model:value="password"
    		input-key="password"
    		label="密码"
    	></MInput>

</div>

```vue
<MInput v-model:value="password" input-key="password" label="密码"></MInput>
```

# API

## Props

| 参数     | 说明                             | 类型   | 可选值 | 默认值 |
| -------- | -------------------------------- | ------ | ------ | ------ |
| inputKey | input 标签的 id                  | string | ——     | ——     |
| label    | 等价于原生 input aria-label 属性 | string | ——     | ——     |
| value    | 绑定值                           | string | ——     | ——     |
