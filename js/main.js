console.log("JavaScriptの動作確認");

// ScrollTrigger を使うなら最初に1回だけ
gsap.registerPlugin(ScrollTrigger);

// =========================
// ハンバーガーメニュー
// =========================
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

if (hamburger && mobileNav) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });
}

document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// =========================
// ヒーロー（背景 → タイトル）
// ※ hero-container の単体 gsap.to は削除して timeline に統一
// =========================
const heroTl = gsap.timeline();

heroTl
  .to(".hero-container", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
  })
  .fromTo(
    ".hero__title",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    "+=0.2"
  );

// =========================
// 商品ラインナップ
// =========================
gsap.from(".product-link", {
  scrollTrigger: {
    trigger: ".product",
    start: "top 20%",
    // markers: true
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
});

// =========================
// About（about-contents が複数ある前提で、各ブロックごとに発火）
// 1つ目：テキスト（左→） / 画像（右→）
// 2つ目：画像（左→） / テキスト（右→）
// =========================
const aboutContents = document.querySelectorAll(".about-contents");

// 1つ目
if (aboutContents[0]) {
  const c1 = aboutContents[0];

  gsap
    .timeline({
      scrollTrigger: {
        trigger: c1,
        start: "top 70%",
        once: true,
        // markers: true
      },
    })
    .fromTo(
      [c1.querySelector(".about__headline"), c1.querySelector(".about__text")],
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
      }
    )
    .fromTo(
      c1.querySelector(".about__img"),
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      "<"
    );
}

// 2つ目
if (aboutContents[1]) {
  const c2 = aboutContents[1];

  gsap
    .timeline({
      scrollTrigger: {
        trigger: c2,
        start: "top 70%",
        once: true,
        // markers: true
      },
    })
    .fromTo(
      c2.querySelector(".about__img"),
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(
      [c2.querySelector(".about__headline"), c2.querySelector(".about__text")],
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
      },
      "<"
    );
}
