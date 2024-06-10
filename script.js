function calculateResult() {
    const totalQuestions = document.getElementById('totalQuestions').value;
    const marksPerQuestion = document.getElementById('marksPerQuestion').value;
    const passMark = document.getElementById('passMark').value;

    const totalMarks = totalQuestions * marksPerQuestion;
    const resultElement = document.getElementById('result');

    if (totalMarks >= passMark) {
        resultElement.innerHTML = `Total Marks: ${totalMarks} - You Passed machan ! 🎉`;
        resultElement.style.color = 'green';
    } else {
        resultElement.innerHTML = `Total Marks: ${totalMarks} - You Failed machan  😢`;
        resultElement.style.color = 'red';
    }
}
