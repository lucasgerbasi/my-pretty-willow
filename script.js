// Modified ASCIIAnimation to read from text files
function ASCIIAnimation(fileArray, speed, DOMtarget) {
    var currentFrame = 0;
    var animArray = [];
  
    // Function to fetch text from a file and wrap it in <pre> tags
    function fetchTextFile(url) {
        return fetch(url)
            .then(response => response.text())
            .then(text => `<pre>${text.replace(/ /g, "&nbsp;")}</pre>`);
    }
  
    // Load all text files and then start the animation
    Promise.all(fileArray.map(fetchTextFile)).then(frames => {
        animArray = frames;
        DOMtarget.innerHTML = animArray[0];
        currentFrame++;
  
        this.animation = setInterval(function () {
            DOMtarget.innerHTML = animArray[currentFrame];
            currentFrame++;
            if (currentFrame >= animArray.length) currentFrame = 0;
        }, speed);
    });
  
    this.getCurrentFrame = function () {
        return currentFrame;
    };
}

ASCIIAnimation.prototype.stopAnimation = function () {
    clearInterval(this.animation);
};

// Styling changes: Set background black, text white, and zoom out
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.style.zoom = "0.5"; // Adjust zoom to fit ASCII art on the screen

// Reference the ASCII container directly from HTML
var div1 = document.getElementById('ascii-container');

// Example usage with array of text file URLs
var textFilesArray = [
    'ASCII.txt', // Replace with your actual file URLs
    'ASCII (1).txt',
    'ASCII (2).txt',
    'ASCII (3).txt',
    'ASCII (4).txt',
    'ASCII (5).txt',
    'ASCII (6).txt',
    'ASCII (7).txt',
    'ASCII (8).txt',
    'ASCII (9).txt',
    'ASCII (10).txt',
    'ASCII (11).txt',
    'ASCII (12).txt',
    'ASCII (13).txt',
    'ASCII (14).txt',
    'ASCII (15).txt',
    'ASCII (16).txt',
    'ASCII (17).txt',
    'ASCII (18).txt',
    'ASCII (19).txt',
    'ASCII (20).txt',
    'ASCII (21).txt',
    'ASCII (22).txt',
    'ASCII (23).txt',
    'ASCII (24).txt',
    'ASCII (25).txt',
    'ASCII (26).txt',
    'ASCII (27).txt',
    'ASCII (28).txt',
    'ASCII (29).txt'
];

// Start the ASCII animation in the container
var anim1 = new ASCIIAnimation(textFilesArray, 150, div1);

// Timer code
function calculateTimeTogether() {
    const startDate = new Date('2024-06-18T17:01:00'); // Anniversary date
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffTime = Math.abs(now - startDate);

    // Convert time difference to days, hours, and minutes
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

    // Update the timer in the DOM
    document.getElementById('timer').innerHTML = `We've been together for ${days} days, ${hours} hours, and ${minutes} minutes.`;
}

// Update the timer every minute
setInterval(calculateTimeTogether, 60000);

// Initial call to display the timer immediately
calculateTimeTogether();

// Starry Sky

window.onload = function() {

	var canvas = document.getElementById("sky");
	var ctx = canvas.getContext("2d");
	
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	var count = 100;
	var stars = [];
	var opacity = 0.1;
	var r = 0;

	function draw (j) {
		ctx.fillStyle = "rgba(255,255,255," + opacity + ")";
		ctx.beginPath();
		if (opacity === 1) {
			size = 2;
		} else {
			size = stars[j].size;
		}
		ctx.rect(stars[j].xpos, stars[j].ypos, size, size);
		ctx.fill();
	}

	function newStar () {
		r = Math.floor(Math.random() * (count - 0));
		opacity = 1;
	}

	function starLight() {
		var star = stars[r];
		ctx.clearRect(star.xpos, star.ypos, 2, 2);
		draw(r);
		opacity -= 0.01;

		if (opacity <= star.op) {
			newStar();
		}
	}

	for (var i=0; i<count; i++) {
		opacity += 0.5/count;
		stars.push({
			xpos: Math.floor(Math.random()*W),
			ypos: Math.floor(Math.random()*H),
			size: 1,
			op: opacity
		})
		draw(i);
	}
	
	newStar();
	setInterval(starLight, 20);
	setInterval(starLight, 30);
}