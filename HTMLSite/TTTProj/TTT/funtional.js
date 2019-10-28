function mealCall(meal){
    return function(message){
      return console.log(message + "" + meal + '!!')
     }
  }
 const announceDinner = mealCall('dinner')
 const announceLunch = mealCall('breakfast')
 const announceYou = mealCall('pudding')
 announceDinner('hey!, come and get your ')
 announceLunch('Rise and shine! time for ')
 announceYou('Come and eat your ')

