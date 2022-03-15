import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animals = [
    { name: '9erd', emoji: '🐒' },
    { name: 'kelb', emoji: '🐶' },
    { name: 'dib', emoji: '🐺' },
    { name: 'mesh', emoji: '🐱' },
    { name: 'nmer', emoji: '🐅' },
    { name: 'fa8d', emoji: '🐆' },
    { name: '3awd', emoji: '🐎' },
    { name: 'tour', emoji: '🐂' },
    { name: 'begra', emoji: '🐄' },
    { name: '7ellouf', emoji: '🐷' },
    { name: 'khenzir', emoji: '🐗' },
    { name: '7awli', emoji: '🐏' },
    { name: 'khrof', emoji: '🐑' },
    { name: 'me3za', emoji: '🐐' },
    { name: 'jmel', emoji: '🐪' },
    { name: 'fil', emoji: '🐘' },
    { name: 'far', emoji: '🐭' },
    { name: 'Tobba', emoji: '🐀' },
    { name: '9nia', emoji: '🐰' },
    { name: 'doub', emoji: '🐻' },
    { name: 'kowala', emoji: '🐨' },
    { name: 'panda', emoji: '🐼' },
    { name: 'djaja', emoji: '🐓' },
    { name: 'fellous', emoji: '🐥' },
    { name: 'bTri9', emoji: '🐧' },
    { name: 'jrana', emoji: '🐸' },
    { name: 'timsa7', emoji: '🐊' },
    { name: 'fekroun', emoji: '🐢' },
    { name: '7ensh', emoji: '🐍' },
    { name: 'tinnin', emoji: '🐉' },
    { name: 'labalen', emoji: '🐳' },
    { name: 'dlfine', emoji: '🐬' },
    { name: '7outa', emoji: '🐟' },
    { name: 'RoTala', emoji: '🐙' },
    { name: 'kokiaj', emoji: '🐚' },
    { name: 'boubbousha', emoji: '🐌' },
    { name: 'douda', emoji: '🐛' },
    { name: 'nemla', emoji: '🐜' },
    { name: 'ne7la', emoji: '🐝' },
    { name: 'koksinil', emoji: '🐞' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
