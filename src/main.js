import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import { buildBoard } from './sudoku.js';
import { supplyGrid } from './sudoku.js';

//UI logic
$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    const goal = $('#number').val();
    const output = sudoku();
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});