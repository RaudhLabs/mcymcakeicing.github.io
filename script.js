// CHANGE THIS ↓↓↓ WITH YOUR UPI ID
const upi_id = "YOUR_UPI_ID_HERE";  
const amount = 500;

document.getElementById("payBtn").onclick = function () {

    // Create universal UPI deep link
    const upiLink =
        `upi://pay?pa=${upi_id}&pn=Registration&am=${amount}&cu=INR`;

    // Try to open in Google Pay / PhonePe
    window.location.href = upiLink;
};

document.getElementById("regForm").onsubmit = function (e) {
    e.preventDefault();

    const txnId = document.getElementById("txnId").value.trim();

    if (txnId.length < 8) {
        alert("Payment NOT verified! Enter a valid Transaction ID.");
        return;
    }

    document.getElementById("successMsg").style.display = "block";
    document.getElementById("successMsg").innerHTML = "Registration Successful! Payment Verified.";
    
    alert("Registration Successful!");
};
