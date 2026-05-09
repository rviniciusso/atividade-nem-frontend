function gerarCorAleatoria() {
        
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            
            const novaCor = `rgb(${r}, ${g}, ${b})`;
            
            document.body.style.backgroundColor = novaCor;
        }