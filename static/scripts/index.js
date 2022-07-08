// logo "tom hacker_"
const logoName = document.querySelector(".logo-name");

// click on logo. if already on homepage, do nothing
// else redirect to homepage.
logoName.addEventListener("click", () => {
  const urlRef = window.location.toString().split(":")[2];
  console.log(window.location);
  if (urlRef !== "5500/") {
    window.location.replace("/");
  } else {
    console.log("already home.");
  }
});

const pageStats = document.querySelector(".page-stats");

// THIS EXPANDING / CONTRACTING AND SCROLLTO() STUFF WAS JUST FOR FUN

// I HAVE A REALLY NICE CREATEIVE IDEA OF PRESENTING MY PROJECTS IN THE NEAR FUTURE

// IT INVOLVES AIR BALLOOOOONS!

// display window width and height dynamically on resize.
window.addEventListener("resize", () => {
  pageStats.textContent = `width ${window.innerWidth}px, height: ${window.innerHeight}px`;
});

// make the project card expand and contract on click.
const projectCards = document.querySelectorAll(".project-card");

// contract document.element that is passed in to the function
const contractElement = (element) => {
  element.style.height = "150px";
  element.style.borderRadius = "8px";
  element.style.display = "block";
  element.style.overflowY = "hidden";
};
// expand document.element that is passed in to the function
const expandElement = (element) => {
  element.style.display = "flex";
  element.style.height = "auto";
  element.borderRadius = "4px";

  // get the top, right, bottom, left positions x , y;
  const elementPosition = element.getBoundingClientRect();
  // floor the num returned from element.top
  const top = Math.floor(elementPosition.top);

  // set scrollTo(top = element.top)
  window.scrollTo({ top, left: 0, behavior: "smooth" });
};

// loop through project card elements and apply click event listener
projectCards.forEach((projectCard) => {
  // set global expanded state true? or false?
  let expandedState = false;

  // when clicked
  projectCard.addEventListener("click", () => {
    // switch the expanded state to the opposite true or false;
    expandedState = !expandedState;

    // if expanded, contract. if contracted, expand!
    !expandedState ? contractElement(projectCard) : expandElement(projectCard);
  });
  // element should be contracted on page load
  contractElement(projectCard);
});
