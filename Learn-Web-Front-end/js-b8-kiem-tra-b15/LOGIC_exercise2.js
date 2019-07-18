function formatPhoneNumber(num) {
	let number = num.toString();
    let result = "";
    for(let  i=0; i < number.length ; i += 3) {
        if(i + 3 > number.length) 
        result = result.trim() + number.substring(i,number.length);
        else
        result = result + " " + number.substring(i,i+3) ;
    }
    return result;
}

formatPhoneNumber('0973863894');