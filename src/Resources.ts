import TransactionMechanics from "./TransactionMechanics";

export interface Iresources {
  _food: number;
  _money: number;
  _night: number;
  _day: number;
}

export interface IFoodAction {
  countFood: number;
  spendMoney: number;
}

export default class Resources {
  // food price

  private _priceFood: number;
  _priceNight : number;
  _spendMoney: number;
  _countTransactionFood: number;

  private _food: number;
  _money: number;
  _night: number;
  _day: number;

  public _listMechanics;

  constructor() {
    this._countTransactionFood = 0;
    this._listMechanics = [];
    this._priceNight = 20;
    this._priceFood = 15;
    this._spendMoney = 0;


    ////Подтяжка данных
    if(localStorage.getItem("data_game")){
      let __local_storage = JSON.parse(localStorage.getItem("data_game")).resoucesPlayer;
      this.setResources(__local_storage._food,__local_storage._money,__local_storage._night,__local_storage._day);
      console.log("Data  found");
    }else{
      this._food = 0;
      this._money = 100;
      this._night = 0;
      this._day = 1;
    }
    
  
  }

  public InitMechanics() {
    
    let tradeFood = new TransactionMechanics(
      this._priceFood,
      0,
      0,
      {
        _food: this._food,
        _money: this._money,
        _night: this._night,
        _day: this._day,
      },
      "TradeFood"
    );
    let tradeNight  = new TransactionMechanics(
      this._priceNight,
      0,
      0,
      {
        _food: this._food,
        _money: this._money,
        _night: this._night,
        _day: this._day,
      },
      "TradeNight"
    );


    this._listMechanics.push({ tradeFood },{tradeNight});
    console.log(this._listMechanics);

    return this._listMechanics;
  }

  public checkTradeFoodTransaction() {
    let tradeFoodM = this._listMechanics[0].tradeFood.TransactionAction({
      _food: this._food,
      _money: this._money,
      _night: this._night,
      _day: this._day,
    });
    this._food += tradeFoodM.changeItem;
    this._money = tradeFoodM.totalMoney;

    this.getDataResources;
  }
  public checkTradeNightTransaction() {
    let tradeNightM = this._listMechanics[1].tradeNight.TransactionAction({
      _food: this._food,
      _money: this._money,
      _night: this._night,
      _day: this._day,
    });
    this._night += tradeNightM.changeItem;
    this._money = tradeNightM.totalMoney;

    this.getDataResources;
  }





  public AddFood(countFood: number) {
    
    this._food += countFood;
  }

  public AddMoney(countMoney: number) {
    this._money += countMoney;
  }
  public RemoveMoney(countMoney: number) {
    this._money -= countMoney;
  }

  public RemoveNight(countNight: number) {
    this._night -= countNight;
  }

  public AddDay(countDay: number) {
    this._day += countDay;
  }
  public setResources(food:number,money:number,night:number,day:number){
    this._food = food;
    this._money = money;
    this._night = night;
    this._day = day;


  }

  get getDataResources(): Iresources {
    console.log(
      `Food:${this._food} Money:${this._money} Night:${this._night} Day:${this._day}`
    );
    return {
      _food: this._food,
      _money: this._money,
      _night: this._night,
      _day: this._day,
    };
  }
}
