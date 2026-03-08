<script>

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let fname = document.getElementById("fname").value.trim();
let lname = document.getElementById("lname").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let message = document.getElementById("message").value.trim();

let error = document.getElementById("errorMsg");

if(fname=="" || lname=="" || email=="" || phone=="" || message==""){
    
    error.innerText="Field Value need to be filled up";
    return;
}

error.innerText="";

console.log("First Name:",fname);
console.log("Last Name:",lname);
console.log("Email:",email);
console.log("Phone:",phone);
console.log("Message:",message);
});

</script>