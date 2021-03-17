'use strict';
let score=0;
let n=prompt('please Enter your name ?')
alert('Welcom '+n+' in my webpage');
alert('please answer the following qustions with yes/no  OR  y/n');
let q1 = function(){

let qus1 = prompt('Am I from Jordan ?').toLowerCase();
if(qus1=='yes' || qus1=='y'){
    console.log('yes is a correct answer');
    alert('yes is a correct answer');
    score++;
}
else
{
    alert('your answer is incorrect')
}
}
q1();
let q2 = function(){

let qus2 = prompt('Do I like pizza ?').toLowerCase();
if(qus2=='yes'|| qus2=='y'){
    console.log('yes is a correct answer');
    alert('yes is a correct answer');
    score++;
}
else
{
    alert('your answer is incorrect')
}
}
q2();

let q3 = function(){

let qus3 = prompt('Do I have a car ?').toLowerCase();
if(qus3=='no'|| qus3=='n'){
    console.log('no is a correct answer');
    alert('no is a correct answer');
    score++;
}
else
{
    alert('your answer is incorrect')
}
}
q3();
let q4 = function(){
let qus4 = prompt('Do I like playing card ?').toLowerCase();
if(qus4=='yes'|| qus4=='y'){
    console.log('yes is a correct answer');
    alert('yes is a correct answer');
    score++;
}
else
{
    alert('your answer is incorrect')
}
}
q4();
let q5 = function(){
let qus5 = prompt('Do I like parsley ?').toLowerCase();
if(qus5=='no'|| qus5=='n'){
    console.log('no is a correct answer');
    alert('no is a correct answer');
    score++;
}
else
{
    alert('your answer is incorrect');
}
}
q5();

let q6 =function(){
  let qus6 = prompt('Now guess the number between 0-50 ?');
for (let i=4 ; i>1 ; i--)
{
  if (qus6==17)
  {
    alert('you are great ')
    score++;
    i=0;
  }
  else if(qus6>17)
  {
    alert("You are too hight");
    qus6 = prompt('No guess the number between 0-50 another time ? you have just  ' +i+' time');
  }
  else if(qus6<17)
  {
    alert("You are too low");
    qus6 = prompt('No guess the number between 0-50 another time ? you have just' +i+' time');

  }
}


} 
q6();
alert('The correct answer was 17 ');

let q7=function(){

  let num=[12 , 49 , 97]
alert('Now I have 3 number in my mind  ')
let qus7 = prompt('let you guess one number of them between 0-100 (you have 6 attemp)');
for (let z=5 ; z>0 ; z--)
{
  if (qus7 == num[0] || qus7 == num[1] || qus7==num[2] )
  {
    alert('you are great')
    score++;
    z=0;
  }
  else
  {
    qus7 = prompt('guess one number of them between 0-100 you have just ' +z+ ' attemp');
    
  }
}
}
q7();

if (score>4)
{
  alert('You have are great person you have got  '+score+' out of 7')
}
else
{
  alert('Ohhhhh sory you got  '+score+' out of 7') ;
  alert('you didnt know me good ');
}

