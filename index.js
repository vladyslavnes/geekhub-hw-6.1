function userPrivateData (userName, userPassword) {
	var name = userName;
    var password = userPassword;
    this.getName = function () {
    	return name;
    }
	
	var getCapitalizedUserName = function () {
		return name.split(' ').map(function(el) {return (el.charAt(0).toUpperCase() + el.slice(1)).join(' ')})
	}
	
	var getPasswordWithUniqueSalt = function () {
		return password + 'IUH253k253GALHdb523lka256vhcL542KHA';
	}
	
	this.getPassword = function () {
    	return getPasswordWithUniqueSalt();
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
