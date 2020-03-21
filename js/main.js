console.log('Sample JavaScript #2 HW #16');

// Задание №1

var userObj = {
  firstName: 'Anna',
  lastName: 'Smith',
  age: 30,
};

console.log(userObj);

// Задание №2

var userObj = {
  firstName: 'Anna',
  lastName: 'Smith',
  age: 30,
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  }
};

console.log(userObj.fullName());

// Задание №3

function defUpperStr(str) {
  return (str || 'DEFAULT TEXT').toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());

// Задание №4

function evenFn(n) {
  var namb = [];
  for (var i = 1; i <= n; i++) if (i % 2 === 0) namb.push(i);
  return namb;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

// Задание №5

function weekFn(week) {
  var str = '';

  switch (week) {
    case 1:
      str = 'Понедельник';
      break;
    case 2:
      str = 'Вторник';
      break;
    case 3:
      str = 'Среда';
      break;
    case 4:
      str = 'Четверг';
      break;
    case 5:
      str = 'Пятница';
      break;
    case 6:
      str = 'Суббота';
      break;
    case 7:
      str = 'Воскресенье'
      break;
    default:
      str = null;
  }

  return str
}

console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));

// Задание №6

function ageClassification(result) {
  return result > 0 
  ? result > 24 ? result > 44 ? result > 65 ? result > 75 ? result > 90 ? result > 122 ? null
  :'долгожители' : 'старческий возраст': 'пожилой возраст': 'средний возраст': 'молодой возраст': 'детский возраст' : null;
}

console.log('-1 :', ageClassification(-1));
console.log('5 :', ageClassification(5));
console.log('34 :', ageClassification(34));
console.log('50 :', ageClassification(50));
console.log('65.1 :', ageClassification(65.1));
console.log('80 :', ageClassification(80));
console.log('110 :', ageClassification(110));
console.log('130 :', ageClassification(130));

// Задание №7

function oddFn(n) {
  var namb = [];
  var i = 0;
  
  while (i++ < n) if (i % 2 !== 0) namb.push(i);

  return namb;
}

console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20)); 

// Задание №8

function mainFunc (a, b, cb) {
 if (cb && typeof cb === 'function') return cb (a, b)

 return false;
}

function cbRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow (num, pow) {
  return Math.pow(num, pow);
}

function cbAdd (a, b) {
  return a + b;
}


console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));