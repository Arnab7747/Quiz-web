const questions=[
    {
        'que': 'Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que': 'What year java script launched?',
        'a':'1934',
        'b':'2001',
        'c':'1999',
        'd':'1995',
        'correct':'b'
    },
    {
        'que': 'What does CSS used fpr?',
        'a':'domaing',
        'b':'form',
        'c':'styling',
        'd':'server',
        'correct':'c'
    }
]
let index=0;
let total = questions.length;
let right =0, wrong =0;
const quebox = document.getElementById("quebox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(index == total){
       return endQuiz()
    }
    reset();
    const data =questions[index]
    quebox.innerText =`${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText= data.a;
    optionInputs[1].nextElementSibling.innerText= data.b;
    optionInputs[2].nextElementSibling.innerText= data.c;
    optionInputs[3].nextElementSibling.innerText= data.d;


}
const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            
            }
        }
    )
     return answer;   

    

}

const reset =()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked =false;
        }
    )

}
const endQuiz =()=>{
    document.getElementById("box").innerHTML =`
    <h3> Thank you for playing </h3>
    <h2>${right}/${total} are correct</h3>`
}
loadQuestion();