function localData(key){
    try{
        let temp=localStorage.getItem(key);
        temp=JSON.parse(temp);
        return temp;
    }catch(error){
        return undefined;
    }
   
}

// to save some data in the local storage
function saveData(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

export {localData, saveData}