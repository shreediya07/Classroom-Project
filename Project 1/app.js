document.addEventListener("DOMContentLoaded", function () {
    console.log("MIT Profile loaded");

    const welcomeMessage = document.getElementById("welcomeMessage");
    const studentName = document.getElementById("studentName");

    // Show today's date
    const today = new Date();
    welcomeMessage.textContent =
        "Welcome to MIT College! Today's date is " +
        today.toLocaleDateString();

    // Bonus: Toggle student name
    const fullName = "Shreediya Kunwar";
    const shortName = "Shreediya";

    studentName.addEventListener("click", function () {
        if (studentName.textContent === fullName) {
            studentName.textContent = shortName;
        } else {
            studentName.textContent = fullName;
        }
    });
});