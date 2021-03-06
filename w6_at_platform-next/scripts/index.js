// 引用区域
import { army, guild, guide, at } from '../scripts/data/data.js';
// 全局获取元素方法，get方法比query的性能好
function $(ele_ID) {
  let first_char = ele_ID[0];
  let real_str = ele_ID.slice(1);
  switch (first_char) {
    case '#':
      //   console.log(real_str);
      return document.getElementById(`${real_str}`);
    case '.':
      return document.getElementsByClassName(`${real_str}`);
    default:
      return document.getElementsByTagName(`${ele_ID}`);
  }
}
// 全局组合对象区域
let atObj = { army, guild, guide, at };

// 全局声明区域
let at_list_ul = $('#at_list_ul'); // content内容的at_list_ul，at列表
let search_input = $('#search_input'); // 搜索输入框
let search_btn = $('#search_btn'); // 重置按钮
let at_num = $('#at_num'); // 指令数量
let at_name = $('#at_name'); // 指令名称
let at_desc = $('#at_desc'); // 指令描述
// 指令用法
let at_short = $('#at_short');
let at_params_short = $('#at_params_short');
let at_long = $('#at_long');
let at_params_long = $('#at_params_long');
let at_child_params_list_ul = $('#at_child_params_list_ul');
// copy按钮
let at_btn_copy_short = $('#btn_copy_short');
let at_btn_copy_long = $('#btn_copy_long');
// reset按钮
let reset_btn = $('#btn_reset');

// 获取指令数量
function total_num(atObj) {
  let num = 0;
  for (const key in atObj) {
    if (Object.hasOwnProperty.call(atObj, key)) {
      num += atObj[key].at_length();
      //   console.log(atObj[key]);
    }
  }
  return num;
}
// 指令数量渲染
function renderAtNum(e) {
  at_num.innerHTML = total_num(atObj);
}

// at_list_ul.innerHTML += `<li data-index="">123</li>`;
function renderAtList(e) {
  Object.values(atObj).forEach(item => {
    Object.values(item.detail).forEach(key => {
      at_list_ul.innerHTML += `<li class="list" data-name="${key.name}" data-parentName="${key.parentName}" data-index="${key.name}${key.desc}" style="visibility: visible;">${key.name}</li>`;
    });
  });
  listenerAt();
}

function listenerAt(e) {
  let at_li_list = $('.list');
  // console.log(at_li_list);
  for (const item of at_li_list) {
    // 每个at指令携带信息
    let at_parentName = item.getAttribute('data-parentName');
    let at_name = item.getAttribute('data-name');
    let ctx = atObj[at_parentName]['detail'][at_name];
    item.ctx = ctx;
    item.addEventListener('click', renderAtInfo);
  }
}
function renderAtInfo(e) {
  let at_target = e.target.ctx;
  at_name.innerText = at_target.name;
  at_desc.innerText = at_target.desc;
  // 指令信息：父级模块名，指令名
  let atParentName = e.target.ctx.parentName;
  let atAt = e.target.ctx.name;
  resetParams();
  function _init() {
    // 渲染短指令
    // console.log(atParentName);
    // 如果不是at根目录下的，需要字符串拼接
    let atStr_short = atParentName !== 'at' ? `at.${atParentName}.${atAt}` : `at.${atAt}`;
    at_short.innerText = atStr_short;
    // 渲染长指令
    let atStr_long =
      atParentName !== 'at'
        ? `['at','${atParentName}/${atAt}','参数']`
        : `['at','${atAt}','参数']`;
    at_long.innerText = atStr_long;
  }
  _init();

  let paramsList = at_target.params;
  // 先清空
  at_child_params_list_ul.innerHTML = '';
  // 重置初始指令
  at_params_long.style.display = 'none';
  if (paramsList) {
    paramsList.forEach((element, params_idx) => {
      let value = Object.values(element);
      at_child_params_list_ul.innerHTML += `<li>
      <div>
        <span>${value[0]}：</span>
        <span><input type="text" maxlength="8" id="paramsInput${params_idx}"/></span>
      </div>
    </li>`;
    });
    // 测试input的onInput事件
    // 以通配符的方式，获取所有id以paramsInput为开头的input节点
    let params_inputs = document.querySelectorAll("input[id^='paramsInput']");
    // console.log(params_inputs);
    for (let i = 0; i < params_inputs.length; i++) {
      // 吐了，强制变量提升
      eval(`let a_${i} = '';window['a_${i}'] = a_${i}`);
      // console.log(window[`a_${i}`]);
    }
    let str = '';
    // let params_list = [];
    params_inputs.forEach((input, index) => {
      // console.log(index);
      input.oninput = () => {
        window[`a_${index}`] = input.value;
        for (let i = 0; i < params_inputs.length; i++) {
          str += String(window[`a_${i}`]) ? "'" + String(window[`a_${i}`]) + "'," : '空,';
          // params_list.push(String(window[`a_${i}`]) ? String(window[`a_${i}`]) : '空');
        }
        let atParams_long_text = str.slice(0, -1);
        at_params_short.innerText = '(' + atParams_long_text + ')';
        // atParams_short.innerText = '(' + params_list + ')';
        at_params_long.style.display = 'none';

        // 渲染长指令
        let atStr_long =
          atParentName !== 'at'
            ? `['at','${atParentName}/${atAt}',${atParams_long_text}]`
            : `['at','${atAt}',${atParams_long_text}]`;
        at_long.innerText = atStr_long;
        // 吐了，竟然每次触发oninput就拿一次完整值
        str = '';
        // params_list = [];
      };
    });
  }
}

function addGlobalStyle() {
  // 用来CSS控制的style插入;
  let atSearchItemStyle = document.getElementsByTagName('style');
  if (atSearchItemStyle.length === 0) {
    atSearchItemStyle = document.createElement('style');
    document.querySelector('head').appendChild(atSearchItemStyle);
  }
  return atSearchItemStyle;
}
function searchAt(e) {
  // 搜索框筛选功能的实现
  let atSearchItemStyle = addGlobalStyle();
  search_input.addEventListener('input', function() {
    let val = this.value.trim().toLowerCase();
    if (val !== '') {
      // at_list_ul.style.visibility = 'visible';  // 这里原本是给指令按钮外部的ul添加的，但是现在不需要整个区域都隐藏，所以外部ul不需要添加style
      // eleStyle.innerHTML = '.list[data-index*="' + this.value + '"] { display: none; }';
      atSearchItemStyle.innerHTML =
        '.list:not([data-index*="' + this.value + '"]) { display: none; } ';
    } else {
      atSearchItemStyle.innerHTML = '';
      // at_list_ul.style.visibility = 'block';
    }
  });
}

function eventListener() {
  search_btn.addEventListener('click', resetSearchInput);
  at_btn_copy_short.addEventListener('click', copyShort);
  at_btn_copy_long.addEventListener('click', copyLong);
  reset_btn.addEventListener('click', resetParams);
}

function resetSearchInput(e) {
  let atSearchItemStyle = addGlobalStyle()[0];
  search_input.value = '';
  atSearchItemStyle.innerHTML = '';
  // 指令详情的重置
  // 先清空本身
  at_child_list_ul.innerHTML = '';
  // 清空子模块下内容：指令名称+指令描述+指令参数
  at_name.innerText = '{示例指令名称}';
  at_desc.innerText = '{示例指令描述}';
  at_child_params_list_ul.innerHTML = '';
  // 清空长、短指令内容
  at_short.innerText = 'at.{模块}{.指令名}';
  at_long.innerText = '{prot_$}';
  // 清空指令参数内容
  at_params_short.innerText = '(参数)';
  at_params_long.innerText = '(参数)';
  // 重置初始指令
  at_params_long.style.display = 'inline-block';
}
// 短指令的复制方法
function copyShort(e) {
  let at_short_ctx = at_short.innerText;
  let at_short_params_ctx = at_params_short.innerText;
  let entireAt_short = at_short_ctx + at_short_params_ctx;
  navigator.clipboard.writeText(entireAt_short);
  alert('复制短指令成功' + '\n' + entireAt_short);
}

// 长指令的复制方法
function copyLong(e) {
  let at_long_ctx = at_long.innerText;
  let entireAt_long = `prot_$.doSendToServer_$('game.at_admin','on_com_at',${at_long_ctx})`;
  navigator.clipboard.writeText(entireAt_long);
  alert('复制长指令成功' + '\n' + entireAt_long);
}

// 指令参数重置方法
function resetParams(e) {
  // 指令参数重置
  // 以通配符的方式，获取所有id以paramsInput为开头的input节点
  let params_inputs = document.querySelectorAll("input[id^='paramsInput']");
  if (params_inputs.length == 0) return;
  params_inputs.forEach(function(item) {
    // 将每个paramsInput的value清空，并重调用onInput方法，更新已经输入的指令参数
    item.value = '';
    item.oninput();
  });
  at_params_short.innerText = '(参数)';
  at_params_long.innerText = '(参数)';
  at_params_long.style.display = 'inline-block';
}

// 开始执行函数
window.onload = function() {
  renderAtNum();
  renderAtList();
  searchAt();
  eventListener();
};
