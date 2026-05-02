// Step 4.1 Access DOM
const clickBtn = document.getElementById("clickBtn");
const textInput = document.getElementById("textInput");
const selectOption = document.getElementById("selectOption");
const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const hoverBox = document.getElementById("hoverBox");
const output = document.getElementById("output");

// Step 4.2 Click Event
clickBtn.addEventListener("click", () => {
    output.innerText = "Button clicked!";
});

// Step 4.3 Input & Change Event
textInput.addEventListener("input", () => {
    output.innerText = "Typing: " + textInput.value;
});

selectOption.addEventListener("change", () => {
    output.innerText = "Selected: " + selectOption.value;
});

// Step 4.4 Submit Event
form.addEventListener("submit", (e) => {
    e.preventDefault(); // penting!
    output.innerText = "Form submitted: " + nameInput.value;
});

// Step 4.5 Keyup Event
textInput.addEventListener("keyup", (e) => {
    output.innerText = "Last key: " + e.key;
});

// Step 4.6 Mouse Events
hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.background = "yellow";
});

hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.background = "lightgray";
});

// Step 4.7 Focus & Blur
textInput.addEventListener("focus", () => {
    textInput.classList.add("focused");
});

textInput.addEventListener("blur", () => {
    textInput.classList.remove("focused");
});