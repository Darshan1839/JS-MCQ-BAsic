$(document).ready(function () {
    let mcq = [
        {
            question: "1).How do you create a variable in JavaScript?"
            , options: ["var myVariable", "intmyVariable", "create myVariable","define myVariable"],
            answer: "var myVariable"
        },

        {
            question: "2).What does alert do in JavaScript?"
            , options: ["Logs a message to the console", "Displays a message in a dialog box", "Writes a message to the HTML document","Sends a message to the server"],
            answer: "Displays a message in a dialog box"
        },

        {
            question: "3).How do you write a comment in JavaScript?"
            , options: ["// This is a comment", " # This is a comment"," ; This is a comment"],
            answer: "// This is a comment"
        },

        {
            question: "4).How do you call a function named myFunction in JavaScript?"
            , options: ["call myFunction", "myFunction()", "execute myFunction","run myFunction"],
            answer: "myFunction()"
        },

        {
            question: "5).Which operator is used to assign a value to a variable?"
            , options: ["#", "*", "=","=="],
            answer: "="
        },
        {
            question: "6).How do you declare an array in JavaScript?"
            , options: [" let myArray = []", "let myArray = ()", " let myArray = {}","let myArray = < >"],
            answer: " let myArray = []"
        },
        {
            question: "7).Which method removes the last element from an array and returns that element?"
            , options: ["pop", "push", "shift","unshift"],
            answer: "pop"
        },
        {
            question: "8).Which keyword is used to define a constant variable in JavaScript?"
            , options: ["var", "let", "const"],
            answer: "const"
        },
        {
            question: "9).Which method is used to add one or more elements to the end of an array?"
            , options: ["push", "add", "insert","append"],
            answer: "push"
        },
        {
            question: "10).Which keyword is used to skip the current iteration of a loop and move to the next one?"
            , options: ["continue", "break", "skip","pass"],
            answer: "continue"
        },
        {
            question: "11).How do you declare a JavaScript variable?"
            , options: ["variable myVar", "var myVar", "v myVar","myVar var"],
            answer: "var myVar"
        },
        {
            question: "12).What does the map method do in JavaScript?"
            , options: ["It filters elements from an array", "It sorts the elements of an array", "It creates a new array with the results of calling a provided function on every element"," It reduces the array to a single value"],
            answer: "It creates a new array with the results of calling a provided function on every element"
        },
        
        
        {
            question: "13).What will the following code return typeof NaN?"
            , options: ["number", "string", "undefined","object"],
            answer: "number"
        },
        {
            question: "14).What does the this keyword refer to in JavaScript?"
            , options: [" The current object", " The global object", " The parent object"," The previous object"],
            answer: " The current object"
        },
        {
            question: "15).Which of the following is not a looping structure in JavaScript?"
            , options: ["for", "while", "do while","repeat until"],
            answer: "repeat until"
        }, {
            question: "16).Which of the following methods can be used to display data in some form using Javascript?"
            , options: ["document.write()", "console.log()", "window.alert()","all of the above"],
            answer: "continue"
        }, {
            question: "17).Which keyword is used to skip the current iteration of a loop and move to the next one?"
            , options: ["filter", "map", "skip","pass"],
            answer: "filter"
        }, {
            question: "18).What will console.log(typeof null) return?"
            , options: ["null", "undefined", "object","string"],
            answer: "object"
        }, {
            question: "19).Which JavaScript function is used to execute a function after a specified time?"
            , options: ["setInterval", "setTimeout", "setTime","setExecute"],
            answer: "setTimeout"
        },
        {
            question: "20).Javascript is an _______ language?"
            , options: ["Object-Oriented", "Object-Based", "Procedural","None of the above"],
            answer: "Object-Oriented"
        },
        
     

    ];

    mcq.forEach((v, index) => {
        $("#questions").append(
        

            `<h1 class="que">${v.question}</h1>


            

          ${v.options.map(option =>
                // console.log(option)
                `
                <span>

             <input type="radio" name="question_${index}"  value="${option}" class="input"><span class="label">${option}</span><br>
            
                </span>
                
                `
            ).join("")}
            `
        );
    });

    $("#submit").click(function (e) {
        e.preventDefault();

        // mcq.forEach((val, index) => {
        //     let a = $(`input[name="question_${index}]:checked`).val();
        //     console.log(a);
        // });
        let score=0;
        mcq.forEach((val,index)=>{
                
       
                let selected = $(`input[name="question_${index}" ]:checked`).val();
                    
                if(selected === val.answer){
                    score++;

                }
                
        })

        if(score > 15){
        let a= $("#name").val();
        alert(` ${a} Your score is ${score} and you  are passed 'CONGRATULATIONS ! 🤩🤩🤩🤩🤩'`);
        location.reload();
        }
        else{
            let a= $("#name").val();
            alert(`${a} sorry you are failed ! 😓😓😓 `)
            location.reload();
        }
    });


});