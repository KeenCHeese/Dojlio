import * as Room from 'pixel_combats/room';
import * as Basic from 'pixel_combats/basic';
var WaitingPlayersTime = 1;
var BuildBaseTime = 0;
var GameModeTime = 120;
var EndOfMatchTime = 10;
// константы имен
var WaitingStateValue = "Waiting";
var BuildModeStateValue = "BuildMode";
var GameStateValue = "Game";
var EndOfMatchStateValue = "EndOfMatch";

// посто€нные переменные
var mainTimer = Room.Timers.GetContext().Get("Main");
var stateProp = Room.Properties.GetContext().Get("State");
mainTimer.OnTimer.Add(function() {
 switch (stateProp.Value) {
 case WaitingStateValue:
  SetBuildMode();
  break;
 case BuildModeStateValue:
  SetGameMode();
  break;
 case GameStateValue:
  SetEndOfMatchMode();
  break;
 case EndOfMatchStateValue:
  RestartGame();
  break;
 }
});
// задаем первое игровое состо€ние
SetWaitingMode();

// состо€ни€ игры
function SetWaitingMode() {
 stateProp.Value = WaitingStateValue;
 Room.Ui.GetContext().Hint.Value = "";
 Room.Spawns.GetContext().enable = true;
 mainTimer.Restart(WaitingPlayersTime);
}

function SetBuildMode() 
{
 stateProp.Value = BuildModeStateValue;
 Room.Ui.GetContext().Hint.Value = "";
 mainTimer.Restart(BuildBaseTime);
 Room.Spawns.GetContext().enable = true;
}
function SetGameMode() 
{
 stateProp.Value = GameStateValue;
 Room.Ui.GetContext().Hint.Value = "";

 mainTimer.Restart(GameModeTime);
}
function SetEndOfMatchMode() {
 stateProp.Value = EndOfMatchStateValue;
 Room.Ui.GetContext().Hint.Value = "";

 var spawns = Room.Spawns.GetContext();
 spawns.enable = false;
 spawns.Despawn();
 Game.GameOver(LeaderBoard.GetTeams());

mainTimer.Restart(EndOfMatchTime);
}
function RestartGame() {
 Room.Game.RestartGame();
}

Room.Damage.OnDeath.Add(function(player) {
  ++player.Properties.Deaths.Value;
var prop = player.Properties;
var inv = player.inventory;
prop.Get("Crate").Value = 0;
player.Ui.Hint.Value = "Ты был Убит !"
inv.Main.Value = false;
inv.Melee.Value = false;
inv.Secondary.Value = false;
inv.Explosive.Value = false;
inv.Build.Value = false;
if (prop.Get("melee").Value){
inv.Melee.Value = true;
}
if (prop.Get("gun").Value){
inv.Secondary.Value = true;
}
if (prop.Get("main").Value){
inv.Main.Value = true;
}
if (prop.Get("ex").Value){
inv.Explosive.Value = true;
}
if (prop.Get("build").Value){
inv.Build.Value = true;
}
});

Room.Damage.GetContext().DamageOut.Value = true; 
Room.GameMode.Parameters.GetBool("Damage"); 
Room.BreackGraph.OnlyPlayerBlocksDmg = false; 
Room.GameMode.Parameters.GetBool("PartialDesruction"); 
Room.BreackGraph.WeakBlocks = 
Room.BreackGraph.Damage = false;
Room.GameMode.Parameters.GetBool("LoosenBlocks"); 
Room.Room.Build.GetContext().FloodFill.Value = false;
 Room.GameMode.Parameters.GetBool("FloodFill"); 
Room.Room.Build.GetContext().FillQuad.Value = false;
 Room.GameMode.Parameters.GetBool("FillQuad"); 
Room.Room.Build.GetContext().RemoveQuad.Value = false; 
Room.GameMode.Parameters.GetBool("RemoveQuad"); 
Room.Room.Build.GetContext().FlyEnable.Value = false; 
Room.GameMode.Parameters.GetBool("Fly"); 


Room.BreackGraph.BreackAll = true; 

Room.Ui.GetContext().QuadsCount.Value = true;
Room.TeamsBalancer.IsAutoBalance = true;
Room.Ui.GetContext().MainTimerId.Value = mainTimer.Id;

Room.Build.GetContext().Pipette.Value = false; 
Room.Build.GetContext().BalkLenChange.Value = false; 
Room.Build.GetContext().SetSkyEnable.Value = false; 
Room.Build.GetContext().GenMapEnable.Value = false; 
Room.Build.GetContext().ChangeCameraPointsEnable.Value = false; 
Room.Build.GetContext().QuadChangeEnable.Value = false; 
Room.Build.GetContext().BuildModeEnable.Value = false; 
Room.Build.GetContext().CollapseChangeEnable.Value = false; 
Room.Build.GetContext().RenameMapEnable.Value = false; 
Room.Build.GetContext().ChangeMapAuthorsEnable.Value = false; 
Room.Build.GetContext().LoadMapEnable.Value = false; 
Room.Build.GetContext().ChangeSpawnsEnable.Value = false; 
 
var white = Room.GameMode.Parameters.GetBool("WhiteTeam");
var red = Room.GameMode.Parameters.GetBool("RedTeam"); 
var blue = Room.GameMode.Parameters.GetBool("BlueTeam"); 
if (red || !red && !blue) { 
 Room.Teams.Add("Red", "Повстанцы Хаоса", new Basic.Color(0,0,0,1)); 
 Room.Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2); 
} 
if (blue || !red && !blue) { 
 Room.Teams.Add("Blue", "Эпсилон 11 Девятихвостоя Лиса", new Basic.Color(0,0,0,1)); 
 Room.Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);

Room.Room.Teams.Add("White", "НОН_ИГРОК", new Basic.Color(0,0,0,1));

Room.Teams.Get("White").Spawns.SpawnPointsGroups.Add(1);




Room.Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);
if (player.id == "EA673076CF669F1" || player.id == "A1E3E99D7AE82532" || player.id == ""){
var inv = player.inventory;
var bld = player.Build;
var prop = player.Properties;
bld.Pipette.Value = true;
bld.FloodFill.Value = true;
bld.FillQuad.Value = true;
bld.RemoveQuad.Value = true;
bld.BalkLenChange.Value = true;
bld.FlyEnable.Value = true;
bld.SetSkyEnable.Value = true;
bld.GenMapEnable.Value = true;
bld.ChangeCameraPointsEnable.Value = true;
bld.QuadChangeEnable.Value = true;
bld.BuildModeEnable.Value = true;
bld.CollapseChangeEnable.Value = true;
bld.RenameMapEnable.Value = true;
bld.ChangeMapAuthorsEnable.Value = true;
bld.LoadMapEnable.Value = true;
bld.ChangeSpawnsEnable.Value = true;
bld.BuildRangeEnable.Value = true;
inv.Main.Value = true;
inv.Secondary.Value = true;
inv.Melee.Value = true;
inv.Explosive.Value = true;
inv.Build.Value = true;
inv.MainInfinity.Value = true;
inv.SecondaryInfinity.Value = true;
inv.ExplosiveInfinity.Value = true;
inv.BuildInfinity.Value = true;
Room.contextedProperties.GetContext(player).MaxHp.Value = 100000000000000;
Room.contextedProperties.GetContext(player).SkinType.Value = 2;
}
});

//массив товаров и их цен 
var shop = [ 
  "1. Блоки. Цена: 500M", 
]; 
var cost = [500, ]; 

//зона покупки товара 
var buytrigger = Room.Room.AreaPlayerTriggerService.Get("buyTrigger"); 
buytrigger.Tags = ["buy"]; 
buytrigger.Enable = true; 
buytrigger.OnEnter.Add(function(player) { 
  Buy(player, player.Properties.Get("page"), 1); 
}); 
function Buy(player, ValId) {   
  //объявление переменных для уменьшения веса режима 
  var page = ValId; 
  var prop = player.Properties; 
  var tprop = player.Team.Properties; 
  var inv = prop.Get("inv"); 
  var scores = prop.Scores; 
  var shekels = prop.Get("shek"); 
  //основной код магазина 
  switch(page.Value) { 
    case 1: 
      player.Ui.Hint.Value = "Недостаточно денег!"; 
      if (scores.Value < cost[page.Value - 1] && free == 1) return;      
      //сначала пишем в подсказку, что недостаточно денег 
      //если денег достаточно, то выполняем действие 
      player.Inventory.Build.Value = false; 
      player.Inventory.Build.Value = true;       
      //если значение free == 2, то не снимаем деньги (нужно для одного товара) 
      if (free == 2) return;     
      //снимаем деньги и пишем в подсказку, что товар куплен       
      //у некоторых товаров еще есть одно условие, если товар уже куплен 
      scores.Value -= cost[page.Value - 1]; 
      player.Ui.Hint.Value = "Куплено!"; 
      break; 
  } 
}

//триггер зоны выбора товара (вперед по списку) 
var nexttrigger = Room.AreaPlayerTriggerService.Get("nextTrigger"); 
nexttrigger.Tags = ["next"]; 
nexttrigger.Enable = true; 
nexttrigger.OnEnter.Add(function(player) { 
  var page = player.Properties.Get("page"); 
  page.Value++; 
  if (page.Value > shop.length) { 
    page.Value = 1; 
  } 
  player.Ui.Hint.Value = shop[page.Value - 1] + ". Чтобы купить войдите в жëлтую зону."; 
}); 


//триггер зоны выбора товара (назад по списку) 
var prevtrigger = Room.AreaPlayerTriggerService.Get("prevTrigger"); 
prevtrigger.Tags = ["prev"]; 
prevtrigger.Enable = true; 
prevtrigger.OnEnter.Add(function(player) { 
  var page = player.Properties.Get("page"); 
  page.Value--; 
  if (page.Value < 1) { 
    page.Value = shop.length; 
  } 
  player.Ui.Hint.Value = shop[page.Value - 1] + ". Чтобы купить войдите в жëлтую зону."; 
});

var t1trigger = Room.AreaPlayerTriggerService.Get("t1trigger");
t1trigger.Tags = ["t1"];
t1trigger.Enable = true;
t1trigger.OnEnter.Add(function (player) { Room.Ui.GetContext().Hint.Value = "•Ломание выкл для всех•";
Room.BreackGraph.OnlyPlayerBlocksDmg = true;
 });

 var t2trigger = Room.AreaPlayerTriggerService.Get("t2trigger");
t2trigger.Tags = ["t2"];
t2trigger.Enable = true;
t2trigger.OnEnter.Add(function (player) { Room.Ui.GetContext().Hint.Value = "•Ломание вкл для всех•";
Room.BreackGraph.OnlyPlayerBlocksDmg = false;
 });

var OTrigger = Room.AreaPlayerTriggerService.Get("OTrigger");
OTrigger.Tags = ["name"];
OTrigger.Enable = true;
OTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = "твой ник:"+player;
 });

var sAreaTag = "бум";
var ViewsParametersName = "Vivew1";
var sAreas = Room.AreaService.GetByTag(sAreaTag);
var sView = Room.AreaViewService.GetContext().Get("sView17");
sView.Color = new Basic.Color(0,0,0,1)

sView.Tags = [sAreaTag];
sView.Enable = true;
var sTrigger = Room.AreaPlayerTriggerService.Get("sTrigger17");
sTrigger.Tags = [sAreaTag];
sTrigger.Enable = true;
sTrigger.OnEnter.Add(function (player) {
if(player.Team !== Teams.Get("Blue")){
player.Ui.Hint.Value = "ты должен ее защитить !";
SetGameMode();
}else{player.Ui.Hint.Value = "ты активировал боеголовку";
}
});

var sAreaTag = "бум2";
var ViewsParametersName = "Vivew18";
var sAreas = Room.AreaService.GetByTag(sAreaTag);
var sView = Room.AreaViewService.GetContext().Get("sView18");
sView.Color = new Basic.Color(0,0,0,1)
sView.Tags = [sAreaTag];
sView.Enable = true;
var sTrigger = Room.AreaPlayerTriggerService.Get("sTrigger18");
sTrigger.Tags = [sAreaTag];
sTrigger.Enable = true;
sTrigger.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ТЫ ДЕЗАКТИВИРОВАЛ БОЕГОЛОВКУ";
SetWaitingMode();
});

var sAreaTag = "енд";
var ViewsParametersName = "Vivew19";
var sAreas = Room.AreaService.GetByTag(sAreaTag);
var sView = Room.AreaViewService.GetContext().Get("sView19");
sView.Color = new Basic.Color(0,0,0,1)
sView.Tags = [sAreaTag];
sView.Enable = true;
var sTrigger = Room.AreaPlayerTriggerService.Get("sTrigger19");
sTrigger.Tags = [sAreaTag];
sTrigger.Enable = true;
sTrigger.OnEnter.Add(function (player) {
if(player.Team !== Teams.Get("Red")){
player.Ui.Hint.Value = "ты должен ее защитить !";
}else{player.Ui.Hint.Value = "ты дезактивировал боеголовку";
SetWaitingMode();
}
});

var aTrigger = Room.AreaPlayerTriggerService.Get("aTrigger");
aTrigger.Tags = ["пист"];
aTrigger.Enable = true;
aTrigger.OnEnter.Add(function(player) {
player.Ui.Hint.Value = "Ты Взял Пистолет !"
var inv = player.inventory.Secondary;
inv.Value = true;
inv.Value = false;
inv.Value = true;
});

var bTrigger = Room.AreaPlayerTriggerService.Get("bTrigger");
bTrigger.Tags = ["автом"];
bTrigger.Enable = true;
bTrigger.OnEnter.Add(function(player) {
player.Ui.Hint.Value = "Ты Взял Автомат !"
var inv = player.inventory.Main;
inv.Value = true;
inv.Value = false;
inv.Value = true;
});

var yTrigger = Room.AreaPlayerTriggerService.Get("yTrigger");
yTrigger.Tags = ["10"];
yTrigger.Enable = true;
yTrigger.OnEnter.Add(function(player) {
var sts = player.Properties.Get("pid").Value = "<B><color=lime>Негр</color></B>";   
var skin = contextedProperties.GetContext(player).SkinType.Value = 1;
var hp =
contextedProperties.GetContext(player).MaxHp.Value = 1025;
skin.Value = true;
skin.Value = false;
skin.Value = true;
});

var rTrigger = Room.AreaPlayerTriggerService.Get("rTrigger");
rTrigger.Tags = ["11"];
rTrigger.Enable = true;
rTrigger.OnEnter.Add(function(player) {
player.Ui.Hint.Value = "Ты Non rp!"
var adm = player.Build.FlyEnable.Value = true; 
var adm = player.Properties.Get("pid").Value = 
"<B><color=black>НОН_РП</color></B>";
var adm = player.inventory.Main;
adm.Value = true;
adm.Value = false;
adm.Value = true;
})
var updTrg = 
Room.AreaPlayerTriggerService.Get("UpdTrigger"); 
updTrg.Tags = ["upd"]; 
updTrg.Enable = true; 
updTrg.OnEnter.Add(function(){ 
list = []; 
curenc = 0; 
ato = 0; 
}); 

var choseTrg = Room.AreaPlayerTriggerService.Get("ChoseTrigger"); 
choseTrg.Tags = ["chose"]; 
choseTrg.Enable = true; 
choseTrg.OnEnter.Add(function(p){ 
ato = list[curenc]; 
p.Ui.Hint.Value="> "+ato; 
if(curenc < (list.length - 1))curenc++; 
else curenc = 0; 
}); 

var banTrg = Room.AreaPlayerTriggerService.Get("BanTrigger") 
banTrg.Tags = ["ban"]; 
banTrg.Enable = true; 
banTrg.OnEnter.Add(function(p){ 
Ban(ato); 
p.Ui.Hint.Value=ato+" Ты забанен "; 
function Ban(player){ 
p=player 
p.Spawns.Spawn(); 
p.Spawns.Despawn(); 
p.Build.BuildRangeEnable.Value=false; 
p.Ui.Hint.Value="you are banned"; 
} 
})

VAreaTag = "тп";
var VTrigger = Room.AreaPlayerTriggerService.Get("VTrigger"); 
VTrigger.Tags = [VAreaTag]; 
VTrigger.Enable = true; 
VTrigger.OnEnter.Add(function (player) {       
Teams.Get("Red").Add(player);
});

DAreaTag = "ак";
var DTrigger = Room.AreaPlayerTriggerService.Get("DTrigger"); 
DTrigger.Tags = [DAreaTag]; 
DTrigger.Enable = true; 
DTrigger.OnEnter.Add(function (player) {       
Teams.Get("Blue").Add(player);
});

// задаем что выводить вверху 
Room.Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" }; 
Room.Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" };

// задаем макс смертей команд 
var maxDeaths = "<B><color=Green>Повстанцы Хаоса</color></B>"; 
Room.Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths; 
Room.Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths2 = "<B><color=Blue>Эпсилон 11</color></B>";

// ������ ��������� 
Room.Ui.getContext().Hint.Value = "<B><color=White>...</color></B>";

//
Room.Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);

if (player.id  == "EA673076CF669F"||player.id == ""||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B")
  {
   player.Properties.Get("pid").Value = "<B><color=red>НОН_РП</color></B>";   
  }                                
});
//
Room.Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);

player.Properties.Get("pid").Value = "<B><color=White>Player</color></B>";                                                                                   

});
Room.Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);

player.Properties.Get("aa").Value = player.Id.slice(0,8) + "                                                                                     " + player.Id.slice(8,16);
});
// задаем что выводить в лидербордах
Room.LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "<B><color=red>Murders</color></B>",
  ShortDisplayName: "<B><color=red>Murders</color></B>"
 },
 {
  Value: "aa",
  DisplayName: "<B><color=lime>ID</color></B>",
  ShortDisplayName: "<B><color=lime>ID</color></B>"
 },
 {
  Value: "pid",
  DisplayName: "<B><color=orange>Status</color></B>",
  ShortDisplayName: "<B><color=orange>Status</color></B>"
 },
 {
  Value: "Scores",
  DisplayName: "<B><color=yellow>Money</color></B>",
  ShortDisplayName: "<B><color=yellow>Money</color></B>"
 }
];
Room.LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "Statistics\Deaths",
 ShortDisplayName: "Statistics\Deaths"
};
// счетчик убийств
Room.Damage.OnKill.Add(function(player, killed) {
 if (killed.Team != null && killed.Team != player.Team) {
  ++player.Properties.Kills.Value;
  player.Properties.Scores.Value += 500;
 }
});

Room.Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn();
contextedProperties.GetContext().MaxHp.Value = 1000;
});

Room.Ui.getContext().Hint.Value = "Hint/BuildBase"; 

var inventory = Room.Inventory.GetContext(); 
inventory.Main.Value = false; 
inventory.Secondary.Value = false; 
inventory.Melee.Value = false; 
inventory.Explosive.Value = false; 
inventory.Build.Value = false; 
inventory.BuildInfinity.Value = false; 