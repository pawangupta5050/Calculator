let input = document.getElementById('input');

const display = (num) => {
    input.value += num;
}

const calculate = () => {
    try{
        input.value = eval(input.value);
    }
    catch{
        alert('Invalid')
    }
}

const Clear = () => {
    input.value = "";
}

const del = () => {
    input.value = input.value.slice(0, -1)
}