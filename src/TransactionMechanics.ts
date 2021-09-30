import { Iresources, IFoodAction } from "./Resources"

export interface ItotalResult{
    changeItem:number,
    totalMoney:number
}

export default class TransactionMechanics{

  private _price:number
        _spendMoney:number
        _countTransactionItem:number
        __nameTransactionMechanics:string
        _localResources:Iresources

    constructor(_price,_spendMoney,_countTransactionItem,resources:Iresources,_name){
        this._price = _price;
        this._spendMoney = _spendMoney;
        this._countTransactionItem = _countTransactionItem;
        this._localResources = resources;
        this.__nameTransactionMechanics = _name;
        
        }

        public BuyItem (countCurrentItem : number) 
        
           {
               
               this._countTransactionItem += countCurrentItem;
               this._spendMoney = parseFloat((this._countTransactionItem* this._price).toFixed(1));
    
             
               return{
                   countItem : this._countTransactionItem,
                   spendMoney : this._spendMoney
               }
           }

           public RemoveItem (countCurrentItem : number) 
           {
               
                    if(this._countTransactionItem > 0){

                  this._countTransactionItem-=countCurrentItem;
                  this._spendMoney = parseFloat((this._countTransactionItem*this._price).toFixed(1));
               }else{
                   this._countTransactionItem = 0;
                   
               }
               return{
                countItem : this._countTransactionItem,
                   spendMoney : this._spendMoney
               }
           }
          
           public TransactionAction(resources :Iresources):ItotalResult {
               let ___localStorage = 0;
                    if(resources._money >= this._spendMoney){
                        ___localStorage += this._countTransactionItem;
                        resources._money-= this._spendMoney;
                    }else{
                        console.log("Не хватает денег!");
                    }
                    return {
                        changeItem : ___localStorage,
                        totalMoney : resources._money 

                    };
                }

}