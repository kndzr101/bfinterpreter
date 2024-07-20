document.getElementById('logButton').addEventListener('click', function() {
    var textareaValue = document.getElementById('myTextarea').value;
    let input = [];
    let symbols = ['>', '<', '+', '-', '.', ',', '[', ']'];

    Array.from(textareaValue).forEach(element => {
        if (symbols.includes(element)) {
            input.push(element);
        }
    });

    let tape = new Array(30000).fill(0);  
    let pointer = 0;
    let pc = 0; 
    let outputTextarea = document.getElementById('outputTextarea');
    let output = ''; 

    while (pc < input.length) {
        let element = input[pc];

        switch (element) {
            case '>':
                pointer++;
                break;
            case '<':
                pointer--;
                break;
            case '+':
                tape[pointer]++;
                break;
            case '-':
                tape[pointer]--;
                break;
            case '.':
                output += String.fromCharCode(tape[pointer]);
                break;
            case ',':
   
                break;
            case '[':
                if (tape[pointer] === 0) {
                    let openBrackets = 1;
                    while (openBrackets > 0) {
                        pc++;
                        if (input[pc] === '[') openBrackets++;
                        if (input[pc] === ']') openBrackets--;
                    }
                }
                break;
            case ']':
                if (tape[pointer] !== 0) {
                    let closeBrackets = 1;
                    while (closeBrackets > 0) {
                        pc--;
                        if (input[pc] === ']') closeBrackets++;
                        if (input[pc] === '[') closeBrackets--;
                    }
                }
                break;
        }
        pc++;
    }

    outputTextarea.value = output; 
});