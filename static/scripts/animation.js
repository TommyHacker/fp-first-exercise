const sky = document.querySelector(".sky-container");
// return the path to a random one of the cloud images
const cloudPicker = () => {
  const chosenOne = Math.floor(Math.random() * 4);
  switch (chosenOne) {
    case 0:
      return "./images/sprites/clouds/cloud-sprite-1.png";
      break;
    case 1:
      return "./images/sprites/clouds/cloud-sprite-2.png";
      break;
    case 2:
      return "./images/sprites/clouds/cloud-sprite-3.png";
      break;
    case 3:
      return "./images/sprites/clouds/cloud-sprite-5.png";
      break;
    case 4:
      return "./images/sprites/clouds/cloud-sprite-6.png";
      break;
  }
};

// vary the animation duration!
const randomiseDuration = () => {
  const variant = Math.floor(Math.random() * 60000);
  if (variant < 30000) return 30000;
  return variant;
};

// will return random time between 2 and 10 seconds.
const randomiseTime = () => {
  const random = Math.floor(Math.random() * 10000);
  if (random < 2000) return 10000;
  return Number(random);
};
// will choose random Y-axis position from top to halfway down screen
// to be used as value of css instruction. element{top:<randomYPosition>;}
const randomYPosition = () => {
  const positionY = Math.floor(Math.random() * 30);
  return `${positionY}vh`;
};
// will return from-left or from-right to be added as css class to element.
const randomDirection = () => {
  const leftOrRight = Math.floor(Math.random() * 2);
  if (leftOrRight >= 1) {
    return "from-right";
  } else {
    return "from-left";
  }
};
// keep the id moving, it will never be the same, even after ten thousand clouds have been generated,
// lord knows what will happen if there is ever a duplicate.
let highestId = 0;
let oldId = 0;
const generateId = () => {
  oldId = highestId;
  highestId += 1;
  return oldId;
};

// this will represent each cloud that generates on the page
// random image, from random direction, at random y axis, at random time.
class Cloud {
  constructor() {
    this.id = generateId();
    this.startTime = randomiseTime();
    this.animationDuration = randomiseDuration();
    this.deleteTime = this.startTime + this.animationDuration;
  }
  renderCloud() {
    // create a container div to parent the cloud img.
    const cloudContainer = document.createElement("div");
    // set the class and randomise left or right animation
    cloudContainer.classList = `cloud-container from-left`;
    console.log("this.animatinoduration", this.animationDuration);
    cloudContainer.style.animationDuration = `${Math.floor(
      this.animationDuration / 1000
    )}s`;
    // create img element and assign it a random cloud image
    const cloud = document.createElement("img");
    cloud.src = cloudPicker();
    // apply cloud css class
    cloud.className = "cloud";
    // append to the container
    cloudContainer.append(cloud);
    // randomise how far down the page it is
    cloudContainer.style.top = randomYPosition();
    // set the id of the HTML element to id of class object
    // this will make it possible to delete the correct cloud after animation
    cloudContainer.id = this.id;
    // append to sky container div
    sky.append(cloudContainer);
  }
  mutate() {
    // PREPARE TO DESTROY ELEMENT
    // find the div with same ID as this.class object
    const target = document.getElementById(`${this.id}`);
    setInterval(() => {
      // remove it from the DOM
      sky.removeChild(target);
    }, this.deleteTime);
    // then replace it with new randomised props
    this.id = generateId();
    this.startTime = randomiseTime();
    this.animationDuration = randomiseDuration();
    this.deleteTime = this.startTime + this.animationDuration;
  }
}

// Here we go!
// start the cloud machine!

const cloud = new Cloud();
setInterval(() => {
  cloud.renderCloud();
  cloud.mutate();
}, cloud.startTime);

class Bird {
  constructor() {
    this.id = generateId();
    this.startTime = randomiseTime();
    this.animationDuration = randomiseDuration();
    this.deleteTime = this.startTime + this.animationDuration;
  }
  renderBird() {
    const birdContainer = document.createElement("div");
    birdContainer.classList = `cloud-container ${randomDirection()}`;
    birdContainer.style.animationDuration = `${Math.floor(
      this.animationDuration / 1000
    )}s`;
    const bird = document.createElement("img");
    bird.src = `./images/sprites/birds.gif`;
    birdContainer.append(bird);
    birdContainer.style.top = randomYPosition();
    birdContainer.id = this.id;
    sky.append(birdContainer);
  }
  mutate() {
    const target = document.getElementById(`${this.id}`);
    setInterval(() => {
      sky.removeChild(target);
    }, this.deleteTime);
    this.id = generateId();
    this.startTime = randomiseTime();
    this.animationDuration = randomiseDuration();
    this.deleteTime = this.startTime + this.animationDuration;
  }
}

const bird = new Bird();
setInterval(() => {
  bird.renderBird();
  bird.mutate();
}, bird.startTime);

const house1 = document.querySelector(".house-1");
const house2 = document.querySelector(".house-2");
const house3 = document.querySelector(".house-3");
const house4 = document.querySelector(".house-4");
const house5 = document.querySelector(".house-5");

const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const project3 = document.querySelector(".project-3");
const project4 = document.querySelector(".project-4");
const project5 = document.querySelector(".project-5");

const hoverHandler = (house, modal) => {
  house.addEventListener("mouseover", () => {
    modal.style.display = "flex";
  });
  house.addEventListener("mouseout", () => {
    modal.style.display = "none";
  });
};

let houses = [house1, house2, house3, house4, house5];
let modals = [project1, project2, project3, project4, project5];

for (let i = 0; i < houses.length; i++) {
  hoverHandler(houses[i], modals[i]);
}
