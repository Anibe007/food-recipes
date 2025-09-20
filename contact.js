function registerUser() {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value.trim();

  if (!fullname || !email || !username || !password) {
    alert("Please fill in all fields ❌");
    return false;
  }

  // In a real app, you would send this data to your backend
  alert(`🎉 Account created successfully for ${fullname}!`);
  
  // Redirect back to login
  window.location.href = "index.html";
  return false;
}
