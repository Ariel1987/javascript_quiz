// Function constructor
/*
let john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};
*/

/*
let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';


let john = new Person('John', 1990, 'teacher');
let jane = new Person('Jane', 1969, 'designer');
let mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName, jane.lastName, mark.lastName);
*/

// Object.create
/*
let personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

let john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

let jane = Object.create(personProto, 
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });
*/

// Primitives vc Objects
/*
// Primitives
let a = 23;
let b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23

// Objects
let obj1 = {
    name: 'John',
    age: 26
};

let obj2 = obj1; // it was not created a new object but a new reference that pointed to the object
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30

// Functions
let age = 27;
let obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age); // 27
console.log(obj.city); // San Francisco
*/

// Passing functions as arguments
/*
let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    let arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));    
    } else {
        return -1;
    }
}


let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let heartRate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRate);
*/

// Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        } 
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }      
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');

interviewQuestion('teacher')('Mark');
*/

// IIFE - immediatly invoked function expressions
/*
function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

// IIFE ---- what is in a prantheses cannot be a statement. you get data privacy
/*
(function () {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); // invoking the function


// Closures

function retirement(retirementAge) {
    let a = ' years left until retirement.';
    return function(yearOfBirth) {
        let age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementUS = retirement(66);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);
retirementUS(1990);

//retirement(66)(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('designer')('John');
interviewQuestion('teacher')('Mary');
interviewQuestion('other')('Mark');
*/

// Bind, call and apply methods
/*
let john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay +', ladies and gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + '. I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? ' + 'I\'m ' + this.name + ', I\'m a ' + this.job + '. I\'m ' + this.age + ' years old.' + ' Have a nice ' + timeOfDay);
        }
    }

};

let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

let johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening');




let years = [1990, 1965, 1937, 2005, 2000];

function arrayCalc(arr, fn) {
    let arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

let ages = arrayCalc(years, calculateAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/
/*************************************************
CODING CHALLENGE 7
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answer from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) 
(Hint: write a method for the Question objects for this task)

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer as you displayed it on Task 4

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code 
(Hint: we learned a special technique to do exactly that)

--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends 
(Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. 
In this case, DON'T call the function from task 8
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score 
(Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point)
11. Display the score in the console. Use yet another method for this
*/
(function() {
    let Question = function(question, possibleAnswers, correctAnswer) {
        this.question = question; 
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestions = function() {
        console.log(this.question);
    
        for (let i = 0; i < this.possibleAnswers.length; i++) {
            console.log(i + ':' + this.possibleAnswers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correctAnswer) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer!');
        }
    }
    
    let question1 = new Question('What\'s your teacher\'s name?', ['John', 'Jonas'], 1);
    let question2 = new Question('How would you describe JavaScript?', ['Easy', 'Hard', 'Fun'], 2);
    let questions = [question1, question2];
    
    let n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestions();
    
    let answer = parseInt(prompt('Type your answer'));
    
    questions[n].checkAnswer(answer);
})();


