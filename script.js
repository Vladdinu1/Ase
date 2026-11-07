var shareBtn = document.getElementById('shareButton');
if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'Mon Cher',
                text: 'Vă așteptăm în număr cât mai mare la petrecere!',
                url: window.location.href
            })
            .then(() => console.log('Partajare reușită!'))
            .catch((error) => console.log('Eroare la partajare:', error));
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link-ul site-ului a fost copiat în clipboard!");
        }
    });
}