function createTable() {
  let inputValue = document.getElementById("input").value;
  let input = document.getElementById("input");
  let table = document.getElementById("table");
  let enter = document.getElementById("Generate_Results");
  //   let reset = document.getElementById

  if (inputValue <= 0 || inputValue >= 1000) {
    alert("kindly enter value between 0 and 999");
  } else {
    table.innerText = " ";
    table.style.display = "block";
    for (let i = 0; i <= 10; i++) {
      let resultat = inputValue + "*" + i + "=" + inputValue * i + "<hr>";
      table.innerHTML += resultat;
    }
  }
  input.addEventListener("keyup", (e) => {
    if (e.key === 13) {
      table.innerText = " ";
      table.style.display = "block";
      for (let i = 0; i <= 10; i++) {
        let resultat = inputValue + "*" + i + "=" + inputValue * i + "<hr>";
        table.innerHTML += resultat;
      }
    }
  });
}
function resetTable() {
  let table = document.getElementById("table");
  let reset = document.getElementById("reset");
  reset.style.display = "none";
  reset.style.display = "none";
}
