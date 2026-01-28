function initAnswer(data) {
    const allQuestion = document.createElement('div');
    allQuestion.style.display = "flex";
    allQuestion.style.justifyContent = "center";
    allQuestion.style.alignItems = "center";
    allQuestion.style.flexDirection = "column";
    allQuestion.style.marginBottom = `2vh`;
    allQuestion.style.marginTop = `2vh`;
    
    data.forEach((element, index) => {
        const questionBox = document.createElement('div');
        questionBox.setAttribute("class", "box");
        questionBox.style.display = "flex";
        questionBox.style.justifyContent = "center";
        questionBox.style.alignItems = "flex-start";
        questionBox.style.flexDirection = "column";
        questionBox.style.width = "40%";
        questionBox.style.margin = `10px`;
        
        const question = document.createElement('h4');
        question.appendChild(document.createTextNode(element["question"]));
        questionBox.appendChild(question);
        
        const ansSet = element["answers"];
        const groupName = `question_${index}`;
        
        Object.keys(ansSet).forEach(key => {
            if (key === "correct") return;
            
            const c = ansSet[key];
            const questionChoices = document.createElement("div");
            
            const inp = document.createElement('input');
            inp.setAttribute("type", "radio");
            inp.setAttribute("name", groupName);
            inp.setAttribute("value", c);
            inp.style.margin = `7px`;
            inp.checked = (c === ansSet["correct"]);
            
            const inpLabel = document.createElement('label');
            inpLabel.appendChild(document.createTextNode(c));
            
            questionChoices.appendChild(inp);
            questionChoices.appendChild(inpLabel);
            questionBox.appendChild(questionChoices);
        });
        
        allQuestion.appendChild(questionBox);
    });
    
    const btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Submit'));
    btn.addEventListener('click', () => checkAns(data));
    btn.style.cursor = `pointer`;
    btn.style.padding = `10px`;
    btn.style.width = `7vw`;
    allQuestion.appendChild(btn);
    
    const body = document.querySelector('body');
    body.appendChild(allQuestion);
}

function checkAns(data) {
    let correctCount = 0;
    
    data.forEach((element, index) => {
        const groupName = `question_${index}`;
        const selected = document.querySelector(`input[name="${groupName}"]:checked`);
        const ansSet = element["answers"];
        const correctAnswer = ansSet["correct"];

        if (selected && selected.value === element["answers"][correctAnswer]) {
            correctCount++;
        }
    });
    
    alert(`You got ${correctCount} out of ${data.length} correct!`);
}

fetch('questionAnswerData.json')
    .then(response => response.json())
    .then(data => initAnswer(data))
    .catch(err => console.log("err: " + err));