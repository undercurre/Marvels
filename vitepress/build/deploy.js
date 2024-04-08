const { execSync } = require('child_process');

try {
  // 进入要推送的文件夹
  execSync('cd docs/.vitepress/dist');

  // // 初始化新的Git仓库
  // execSync('git init');

  // // 添加要推送的文件
  // execSync('git add .');

  // // 提交更改
  // execSync('git commit -m "Initial commit"');

  // // 添加远程Git存储库
  // execSync('git remote add origin https://github.com/undercurre/Marvels-Dosc.git');

  // 同步master
  execSync('git pull origin master');

  // 推送更改
  execSync('git push -u origin master');

  console.log('Successfully pushed to GitHub.');
} catch (error) {
  console.error('An error occurred:', error.stderr.toString());
}
