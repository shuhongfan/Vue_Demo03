// 1. 使用 ES6 模块化的语法导入 jquery
import $ from 'jquery'
import './css/index.css'
import './css/index.less'

// 2. 实现隔行变色的效果
$(function () {
  $('li:odd').css('backgroundColor', 'pink')
  $('li:even').css('backgroundColor', 'cyan')
})

class Person {
  static info = 'person info'
}

console.log(Person.info)
