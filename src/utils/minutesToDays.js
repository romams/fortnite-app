export const minutesToDays = (minutes) =>{
   let dia = 0, horas = 0, minutos= 0;

   while(minutes >= 60){

    if(minutes >= 1440){
        dia++;
        minutes = minutes -1440;
    }else if(minutes>=60){
        horas++;
        minutes = minutes-60;
    }
   }

   minutos = minutes;

   return {dia, minutos, horas};
}

export function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}
