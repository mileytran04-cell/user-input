const form = document.getElementById("feedback-form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const comments = document.getElementById("comments");

const charTotal = document.getElementById("char-total");

const feedbackDisplay = document.getElementById("feedback-display");

const tooltip = document.getElementById("tooltip");

comments.addEventListener("input", function () {
charTotal.textContent = comments.value.length;
});

form.addEventListener("mouseover", function (event) {

const target = event.target;

if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {

tooltip.textContent = "Enter information here";

tooltip.classList.remove("hidden");

tooltip.style.top = event.pageY - 40 + "px";

tooltip.style.left = event.pageX + "px";

}

});

form.addEventListener("mouseout", function (event) {

const target = event.target;

if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {

tooltip.classList.add("hidden");

}

});

form.addEventListener("submit", function (event) {

event.preventDefault();

if (
username.value.trim() === "" ||
email.value.trim() === "" ||
comments.value.trim() === ""
) {
alert("Please fill in all fields.");
return;
}

const card = document.createElement("div");

card.classList.add("feedback-card");

card.innerHTML = `
<h3>${username.value}</h3>
<p>${email.value}</p>
<p>${comments.value}</p>
`;

feedbackDisplay.appendChild(card);

form.reset();

charTotal.textContent = "0";

});

form.addEventListener("click", function (event) {

event.stopPropagation();

});