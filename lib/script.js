var a = $("p");
a.css("color", "steelblue");

var b = document.querySelector("p");
b.style.color = "magenta";

var h2Style = {
  background: "gold",
  color: "white",
  "font-family": "Helvetica",
  "font-weight": "normal",
  padding: "6px",
  display: "inline-block"
};

var h2 = $("h2");
h2.css(h2Style);

var li = $("li").css("color", "tomato");

var link = $("a").css("color", "tomato");

var cssObjects = $(".cssObjects").css({
  color: "lightblue",
  fontSIze: "18px",
  border: "2px dashed purple",
  background: "yellow",
  display: "inline-block",
  padding: "8px"
});

var firstP = $("p:first-of-type").css("color", "blue");

var h3 = $("h3").text();
console.log(h3)

var h3js = document.querySelector("h3");
console.log(h3js.textContent)

var li2nd = $("#first-ul li:nth-child(2)").css("color", "grey");
console.log(li2nd.text("This list was changed"))