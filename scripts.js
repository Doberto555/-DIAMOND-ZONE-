if(id === "" || diamonds === ""){ alert("Remplis tous les champs"); return; }

let message = Bonjour, je veux acheter ${diamonds}\nID: ${id}; let phone = "509XXXXXXXX";

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url, "_blank"); }

function scrollToOrder() { document.getElementById("order").scrollIntoView({ behavior: "smooth" }); }