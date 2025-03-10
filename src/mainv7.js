import fs from 'fs';
import path from 'path';
import PluginCommon from './plugin/common.js';
import PluginJjencode from './plugin/jjencode.js';
import PluginSojson from './plugin/sojson.js';
import PluginSojsonV7 from './plugin/sojsonv7.js';
import PluginObfuscator from './plugin/obfuscator.js';
import PluginAwsc from './plugin/awsc.js';
import common from './plugin/common.js';



const folderPath = './jsv7';
// 读取文件夹下的所有文件名
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory', err);
    return;
  }
  // 遍历文件夹内的所有文件
  files.forEach(filename => {
    // 只处理.js文件
    if (path.extname(filename) === '.js') {
      // 设置输入和输出文件的完整路径
      let encodeFilePath = path.join(folderPath, filename);
      let decodeFilePath = path.join(folderPath, filename); // 输出文件名与输入相同


      // 读取参数
      let type = common;
      for (let i = 2; i < process.argv.length; i += 2) {
        if (process.argv[i] === '-t') {
          type = process.argv[i + 1]
        }
        if (process.argv[i] === '-i') {
          encodeFile = process.argv[i + 1]
        }
        if (process.argv[i] === '-o') {
          decodeFile = process.argv[i + 1]
        }
      }



      // 读取源代码
      const sourceCode = fs.readFileSync(encodeFilePath, { encoding: 'utf-8' });

      // 净化源代码
      let code
      if (type === 'sojson') {
        code = PluginSojson(sourceCode)
      } else if (type === 'sojsonv7') {
        code = PluginSojsonV7(sourceCode)
      } else if (type === 'obfuscator') {
        code = PluginObfuscator(sourceCode)
      } else if (type === 'awsc') {
        code = PluginAwsc(sourceCode)
      } else if (type === 'jjencode') {
        code = PluginJjencode(sourceCode)
      } else {
        code = PluginCommon(sourceCode)
      }

      // 输出代码
      if (code) {
        fs.writeFile(decodeFilePath, code, () => { })
      }


    }
  });
});
