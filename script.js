function sayHello() {
  const name = document.getElementById('name').value;
  if (name.trim() === "") {
    alert("Please enter your name first!");
  } else {
    alert("Hello, " + name + "!");
  }
}
