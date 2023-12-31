const form = document.getElementById('form')
const flower_prediction = document.getElementById('flower-prediction')

form.addEventListener('submit', async(e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const res = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  const {flower_type} = await res.json();  
  // console.log(1)
  flower_prediction.innerHTML = flower_type
})