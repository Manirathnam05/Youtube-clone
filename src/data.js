export const API_KEY = 'AIzaSyA4QKcOoB7pL2L5Un7Rd3sMwcJzk3gRiNY';

export const viewsCount = (value) =>{

    if(value >= 1000000){
        return Math.floor(value/1000000) +"M";
    }
    else if(value >=1000){
        return Math.floor(value/1000) + "K"
    }
    else{
        return value;
    }

}