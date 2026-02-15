// Countdown (ganti tanggal ultah: tahun, bulan-1, tanggal)
const birthday = new Date(2026, 5, 13); // Contoh: 15 Feb 2026
const elements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;
    if (diff > 0) {
        elements.days.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
        elements.hours.textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        elements.minutes.textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        elements.seconds.textContent = Math.floor((diff % (1000 * 60)) / 1000);
    } else {
        elements.days.textContent = 'Hari ini!';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Galeri
const openBtn = document.getElementById('openGallery');
const closeBtn = document.getElementById('closeGallery');
const gallery = document.getElementById('gallery');

openBtn.addEventListener('click', () => {
    gallery.classList.remove('hidden');
    createConfetti();
});

closeBtn.addEventListener('click', () => {
    gallery.classList.add('hidden');
});

// Confetti
function createConfetti() {
    const confetti = document.getElementById('confetti');
    const emojis = ['🎉', '🎂', '💖', '✨', '🎈', '💕'];
    for (let i = 0; i < 100; i++) {
        const span = document.createElement('span');
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.random() * 100 + 'vw';
        span.style.animationDuration = (3 + Math.random() * 3) + 's';
        span.style.animationDelay = Math.random() * 2 + 's';
        confetti.appendChild(span);
        setTimeout(() => span.remove(), 8000);
    }
}

// Musik (opsional, uncomment jika mau auto play - note: browser block autoplay)
// Musik dengan kontrol manual
const music = document.getElementById('bgMusic');
const toggleBtn = document.getElementById('toggleMusic');
const musicIcon = document.getElementById('musicIcon');

let isPlaying = false;

toggleBtn.addEventListener('click', async () => {
    if (isPlaying) {
        music.pause();
        toggleBtn.innerHTML = '<span id="musicIcon">🎵</span> Putar Musik Latar';
        toggleBtn.classList.remove('playing');
        isPlaying = false;
    } else {
        try {
            await music.play();
            toggleBtn.innerHTML = '<span id="musicIcon">🔇</span> Matikan Musik';
            toggleBtn.classList.add('playing');
            isPlaying = true;
        } catch (error) {
            alert('Klik tombol play di video galeri dulu, baru musik bisa dimainkan!');
        }
    }
});

// Auto-pause saat tutup galeri
document.getElementById('closeGallery').addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        isPlaying = false;
        toggleBtn.classList.remove('playing');
        toggleBtn.innerHTML = '<span id="musicIcon">🎵</span> Putar Musik Latar';
    }
});

// music.play().catch(() => {}); // Uncomment untuk play otomatis
