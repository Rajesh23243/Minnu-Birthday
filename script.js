let currentPage = 1;
const totalPages = 9;

function startSurprise() {
    startMusic();
    showPage(2);
}

/* =========================
   PAGE SYSTEM
========================= */

function showPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(`page${pageNumber}`);

    if (target) {
        target.classList.add("active");
        currentPage = pageNumber;
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pageNumber === 9) {
        setTimeout(createCelebration, 500);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}


/* =========================
   MUSIC
========================= */

const music = document.getElementById("music");

function startMusic() {
    if (!music) return;

    music.volume = 0.45;

    music.play().catch(() => {
        console.log("Music waiting for user interaction.");
    });
}

function toggleMusic() {
    if (!music) return;

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}


/* =========================
   MEMORY SYSTEM
========================= */

const memories = [
    {
        image: "photos/memory1.jpg",
        text: "If I could freeze one moment with you… it would be this one. ❤️‍🩹✨"
    },
    {
        image: "photos/memory2.jpg",
        text: "A little moment only we could understand… and one I'll always keep close to my heart. 🥹💗"
    },
    {
        image: "photos/memory3.jpg",
        text: "One achievement, one beautiful memory… and the person who makes it even more special. 🎓💞"
    },
    {
        image: "photos/memory4.jpg",
        text: "Your beauty has a way of making me stop, smile, and fall for you all over again. 🌹😍"
    },
    {
        image: "photos/memory5.jpg",
        text: "Just you and me, this close… honestly, that's my favorite place to be. 🫶🏻💕"
    },
    {
        image: "photos/memory6.jpg",
        text: "That smile of yours… my favorite little reason to smile too. 😊💓"
    },
    {
        image: "photos/memory7.jpg",
        text: "When we're together, even the simplest moments somehow become my happiest memories. 🥰🌸"
    },
    {
        image: "photos/memory8.jpg",
        text: "A beautiful place, a beautiful moment… made even more beautiful because I had you beside me. 🛕💖"
    },
    {
        image: "photos/memory9.jpg",
        text: "Another temple, another memory, another moment of being grateful that I get to share this journey with you. 🪷💗"
    },
    {
        image: "photos/memory10.jpg",
        text: "Taking care of each other, being there for each other… that's the kind of love I want us to keep forever. 🤍🫂✨"
    }
];

let memoryIndex = 0;

function showMemory(index) {
    const photo = document.getElementById("memoryPhoto");
    const caption = document.getElementById("memoryCaption");
    const counter = document.getElementById("memoryCounter");

    if (!photo || !caption) return;

    memoryIndex = index;

    photo.style.opacity = "0";

    setTimeout(() => {
        photo.src = memories[index].image;
        caption.textContent = memories[index].text;

        if (counter) {
            counter.textContent = `${index + 1} / ${memories.length}`;
        }

        photo.style.opacity = "1";
    }, 250);
}

function nextMemory() {
    memoryIndex++;

    if (memoryIndex >= memories.length) {
        memoryIndex = 0;
    }

    showMemory(memoryIndex);
}


/* =========================
   GIFT
========================= */

let giftOpened = false;

function openGift() {
    if (giftOpened) return;

    giftOpened = true;

    const gift = document.getElementById("gift");
    const giftMessage = document.getElementById("giftMessage");

    createFlash();
    createPartyBlast(65);
    createHeartBurst(18);

    if (gift) {
        gift.classList.add("opening");
    }

    setTimeout(() => {
    if (giftMessage) {
        giftMessage.classList.add("show");
    }

    const giftButton = document.getElementById("giftButton");

    if (giftButton) {
        giftButton.classList.remove("hidden");
    }

}, 700);
}


/* =========================
   🌈 FLOATING LOVE PARTICLES
========================= */

const floatingSymbols = [
    "❤️",
    "💗",
    "💜",
    "💙",
    "🤍",
    "✨",
    "🎉",
    "🎊",
    "🌟"
];

const MAX_FLOATING = 28;

function createFloatingSymbol() {

    const existing = document.querySelectorAll(".heart");

    if (existing.length >= MAX_FLOATING) return;

    const element = document.createElement("div");

    element.className = "heart";

    element.textContent =
        floatingSymbols[
            Math.floor(Math.random() * floatingSymbols.length)
        ];

    const size = 18 + Math.random() * 25;

    const duration = 7 + Math.random() * 7;

    const startX = Math.random() * 100;

    const drift = -80 + Math.random() * 160;

    const delay = Math.random() * 1.5;

    const opacity = 0.45 + Math.random() * 0.5;

    element.style.left = `${startX}%`;
    element.style.fontSize = `${size}px`;
    element.style.opacity = opacity;
    element.style.setProperty("--drift", `${drift}px`);
    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay}s`;

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, (duration + delay) * 1000 + 500);
}


/* =========================
   CONTINUOUS FLOATING
========================= */

function startFloatingSymbols() {

    // Initial wave
    for (let i = 0; i < 18; i++) {
        setTimeout(() => {
            createFloatingSymbol();
        }, i * 300);
    }

    // Continuous wave
    setInterval(() => {
        createFloatingSymbol();
    }, 650);
}


/* =========================
   HEART BURST
========================= */

function createHeartBurst(count = 15) {

    for (let i = 0; i < count; i++) {

        const heart = document.createElement("div");

        heart.className = "party-particle";

        heart.textContent =
            floatingSymbols[
                Math.floor(Math.random() * floatingSymbols.length)
            ];

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 250;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.setProperty("--x", `${x}px`);
        heart.style.setProperty("--y", `${y}px`);

        heart.style.fontSize =
            `${18 + Math.random() * 22}px`;

        heart.style.animationDuration =
            `${1.2 + Math.random() * 1.3}s`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}


/* =========================
   🎉 GIFT PARTY BLAST
========================= */

const partySymbols = [
    "❤️",
    "💗",
    "💜",
    "💙",
    "🤍",
    "✨",
    "🎉",
    "🎊",
    "🌟"
];

function createPartyBlast(count = 60) {

    for (let i = 0; i < count; i++) {

        const particle = document.createElement("div");

        particle.className = "party-particle";

        particle.textContent =
            partySymbols[
                Math.floor(Math.random() * partySymbols.length)
            ];

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            150 + Math.random() * 450;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        particle.style.left = "50%";
        particle.style.top = "50%";

        particle.style.setProperty("--x", `${x}px`);
        particle.style.setProperty("--y", `${y}px`);

        particle.style.fontSize =
            `${16 + Math.random() * 28}px`;

        particle.style.animationDuration =
            `${1.2 + Math.random() * 1.8}s`;

        particle.style.animationDelay =
            `${Math.random() * 0.25}s`;

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 3500);
    }
}


/* =========================
   CINEMATIC FLASH
========================= */

function createFlash() {

    const flash = document.createElement("div");

    flash.className = "cinematic-flash";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 1000);
}


/* =========================
   FINAL CELEBRATION
========================= */

function createCelebration() {

    createHeartBurst(15);
    createPartyBlast(25);

}


/* =========================
   ⭐ STAR FIELD
========================= */

function createStars() {

    const starsContainer =
        document.getElementById("stars");

    if (!starsContainer) return;

    for (let i = 0; i < 55; i++) {

        const star = document.createElement("span");

        star.className = "star";

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        star.style.animationDelay =
            `${Math.random() * 4}s`;

        star.style.animationDuration =
            `${2 + Math.random() * 4}s`;

        starsContainer.appendChild(star);
    }
}


/* =========================
   KEYBOARD NAVIGATION
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        nextPage();
    }

    if (event.key === "ArrowLeft") {

        if (currentPage > 1) {
            showPage(currentPage - 1);
        }

    }

});


/* =========================
   START
========================= */

document.addEventListener("DOMContentLoaded", () => {

    showPage(1);

    createStars();

    startFloatingSymbols();

    // Start music after first interaction
    document.body.addEventListener(
        "click",
        startMusic,
        { once: true }
    );

});