function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const score = document.getElementById('score').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    let isValid = true;

    // Validation logic
    if (name.trim() === '') {
        displayError('Name is required.');
        isValid = false;
    }

    if (isNaN(age) || age <= 0) {
        displayError('Age must be a positive number.');
        isValid = false;
    }

    if (isNaN(score) || score < 0 || score > 100) {
        displayError('Score must be a number between 0 and 100.');
        isValid = false;
    }

    const today = new Date();
    const selectedDate = new Date(dob);
    if (isNaN(selectedDate.getTime()) || selectedDate > today) {
        displayError('Invalid Date of Birth.');
        isValid = false;
    }

    if (!validateEmail(email)) {
        displayError('Invalid email address.');
        isValid = false;
    }

    if (!validatePassword(password, confirmPassword)) {
        displayError('Passwords do not match or do not meet the criteria.');
        isValid = false;
    }

    if (isValid) {
        // Display success message and form values
        outputDiv.innerHTML = `
            <p>Form submitted successfully.</p>
            <p>Name: ${name}</p>
            <p>Age: ${age}</p>
            <p>Score: ${score}</p>
            <p>Date of Birth: ${dob}</p>
            <p>Email: ${email}</p>
        `;
    }

    function displayError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        outputDiv.appendChild(errorDiv);
    }

    function validateEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }

    function validatePassword(password, confirmPassword) {
        // Password criteria: 1 uppercase, 1 lowercase, 1 number, 1 special character, min 8 characters
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password) && password === confirmPassword;
    }
}
