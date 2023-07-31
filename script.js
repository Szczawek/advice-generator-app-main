const btnAdvice = document.getElementById("generating-new-advice");

function generateAdvice(firstTime = "") {
  fetch(`https://api.adviceslip.com/advice${firstTime}`)
    .then((e) => {
      if (!e.ok) throw new Error("The website is not working well");
      return e.json();
    })
    .then((e) => {
      document.getElementById("advice-number").textContent = e["slip"]["id"];
      document.getElementById("advice").textContent = `"${e["slip"]["advice"]}"`;
    })
    .catch((error) => alert(error));
}

btnAdvice.addEventListener("click", () => generateAdvice());
generateAdvice("/117");
