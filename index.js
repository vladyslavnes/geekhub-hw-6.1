function userPrivateData (userName, userPassword) {
	var name = userName;
    var password = userPassword;
    this.getName = function () {
    	return name;
    }
	this.getPassword = function () {
    	return password;
    }
	this.setName = function (newName) {
    	return name = newName;
    }
	this.setPassword = function (newPassword) {
    	return password = newPassword;
    }
}

var newUser = new userPrivateData('David','*******');
console.log(newUser.getName(),newUser.getPassword());
console.log(newUser.setName('Vlad'),newUser.setPassword('***********'));
