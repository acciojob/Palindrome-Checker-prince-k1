// complete the given function

function palindrome(str){
	let arr = str.toLowerCase().slice('');
	let arr2 = [];
	for(let i = arr.length-1; i >= 0; i--){
		arr2.push(arr[i]);
	}

	for(let i = 0; i < arr.length; i++){
		if(arr[i] != arr2[i]){
			return false;
		}
	}
			return true;
}
module.exports = palindrome
