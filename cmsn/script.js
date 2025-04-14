function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    
    heart.style.left = Math.random() * 100 + "vw"; // Vị trí ngẫu nhiên
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Tốc độ bay khác nhau
    heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Kích thước ngẫu nhiên
    heart.style.opacity = Math.random() * 0.5 + 0.5; // Độ trong suốt nhẹ nhàng
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Tạo trái tim liên tục
setInterval(createHeart, 200);
