export default class Quiz {
    constructor(questions) {
        this.totalScore = 0;
        this.questions = questions;
        this.currentIndex = 0;
    }
    isStarted() {
        return (this.currentIndex === 0);
    }
    isEnded() {
        return (this.currentIndex === this.questions.length);
    }
    getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }
    getQuestionByIndex(index) {
        if (index > 0 && index < this.questions.length)
            return this.questions[index];
    }
    guessAnswer(chosenAnswer) {
        if (this.questions[this.currentIndex].isCorrectAnswer(chosenAnswer)) {
            this.currentIndex++;
        }
    }
}

