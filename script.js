const hero = document.getElementById("hero");
const registerBtn = document.getElementById("register-btn");

registerBtn.addEventListener("click", () => {
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    document.getElementById("register-form").style.display = "none";

    document.getElementById("greet").textContent = `Welcome, ${firstName}!`;
    document.getElementById("show-full-name").innerHTML = 
        `<strong class="font-semibold">Full Name: </strong>${firstName} ${lastName}`;
    document.getElementById("show-email").innerHTML = 
        `<strong class="font-semibold">Email: </strong>${email}`;
    document.getElementById("show-password").innerHTML = 
        `<strong class="font-semibold">Password: </strong>
        <button id="show-password-btn"
                class="btn-wide btn-outline btn-info" 
                onclick="showPassword()">show</button>`;
    hero.classList.toggle("active");
    
});

// const showPasswordBtn = document.getElementById("show-password-btn");
// showPasswordBtn.addEventListener("click", () => {
//     showPasswordBtn.outerHTML = password;
// });

function showPassword() {
    document.getElementById("show-password-btn").outerHTML = password.value;
}
