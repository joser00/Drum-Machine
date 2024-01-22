const drumPad = document.getElementsByClassName("drum-pad");
const volumePista = document.getElementById("volume");

function playPista() {
  //Going through the collection of buttons
  for (const drumElement of drumPad) {
    //Event of click
    drumElement.addEventListener("click", () => {
      let CurrentdrumElement = drumElement.children[0]; //Here we saved the current child audio element of the corresponding button
      if (CurrentdrumElement.paused) {
        //If it's paused, triggered
        CurrentdrumElement.play(); //Let's play it
        document.getElementById("current-pista").textContent =
          CurrentdrumElement.parentElement.id;
      }
    });
    //Event of key
    document.addEventListener("keydown", (e) => {
      let CurrentdrumElement = drumElement.children[0];
      if (
        e.key === CurrentdrumElement.id ||
        e.key === CurrentdrumElement.id.toLowerCase()
      ) {
        console.log(CurrentdrumElement);
        CurrentdrumElement.play();
      }
    });
    //Adjusting the volume of the pistas
    volumePista.addEventListener("input", () => {
      let volumeParse = volumePista.value / 100;
      drumElement.children[0].volume = volumeParse;
      let convertVolumeTo100 = volumeParse * 100;
      document.getElementById(
        "current-pista"
      ).textContent = `Volume:${convertVolumeTo100.toFixed(0)}`;
    });
  }
}
playPista()