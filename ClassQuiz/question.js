export default class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.questionScore = 100 / choices.length;
    }
    isCorrectAnswer(chosenAnswer) {
        return (this.answer === chosenAnswer);
    }
    setQuestionScore(questionScore){
        this.questionScore = questionScore;
    }
}



