const cards = [
  {
    img: "image/9ccef1377ecb9d622355f088d5d67ff8.jpg",
    title: "قائد الظلام البحري",
    desc: "في أعماق الضباب، يقود سفينته بأرواح الغضب والكنوز الملعونة."
  },
  {
    img: "image/0414ef1a5ed7f4c27c4531b3e54c503a.jpg",
    title: "سفينة الهلاك الأحمر",
    desc: "الجمجمة الميكانيكية تُبحر ليلاً، تبحث عن أرواح تائهة وأعداء لا يهابون الموت."
  },
  {
    img: "image/dfrquec-c59445c4-4ea6-45dc-84c9-4a5311db1345.png",
    title: "كنز القبطان الملعون",
    desc: "جمجمة من ذهب وسيف من نار، إنه إرث القبطان الذي لا يموت."
  }
];

let current = 0;
let card = document.getElementById("card");
let container = document.querySelector(".card-container");

// تخفيف الزوايا وتنعيم الحركة
container.addEventListener("mousemove", (e) => {
  const bounds = container.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;
  const centerX = bounds.width / 2;
  const centerY = bounds.height / 2;

  // تقليل الزاوية إلى 5 درجات فقط
  const rotateY = ((x - centerX) / centerX) * 200;
  const rotateX = ((centerY - y) / centerY) * 5;

  card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

// إعادة الوضع الطبيعي بسلاسة
container.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
});

// عند النقر: تفعيل تأثير لمعان ثم تغيير البطاقة
function nextCard() {
  card.classList.add("shine");

  setTimeout(() => {
    current = (current + 1) % cards.length;
    document.getElementById("card-image").src = cards[current].img;
    document.getElementById("card-title").textContent = cards[current].title;
    document.getElementById("card-description").textContent = cards[current].desc;
    card.classList.remove("shine");
  }, 400);
}

const btn = document.getElementById("playBtn");
const audio = document.getElementById("pirateMusic");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    btn.textContent = "⏸️";
    isPlaying = true;
  } else {
    audio.pause();
    btn.textContent = "▶️";
    isPlaying = false;
  }
});

