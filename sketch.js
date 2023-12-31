let myParagraph;
let myButton;
let picture;
// let img = createImg('/assets/PacMan.png');



function setup() {

  
  myParagraph = createP("html");
  myParagraph.position(0, 0);
  
  myButton = createButton("Button")
  myButton.mouseClicked(clickedButton);

  slider = createSlider(1, 100)
  slider.addClass("sliderClass")
  slider.id("theSlider")

  picture = select("img");
  picture.doubleClicked(clickedImage);
}

function draw() {
   myParagraph.position(mouseX, mouseY);
   myParagraph.style("font-size", slider.value() + "px")
   slider.position(0, 300)
}

function clickedButton() {
  //select('#second').style("font-size", "xx-small")
  select("img").style("width", "100px")
}

function makeRed() {
  myParagraph.style("color", "red");
}

function clickedImage () {
  select("#second").hide();

}

/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus")
1. Where, in the p5 reference, do we find all this DOM stuff?
   On the main page it is the fourth option down.
2. Why is the text so large when it's just a "paragraph"?
   It is given a larger value in the style.css file!
3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed?
   That is the format of the .style. You clarify the thing 
   you want to change and then the style of thing you want to change it to.  

Some Things to Try:
0. Make the text follow the mouse pointer
1. Make a button
2. Make the button affect the style or position of some text
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference?
4. Can you make the position of the image change when the
   button is pressed?
5. Make a slider and have it change the text size
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/