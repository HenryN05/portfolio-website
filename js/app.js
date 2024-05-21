const objects = document.querySelectorAll(".circle-solid");
const initialX = window.innerWidth / 2;
const initialY = window.innerHeight / 2;
let mouseX = initialX;
let mouseY = initialY;

objects.forEach((object) => {
  // Get the center of each object
  const rect = object.getBoundingClientRect();
  const objectCenterX = rect.left + rect.width / 2;
  const objectCenterY = rect.top + rect.height / 2;

  // Calculate the distance between the object center and the initial center
  const deltaX = objectCenterX - initialX;
  const deltaY = objectCenterY - initialY;
  const distanceFromInitial = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  // Calculate the unit vector from the object center to the initial center
  const unitVectorX = deltaX / distanceFromInitial;
  const unitVectorY = deltaY / distanceFromInitial;

  // Calculate the new center of the object after moving 21 pixels towards the mouse cursor
  const newCenterX = objectCenterX + unitVectorX * 14;
  const newCenterY = objectCenterY + unitVectorY * 14;

  // Set the new position of the object
  object.style.left = `${newCenterX - rect.width / 2}px`;
  object.style.top = `${newCenterY - rect.height / 2}px`;
});

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
})

function update() {
  objects.forEach((object) => {
    const rect = object.getBoundingClientRect();
    const objectCenterX = rect.left + rect.width / 2;
    const objectCenterY = rect.top + rect.height / 2;

    const deltaX = mouseX - objectCenterX;
    const deltaY = mouseY - objectCenterY;

    const distanceFromCursor = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distanceFromCursor > 50) {
      const moveX = (deltaX / distanceFromCursor) * 14;
      const moveY = (deltaY / distanceFromCursor) * 14;

      object.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  });

  requestAnimationFrame(update);
}

update();
