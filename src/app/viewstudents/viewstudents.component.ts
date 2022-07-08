import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
 }
data=
[
{"name":"Rahul","age":24,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyK6VC1UacbsCU2hKSWCItKSrh1hRq35XDKg&usqp=CAU"},
{"name":"Tharun","age":15,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyK6VC1UacbsCU2hKSWCItKSrh1hRq35XDKg&usqp=CAU"},
{"name":"Amal","age":19,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyK6VC1UacbsCU2hKSWCItKSrh1hRq35XDKg&usqp=CAU"},
{"name":"Athul","age":20,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyK6VC1UacbsCU2hKSWCItKSrh1hRq35XDKg&usqp=CAU"}



]
}