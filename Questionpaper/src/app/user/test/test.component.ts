import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/test';
import { Answer } from 'src/app/answer';
import { TestService } from 'src/app/test.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   question:Test[]= []  //making array for storing questions in question array\\

   answer:Answer[]=[]

  constructor(private _service:TestService) { 
  }

  GetAllQuestion() //component always call servies then service hit the middleware
  {
    //subscribe is used to get the respose or store it.
    //subscribe will only work when you return it in service part
    //respose will store the response in question
    this._service.GetQuestion().subscribe(response => this.question=response)
    
  }

  ngOnInit(): void {
    this.GetAllQuestion()
  }

}
