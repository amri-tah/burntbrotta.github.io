document.querySelector("form[name='reviewForm']").addEventListener("submit", function (event) {
    event.preventDefault();

    const msg = document.getElementById("msg");
    const name = document.getElementById("name");
    const mail = document.getElementById("mail");

    // Regex for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    [msg, name, mail].forEach((input) => {
        input.style.border = "none" 
    });

    let hasError = false;

    if (!msg.value.trim()) {
        msg.style.border = "2px solid red";
        hasError = true;
    }
    if (!name.value.trim() || /[^a-zA-Z\s]/.test(name.value.trim())) {
        document.getElementById("name-error").textContent = "Name should only contain letters and spaces.";
        name.style.border = "2px solid red";
        hasError = true;
    }
    else {
        name.style.border = "";
        document.getElementById("name-error").textContent = ""
    }
    if (!mail.value.trim() || !emailRegex.test(mail.value.trim())) {
        document.getElementById("mail-error").textContent = "Please enter a valid email address.";
        mail.style.border = "2px solid red";
        hasError = true;
    }
    else{
        mail.style.border = "";
        document.getElementById("mail-error").textContent = "";
    }

    if (!hasError) {
        const toast = document.createElement("div");
        toast.id = "toast";
        toast.innerHTML = `
            <span class="toast-close">&times;</span>
            <span>Thank you, <b>${name.value.trim()}</b></span>, for your hilarious and thoughtful review! 🚀😄<br> 
            We'll treasure it forever, just like you treasure burnt toast. 🥂
        `; 

        msg.value = ""
        name.value = ""
        mail.value = ""

        document.body.appendChild(toast);

        toast.querySelector(".toast-close").addEventListener("click", () => {
            toast.remove();
        });
    
        setTimeout(() => {
            toast.remove();
        }, 8000);
    }    
});
