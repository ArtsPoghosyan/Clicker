function seconds(click, timer){
    if(click === undefined){
        return 0;
    }else{
        let x = timer + "";
        let y = x.substring(0, x.length - 3);
        let res = click / +y;
        if((+y === 15 || +y === 30) && click > 0){
            let val = +click / +y + "";
            val = val.split(".");
            if(val.length < 2){
                return +click / +y;
            }else{
                val = val[0] + "." + val[1].substring(0, 2);
                return +val;
            }
        }
        return +res;
    }
    
}

export default seconds;