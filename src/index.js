



/////Идеи///////

// * Умер- можешь воскреснуть 
// * Повышать ранг на кнопку по работе + за определенные скиллы
// * Cюжетная компания в виде диалогов и выборов с музыкой на сайте https://zvukipro.com/mult/737-zvuki-piratov.html
// * Function music add file.js
// * Save game 
////////////////


import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./Alert.js"
import Resources from './Resources.ts';
import "@styles/style.scss";
import SaveGameManager from './SaveGame/SaveGame';
import Player from './Player/Player';





library.add(fas, far, fab);
dom.i2svg();


const saveGameManager = new SaveGameManager();
//saveGameManager.SaveGame();
//saveGameManager.LoadGame();


function LoadDom() {
  TransitionNextDay.classList.add("done-action");
  WinLose.classList.add("done-action-");
  setTimeout(() => {
    preloader = document.querySelector(".preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
      ShowOrHiddenWindow("none");
      ShowMainGame("none");
      moveBarExperience(0);
      ShowWinSkills("none");
      CirclePointSkills.style.display   = "none";
      //FieldMoney.innerHTML = Money;
     // FieldFood.innerHTML = Food; // ФИКС
      showHP();
      ShowPointSkills();
    }
  }, 2000);
}
function SoundTrack() {
  let MainSoundTrack = new Audio("audio/SoundTrackMain.mp3");
  MainSoundTrack.autoplay = true;
  MainSoundTrack.loop = true;
}
/////////ALL WINDOW////////////////////
function ShowOrHiddenWindow(e) {
  IndicatorRes.style.display = e;
}
function hiddenStartMenu(e) {
  StartMenuSection.style.display = e;
}
function ShowMainGame(e) {
  InterFace.style.display = e;
}
function GameFood(e) {
  WindFood.style.display = e;
}
function HiddenOrShowWinChoice(e) {
  WinChoice.style.display = e;
}
function GameNight(e) {
  WinNight.style.display = e;
}
function GameWorks(e) {
  WorksWin.style.display = e;
}
function ControlWinWork($1, $2, $3, $4) {
  WorkOne.style.display = $1;
  WorkTwo.style.display = $2;
  WorkThree.style.display = $3;
  WorkFour.style.display = $4;
}
function ShowWinSkills(e){
  WinSkills.style.display=e;
}
//////////////////////////////////////////////
window.addEventListener("load", LoadDom);

const IndicatorRes = document.getElementById("UpMenu");
const BtnPlayGame = document.getElementById("BtnPlayGame");
const StartMenuSection = document.getElementById("StartMenuSection");
const InterFace = document.getElementById("InterFace");
let preloader = document.querySelector(".preloader");
const ExitOutsideGame = document.getElementById("ExitOutsideGame");
const BtnFood = document.getElementById("BuyFood");
const WindFood = document.getElementById("GameFood");
const WinChoice = document.querySelector(".game-window");
const WinNight = document.getElementById("GameNight");

BtnPlayGame.addEventListener("click", LaunchGame);
function LaunchGame() {
  preloader.classList.remove("done");
  GameFood("none");
  GameNight("none");
  GameWorks("none");
  ShowOrHiddenWindow("flex");
  hiddenStartMenu("none");
  ShowMainGame("block");
  setTimeout(() => {
    let preloader = document.querySelector(".preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
      SoundTrack();
    }
  }, 2000);
}
ExitOutsideGame.addEventListener("click", ExitOutsideGameMove);
function ExitOutsideGameMove() {
  ShowOrHiddenWindow("none");
  hiddenStartMenu("block");
  ShowMainGame("none");
}
BtnFood.addEventListener("click", showWindFood);
function showWindFood() {
  GameFood("block");
  HiddenOrShowWinChoice("none");
}

////////////////////////////Main indicator RES///////////
const FieldMoney = document.getElementById("FieldMoney");
const FieldFood = document.getElementById("FieldFood");
const FieldNight = document.getElementById("FieldMoon");
const FieldHealth = document.getElementById("FieldHealth");

const res = new Resources();
console.log(res.getDataResources);

console.log(res.InitMechanics());

//let Food = 0;
//let Night = 0;

let Money = 100;
let Day = 1;
let maxHp  =  100;
let moveHp =   100;
///////////////HP INDICATOR////////////////////////////
function showHP(){
let HpPerson=100*(moveHp/maxHp);
let Health = HpPerson.toFixed(2);;
FieldHealth.innerHTML=Health+"%";
}
////////////////////////Food interface//////////////////////
//let CountFood = 0;
let PriceFood = 15;
const BtnAddFood = document.getElementById("AddFood");
const BtnRemoveFood = document.getElementById("RemoveFood");
//const FieldCountChoiceFood = document.getElementById("FieldCountChoiceFood");
//const FieldMoneyForFood = document.getElementById("MoneyForFood");
const BtnBuyFood = document.getElementById("BtnBuyFood");
let SpendMoney = 0;
const BackBtnFoodPage = document.getElementById("BackBtnFoodPage");
const BackBtnNightPage = document.getElementById("BackBtnNigthPage");


BtnAddFood.addEventListener("click", ()=>{

  console.log(res._listMechanics[0].tradeFood.BuyItem(1))
});



BtnRemoveFood.addEventListener("click", ()=>  console.log(res._listMechanics[0].tradeFood.RemoveItem(1)));





BtnBuyFood.addEventListener("click", ()=>console.log(res.checkTradeFoodTransaction()));


BackBtnFoodPage.addEventListener("click", BackBtnFoodPageActive);
function BackBtnFoodPageActive() {
  GameFood("none");
  HiddenOrShowWinChoice("block");
}
//////////Night settings///////////////////
const BtnBuyNight = document.getElementById("BuyNight");
BtnBuyNight.addEventListener("click", ShowWinNight);
function ShowWinNight() {
  GameNight("block");
  HiddenOrShowWinChoice("none");
}
/////////////Night Interface///////////////////
const AddNight = document.getElementById("AddNight");
const RemoveNight = document.getElementById("RemoveNight");
let priceNight = 20;

const FieldCountChoiceNight = document.getElementById("FieldCountChoiceNight");
const MoneyForNight = document.getElementById("MoneyForNight");
const BtnBuynigth = document.getElementById("BtnBuynigth");

BackBtnNightPage.addEventListener("click", BackBtnNightPageActive);
function BackBtnNightPageActive() {
  GameNight("none");
  HiddenOrShowWinChoice("block");
  //countNight=0;
  //FieldCountChoiceNight.innerHTML=0;
}

AddNight.addEventListener("click", () => console.log(res._listMechanics[1].tradeNight.BuyItem(1)));

RemoveNight.addEventListener("click", () => console.log(res._listMechanics[1].tradeNight.RemoveItem(1)));

BtnBuynigth.addEventListener("click", ()=>console.log(res.checkTradeNightTransaction()));


///////// WORKS WINDOW///////////////////
const WorksWin = document.getElementById("GameWorks");
const BtnWorks = document.getElementById("Works");
const Select = document.getElementsByTagName("select");
const BackBtnWorkPage = document.getElementById("BackBtnWorkPage");
const WorkOne = document.getElementById("WorkOne");
const WorkTwo = document.getElementById("WorkTwo");
const WorkThree = document.getElementById("WorkThree");
const WorkFour = document.getElementById("WorkFour");
const SelectSection = document.getElementById("ChangeWork");
const btnWorked = document.getElementById("btnWorked");
BtnWorks.addEventListener("click", ShowWinWorks);

function ShowWinWorks() {
  HiddenOrShowWinChoice("none");
  GameWorks("block");
  ControlWinWork("none", "none", "none", "none");
  SelectSection.selectedIndex = 0;
}
BackBtnWorkPage.addEventListener(
  "click",
   () => {
    HiddenOrShowWinChoice("block");
    GameWorks("none");
  }
);
SelectSection.onchange = function() {
  let SelectIndex = SelectSection.selectedIndex;
  let AllOptions = SelectSection.options;
  let resultIndexWork = AllOptions[SelectIndex].value;
  getValue();
  return console.log(resultIndexWork);
  function getValue() {
    switch (resultIndexWork) {
      case "1":
        ControlWinWork("block", "none", "none", "none");
        // WorkOneF();
        break;
      case "2":
        ControlWinWork("none", "block", "none", "none");
        //  WorkTwoF();
        break;
      case "3":
        ControlWinWork("none", "none", "block", "none");
        break;
      case "4":
        ControlWinWork("none", "none", "none", "block");
        break;
      case "0":
        ControlWinWork("none", "none", "none", "none");
        break;
    }
  }
};
////////////Function for Works show display ////////

SelectSection.addEventListener("change", function() {
  btnWorked.addEventListener("click", btnWorkedActive);
  switch (SelectSection.value) {
    case "1":
      btnWorked.innerHTML = "Работать";
      break;
    case "2":
      btnWorked.innerHTML = "Работать";
      break;
    case "3":
      btnWorked.innerHTML = "Просить ";
      break;
    case "4":
      btnWorked.innerHTML = "Искать";
      break;
  }
});

function btnWorkedActive() {
  if (SelectSection.value == "1") {
    AddShowExp();
    moveBar(WorkOneEnergy);
    TavernMechanick();
  } else if (SelectSection.value == "2") {
    AddShowExp();
    moveBar(WorkTwoEnergy);
    PortMechanick();
  } else if (SelectSection.value == "3") {
    moveBar(WorkThreeEnergy);
    PoorSailor();

  } else if (SelectSection.value == "4") {
    moveBar(WorkFourEnergy);
    RandomSearch();
  } else {
    WinAlertActive("Внимание!","Выберете работу!","rgb(255,0,0)");
  }
}

///////////////////////////Progress bar Energy Work WIndow//////
const progressBarEnergy = document.getElementById("progressEnergy");
let widthProgressBar = 100;
let MovePercentEnergy = 100;
let MaxPercentEnergy  = 100;
let WorkOneEnergy = 20;
let WorkTwoEnergy = 30;
let WorkThreeEnergy = 10;
let WorkFourEnergy = 50;
function moveBar(energy) {
  if (widthProgressBar > 0) {
    MovePercentEnergy -= energy;
    showProgressBarEnergySkill();
  } else {
    MovePercentEnergy = 0;
    showProgressBarEnergySkill();
  }
  progressBarEnergy.style.width = widthProgressBar + "%";
  progressBarEnergy.innerHTML = widthProgressBar + "%";
}
///////////////////Progress bar Experince player///////
const progressBarExperience     = document.getElementById("expPerson");
let   widthBarExperience        = 0;
let   CountLevelExperience      = 1;
let   PersonExperience          = 0;
let   pointSkills               = 0;
function moveBarExperience(exp){
  if(widthBarExperience>=100){
    CountLevelExperience++;
    WinLevelUp();
    pointSkills++;
    ShowPointSkills();
    widthBarExperience=0;
  }else if(widthBarExperience<100){
    widthBarExperience+=exp;
  }
  progressBarExperience.style.width = widthBarExperience + "%";
//  progressBarExperience.innerHTML = widthBarExperience + "%";
}
function AddShowExp(){
  let offsetX = event.clientX;
  let offsetY = event.clientY;
if(widthProgressBar>0){
  ShowCountExperience(10, offsetX, offsetY);
}else if(widthProgressBar==0 && indicatorEnergy==true){
  ShowCountExperience(10, offsetX, offsetY);
  indicatorEnergy=false;
}
}
function ShowCountExperience(count, x, y) {
  btnWorked.insertAdjacentHTML(
    "afterbegin",
    '<span class="plus" style="left:' +
      x +
      "px; top:" +
      y +
      'px;" id="plusAnimation' +
      '">+' +
      count +'XP'+
      "</span>"
  );
  setTimeout(
    'document.getElementById("plusAnimation").remove();',
    900
  );
}


//////////////////////////WORK 1/////////////////////////////////////
const FieldRankWO = document.getElementById("FieldRankWO");
let RankOfTavern = ["Уборщик", "Трактирщик", "Кок", "Корчмарь"];
let CountRankTavern = -1;
let PickTavern = 0;
function TavernMechanick() {
  switch (true) {
    case PickTavern < 40:
      CountRankTavern = 0;
      RandomTavern(20);
      break;
    case PickTavern >= 40 && PickTavern <= 60:
      CountRankTavern = 1;
      RandomTavern(40);
      break;
    case PickTavern >= 60 && PickTavern <= 80:
      CountRankTavern = 2;
      RandomTavern(60);
      break;
    case PickTavern >= 80 && PickTavern <= 100:
      CountRankTavern = 3;
      RandomTavern(100);
      break;
  }

  FieldRankWO.innerHTML = `Твой ранг:${RankOfTavern[CountRankTavern]}`;
}

function RandomTavern(event) {
  if (widthProgressBar > 0 && indicatorEnergy == true) {
    PickTavern++;
    let result = Math.ceil(Math.random() * event);
    Money += result;
    FieldMoney.innerHTML = Money;
    moveBarExperience(10);
  } else if (widthProgressBar == 0 && indicatorEnergy == true) {
    PickTavern++;
    let result = Math.ceil(Math.random() * event);
    Money += result;
    FieldMoney.innerHTML = Money;
    moveBarExperience(10);
    indicatorEnergy = false;
  } else if (widthProgressBar < 0) {
    MovePercentEnergy+=WorkOneEnergy;
    widthProgressBar += WorkOneEnergy;
    showProgressBarEnergySkill();
    WinAlertActive("Внимание!","Не хватает энергии!","rgb(255,0,0)");
    indicatorEnergy = false;
    progressBarEnergy.style.width = widthProgressBar + "%";
    progressBarEnergy.innerHTML = widthProgressBar + "%";
  }
}
////////////////////////////////////WORK 2/////////////////////////////
const RankWorkTwo       = document.getElementById("RankWorkTwoId");
let   RankOfPort        = ["Грузчик на складе","Охранник порта","Матрос на корабле","Главный по складу"];
let   CountRankOfPort   = 0;
let   PickPort          = 0;
function PortMechanick(){
  switch (true) {
    case PickPort < 30:
      CountRankOfPort = 0;
      ShowProgressBarPort(30);
      break;
    case PickPort >= 30 && PickPort <= 60:
      CountRankOfPort = 1;
      ShowProgressBarPort(60);
      break;
    case PickPort >= 60 && PickPort <= 100:
      CountRankOfPort = 2;
      ShowProgressBarPort(100);
      break;
    case PickTavern >= 100 && PickTavern <= 150:
      ShowProgressBarPort(150);
      CountRankOfPort = 3;
      break;
  }

  RankWorkTwo.innerHTML = `Твой ранг:${RankOfPort[CountRankOfPort]}`;
}
function ShowProgressBarPort(event){
    if (widthProgressBar > 0 && indicatorEnergy == true) {
      PickPort++;
      let result = Math.ceil(Math.random() * event);
      Money += result;
      FieldMoney.innerHTML = Money;
      moveBarExperience(10);
    } else if (widthProgressBar == 0 && indicatorEnergy == true) {
      PickPort++;
      let result = Math.ceil(Math.random() * event);
      Money += result;
      FieldMoney.innerHTML = Money;
      moveBarExperience(10);
      indicatorEnergy = false;
    } else if (widthProgressBar < 0) {
      widthProgressBar += WorkTwoEnergy;
      MovePercentEnergy+=WorkTwoEnergy;
      showProgressBarEnergySkill();
      WinAlertActive("Внимание!","Не хватает энергии!","rgb(255,0,0)");
      indicatorEnergy = false;
      progressBarEnergy.style.width = widthProgressBar + "%";
      progressBarEnergy.innerHTML = widthProgressBar + "%";
    }

}

//////////////////////////WORK 3//////////////////////////////////////
function PoorSailor() {
  let offsetX = event.clientX;
  let offsetY = event.clientY;
  const FieldPoor = document.getElementById("FieldPoor");
  let result = Math.ceil(Math.random() * 10);
  if (widthProgressBar > 0) {
    Money += result;
    FieldMoney.innerHTML = Money;
    FieldPoor.innerHTML = `Тебе дали : ${result}`;
    ShowCountExperience(1, offsetX, offsetY);
    moveBarExperience(1);

  } else if (widthProgressBar == 0 && indicatorEnergy == true) {
    Money += result;
    FieldMoney.innerHTML = Money;
    FieldPoor.innerHTML = `Тебе дали : ${result}`;
    indicatorEnergy = false;
    ShowCountExperience(1, offsetX, offsetY);
    moveBarExperience(1);
  } else if (widthProgressBar < 0) {
    widthProgressBar += WorkThreeEnergy;
    MovePercentEnergy+=WorkThreeEnergy;
    showProgressBarEnergySkill();
    indicatorEnergy = false;
    WinAlertActive("Внимание!","Не хватает энергии!","rgb(255,0,0)");
    progressBarEnergy.style.width = widthProgressBar + "%";
    progressBarEnergy.innerHTML = widthProgressBar + "%";
  }
}
////////////////////////////////WORK4//////////////////////////////
const ScreenRandomMoney = document.getElementById("ScreenRandomMoney");
const btnRandomSearch = document.getElementById("btnRandomSearch");
let indicatorEnergy = true;
//btnRandomSearch.addEventListener("click",RandomSearch);
function RandomSearch() {
  let offsetX = event.clientX;
  let offsetY = event.clientY;
  let MoneySearch = [50, 75, 100, 1000];
  let rand = 0;
  let r = Math.random();
  function MoneyRand() {
    switch (true) {
      case r < 0.1:
        rand = 3;
        Money += 1000;
        break;
      case r >= 0.1 && r < 0.5:
        rand = 1;
        Money += 75;
        break;
      case r >= 0.5 && r < 0.7:
        rand = 0;
        Money += 50;
        break;
      case r >= 0.7 && r < 1:
        rand = 2;
        Money += 100;
        break;
    }
    ScreenRandomMoney.innerHTML =
      "Найдено" + ":" + MoneySearch[rand] + " " + " пенсов ";
    FieldMoney.innerHTML = Money;
  }
  if (widthProgressBar > 0 && indicatorEnergy == true) {
    MoneyRand();
    ShowCountExperience(5, offsetX, offsetY);
    moveBarExperience(5);
  } else if (widthProgressBar == 0 && indicatorEnergy == true) {
    MoneyRand();
    ShowCountExperience(5, offsetX, offsetY);
    moveBarExperience(5);
    indicatorEnergy = false;
  } else if (widthProgressBar < 0) {
    widthProgressBar += WorkFourEnergy;
    MovePercentEnergy+=WorkFourEnergy;
    showProgressBarEnergySkill();
    WinAlertActive("Внимание!","Не хватает энергии!","rgb(255,0,0)");
    indicatorEnergy = false;
    progressBarEnergy.style.width = widthProgressBar + "%";
    progressBarEnergy.innerHTML = widthProgressBar + "%";
  }
}
/////////////Function NEXT DAY///////////
const BtnNextDay = document.getElementById("BtnNextDay");
const TransitionNextDay = document.querySelector(".transition-next-day");
const TxtTransitionDay = document.querySelector(".txt-next-day");
const WinLose = document.querySelector(".win-lose-");

function RandomDeacreseHealth(event) {
  let result = Math.ceil(Math.random() * event);
  return result;

}
BtnNextDay.addEventListener(
  "click",
    () => {
    if (TransitionNextDay.classList.contains("done-action")) {
      Day++;
      TransitionNextDay.classList.remove("done-action");
      TxtTransitionDay.innerHTML = "Day" + "   " + Day;
    }
    setTimeout(() => {
      TransitionNextDay.classList.add("done-action");
    }, 2000);

    if (Food >= 2) {
      Food -= 2;
      FieldFood.innerHTML = Food;
    } else {
      moveHp -= RandomDeacreseHealth(10);
      showHP();
    }
    if (Night >= 1) {
      Night -= 1;
      FieldNight.innerHTML = Night;
    } else {
      moveHp -= RandomDeacreseHealth(10);
      showHP();
    }
     MovePercentEnergy=MaxPercentEnergy;
    showProgressBarEnergySkill()
    CheckHealth();
    indicatorEnergy = true;
  }
);
function CheckHealth() {
  let TextWinLose = document.querySelector(".txt-win-lose-");
  if (moveHp <= 0) {
    Health = 0;
    if (WinLose.classList.contains("done-action-")) {
      WinLose.classList.remove("done-action-");
      TextWinLose.innerHTML = `Игра окончена.Здоровье:${Health}%`;
    }
  }
}
//////////////LEVEL UP///////////////////////////////////////////////////
function WinLevelUp(){
  const WinLevel        = document.getElementById("WinLevelUp");
  //const WinLevel      = document.querySelector(".up-level");
  const AgreeLevelUp    = document.getElementById("AgreeLevelUp");
  const FieldYourLevel  = document.getElementById("FieldYourLevel");
      WinLevel.classList.add("enable");
      FieldYourLevel.innerHTML=`Ваш уровень: ${CountLevelExperience}`;
      AgreeLevelUp.addEventListener("click",disableWinLevel=()=>{
        WinLevel.classList.remove("enable");
      })
}
//////////////////SHOW YOUR SKILLS POINT////////////////////////
const BackBtnSkillsPage       =   document.getElementById("BackBtnSkillsPage");

function ShowPointSkills(){
  const FieldShowPoint       =     document.getElementById("FieldShowPoint");
  const CirclePointSkills    =     document.getElementById("CirclePointSkills");
if(pointSkills>0){
  FieldShowPoint.innerHTML=pointSkills;
  CirclePointSkills.style.display   = "block";
}else{
  CirclePointSkills.style.display   = "none";
}
}
const BtnCheckSkills        = document.getElementById("BtnCheckSkills");
const WinSkills             = document.getElementById("WinSkills");
BtnCheckSkills.addEventListener("click",BtnShowWinSkills);
function BtnShowWinSkills(){
  HiddenOrShowWinChoice("none");
  ShowWinSkills("block");
}
BackBtnSkillsPage.addEventListener("click",()=>{
  HiddenOrShowWinChoice("block");
  ShowWinSkills("none");
})
//////////////SKILLS///////////////////
//1
const SkillHealth       =   document.getElementById("SkillHealth");

SkillHealth.addEventListener("click",SkillHealthActive);
function SkillHealthActive(){
  if(pointSkills>0){
    moveHp+=10;
    maxHp+=10;
    pointSkills--;
    showHP();
    ShowPointSkills();
  }else{
    WinAlertActive("Внимание!","Не хватает очков навыка!","rgb(255,0,0)");
  }
}
///////////2 Night price//////////
function SkillsPriceNight(e){
  let stock = priceNight*(e/100);
  priceNight-=stock;
  let result = priceNight.toFixed(2);
  fieldPriceNight.innerHTML=`1 ночлег-${result} пенсов!`;
}

const skillEloquence     = document.getElementById("skillEloquence");
const fieldPriceNight    = document.getElementById("fieldPriceNight");


skillEloquence.addEventListener("click",skillEloquenceActive);
function skillEloquenceActive(){
  if(pointSkills>0){
    pointSkills--;
    SkillsPriceNight(1);
    SkillsPriceFood(0.5);
    ShowPointSkills();
  }
  else{
    WinAlertActive("Внимание!","Не хватает очков навыка!","rgb(255,0,0)");
  }
}
///////2 Food Price/////////
const  fieldPriceFood   =  document.getElementById("fieldPriceFood");

function SkillsPriceFood(e){
  let stock = PriceFood*(e/100);
  PriceFood-=stock;
  let result = PriceFood.toFixed(2);
  fieldPriceFood.innerHTML=`1 паёк-${result} пенсов!`;
}
///////////3 Progress bar ENERGY/////////
function showProgressBarEnergySkill(){
  let ProgressBarEnergyNow=100*(MovePercentEnergy/MaxPercentEnergy);
  widthProgressBar = ProgressBarEnergyNow.toFixed(2);;
  progressBarEnergy.style.width = widthProgressBar + "%";
  progressBarEnergy.innerHTML = widthProgressBar + "%";
  }
  const SkillPower  =   document.getElementById("SkillPower");

  SkillPower.addEventListener("click",SkillPowerActive);
  function SkillPowerActive(){
    if(pointSkills>0){
      pointSkills--;
      MovePercentEnergy+=10;
      MaxPercentEnergy+=10;
      ShowPointSkills();
      showProgressBarEnergySkill();
    }else{
      WinAlertActive("Внимание!","Не хватает очков навыка!","rgb(255,0,0)");
    }
  }

///////////////Alerts WIN///////////////////
const WinAlert      =     document.getElementById("WinAlert");
const TextAlert     =     document.getElementById("TextAlert");
const TypeAlert     =     document.getElementById("TypeAlert");

function WinAlertActive($type,$text,$color){
const ColoursAlert    = document.querySelector(".all-alers-win");
if(!WinAlert.classList.contains("active-alert")){
  WinAlert.classList.add("active-alert");
}
setTimeout(() => {
  WinAlert.classList.remove("active-alert");
},2000);

TypeAlert.innerHTML=$type;
TextAlert.innerHTML=$text;
ColoursAlert.style.backgroundColor= $color;
}
/*WinAlert.insertAdjacentHTML(
  "afterbegin",
  `<div class="all-alerts-win id="WinAlert" style="margin-top:80px">
  <div class="type-alert" id="TypeAlert">${clon}</div>
  <div class="txt-alert" id="TextAlert">${clon}</div>
  </div>`
);
setTimeout(
  'document.getElementById("WinAlert").remove();',
  900
);*/
//////////////////SAVE CONTENT/////////////////////////////////
const BtnSaveGame     =   document.getElementById("BtnSaveGame");
let   SaveActive      = false;
let player = new Player();
 BtnSaveGame.addEventListener("click",()=>{
  saveGameManager.SaveGame(res.getDataResources,player.dataPlayer);
  saveGameManager.LoadGame();
  
});
// function SaveGame(){
//   WinAlertActive("Операция сохранения!","Сохранение успешно завершилось","rgb(26,161,95)");

//   localStorage.setItem("MoneyPlayer", JSON.stringify(Money));
//   localStorage.setItem("ShowMoneyPlayer",JSON.stringify(FieldMoney.innerHTML));
//   localStorage.setItem("ShowFoodPlayer",JSON.stringify(FieldFood.innerHTML ));
//   localStorage.setItem("FoodPlayer",JSON.stringify(Food));
//   SaveActive=true;
//   localStorage.setItem("SaveActive",JSON.stringify(SaveActive));
//   localStorage.setItem("NightPlayer",JSON.stringify(Night));
//   localStorage.setItem("ShowNightPlayer",JSON.stringify(FieldNight.innerHTML));
//   localStorage.setItem("healthPlayer",JSON.stringify(moveHp));
//   localStorage.setItem("ShowHealthPlayer",JSON.stringify(FieldHealth.innerHTML));
//   localStorage.setItem("PointSkills",JSON.stringify(pointSkills));
// }
window.addEventListener("load",  ()=>{
  
  //saveGameManager.LoadGame();
  ///saveGameManager.SaveGame();
});
  // function LoadedDataPerson(){
//   SaveActive            = JSON.parse(localStorage.getItem("SaveActive"));
//   if(SaveActive==true){
//   FieldMoney.innerHTML  = JSON.parse(localStorage.getItem("ShowMoneyPlayer"));
//   Money                 = JSON.parse(localStorage.getItem("MoneyPlayer"));
//   FieldFood.innerHTML   = JSON.parse(localStorage.getItem("ShowFoodPlayer"));
//   Food                  = JSON.parse(localStorage.getItem("FoodPlayer"));
//   Night                 = JSON.parse(localStorage.getItem("NightPlayer"));
//   FieldNight.innerHTML  = JSON.parse(localStorage.getItem("ShowNightPlayer"));
//   moveHp                = JSON.parse(localStorage.getItem("healthPlayer"));
//   FieldHealth.innerHTML = JSON.parse(localStorage.getItem("ShowHealthPlayer"));
//   pointSkills           = JSON.parse(localStorage.getItem("PointSkills"));
//   }
//   else return null;

//   };
  ////////////statistics //////////////
  const BtnStaticticsGame   =   document.getElementById('BtnStaticticsGame');

  BtnStaticticsGame.addEventListener("click",()=>{
    WinAlertActive("Внимание!","Этот объект находится в разработке","rgb(247,181,5)");
  })