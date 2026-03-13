function calc(){
        let sub = document.getElementById("subjects").value;
        let sum = 0;
        for(let i=0;i<sub;i++){
            let marks = parseFloat(prompt("Enter marks for subject " + (i+1)));
            sum = sum + marks;
        }
        let avg = sum / sub;
        let grade;
        if(avg >= 90){
            grade = "A";
        }
        else if(avg >= 80){
        grade = "B";
        }
        else if(avg >= 70){
        grade = "C";
        }
        else if(avg >= 60){
        grade = "D";
        }
        else{
        grade = "F";
        }

        if(avg >= 40){
            result = "Pass";
        }

        else{
            result = "Fail";
        }

        document.getElementById("result").innerHTML ="Average Marks: " + avg.toFixed(2) + "<br>Grade: " + grade + "<br>Result: " + result + "<br/>";
    }