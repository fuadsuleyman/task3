import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}

  task3Form: FormGroup;

  // what value user enter via input
  enteredNumArray: string;

  // we clean non numbers and add here only numbers but number format
  numArrayString;

  // we convert string number array to this number(integer) array
  numArray = [];

  // value of this variable is our final result
  result;

  // getter, we use this in our app.component.html file
  get numbers (){
    return this.task3Form.get('numbers');
  }

  // here i get form value
  ngOnInit(){
    this.task3Form = this.formBuilder.group({
      numbers: ['',[Validators.required]]
    })
  }
  
  // all my solution in this here
  onAddArray(){
    this.result = null;
    let len: number = 3;

    // assing value which we get from input
    this.enteredNumArray = this.task3Form.value.numbers;

    // always reset our input
    this.task3Form.reset();

    // this step important too, for next tests we should have empty array
    this.numArrayString = [];

    // with regex we clean non number values
    this.numArrayString = this.enteredNumArray.match(/-?\d+/g);

    // this step important too, for next tests we should have empty array
    this.numArray = [];

    // get our integer array
    for (const num of this.numArrayString) {
      this.numArray.push(+num);
    }
    
    console.log(`our num array: ${this.numArray}`);

    let resultArr;
    
   
for(let j = 0; j < Math.pow(2, this.numArray.length); j++)
  {
    resultArr = [];
    let i = this.numArray.length - 1; 
     do
      {
      // here we get our array with combinations
      if( (j & (1 << i)) !== 0)
          {
             resultArr.push(this.numArray[i]);
           }
        }  while(i--);
    let remCountDec = 0;
    let remCountAcs = 0;

    // here we check and count decrecing and acsending arrays
    if( resultArr.length === len)
       {
          for (let k = 0; k < resultArr.length-1; k++){
            if(resultArr[k]>resultArr[k+1]){
              remCountAcs++;
            }
          }
          if(remCountAcs === 2){
            this.result++;
          }
          for (let k = 0; k < resultArr.length-1; k++){
            if(resultArr[k]<resultArr[k+1]){
              remCountDec++;
            }
          }
          if(remCountDec === 2){
            this.result++;
          }

          if(this.result === null){
            this.result = 0;
          }
          
        }
    }
    }
  }


