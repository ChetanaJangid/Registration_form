// script.js 

function solve() {
    let password =
        document.getElementById('password').value;
    let repassword =
        document.getElementById('repassword').value;
    let mobile =
        document.getElementById('mobile').value;
    let mail =
        document.getElementById('email').value;
    let flag = 1;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(mail)) {
        flag = 0;
        pass.innerText =
            'Please enter a valid email address.';
        setTimeout(() => {
            pass.innerText = "";
        }, 3000);
    }

    if (password !== repassword) {
        flag = 0;
        pass.innerText =
            "Passwords do not match. Please re-enter.";
        setTimeout(() => {
            pass.innerText = "";
        }, 3000);
    }

    let passwordRegex =
        /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/;

    if (!passwordRegex.test(password)) {
        flag = 0;
        pass.innerText =
            'Password must be at least 8 characters' +
            ' long and include at least one number,' +
            ' one alphabet, and one symbol.';
        setTimeout(() => {
            pass.innerText = "";
        }, 3000);
    }
    if (flag)
        alert("Form submitted");
}
async function solve() {
    // ... existing code

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ first, last, email, dob, password, repassword, mobile, gender, qualification })
        });

        if (response.ok) {
            alert('Registration successful!');
            // Optionally, redirect the user or perform other actions after successful registration
        } else {
            const errorMessage = await response.text();
            alert(`Registration failed: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('An unexpected error occurred. Please try again later.');
    }
}