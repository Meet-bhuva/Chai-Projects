const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')
    // console.log(height)
    // console.log(weight)

    if (height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid value ${height}`
    }
    else if (weight == '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid value ${weight}`
    } else {
        //  const final = Math.round((weight / ((height * height) / 10000)).toFixed(2));
        const final = (weight / ((height * height) / 10000)).toFixed(2); //toFixed help do give a value after the (.)
        if (0 < final < 18.6) {
            result.innerHTML = `<span>${final}</span><h2>Your weight is too low</h2>`
        } else if (18.6 < final < 24.9) {
            result.innerHTML = `<span>${final}</span><h2>Your weight is normal</h2>`
        } else if (24.9 < final) {
            result.innerHTML = `<span>${final}</span><h2>Your weight is too heigh</h2>`
        }
    }


})


