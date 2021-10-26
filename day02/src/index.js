import $ from 'jquery'
import './css/index.css'

$(function () {
  $('li:even').css('backgroundColor', 'red')
  $('li:odd').css('backgroundColor', 'yellow')
})