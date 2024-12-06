// import { Modal, initMDB } from "mdb-ui-kit";

// initMDB({ Modal });


const htmlQuestions = [
    {
      que: "What does HTML stand for?",
      opt1: "HyperText Markup Language",
      opt2: "HyperText Make Language",
      opt3: "How To Manage Language",
      opt4: "HighText Machine Language",
      ans: "HyperText Markup Language",
    },
    {
      que: "Which HTML tag is used to create a hyperlink?",
      opt1: "link",
      opt2: "a",
      opt3: "href",
      opt4: "anchor",
      ans: "a",
    },
    {
      que: "Which tag is used for inserting an image in HTML?",
      opt1: "img",
      opt2: "picture",
      opt3: "image",
      opt4: "src",
      ans: "img",
    },
    {
      que: "What is the correct way to specify a background color in HTML?",
      opt1: 'style="background-color:blue;"',
      opt2: 'bgcolor="blue"',
      opt3: 'color="blue"',
      opt4: 'background="blue"',
      ans: 'style="background-color:blue;"',
    },
    {
      que: "What is the purpose of the <head> tag in an HTML document?",
      opt1: "To define the visible content of the document",
      opt2: "To specify metadata and include links to stylesheets or scripts",
      opt3: "To create a header section on the webpage",
      opt4: "To add navigation links to the page",
      ans: "To specify metadata and include links to stylesheets or scripts",
    },
    // {
    //   que: "What is the correct HTML element for the largest heading?",
    //   opt1: "h1",
    //   opt2: "header",
    //   opt3: "heading",
    //   opt4: "h6",
    //   ans: "h1",
    // },
    // {
    //   que: "Which HTML tag is used to define an unordered list?",
    //   opt1: "ul",
    //   opt2: "ol",
    //   opt3: "li",
    //   opt4: "list",
    //   ans: "u",
    // },
    // {
    //   que: "What is the correct way to create a line break in HTML?",
    //   opt1: "lb",
    //   opt2: "br",
    //   opt3: "break",
    //   opt4: "newline",
    //   ans: "br",
    // },
    // {
    //   que: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    //   opt1: "alt",
    //   opt2: "src",
    //   opt3: "title",
    //   opt4: "longdesc",
    //   ans: "alt",
    // },
    // {
    //   que: "Which HTML element is used to define the title of a document?",
    //   opt1: "title",
    //   opt2: "header",
    //   opt3: "meta",                                     
    //   opt4: "head",
    //   ans: "title",
    // },
  ];

//   const pythonQuestions = [
//     {
//         que: "What is Python primarily used for?",
//         opt1: "Web Development",
//         opt2: "Data Analysis",
//         opt3: "Machine Learning",
//         opt4: "All of the above",
//         ans: "All of the above",
//       },
//       {
//         que: "What is the correct extension for Python files?",
//         opt1: ".py",
//         opt2: ".python",
//         opt3: ".pt",
//         opt4: ".pyth",
//         ans: ".py",
//       },
//       {
//         que: "Which of the following is a Python framework?",
//         opt1: "Django",
//         opt2: "Laravel",
//         opt3: "Spring",
//         opt4: "Flask",
//         ans: "Django",
//       },
//       {
//         que: "Which keyword is used to define a function in Python?",
//         opt1: "function",
//         opt2: "define",
//         opt3: "def",
//         opt4: "func",
//         ans: "def",
//       },
//       {
//         que: "What does 'PEP' stand for in Python?",
//         opt1: "Python Extended Programming",
//         opt2: "Python Enhancement Proposal",
//         opt3: "Programming Efficiently with Python",
//         opt4: "Python Execution Protocol",
//         ans: "Python Enhancement Proposal",
//       },
//       {
//         que: "Which of the following is a mutable data type in Python?",
//         opt1: "Tuple",
//         opt2: "String",
//         opt3: "List",
//         opt4: "Float",
//         ans: "List",
//       },
//       {
//         que: "How do you create a virtual environment in Python?",
//         opt1: "python -m venv env",
//         opt2: "python create env",
//         opt3: "python new environment",
//         opt4: "python env start",
//         ans: "python -m venv env",
//       },
//       {
//         que: "Which of the following is used to handle exceptions in Python?",
//         opt1: "try-catch",
//         opt2: "try-except",
//         opt3: "error-handler",
//         opt4: "throw-catch",
//         ans: "try-except",
//       },
//       {
//         que: "What is the output of the following code?\n```python\nprint(type([1, 2, 3]))\n```",
//         opt1: "<class 'list'>",
//         opt2: "<class 'tuple'>",
//         opt3: "<class 'set'>",
//         opt4: "<class 'dict'>",
//         ans: "<class 'list'>",
//       },
//       {
//         que: "Which Python library is commonly used for Data Analysis?",
//         opt1: "NumPy",
//         opt2: "Pandas",
//         opt3: "Matplotlib",
//         opt4: "All of the above",
//         ans: "All of the above",
//       },
//       {
//         que: "What is the correct way to install Python packages?",
//         opt1: "python get package",
//         opt2: "pip install package-name",
//         opt3: "python install package-name",
//         opt4: "pip get package",
//         ans: "pip install package-name",
//       },
//       {
//         que: "How do you comment a single line in Python?",
//         opt1: "//",
//         opt2: "/*",
//         opt3: "#",
//         opt4: "*/",
//         ans: "#",
//       },
//       {
//         que: "What does the 'len()' function do in Python?",
//         opt1: "Calculates the length of a string or collection",
//         opt2: "Checks if an object is iterable",
//         opt3: "Finds the largest value in a collection",
//         opt4: "Returns the last element of a collection",
//         ans: "Calculates the length of a string or collection",
//       },
//   ]


  var question1 = document.getElementById('question');

  var quizOpt = document.getElementsByName('quizOpt')

  var optText1 = document.getElementById('optText1');
  var optText2 = document.getElementById('optText2');
  var optText3 = document.getElementById('optText3');
  var optText4 = document.getElementById('optText4');

  var option1 = document.getElementById('option1');
  var option2 = document.getElementById('option2');
  var option3 = document.getElementById('option3');
  var option4 = document.getElementById('option4');
  var btnNext = document.getElementById('next');

  var resultShow = document.getElementById("resultWindow");
  var quizShow = document.getElementById("quizWindow");
  var announcement = document.getElementById("announcement")
  var scoring = document.getElementById("scoring")

  var currQue = 0;
  var score = 0;
  function renderQuestion() {
    question1.innerHTML = htmlQuestions[currQue].que;
    optText1.innerHTML = htmlQuestions[currQue].opt1;
    optText2.innerHTML = htmlQuestions[currQue].opt2;
    optText3.innerHTML = htmlQuestions[currQue].opt3;
    optText4.innerHTML = htmlQuestions[currQue].opt4;

    option1.value = htmlQuestions[currQue].opt1;
    option2.value = htmlQuestions[currQue].opt2
    option3.value = htmlQuestions[currQue].opt3
    option4.value = htmlQuestions[currQue].opt4
    
    
    
  }

// function renderQuestion2() {
//     question1.innerHTML = pythonQuestions[currQue].que;
//     optText1.innerHTML = pythonQuestions[currQue].opt1;
//     optText2.innerHTML = pythonQuestions[currQue].opt2;
//     optText3.innerHTML = pythonQuestions[currQue].opt3;
//     optText4.innerHTML = pythonQuestions[currQue].opt4;

//     option1.value = pythonQuestions[currQue].opt1;
//     option2.value = pythonQuestions[currQue].opt2
//     option3.value = pythonQuestions[currQue].opt3
//     option4.value = pythonQuestions[currQue].opt4
    
    
    
//   }
function next() {
    var radioChecked = false
    for (var i = 0; i < quizOpt.length; i++) {
        if (quizOpt[i].checked) {
            radioChecked = true
            if (quizOpt[i].value === htmlQuestions[currQue].ans) {
                score++
            }
        } 

    }
    if (!radioChecked) {
        Swal.fire({
            title: "No option selected",
            text: "Please Select an Option",
            icon: "error"
          });
    } else {
        if (currQue < htmlQuestions.length - 1) {
            currQue++
            deSelect()
            renderQuestion()

        } else {
           displayResult()
        }
    }
    
}

// function next2() {
//     var radioChecked = false
//     for (var i = 0; i < quizOpt.length; i++) {
//         if (quizOpt[i].checked) {
//             radioChecked = true
//             if (quizOpt[i].value === pythonQuestions[currQue].ans) {
//                 score++
//             }
//         } 

//     }
//     if (!radioChecked) {
//         Swal.fire({
//             title: "No option selected",
//             text: "Please Select an Option",
//             icon: "error"
//           });
//     } else {
//         if (currQue < pythonQuestions.length - 1) {
//             currQue++
//             deSelect()
//             renderQuestion2()

//         } else {
//            displayResult()
//         }
//     }
    
// }
function deSelect() {
    for (var i = 0; i < quizOpt.length; i++) {
        quizOpt[i].checked = false
}
}
  
function displayResult() {
    quizShow.style.display = 'none'
    resultShow.style.display = "block";

    var totalQ = document.getElementById('totalQuestions')
    var correctQ = document.getElementById('correctQuestions')
    var perc = document.getElementById('perc')
    var circle = document.getElementById('circle')

    var percents = Math.floor(score / htmlQuestions.length * 100)
    var result = "";
    if (percents < 70) {
        result = 'Better luck next time , You are Failed!'
        announcement.style.color = "red"
        circle.classList.remove("border-success");
        circle.classList.add('border-danger');
        perc.classList.remove('text-success');
        perc.classList.add('text-danger');
    } else {
        result = 'Congratulations You have successfully completed the challenge'
        announcement.style.color = "green"
    }
    announcement.innerHTML = result
    totalQ.innerHTML = htmlQuestions.length;
    correctQ.innerHTML = score;
    // scoring.innerHTML = `${score} out of ${htmlQuestions.length} and your percentage is ${percents} %`
    perc.innerHTML = percents;
}

window.onload = renderQuestion()


function backHome() {
    location.href = 'index.html'
}
function joinQuiz() {
    location.href = 'web.html'
}

// function joinQuiz2() {
//     location.href = 'python.html'
// }

function continueQuiz() {
    location.href = 'quiz.html'
}
// function continueQuiz2() {
//     location.href = 'python.html'
// }

// function login() {
//     var email = document.getElementById('email1');
//     var password = document.getElementById('password1');
//     var emaisignup = document.getElementById('email2');
//     var passwordsignup = document.getElementById('password2');

// var emailValue = 'saad@gmail.com';
// var passwordValue = '123'

// if (email.value === emailValue && password.value === passwordValue) {
//     location.href = 'welcome.html';
    
//   } else {
//     Swal.fire({
//         title: "Invalid Email Address or Password",
//         text: "Please enter a valid email address or password",
//         icon: "error"
//       });
//       }
  
// }

// Function to handle sign-up
function signUp() {
    var emailSignup = document.getElementById('email2').value; // Get signup email
    var passwordSignup = document.getElementById('password2').value; // Get signup password
  
    // Check if both fields are filled
    if (emailSignup === "" || passwordSignup === "") {
      Swal.fire({
        title: "Error",
        text: "Please fill in both email and password fields!",
        icon: "error"
      });
      return;
    }
  
    // Save the email and password in localStorage
    localStorage.setItem('userEmail', emailSignup);
    localStorage.setItem('userPassword', passwordSignup);
  
    Swal.fire({
      title: "Sign-Up Successful",
      text: "Your details have been saved!",
      icon: "success"
    });
  }
  
  // Function to handle login
  function login() {
    var emailLogin = document.getElementById('email1').value; // Get login email
    var passwordLogin = document.getElementById('password1').value; // Get login password
  
    // Retrieve stored email and password from localStorage
    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPassword');
  
    // Check if entered credentials match the stored ones
    if (emailLogin === storedEmail && passwordLogin === storedPassword) {
      location.href = 'welcome.html'; // Redirect on successful login
    } else {
      Swal.fire({
        title: "Invalid Email or Password",
        text: "Please enter correct credentials.",
        icon: "error"
      });
    }
  }
  