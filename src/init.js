import gameState from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

function init() {
  console.log("starting game", gameState);
  let nextTimeToTick = Date.now();
  initButtons(gameState.handleUserAction);

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame();
}

init();
