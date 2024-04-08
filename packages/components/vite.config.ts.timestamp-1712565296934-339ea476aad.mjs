// vite.config.ts
import { defineConfig } from "file:///D:/%E6%99%BA%E6%85%A7%E5%B1%8F/%E5%B0%8F%E7%A8%8B%E5%BA%8F/Matrix-UI/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.11_sass@1.69.3/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E6%99%BA%E6%85%A7%E5%B1%8F/%E5%B0%8F%E7%A8%8B%E5%BA%8F/Matrix-UI/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.4.0_vite@4.4.11/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/%E6%99%BA%E6%85%A7%E5%B1%8F/%E5%B0%8F%E7%A8%8B%E5%BA%8F/Matrix-UI/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-dts@3.6.0_vite@4.4.11/node_modules/vite-plugin-dts/dist/index.mjs";
import Unocss from "file:///D:/%E6%99%BA%E6%85%A7%E5%B1%8F/%E5%B0%8F%E7%A8%8B%E5%BA%8F/Matrix-UI/node_modules/.pnpm/registry.npmmirror.com+unocss@0.45.4_vite@4.4.11/node_modules/unocss/dist/vite.mjs";
import { presetUno, presetAttributify, presetIcons } from "file:///D:/%E6%99%BA%E6%85%A7%E5%B1%8F/%E5%B0%8F%E7%A8%8B%E5%BA%8F/Matrix-UI/node_modules/.pnpm/registry.npmmirror.com+unocss@0.45.4_vite@4.4.11/node_modules/unocss/dist/index.mjs";
var vite_config_default = defineConfig({
  build: {
    //打包文件目录
    outDir: "es",
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue", "gsap", "animate.css"],
      input: ["index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: "./../components",
          exports: "named",
          //配置打包根目录
          dir: "es/components"
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModulesRoot: "./../components",
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "lib/components"
        }
      ]
    },
    lib: {
      entry: "./index.ts"
    }
  },
  plugins: [
    vue(),
    Unocss({
      // 使用Unocss
      presets: [presetUno(), presetAttributify(), presetIcons()]
    }),
    dts({
      entryRoot: "./src",
      outDir: ["es/components/src", "lib/components/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: "../../tsconfig.json"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTY2N0FcdTYxNjdcdTVDNEZcXFxcXHU1QzBGXHU3QTBCXHU1RThGXFxcXE1hdHJpeC1VSVxcXFxwYWNrYWdlc1xcXFxjb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTY2N0FcdTYxNjdcdTVDNEZcXFxcXHU1QzBGXHU3QTBCXHU1RThGXFxcXE1hdHJpeC1VSVxcXFxwYWNrYWdlc1xcXFxjb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTYlOTklQkElRTYlODUlQTclRTUlQjElOEYvJUU1JUIwJThGJUU3JUE4JThCJUU1JUJBJThGL01hdHJpeC1VSS9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG4vLyBcdTVGMTVcdTUxNjVVbm9jc3NcclxuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSc7XHJcbmltcG9ydCB7IHByZXNldFVubywgcHJlc2V0QXR0cmlidXRpZnksIHByZXNldEljb25zIH0gZnJvbSAndW5vY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0YnVpbGQ6IHtcclxuXHRcdC8vXHU2MjUzXHU1MzA1XHU2NTg3XHU0RUY2XHU3NkVFXHU1RjU1XHJcblx0XHRvdXREaXI6ICdlcycsXHJcblx0XHQvL1x1NTM4Qlx1N0YyOVxyXG5cdFx0Ly9taW5pZnk6IGZhbHNlLFxyXG5cdFx0cm9sbHVwT3B0aW9uczoge1xyXG5cdFx0XHQvL1x1NUZGRFx1NzU2NVx1NjI1M1x1NTMwNXZ1ZVx1NjU4N1x1NEVGNlxyXG5cdFx0XHRleHRlcm5hbDogWyd2dWUnLCAnZ3NhcCcsICdhbmltYXRlLmNzcyddLFxyXG5cdFx0XHRpbnB1dDogWydpbmRleC50cyddLFxyXG5cdFx0XHRvdXRwdXQ6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvL1x1NjI1M1x1NTMwNVx1NjgzQ1x1NUYwRlxyXG5cdFx0XHRcdFx0Zm9ybWF0OiAnZXMnLFxyXG5cdFx0XHRcdFx0Ly9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcclxuXHRcdFx0XHRcdGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLm1qcycsXHJcblx0XHRcdFx0XHQvL1x1OEJBOVx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NjIxMVx1NEVFQ1x1NzZFRVx1NUY1NVx1NUJGOVx1NUU5NFxyXG5cdFx0XHRcdFx0cHJlc2VydmVNb2R1bGVzOiB0cnVlLFxyXG5cdFx0XHRcdFx0cHJlc2VydmVNb2R1bGVzUm9vdDogJy4vLi4vY29tcG9uZW50cycsXHJcblx0XHRcdFx0XHRleHBvcnRzOiAnbmFtZWQnLFxyXG5cdFx0XHRcdFx0Ly9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcclxuXHRcdFx0XHRcdGRpcjogJ2VzL2NvbXBvbmVudHMnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvL1x1NjI1M1x1NTMwNVx1NjgzQ1x1NUYwRlxyXG5cdFx0XHRcdFx0Zm9ybWF0OiAnY2pzJyxcclxuXHRcdFx0XHRcdC8vXHU2MjUzXHU1MzA1XHU1NDBFXHU2NTg3XHU0RUY2XHU1NDBEXHJcblx0XHRcdFx0XHRlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXHJcblx0XHRcdFx0XHQvL1x1OEJBOVx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NjIxMVx1NEVFQ1x1NzZFRVx1NUY1NVx1NUJGOVx1NUU5NFxyXG5cdFx0XHRcdFx0cHJlc2VydmVNb2R1bGVzUm9vdDogJy4vLi4vY29tcG9uZW50cycsXHJcblx0XHRcdFx0XHRwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXHJcblx0XHRcdFx0XHRleHBvcnRzOiAnbmFtZWQnLFxyXG5cdFx0XHRcdFx0Ly9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcclxuXHRcdFx0XHRcdGRpcjogJ2xpYi9jb21wb25lbnRzJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdGxpYjoge1xyXG5cdFx0XHRlbnRyeTogJy4vaW5kZXgudHMnXHJcblx0XHR9XHJcblx0fSxcclxuXHRwbHVnaW5zOiBbXHJcblx0XHR2dWUoKSxcclxuXHRcdFVub2Nzcyh7XHJcblx0XHRcdC8vIFx1NEY3Rlx1NzUyOFVub2Nzc1xyXG5cdFx0XHRwcmVzZXRzOiBbcHJlc2V0VW5vKCksIHByZXNldEF0dHJpYnV0aWZ5KCksIHByZXNldEljb25zKCldXHJcblx0XHR9KSxcclxuXHRcdGR0cyh7XHJcblx0XHRcdGVudHJ5Um9vdDogJy4vc3JjJyxcclxuXHRcdFx0b3V0RGlyOiBbJ2VzL2NvbXBvbmVudHMvc3JjJywgJ2xpYi9jb21wb25lbnRzL3NyYyddLFxyXG5cdFx0XHQvL1x1NjMwN1x1NUI5QVx1NEY3Rlx1NzUyOFx1NzY4NHRzY29uZmlnLmpzb25cdTRFM0FcdTYyMTFcdTRFRUNcdTY1NzRcdTRFMkFcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdTRFMEJcdTYzODksXHU1OTgyXHU2NzlDXHU0RTBEXHU5MTREXHU3RjZFLFx1NEY2MFx1NEU1Rlx1NTNFRlx1NEVFNVx1NTcyOGNvbXBvbmVudHNcdTRFMEJcdTY1QjBcdTVFRkF0c2NvbmZpZy5qc29uXHJcblx0XHRcdHRzY29uZmlnUGF0aDogJy4uLy4uL3RzY29uZmlnLmpzb24nXHJcblx0XHR9KVxyXG5cdF1cclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1csU0FBUyxvQkFBb0I7QUFDblksT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUVoQixPQUFPLFlBQVk7QUFDbkIsU0FBUyxXQUFXLG1CQUFtQixtQkFBbUI7QUFFMUQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsT0FBTztBQUFBO0FBQUEsSUFFTixRQUFRO0FBQUE7QUFBQTtBQUFBLElBR1IsZUFBZTtBQUFBO0FBQUEsTUFFZCxVQUFVLENBQUMsT0FBTyxRQUFRLGFBQWE7QUFBQSxNQUN2QyxPQUFPLENBQUMsVUFBVTtBQUFBLE1BQ2xCLFFBQVE7QUFBQSxRQUNQO0FBQUE7QUFBQSxVQUVDLFFBQVE7QUFBQTtBQUFBLFVBRVIsZ0JBQWdCO0FBQUE7QUFBQSxVQUVoQixpQkFBaUI7QUFBQSxVQUNqQixxQkFBcUI7QUFBQSxVQUNyQixTQUFTO0FBQUE7QUFBQSxVQUVULEtBQUs7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBO0FBQUEsVUFFQyxRQUFRO0FBQUE7QUFBQSxVQUVSLGdCQUFnQjtBQUFBO0FBQUEsVUFFaEIscUJBQXFCO0FBQUEsVUFDckIsaUJBQWlCO0FBQUEsVUFDakIsU0FBUztBQUFBO0FBQUEsVUFFVCxLQUFLO0FBQUEsUUFDTjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSixPQUFPO0FBQUEsSUFDUjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQTtBQUFBLE1BRU4sU0FBUyxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsR0FBRyxZQUFZLENBQUM7QUFBQSxJQUMxRCxDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDSCxXQUFXO0FBQUEsTUFDWCxRQUFRLENBQUMscUJBQXFCLG9CQUFvQjtBQUFBO0FBQUEsTUFFbEQsY0FBYztBQUFBLElBQ2YsQ0FBQztBQUFBLEVBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
