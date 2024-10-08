function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement")
    timeText.innerHTML = currentTime
}

setInterval(updateTime, 1000)

// // Make the DIV draggable:
// dragElement(document.getElementById("welcome"))

// // Define dragElement function
// function dragElement(element) {
//     // Set up variables
//     var initalX = 0;
//     var initalY = 0;
//     var currentX = 0;
//     var currentY = 0;

//     // Check for special header element
//     if (document.getElementById(element.id + "header")) {
//         // If found, assign dragMouseDown function to the header's onMouseDown event
//         document.getElementById(element.id + "header").onmousedown = startDragging;
//     } else {
//         // If not found, assign the function directly to the draggable element's onMouseDown event
//         element.onmousedown = startDragging;
//     }

//     // Define the startDragging function
//     function startDragging(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // Get starting mouse position
//         initalX = e.clientX;
//         initalY = e.clientY;

//         // Set up event listeners for mouse movement and mouse release
//         document.onmouseup = stopDragging;
//         document.onmousemove = dragElement;
//     }

//     // Define the element drag function to calculate the new position of the element
//     function dragElement(e) {
//         e = e || window.event;
//         e.preventDefault();

//         // Calculate the new mouse position
//         currentX = initalX - e.clientX;
//         currentY = initalY - e.clientY;
//         initalX = e.clientX;
//         initalY = e.clientY;

//         // Update the element's new position
//         element.style.top = (element.offsetTop - currenty) + "px";
//         element.style.left = (element.offsetLeft - currentX) + "px";
//     }

//     // Define the stopDragging function
//     function stopDragging() {
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }
// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var welcomeScreen = document.querySelector("#welcome")
var topBar = document.querySelector("#top");

function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element) {
    element.style.display = "block"
    biggestIndex++; // Increment biggestIndex by 1
    element.style.xIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
}

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
})

welcomeScreenOpen.addEventListener("click", function() {
    openWindow(welcomeScreen);
})

var selectedIcon = undefined;

function selectIcon(element) {
  element.classList.add("selected");
  element.classList.remove("deselected")
  selectedIcon = element;
}

function deselectIcon(element) {
  element.classList.remove("selected");
  element.classList.add("deselected")
  selectedIcon = undefined;
}

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element);
  } else {
    selectIcon(element);
    openWindow(window);
  }
}
dragElement(document.querySelector("#notes"));

var notesScreen = document.querySelector("#notes");

var notesScreenClose = document.querySelector("#notesclose");

notesScreenClose.addEventListener("click", () =>
closeWindow(notesScreen));

var notesScreenOpen = document.querySelector("#notesIcon");

notesScreenOpen.addEventListener("click", function() {
  openWindow(notesScreen)
  handleIconTap(notesScreenOpen)
  // if (notesScreenOpen.classList.contains("selected")) {
  //   selectIcon(notesScreenOpen);
  // } else {
  //   deselectIcon(notesScreenOpen);
  // }
})

var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  );
}

addWindowTapHandling(welcomeScreen);

addWindowTapHandling(notesScreen);

function handleWindowTap(element) {
  biggestIndex++; // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon);
}

// function initalizeWindow(elementName) {
//   var screen = document.querySelector("#" + elementName)
//   addWindowTapHandling(screen)
//   make
// }

var content = [
  {
    title: "Welcome",
    date: "10.07.2024",
    content: `
          <p>
          <p>Welcome to <b>Meow Notes!</b></p>
          <img src="https://cloud-l5rmdnp6x-hack-club-bot.vercel.app/0img_7625.jpg" alt="Carly kitty" width="200px">
          <p>This is a place where I will write about my kitties and sometimes myself. <br> My two kitties names are Alex and Carly and they are the cutest Cornish <br> Rex kitties ever to walk the planet!</p>
          <p>See that kitty in the picture above? That's Carly. She's the younger of my <br> two kitties, and the smallest. She's actually the runt of her litter.</p>
          `,
  },
  {
    title: "Sample Text",
    date: "06/28/2023",
    content: `
              <p contenteditable="True">
          Here's some sample text
        </p>
      `
  }
]

function setNotesContent(index) {

  var notesContent = document.querySelector("#notesContent")

  notesContent.innerHTML = content[index].content
}

setNotesContent(0)

function addToSideBar(index) {
  var sidebar = document.querySelector("#sidebar");
  var note = content[index];
  var newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <p style="margin: 0px;">
      ${note.title}
      </p>
      <p style="font-size: 12px; margin: 0px; text-align: right;">
      ${note.date}
      </p>
  `;
  // newDiv.innerHTML = "<p>tesxt</p>";
  // newDiv.style.display = "block"
  newDiv.addEventListener("click", function() {
    setNotesContent(index);
  });
  sidebar.appendChild(newDiv);
}


for (let i = 0; i < content.length; i++) {
  addToSideBar(i)
}
// addToSideBar(0)

dragElement(document.querySelector("#art"));

var artScreen = document.querySelector("#art");

var artScreenClose = document.querySelector("#artclose");

artScreenClose.addEventListener("click", () =>
  closeWindow(artScreen));

var artScreenOpen = document.querySelector("#artIcon");

artScreenOpen.addEventListener("click", function() {
  openWindow(artScreen)
  handleIconTap(artScreenOpen)
  // if (notesScreenOpen.classList.contains("selected")) {
  //   selectIcon(notesScreenOpen);
  // } else {
  //   deselectIcon(notesScreenOpen);
  // }
})

addWindowTapHandling(artScreen);

// var gallery = document.getElementsById("gallery");
// dragon Image

var dragonImage = document.getElementById("dragon");

var dragonImageBig = document.getElementById("dragonBig");

dragonImageBig.style.display = "none";

// dragonImage.addEventListener("click", () =>
//   gallery.style.visibility = "hidden", dragonImageBig.style.visibility = "visible");

dragonImage.addEventListener("click", (e) => {
  gallery.style.visibility = "hidden";
  dragonImageBig.style.display = "initial";
});

dragonBack = document.getElementById("dragonBack");

dragonBack.addEventListener("click", (e) => {
  gallery.style.visibility = "visible";
  dragonImageBig.style.display = "none";
});

// empire Image

var empireImage = document.getElementById("empire");

var empireImageBig = document.getElementById("empireBig");

empireImageBig.style.display = "none";

// dragonImage.addEventListener("click", () =>
//   gallery.style.visibility = "hidden", dragonImageBig.style.visibility = "visible");

empireImage.addEventListener("click", (e) => {
  gallery.style.visibility = "hidden";
  empireImageBig.style.display = "initial";
});

empireBack = document.getElementById("empireBack");

empireBack.addEventListener("click", (e) => {
  gallery.style.visibility = "visible";
  empireImageBig.style.display = "none";
});

// BB8 Image

var BB8Image = document.getElementById("BB8");

var BB8ImageBig = document.getElementById("BB8Big");

BB8ImageBig.style.display = "none";

// dragonImage.addEventListener("click", () =>
//   gallery.style.visibility = "hidden", dragonImageBig.style.visibility = "visible");

BB8Image.addEventListener("click", (e) => {
  gallery.style.visibility = "hidden";
  BB8ImageBig.style.display = "initial";
});

BB8Back = document.getElementById("BB8Back");

BB8Back.addEventListener("click", (e) => {
  gallery.style.visibility = "visible";
  BB8ImageBig.style.display = "none";
});

// Dog Image

var dogImage = document.getElementById("dog");

var dogImageBig = document.getElementById("dogBig");

dogImageBig.style.display = "none";

// dragonImage.addEventListener("click", () =>
//   gallery.style.visibility = "hidden", dragonImageBig.style.visibility = "visible");

dogImage.addEventListener("click", (e) => {
  gallery.style.visibility = "hidden";
  dogImageBig.style.display = "initial";
});

dogBack = document.getElementById("dogBack");

dogBack.addEventListener("click", (e) => {
  gallery.style.visibility = "visible";
  dogImageBig.style.display = "none";
});

// rebellion Image

var rebellionImage = document.getElementById("rebellion");

var rebellionImageBig = document.getElementById("rebellionBig");

rebellionImageBig.style.display = "none";

// dragonImage.addEventListener("click", () =>
//   gallery.style.visibility = "hidden", dragonImageBig.style.visibility = "visible");

rebellionImage.addEventListener("click", (e) => {
  gallery.style.visibility = "hidden";
  rebellionImageBig.style.display = "initial";
});

rebellionBack = document.getElementById("rebellionBack");

rebellionBack.addEventListener("click", (e) => {
  gallery.style.visibility = "visible";
  rebellionImageBig.style.display = "none";
});

// porg Image

var porgImage = document.getElementById("porg");

var porgImageBig = document.getElementById("porgBig");

porgImageBig.style.display = "none";

// dragonImage.addEventListener("click", () =>
//   gallery.style.visibility = "hidden", dragonImageBig.style.visibility = "visible");

porgImage.addEventListener("click", (e) => {
  gallery.style.visibility = "hidden";
  porgImageBig.style.display = "initial";
});

porg = document.getElementById("porgBack");

porgBack.addEventListener("click", (e) => {
  gallery.style.visibility = "visible";
  porgImageBig.style.display = "none";
});

// cat Image

var catImage = document.getElementById("cat");

var catImageBig = document.getElementById("catBig");

catImageBig.style.display = "none";

// dragonImage.addEventListener("click", () =>
//   gallery.style.visibility = "hidden", dragonImageBig.style.visibility = "visible");

catImage.addEventListener("click", (e) => {
  gallery.style.visibility = "hidden";
  catImageBig.style.display = "initial";
});

catBack = document.getElementById("catBack");

catBack.addEventListener("click", (e) => {
  gallery.style.visibility = "visible";
  catImageBig.style.display = "none";
});

// heartpad Image

var heartpadImage = document.getElementById("heartpad");

var heartpadImageBig = document.getElementById("heartpadBig");

heartpadImageBig.style.display = "none";

// dragonImage.addEventListener("click", () =>
//   gallery.style.visibility = "hidden", dragonImageBig.style.visibility = "visible");

heartpadImage.addEventListener("click", (e) => {
  gallery.style.visibility = "hidden";
  heartpadImageBig.style.display = "initial";
});

heartpadBack = document.getElementById("heartpadBack");

heartpadBack.addEventListener("click", (e) => {
  gallery.style.visibility = "visible";
  heartpadImageBig.style.display = "none";
});