import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, wildlife} from "./parks/RockyMountain";

function ColoradoStateParks() {
  return(
    <div>
      <MesaVerde />
    </div>
  );

}
console.log(trees);
// => Aspen and Pine

wildlife();
//Elk, ....

export default ColoradoStateParks;
export function wildlife() {
  console.log("Elk, Bighorn Sheep, Moose");
}

function elevation() {
  console.log("9583 ft");
}