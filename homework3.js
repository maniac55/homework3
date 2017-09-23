const operations = function(a,b,c) {
	return (a + b + c) * b;
};

const noinput = function() {
	return 228;
};

const nore = function(num) {
	console.log(num);
};

const fullName  = function(firstname, lastname) {
	return firstname + ' ' + lastname; 
};

const example = function(str1, str2, str3) {
	const example = str1.length > str2.length ? str1 : str2;
	return example.length > str3.length ? example : str3;
};
console.log(example('hi', 'hello', 'hellooo')) //just an example, which console will log hellooo.

const nums = function(n1,n2) {
	if (n1 === n2) return 0;
	else if (n1 > n2) return 1;
	else return -1;
};

const isTruethy  = function (input1,input2,input3) {
	return input1 || input2 || input3;
};