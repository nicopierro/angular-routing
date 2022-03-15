import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits = [
    { name: 'l3ineb', emoji: '🍇' },
    { name: 'btikha', emoji: '🍈' },
    { name: 'della7a', emoji: '🍉' },
    { name: 'limouna', emoji: '🍊' },
    { name: '7ameDa', emoji: '🍋' },
    { name: 'banana', emoji: '🍌' },
    { name: 'ananaSa', emoji: '🍍' },
    { name: 'teffa7a 7emra', emoji: '🍎' },
    { name: 'teffa7a kheDra', emoji: '🍏' },
    { name: 'nGaSa', emoji: '🍐' },
    { name: 'khokha', emoji: '🍑' },
    { name: '7eb lmlouk', emoji: '🍒' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
