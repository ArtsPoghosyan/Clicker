export default function TimeRender(time){
    let x = time + "";
    x = x.substring(0, 4) + "|" + x.substring(5, 7) + "|" + x.substring(8, 10) + " " + x.substring(11, 16);

    return x;
}

