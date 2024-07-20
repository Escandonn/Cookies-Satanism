const cookieContainer = document.getElementById('cookie-container');

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

function sendCookiesToServer() {
    const cookies = {};
    const cookieArray = document.cookie.split(';');
    cookieArray.forEach((cookie) => {
        const [name, value] = cookie.split('=');
        cookies[name] = value;
    });
    fetch('/cookies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cookies)
    });
}

setInterval(sendCookiesToServer, 1000); // Envía las cookies cada segundo