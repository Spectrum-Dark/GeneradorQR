// JavaScript para el menú móvil y generación de QR
document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Generador de QR (simulado - en producción usaría una librería como qrcode.js)
    const qrCanvas = document.getElementById('qrCodeCanvas');
    const ctx = qrCanvas.getContext('2d');
    
    // Función para dibujar un QR simulado
    function drawMockQR() {
        const data = document.getElementById('qrData').value;
        const size = 200;
        
        // Limpiar canvas
        ctx.clearRect(0, 0, size, size);
        
        // Fondo blanco
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, size, size);
        
        // Patrón de QR simulado
        ctx.fillStyle = 'black';
        
        // Patrones de posición
        ctx.fillRect(10, 10, 50, 50);
        ctx.fillRect(size - 60, 10, 50, 50);
        ctx.fillRect(10, size - 60, 50, 50);
        
        // Pequeños cuadrados para simular datos
        for (let i = 0; i < data.length; i++) {
            const x = 70 + (i % 10) * 12;
            const y = 70 + Math.floor(i / 10) * 12;
            
            if (Math.random() > 0.3) {
                ctx.fillRect(x, y, 8, 8);
            }
        }
    }
    
    // Event listeners para los botones
    document.getElementById('generateBtn').addEventListener('click', drawMockQR);
    document.getElementById('refreshBtn').addEventListener('click', drawMockQR);
    
    document.getElementById('downloadBtn').addEventListener('click', function() {
        // Simular descarga
        alert('En una implementación real, esto descargaría el QR code');
    });
    
    // Dibujar QR inicial
    drawMockQR();
});