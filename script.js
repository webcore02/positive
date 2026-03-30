function formСlick(event) {

    if (event) {
        event.preventDefault();
    }
   let p = document.getElementById("form-click");
   p.innerHTML = "Ваша заявка отправлена! Ждите обратной связи :)"
}