// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
getInstruction('mashedPotatoes', 1, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
getInstruction('mashedPotatoes', 2, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
getInstruction('mashedPotatoes', 3, (step3) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
getInstruction("mashedPotatoes", 4, (step4) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
  
}, (err) => console.log(err));

}, (err) => console.log(err));

}, (err) => console.log(err));

}, (err) => console.log(err));

}, (err) => console.log(err));

/*
 let li = document.createElement("li");
 li.innerText = "Mashed potatoes are ready!";
 document.getElementById("mashedPotatoes").appendChild(li);
*/

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    console.log(step0);
    return obtainInstruction("steak", 1);
  })
  .catch((error) => {
    console.log(error);
  })

  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    console.log(step1);
    return obtainInstruction("steak", 2);
  })
  .catch((error) => {
    console.log(error);
  })

  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    console.log(step2);
    return obtainInstruction("steak", 3);
  })
  .catch((error) => {
    console.log(error);
  })

  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    console.log(step3);
    return obtainInstruction("steak", 4);
  })
  .catch((error) => {
    console.log(error);
  })

  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    console.log(step4);
    return obtainInstruction("steak", 5);
  })
  .catch((error) => {
    console.log(error);
  })

  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    console.log(step5);
    return obtainInstruction("steak", 6);
  })
  .catch((error) => {
    console.log(error);
  })

  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    console.log(step6);
    return obtainInstruction("steak", 7);
  })
  .catch((error) => {
    console.log(error);
  });
 
  




// Iteration 3 using async/await
const makeBroccoli= async () => {
  try {

    const step0 = await obtainInstruction("broccoli",0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    const step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    const step2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    const step3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    const step4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    const step5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    const step6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
 
  } catch (error) {console.log(error)};
}

makeBroccoli();


// Bonus 2 - Promise all

/*
note to self: 
V1 if each element in the array is a promise.

Promise.all(brusselsSprouts)
  .then((values) => {
    console.log("values", values);
    values.forEach((value) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`;
    });
  })
  .catch((error) => console.log(error));
*/

/*
  note to self: 
  V2 map each element in the brusselsSprouts 
  array to a resolved promise using Promise.resolve().
  this is due to this being a normal array 
  and not an array of promises.(in that case use V1).
*/                  

  const promises = brusselsSprouts.map((item) => {
    return Promise.resolve(item);
  });

  Promise.all(promises)
    .then((values) => {
      console.log("values", values);
      values.forEach((value) => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`;
      });
    })
    .catch((error) => console.log(error));

