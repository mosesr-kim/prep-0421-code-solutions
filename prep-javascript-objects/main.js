var person = {
  firstName: 'Moses',
  lastName: 'Kim',
  hobby: 'Cars'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName + '.');

person.job = 'Student';
console.log("The person's current job is: " + person.job + '.');

person.previousjob = 'Auto Parts Distribution';
console.log("The person's previous job is: " + person.previousjob + '.');

console.log('The complete person object: ', person);

var myCar = {
  make: 'Toyota',
  model: 'Supra',
  year: '2021'
};

console.log('Car information', myCar);

myCar['owner'] = fullName;

console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.');

myCar['color'] = 'Yellow';

console.log('My full car info:', myCar);
