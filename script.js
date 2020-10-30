const rollBtn = document.querySelector(".roll-btn");
const resetBtn = document.querySelector(".reset-btn");
const image = document.querySelector("img");
const value = document.querySelector(".dice-value");
const score = document.querySelector(".score");
const result = document.querySelector(".result");
const diceNumber = (event) => {
    console.log("hhhhh");
  const num = Math.floor(Math.random() * 6 + 1);
  roll += num;
  count += 1;
  if (count === 5) {
    rollBtn.setAttribute("disabled", true);
    if (roll > 24){
        result.innerHTML="You won"
    }else{
        result.innerHTML = "You Loose"
    }
  }

  image.src = `./assets/Dice Images/dice-${num}.png`;
  value.innerHTML = num;
score.innerHTML = roll

  event.preventDefault();
};
let roll = 0;
let count = 0;
const reset =()=>{
    rollBtn.removeAttribute("disabled");
    count=0
    roll =0
    result.innerHTML=""
    image.src = ``;
  value.innerHTML = "";
score.innerHTML = 0


}
rollBtn.addEventListener("click", diceNumber);
resetBtn.addEventListener("click", reset );
