function askQuestion() {
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer");

    if (question.trim() === "") {
        answer.innerHTML = "Please enter a question.";
    } else {
        answer.innerHTML = "StudyMate AI: Your question is received. AI response will be added soon.";
    }
}
