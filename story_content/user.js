function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Z76OCpqngo":
        Script1();
        break;
      case "5mhrH097pDY":
        Script2();
        break;
      case "63pxrenvkar":
        Script3();
        break;
      case "65vQ48FSSku":
        Script4();
        break;
      case "5iIakJHvWlS":
        Script5();
        break;
      case "5gDnzpW5Zhf":
        Script6();
        break;
      case "5i1OAgtCXBg":
        Script7();
        break;
      case "5juusMZhWr2":
        Script8();
        break;
      case "67xsH3NkNXb":
        Script9();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var CharLength1=0;

var count= player.GetVar("Phone_Lifecell");

var numChars= count.length;

player.SetVar("CharLength1",numChars); 
}

function Script2()
{
  var player = GetPlayer();

var CharLength3=0;

var count= player.GetVar("Phone_Vodafone");

var numChars= count.length;

player.SetVar("CharLength3",numChars); 
}

function Script3()
{
  var player = GetPlayer();

var CharLength2=0;

var count= player.GetVar("Phone_Kievstar");

var numChars= count.length;

player.SetVar("CharLength2",numChars); 
}

function Script4()
{
  var p = GetPlayer();
var textentry = p.GetVar("FIO1");
var newTextentry = textentry.replace(/^\s+|\s+$/g, '');
p.SetVar("FIO1",newTextentry);
}

function Script5()
{
  var p = GetPlayer();
var textentry = p.GetVar("FIO2");
var newTextentry = textentry.replace(/^\s+|\s+$/g, '');
p.SetVar("FIO2",newTextentry);
}

function Script6()
{
  var p = GetPlayer();
var textentry = p.GetVar("FIO3");
var newTextentry = textentry.replace(/^\s+|\s+$/g, '');
p.SetVar("FIO3",newTextentry);
}

function Script7()
{
  var sumProcent = 0;


var sumFull = 0;


var Procent = 0;





var player = GetPlayer();



Procent = player.GetVar("Procent1");


if (Procent > 0){
sumProcent = 5;


sumFull = (Number(Procent) + Number(sumProcent));




}

console.log ("sumProcent" + sumProcent);


console.log ("sumFull" + sumFull);


player.SetVar("sumProcent", sumProcent);


player.SetVar("sumFull", sumFull);




}

function Script8()
{
  var cash = 0;




var 
fullSdacha= 0;

var player = GetPlayer();



var sumTotal = player.GetVar("sumFull");

cash = player.GetVar("Sdacha1");



if( cash != '' && cash>0 ){


fullSdacha = parseInt(Number(cash) - Number(sumTotal));




}


console.log ("cash" + cash);

player.SetVar("fullSdacha", fullSdacha);




}

function Script9()
{
  var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
var day = weekday[currentTime.getDay()];
var date = currentTime.getDate()
var months=new Array(12);
months[0]="01";
months[1]="02";
months[2]="03";
months[3]="04";
months[4]="05";
months[5]="06";
months[6]="07";
months[7]="08";
months[8]="09";
months[9]="10";
months[10]="11";
months[11]="12";
var month = months[currentTime.getMonth()];
var year = currentTime.getFullYear()
if (minutes < 10)
minutes = "0" + minutes
var timeString=hours + ":" + minutes
var dateString=date + ". " + month + ". " + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
player.SetVar("SystemTime",timeString);
player.SetVar("systemdateDayOfWeek",day);
player.SetVar("systemdateDay",date);
player.SetVar("systemdateMonth",month);
player.SetVar("systemdateYear",dateString1);
}

