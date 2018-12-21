function mytest()
{
var question1=document.forms["myform"]["choice1"].value;
var question2=document.forms["myform"]["choice2"].value;
var question3=document.forms["myform"]["choice3"].value;
var question4=document.forms["myform"]["choice4"].value;
var marks=0;
if(question1=="B")
{
   marks=marks+10;
   }
if(question2=="D")
{
   marks=marks+10;
   }
if(question3=="B")
{
   marks=marks+10;
}
if(question4=="C")
{
   marks=marks+10;
}
alert("your score is:"+marks);
}