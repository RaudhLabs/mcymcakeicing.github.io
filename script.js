// CHANGE THIS ↓↓↓ WITH YOUR UPI ID
const upi_id = "8349624736@ybl";  
const amount = 500;

document.getElementById("payBtn").onclick = function () {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !phone) {
        alert("Please enter your Name and Phone before paying.");
        return;
    }

    // Add dynamic note to UPI
    const note = encodeURIComponent(`Reg-${name}-${phone}`);

    // Universal UPI deep link
    const upiLink =
        `upi://pay?pa=${upi_id}&pn=Registration&am=${amount}&cu=INR&tn=${note}`;

    // Open UPI apps
    window.location.href = upiLink;
};

document.getElementById("regForm").onsubmit = function (e) {
    e.preventDefault();

    const txnId = document.getElementById("txnId").value.trim();

    // Basic UTR validation (UPI Txn ID is usually > 12 chars)
    if (txnId.length < 10) {
        alert("Payment NOT verified! Enter a valid Transaction ID.");
        return;
    }

    document.getElementById("successMsg").style.display = "block";
    document.getElementById("successMsg").innerHTML =
        "Registration Successful! Payment Verified.";

    alert("Registration Successful!");

    // Optionally: disable form after submit
    // document.getElementById("regForm").reset();
};
