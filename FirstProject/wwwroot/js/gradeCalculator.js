$("#submit_button").click(function () {
    // Convert input into integers
    let assignments = parseInt($("#assignments").val())
    let groupProject = parseInt($("#groupProject").val())
    let quizzes = parseInt($("#quizzes").val())
    let exams = parseInt($("#exams").val())
    let intex = parseInt($("#intex").val())
    // Sum up the grades 
    let grade = assignments + groupProject + quizzes + exams + intex
    // Variable for display
    let totalGrade = "(" + grade + "% total)";
    // Give final grade according to the metrics
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
});
