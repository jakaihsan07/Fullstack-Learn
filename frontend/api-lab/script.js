const fetchBtn = document.getElementById("fetchBtn");
const output = document.getElementById("output");

// Step 4.1 Event Listener
fetchBtn.addEventListener("click", () => {
    getUsers();
});

async function getUsers() {
    // Step 5.3 Loading
    output.innerHTML = "Loading...";

    try {
        // Step 4.2 Fetch API
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        // Step 4.3 Convert to JSON
        const data = await res.json();

        // Clear output
        output.innerHTML = "";

        // Step 5.1 Display Data
        data.forEach(user => {
            const div = document.createElement("div");
            div.classList.add("user");

            div.innerHTML = `
                <strong>${user.name}</strong><br>
                Email: ${user.email}<br>
                City: ${user.address.city}
            `;

            output.appendChild(div);
        });

    } catch (error) {
        // Step 5.2 Error Handling
        output.innerHTML = "❌ Error fetching data";
        console.error(error);
    }
}