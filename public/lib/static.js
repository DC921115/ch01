function Utils() {

}

Utils.prototype.isEmpty = function(string) {
	if(string == undefined || string == '' || string ==null || string.length == 0){
		return true;
	}else{
		  return false;
	}
}