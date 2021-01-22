var submit = document.getElementById("submit_button");

submit.addEventListener("click", function () {
    // Convert input into integers
    let assignments = parseInt(document.getElementById("assignments").value)
    let groupProject = parseInt(document.getElementById("groupProject").value)
    let quizzes = parseInt(document.getElementById("quizzes").value)
    let exams = parseInt(document.getElementById("exams").value)
    let intex = parseInt(document.getElementById("intex").value)
    // Sum up the grades
    let grade = assignments + groupProject + quizzes + exams + intex
    // Variable for display
    let totalGrade = "(" + grade + "% total)";
    // Give final grade according to the metrics
    if (assignments <= 50 && groupProject <= 10 && quizzes <= 10 && exams <= 20 && intex <= 10) {
        if (grade >= 94) {
            alert("Final Grade: A " + totalGrade)
        }
        else if (grade >= 90) {
            alert("Final Grade: A-" + totalGrade)
        }
        else if (grade >= 87) {
            alert("Final Grade: B+" + totalGrade)
        }
        else if (grade >= 84) {
            alert("Final Grade: B" + totalGrade)
        }
        else if (grade >= 80) {
            alert("Final Grade: B-" + totalGrade)
        }
        else if (grade >= 77) {
            alert("Final Grade: C+" + totalGrade)
        }
        else if (grade >= 74) {
            alert("Final Grade: C" + totalGrade)
        }
        else if (grade >= 70) {
            alert("Final Grade: C-" + totalGrade)
        }
        else if (grade >= 67) {
            alert("Final Grade: D+" + totalGrade)
        }
        else if (grade >= 64) {
            alert("Final Grade: D" + totalGrade)
        }
        else if (grade >= 60) {
            alert("Final Grade: D-" + totalGrade)
        }
        else if (grade < 60) {
            alert("Final Grade: E" + totalGrade)
        };
    };
});
