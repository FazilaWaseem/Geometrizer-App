function calculate(){
    let radius = document.getElementById('radius').value;
    let pai = 3.142;
    let circumference = (2 * pai * radius);
    let area = (pai * radius * radius);

    let result = document.getElementById('result');
    result.innerHTML = `<b>The circumference is ${circumference .toFixed(2)}</b></br>
    <b>The area is ${area.toFixed(2)}</b>`;
    


}