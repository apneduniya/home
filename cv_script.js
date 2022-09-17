function checkbox_function() {
  let x = document.getElementById("cross");
  let y = document.
  getElementById("menu");
  let z = document.getElementById("hamburger");
  if (y.style.visibility === "visible") {
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.visibility = "visible";
  }
  else {
    x.style.visibility = "visible";
    y.style.visibility = "visible";
    z.style.visibility = "hidden";
  }
}

function send() {
  emailjs.send("service_dsrxap8", "template_a1b978b", {
    from_name: document.getElementById("userName").value,
    email_id: document.getElementById("userEmail").value,
    message: document.getElementById("userBody").value,
  })}
