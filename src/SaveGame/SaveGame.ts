
import Resources from './../Resources';
import Player from './../Player/Player';
export default class SaveGameManager{

 

    // function SaveGame(){
    //     WinAlertActive("Операция сохранения!","Сохранение успешно завершилось","rgb(26,161,95)");
      
    //     localStorage.setItem("MoneyPlayer", JSON.stringify(Money));
    //     localStorage.setItem("ShowMoneyPlayer",JSON.stringify(FieldMoney.innerHTML));
    //     localStorage.setItem("ShowFoodPlayer",JSON.stringify(FieldFood.innerHTML ));
    //     localStorage.setItem("FoodPlayer",JSON.stringify(Food));
    //     SaveActive=true;
    //     localStorage.setItem("SaveActive",JSON.stringify(SaveActive));
    //     localStorage.setItem("NightPlayer",JSON.stringify(Night));
    //     localStorage.setItem("ShowNightPlayer",JSON.stringify(FieldNight.innerHTML));
    //     localStorage.setItem("healthPlayer",JSON.stringify(moveHp));
    //     localStorage.setItem("ShowHealthPlayer",JSON.stringify(FieldHealth.innerHTML));
    //     localStorage.setItem("PointSkills",JSON.stringify(pointSkills));
    //   }
    

    public SaveGame(__temp_res,__temp_data_player){
        //let __temp_res = new Resources();
      //  let __temp_data_player = new Player();
        let __obj_save = {
            resoucesPlayer:__temp_res,
            player : __temp_data_player
        }
        console.log(__obj_save)
        localStorage.setItem("data_game",JSON.stringify(__obj_save));
    }

    public LoadGame(){
        
      return JSON.parse(localStorage.getItem("data_game"));
    }

}
