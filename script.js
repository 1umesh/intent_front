// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("form");
  
//     form.addEventListener("submit", async function (e) {
//       e.preventDefault();
  
//       const formData = new FormData(form);
  
//       try {
//         const response = await fetch("http://127.0.0.1:8000/predict", {
//           method: "POST",
//           body: formData
//         });
  
//         if (!response.ok) {
//           throw new Error("Prediction failed");
//         }
  
//         const data = await response.json();
  
//         const resultDiv = document.getElementById("resultBox");
//         // Old response structure:
//         // <h3>Result: ${data.result}</h3>
//         // <p>Conversion Probability: ${data.probability}</p>

//         resultDiv.innerHTML = `
//             <h3>Best Intent: ${data.best_intent}</h3>
//             <p>Adjusted Score: ${data.score}</p>
//             <p>Reasoning: ${data.reasoning}</p>
//         `;
//       } catch (error) {
//         alert("An error occurred while predicting: " + error.message);
//       }
//     });
//   });
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      const loadingDiv = document.getElementById("loading");
      const resultDiv = document.getElementById("resultBox");
  
      loadingDiv.style.display = "block";
      resultDiv.innerHTML = "";
  
      try {
        const response = await fetch("https://intent-back.onrender.com/predict", {
          method: "POST",
          body: formData
        });
  
        if (!response.ok) {
          throw new Error("Prediction failed");
        }
  
        const data = await response.json();
        loadingDiv.style.display = "none";
  
        resultDiv.innerHTML = `
          <h3>Best Intent: ${data.best_intent}</h3>
          <p>Adjusted Score: ${data.score}</p>
          <p>Reasoning: ${data.reasoning}</p>
        `;
      } catch (error) {
        loadingDiv.style.display = "none";
        alert("An error occurred while predicting: " + error.message);
      }
    });
  });