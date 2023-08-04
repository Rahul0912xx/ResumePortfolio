function calculateAge() {
    const dobInput = document.getElementById("dob");
    const ageValue = document.getElementById("ageValue");

    const dob = new Date(dobInput.value);
    const now = new Date();

    const diffInMilliseconds = now - dob;
    const ageDate = new Date(diffInMilliseconds);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    ageValue.innerText = age;
}