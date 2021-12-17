// 引用区域
import { army, guild, guide, other } from '../scripts/data/data.js';
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
let atObj = { army, guild, guide, other };
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
// 获取data下子指令
function get_ats(atObj) {
  let ats_arr_desc = [];
  for (const key in atObj) {
    if (Object.hasOwnProperty.call(atObj, key)) {
      ats_arr_desc.push(atObj[key].at_arr());
    }
  }
  return ats_arr_desc;
}

// 全局声明区域
let at_list_ul = $('#at_list_ul'); // content内容的at_list_ul，at列表
let search_input = $('#search_input'); // 搜索输入框
let at_num = $('#at_num'); // 指令数量

// 指令数量渲染
function renderAtNum(e) {
  at_num.innerHTML = total_num(atObj);
}

// at_list_ul.innerHTML += `<li data-index="">123</li>`;
function renderAtList(e) {
  let ats_arr_desc = get_ats(atObj);
  for (let item of ats_arr_desc) {
    for (let key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        at_list_ul.innerHTML += `<li class="list" data-index="${key}${item[key]}" style="visibility: visible;">${key}</li>`;
      }
    }
  }
}

function searchAt(e) {
  // 搜索框筛选功能的实现
  // 用来CSS控制的style插入;
  let atSearchItemStyle = document.createElement('style');
  document.querySelector('head').appendChild(atSearchItemStyle);
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

// 开始执行函数
window.onload = function() {
  renderAtNum();
  renderAtList();
  searchAt();
};
