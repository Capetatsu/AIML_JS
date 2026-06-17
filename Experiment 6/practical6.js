function changeText() {
  document.getElementById("heading").innerText =
    "DOM Updated Successfully";
}

function changeColor() {
  document.getElementById("heading").style.color = "blue";
}

function toggleImage() {

  let img = document.getElementById("image");

  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}
