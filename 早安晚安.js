import { segment } from "oicq";
import fetch from "node-fetch";

//项目路径
const _path = process.cwd();

//简单应用示例

//1.定义命令规则
export const rule = {
  examplesq: {
    reg: "^#?(早安|晚安)$", //匹配消息正则，命令正则
    priority: 0.5, //优先级，越小优先度越高
    describe: "【晚安】", //【命令】功能说明
  },
};

//2.编写功能方法
//方法名字与rule中的examples保持一致
//测试命令 npm test 例子
export async function examplesq(e) {
  //e.msg 用户的命令消息
  console.log("用户命令：", e.msg);
  //执行的逻辑功能
  let url = `http://ovooa.com/API/image_Tnem`;
  
  let msg = [ 
    segment.at(e.user_id),  
    segment.image(url),
  ];
    
  //发送消息
  e.reply(msg);
  
  return true; //返回true 阻挡消息不再往下
}
