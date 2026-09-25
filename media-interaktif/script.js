const pageLinks = [
  ["index.html", "Home"],
  ["masalah.html", "Masalah"],
  ["input.html", "Input Data"],
  ["proses.html", "Proses"],
  ["algoritma.html", "Algoritma"],
  ["flowchart.html", "Flowchart"],
  ["code.html", "Source Code"],
  ["simulasi.html", "Simulasi"],
  ["quiz.html", "Quiz"],
  ["kesimpulan.html", "Kesimpulan"],
];

const menuItems = [
  ["Nasi Goreng", 15000],
  ["Nasi Goreng Ayam", 20000],
  ["Nasi Goreng Seafood", 25000],
  ["Mie Goreng", 13000],
  ["Mie Goreng Ayam", 18000],
  ["Mie Goreng Seafood", 23000],
  ["Ayam Geprek", 18000],
  ["Ayam Penyet", 20000],
  ["Ayam Bakar", 22000],
  ["Ayam Goreng", 20000],
  ["Lele Goreng", 17000],
  ["Lele Bakar", 19000],
  ["Soto Ayam", 15000],
  ["Bakso", 15000],
  ["Indomie Goreng", 10000],
  ["Indomie Kuah", 10000],
  ["Indomie + Telur", 14000],
  ["Nasi Ayam Sambal", 18000],
  ["Nasi Telur", 12000],
  ["Nasi Campur", 20000],
  ["Es Teh", 5000],
  ["Teh Hangat", 4000],
  ["Es Jeruk", 7000],
  ["Jeruk Hangat", 6000],
  ["Es Kopi", 8000],
  ["Kopi Hangat", 7000],
  ["Es Milo", 8000],
  ["Air Mineral", 4000],
  ["Es Cincau", 8000],
  ["Jus Jeruk", 10000],
];

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

function buildNavigation() {
  const nav = document.querySelector("[data-navigation]");
  if (!nav) return;
  const current = document.body.dataset.page || "index.html";
  nav.innerHTML = pageLinks
    .map(
      ([href, label], index) => `
    <a class="nav-link ${href === current ? "active" : ""}" href="${href}">
      <span class="nav-number">${String(index + 1).padStart(2, "0")}</span><span>${label}</span>
    </a>`,
    )
    .join("");
}

function buildFloatingNavigation() {
  const current = document.body.dataset.page || "index.html";
  const index = pageLinks.findIndex(([href]) => href === current);
  if (index < 0 || document.querySelector(".floating-nav")) return;
  const previous = pageLinks[index - 1];
  const next = pageLinks[index + 1];
  const link = (item, direction) =>
    item
      ? `<a href="${item[0]}" aria-label="${direction === "prev" ? "Halaman sebelumnya" : "Halaman berikutnya"}">${direction === "prev" ? "←" : "→"} ${item[1]}</a>`
      : `<span class="disabled" aria-hidden="true"></span>`;
  const nav = document.createElement("nav");
  nav.className = "floating-nav";
  nav.setAttribute("aria-label", "Navigasi halaman pembelajaran");
  nav.innerHTML = `${link(previous, "prev")}<span class="page-count">${String(index + 1).padStart(2, "0")} / ${pageLinks.length}</span>${link(next, "next")}`;
  document.body.appendChild(nav);
}

function initAccordions() {
  document.querySelectorAll(".accordion").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      const open = panel.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
  });
}

function initTabs() {
  document.querySelectorAll("[data-tab-group]").forEach((group) => {
    const buttons = group.querySelectorAll("[data-tab]");
    const panels = group.querySelectorAll("[data-panel]");
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        buttons.forEach((item) =>
          item.classList.toggle("active", item === button),
        );
        panels.forEach((panel) =>
          panel.classList.toggle(
            "active",
            panel.dataset.panel === button.dataset.tab,
          ),
        );
      }),
    );
  });
}

function initStepper() {
  const steps = [...document.querySelectorAll(".step")];
  const next = document.querySelector("[data-step-next]");
  const reset = document.querySelector("[data-step-reset]");
  if (!steps.length || !next) return;
  let current = 0;
  const render = () =>
    steps.forEach((step, index) =>
      step.classList.toggle("active", index <= current),
    );
  next.addEventListener("click", () => {
    current = Math.min(current + 1, steps.length - 1);
    render();
  });
  reset?.addEventListener("click", () => {
    current = 0;
    render();
  });
  render();
}

function initSimulation() {
  const form = document.querySelector("#cashier-form");
  const menu = document.querySelector("#menu-select");
  const receipt = document.querySelector("#receipt");
  const customer = document.querySelector("#customer-name");
  const quantity = document.querySelector("#quantity");
  const payment = document.querySelector("#payment");
  if (!form || !menu || !receipt) return;

  menu.innerHTML = menuItems
    .map(
      ([name, price], index) =>
        `<option value="${index}">${index + 1}. ${name} - ${formatRupiah(price)}</option>`,
    )
    .join("");
  const renderReceipt = () => {
    const [name, price] = menuItems[Number(menu.value)];
    const qty = Math.max(1, Number(quantity.value) || 1);
    const total = price * qty;
    const paid = Number(payment.value) || 0;
    const change = paid >= total ? paid - total : null;
    receipt.innerHTML = `<div class="receipt-title">WARUNG PAK DIN<br>SIMULASI STRUK</div>Pelangan : ${customer.value || "-"}\nMenu     : ${name}\nHarga    : ${formatRupiah(price)}\nJumlah   : ${qty}\nSubtotal: ${formatRupiah(total)}<div class="total-line"><span>Total</span><span>${formatRupiah(total)}</span></div><p class="muted">${paid ? (change === null ? `Uang kurang ${formatRupiah(total - paid)}` : `Kembalian ${formatRupiah(change)}`) : "Masukkan uang bayar untuk menghitung kembalian."}</p>`;
  };
  form.addEventListener("input", renderReceipt);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderReceipt();
  });
  renderReceipt();
}

function initQuiz() {
  const form = document.querySelector("#quiz-form");
  if (!form) return;
  const questions = [...form.querySelectorAll("[data-answer]")];
  const progress = document.querySelector(".quiz-progress-bar");
  const result = document.querySelector("#quiz-result");
  const scoreText = document.querySelector("#score");
  const answered = () =>
    questions.filter((question) => question.querySelector("input:checked"))
      .length;
  form.addEventListener("change", () => {
    progress.style.width = `${(answered() / questions.length) * 100}%`;
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let correct = 0;
    questions.forEach((question) => {
      const selected = question.querySelector("input:checked");
      if (selected?.value === question.dataset.answer) correct += 1;
    });
    const score = Math.round((correct / questions.length) * 100);
    scoreText.textContent = `${score}/100`;
    result.querySelector("[data-result-message]").textContent =
      score >= 80
        ? "Mantap, konsep utama program sudah dikuasai."
        : score >= 60
          ? "Bagus. Tinjau kembali bagian yang masih ragu."
          : "Baca kembali materi lalu coba kuis sekali lagi.";
    result.classList.add("show");
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildNavigation();
  buildFloatingNavigation();
  initAccordions();
  initTabs();
  initStepper();
  initSimulation();
  initQuiz();
});
