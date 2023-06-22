
let select = document.querySelectorAll(".select")
let btn = document.getElementById("btn")
let alert = document.getElementById("alert");
btn.addEventListener("click", () => {
    let curr1 = select[0].value;
    let curr2 = select[1].value;
    let inputval = input1.value;
    if (curr1 === curr2) {
        alert.innerHTML = "Choose different currency!"
    }
    else {
        convert(curr1, curr2, inputval)
    }
})
let input1 = document.getElementById("input1")


let result = fetch('https://api.frankfurter.app/currencies').then((resp) => resp.json()).then((res) => displayDropdown(res)).catch((err) => console.log(err))

function displayDropdown(res) {
    let arr = Object.entries(res);
    for (i = 0; i <= arr.length; i++) {
        let opt = `<option value="${arr[i][0]}">${arr[i][0]}</option>`
        
        select[0].innerHTML += opt;
        select[1].innerHTML += opt;
    }
}
function convert(curr1, curr2, inputval) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(Object.values(data.rates)[0]);
            document.getElementById("input2").value = Object.values(data.rates)[0];
        });
}