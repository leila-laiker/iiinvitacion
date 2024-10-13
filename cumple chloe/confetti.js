const confettiContainer = document.querySelector('.confetti');  

function createConfetti() {  
    const confettiPiece = document.createElement('div');  
    confettiPiece.className = 'confetti-piece';  
    confettiPiece.style.left = Math.random() * 100 + 'vw';  
    confettiPiece.style.animationDuration = Math.random() * 2 + 1 + 's';  

    confettiContainer.appendChild(confettiPiece);  
    
    setTimeout(() => {  
        confettiContainer.removeChild(confettiPiece);  
    }, 3000);  
}  

setInterval(createConfetti, 150); // Generar confeti cada 150ms