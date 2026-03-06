$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid()


    // TODO 2 - Create Platforms
createPlatform (100,610,100,10,"red")
createPlatform (100,485,100,10,"red")
createPlatform(347,400,100,10,"red")
createPlatform(100,280,100,10,"blue") 
createPlatform(320,200,100,10,"blue")
createPlatform(600,420,100,10,"blue")
createPlatform(860,340,100,10,"red")
createPlatform(860,230,57,10,"blue")
createPlatform(1000,140,100,10,"red")
createPlatform(200,400,10,70,"red")
createPlatform(1300,640,100,10)
createPlatform(1100,640,100,10)


createBadPlatform(1020,730,300,10)
createBadPlatform(1000,400,100,10,"red")
   createBadPlatform(150,700,10,10,"lightblue")
createBadPlatform(430,700,10,10,"black")


// TODO 3 - Create Collectables
    createCollectable("netherite", 610, 200);
createCollectable("JackBlack",160, 201,1,1);
createCollectable("Master",160, 400,1,1);
createCollectable("diamond",430,600,1,1)
createCollectable("netherite",800,100,)
createCollectable("DanTdm",1300,300,)
createCollectable("diamond",1000,530)
createCollectable("diamond",1220,530)

    
    // TODO 4 - Create Cannons

createCannon("top", 300, 1600);
  createCannon("right",500,1700);
    createCannon("top",600,1400);
    createCannon("bottom",600,1400)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
