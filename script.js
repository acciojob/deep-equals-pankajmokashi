function objectEquals(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

function deepEquals(a, b) {
    if(a === null && b === null){
        return true
    }
    if(typeof(a) !== typeof(b))
    {
        return false
    }
    else if(typeof(a) === "object"){
        if(objectEquals(a, b) === true){
            return true
        }
        else{
            return false
        }
    }
	if(a === b){
		 return true
	}
	return false
}
module.exports=deepEquals;
