export default function Proverka(index){
    let ind = (+index / 2) + "";
    ind = ind.split(".");
    if(ind.length > 1){
        return "backgroundDiv";
    }else{
        return "";
    }
}