function welcome() {
    let MSG = window.document.querySelector('.welcomeMessage');
    let date = new Date();
    let hour = date.getHours();

    if (hour > 5 && hour < 12)
        MSG.innerHTML = 'Bom dia! &#x1F307;';
    else if (hour >= 12 && hour < 18)
        MSG.innerHTML = 'Boa tarde! &#x1F306;';
    else if (hour >= 18 && hour < 23)
        MSG.innerHTML = 'Boa noite! &#127747;';
    else
        MSG.innerHTML = 'Boa madrugada! &#x1F30C;';
}