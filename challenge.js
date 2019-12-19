/*
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

(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    let question1 = new Question ('What\'s your teacher\'s name?', ['John', 'Mike', 'Jonas'], 2);
    let question2 = new Question ('How would you describe JavaScript?', ['Easy', 'Fun', 'Hard'], 1);
    let question3 = new Question ('Do you enjoy programming?', ['yes', 'no'], 0);
    let questions = [question1, question2, question3];
    let exit;
    let score = 0;

    Question.prototype.randomQuestions = function() {
        randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        console.log(randomQuestion.question);    
    
        for (let i = 0; i < randomQuestion.answers.length; i++) {
            console.log(i + ': ' + randomQuestion.answers[i]);
        } 
    }

    Question.prototype.checkAnswer = function() {
        let promptAnswer = parseInt(exit);
        if (promptAnswer === randomQuestion.correct) {
            console.log('You are right');
            score++;
        } else {
            console.log('You are wrong');
        }
        console.log('Your score is: ' + score + ' points')
        console.log('--------------------------');
    }

    function nextQuestion() {
        Question.prototype.randomQuestions();
        exit = prompt('Type your answer');
    
        if (exit !== 'exit') {
            Question.prototype.checkAnswer();
            nextQuestion();   
        }
    }
    nextQuestion();
       
}) ();
