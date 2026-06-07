const form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi <= 18.5){
      results.innerHTML = `Under weight ${bmi}`;
    }
    else if(bmi < 25){
      results.innerHTML = `Normal range ${bmi}`;
    }
    else{
      results.innerHTML = `Overweight ${bmi}`;
    }
  }

});