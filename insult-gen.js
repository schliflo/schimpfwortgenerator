(function () {
    let h1 = document.createElement('h1');
    let rfrsh = document.createElement('div');

    rfrsh.innerHTML = '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1639 1056l-1 7q-64 268-268 435t-478 166q-146 0-282-55t-244-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 23 10t9 22zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65T460 628q-11 17-53 117-8 23-30 23H178q-13 0-22-9t-10-23v-7q65-268 270-434t480-167q146 0 284 56t245 156l130-129q19-19 45-19t45 19 19 45z"/></svg>';
    rfrsh.classList.add('rfrsh');
    h1.contentEditable = 'true';

    rfrsh.addEventListener('click', () => {
        window.location.reload();
    });

    fetch('bad-words.json')
        .then((response) => {
            return response.json();
        }).then((json) => {

        h1.innerText = json.words[Math.floor(Math.random() * Math.floor(json.words.length))];

        document.body.appendChild(h1);
        document.body.appendChild(rfrsh);
    });
})();
