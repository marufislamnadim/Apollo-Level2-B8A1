const multiplyValue = (value:number, multiplier:number=2):number =>{
    return value * multiplier;
}

const processInput =(value:number | string | boolean):string | number=>{
    if(typeof value === 'number'){
        return value*10; 
    }else if(typeof value === 'string'){
        return value.trim().toLowerCase();
    } else{
        if (value === true) {
            return 'Active'
        } else return 'Inactive';
    }
}
