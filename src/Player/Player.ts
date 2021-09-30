

export default class Player{

    private _health
            _skillsPoint

    constructor(){
        this._health = 100,
        this._skillsPoint = 0

        if(localStorage.getItem("data_game")){
            let __local_storage = JSON.parse(localStorage.getItem("data_game")).player;
            this.setPlayer(__local_storage._health,__local_storage._skillsPoint);
           console.log("Data Player found");
          }else{
            this._health = 100,
            this._skillsPoint = 0
          }
    }

    public setPlayer(health:number,skillPoints:number){
        this._health = health;
        this._skillsPoint = skillPoints;
    }
    get dataPlayer(){

        return{
            health : this._health,
            skillPoints : this._skillsPoint
        }
    }
}