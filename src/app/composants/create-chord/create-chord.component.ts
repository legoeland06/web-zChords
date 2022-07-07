import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-chord',
  templateUrl: './create-chord.component.html',
  styleUrls: ['./create-chord.component.css']
})
export class CreateChordComponent implements OnInit {

  Notes:string[]=["C","Cd","Db","D","Dd","Eb","E","F","Fd","Gb","G","Gd","Ab","A","Ad","Bb","B"];
  notes:string[]=["C","Cd","D","Eb","E","F","Fd","G","Ab","A","Bb","B"];
  note:string|null=null;
  quality:string|null=null;
  basse:string|null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
