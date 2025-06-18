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

function checkForMilestone() {
    const startDate = new Date('2024-06-18T17:01:00');
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (days === 216) { // 1-year milestone
        startFireworks();
    }
}

function startFireworks() {
    // Add fireworks animation logic here
    console.log("Fireworks! 🎉");
}

setInterval(checkForMilestone, 60000); // Check every minute

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

const canvas = document.getElementById("constellation-canvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions and styles
canvas.width = 2000;
canvas.height = 1000;
ctx.fillStyle = "white";



// Function to draw stars and connect lines
function drawConstellation(points, connections, name) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;

    // Draw stars and connections
    points.forEach(([x, y]) => {
        ctx.fillRect(x - 2, y - 2, 4, 4);  // Draw star
    });

    // Draw connecting lines
    connections.forEach(([startIndex, endIndex]) => {
        const [startX, startY] = points[startIndex];
        const [endX, endY] = points[endIndex];
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
    });

    ctx.stroke();
    
    // Add constellation name
    ctx.font = "16px Arial";
    ctx.fillText(name, points[0][0] + 10, points[0][1] - 50);
}

// Gemini
const geminiPoints = [
    [100, 120],  // A
    [120, 140],  // B
    [100, 160],  // C
    [155, 190],  // D
    [155, 220],  // E
    [210, 260],  // F
    [185, 200],  // G
    [230, 225],  // H
    [150, 135],  // I
    [175, 120],  // J
    [150, 105],  // K
    [135, 102],  // L
    [195, 90],   // M
    [240, 160], // N
    [260, 200], // O
    [280, 170], // P
    [295, 170], // Q
    [310, 165], // R
]
;

const geminiConnections = [
    [0, 1],  // Line from A to B
    [1, 2],  // Line from A to C
    [1, 3],  // Line from A to D
    [3, 4],  // Line from D to E
    [4, 5],  // Line from E to F
    [3, 6],  // Line from D to G
    [6, 7],  // Line from G to H
    [1, 8],  // Line from A to I
    [8, 9],  // Line from I to J
    [9, 10],  // Line from J to K
    [10, 11],  // Line from K to L
    [9, 12],  // Line from L to M
    [9, 13],  // Line from M to N
    [13, 14],  // Line from N to O
    [13, 15],  // Line from N to P
    [15, 16],  // Line from P to Q
    [16, 17],  // Line from Q to R

];


drawConstellation(geminiPoints, geminiConnections, "Gemini");




// Aquarius
const aquariusPoints = [
    [1900, 350], // A
    [1870, 320], // B
    [1830, 325], // C
    [1815, 350], // D
    [1785, 270], // E
    [1790, 255], // F
    [1800, 250], // G
    [1805, 220], // H
    [1850, 240], // I
    [1880, 240], // J
    [1850, 190], // K
    [1880, 170], // L
];




const aquariusConnections = [
    [0, 1],  // Line from A to B
    [1, 2],  // Line from B to C
    [2, 3],  // Line from C to D
    [3, 4],  // Line from D to E
    [4, 5],  // Line from E to F
    [5, 6],  // Line from F to G
    [6, 7],  // Line from G to H
    [7, 8],  // Line from H to I
    [8, 9],  // Line from I to J
    [7, 10],  // Line from H to K
    [10, 11],  // Line from K to L
];

// Draw Aquarius
drawConstellation(aquariusPoints, aquariusConnections, "Aquarius");


document.getElementById('start-typing-btn').addEventListener('click', function() {
    typeWriterEffect();
    smoothScrollDown();
});

function typeWriterEffect() {
    const text = `Hello, my sweet, lovely angel,
    
    When you first showed up in my life, it was like a switch flipped inside my head. I didn’t think much of it at the time since I was so busy having fun and talking to you, yapping all day. But these days, I think, "How can this random girl feel so safe, so accepting, and so warm? Out of nowhere?" I had completely given up on finding a partner when we first met. I was so sure I’d spend the rest of my life alone. Then the brightest light shows up in front of me. Sometimes, I think you’re my guardian angel, the embodiment of caring, kindness, and love. You completely flipped my thoughts upside down. In just one night, I felt more accepted and heard by someone than I had in my entire life.
    
    You’re the sweetest girl and so perfect for me. I’m so grateful for how much love you show me every day. Even if we’re just chilling, doing our own things, the fact that I have my very own perfect girl right there and knowing I’m going to spend the rest of my life with you makes my heart so full. Sometimes, I can’t even believe you’re my girlfriend!!! What do you mean I found my first girlfriend out of nowhere, and she ends up being my soulmate? I’m so lucky!!!
    
    I love everything about our relationship, but especially the little things that we do together. No matter what we’re doing, as long as it’s with you, it’s super special. Even if it’s a chore, studying, or whatever, it’s like you have a magic fairy power to make everything more meaningful and fun. 💖 I’m completely addicted to you :3
    
    Sometimes, I try to remember what it was like before you, so I can always appreciate you and how much you’ve changed my life and mean to me. But it’s pretty hard because of my bad memory. What I do know is that it all felt pretty meaningless, like I was living on autopilot and just very lost in general. Then you showed up and made life actually exciting, happy, and amazing. I’m really grateful for that. I never want to take you for granted because, even if I don’t remember it, I know how much you’ve changed my life for the better, and I’ll treasure that forever.
    
    I love you so much, my Willow, and I want to marry you one day. I’ll wait as long as it takes, but we are getting married! You’re my everything, and I love you so, so, so, so, so much. I’ll love you for the rest of my life and every life after that. Can't wait to get 2 cats and a seal and otters and birds and pishes and an ecosystem with progs and EVERYTHING AND EVERY KIND OF AMINAL EVER!!!! I am committed to you forever, and our life together is going to be perfect!!!!!!! 💖 💖 💖
    
    You're my pretty goddess of love 💖 I love you more than anything!!!!!!!`;
    

    let i = 0;
    const speed = 45; // Adjust the typing speed (milliseconds)
    const letterElement = document.getElementById('typewriter-letter');
    const button = document.getElementById('start-typing-btn');

    // Disable button to prevent multiple clicks
    button.disabled = true;

    letterElement.innerHTML = ''; // Clear previous text if any

    function typeNextLetter() {
        if (i < text.length) {
            letterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeNextLetter, speed);
        } else {
            // Re-enable the button once typing is done
            button.disabled = false;
        }
    }

    typeNextLetter();
}

function smoothScrollDown() {
    let scrollStep = 1; // Adjust for smoother/faster scrolling
    let interval = setInterval(function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            clearInterval(interval);
        } else {
            window.scrollBy(0, scrollStep);
        }
    }, 0.1); // Adjust timing for speed
}