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

function buildSlideNavigation() {
  const current = document.body.dataset.page || "index.html";
  const currentIndex = pageLinks.findIndex(([href]) => href === current);
  if (currentIndex < 0) return;

  const [currentHref, currentLabel] = pageLinks[currentIndex];
  const previous = pageLinks[currentIndex - 1];
  const next = pageLinks[currentIndex + 1];
  const arrowLink = (item, direction) =>
    item
      ? `<a class="slide-arrow" href="${item[0]}" aria-label="${direction === "previous" ? "Slide sebelumnya" : "Slide berikutnya"}" title="${direction === "previous" ? "Sebelumnya" : "Berikutnya"}">${direction === "previous" ? "←" : "→"}</a>`
      : `<span class="slide-arrow" aria-disabled="true" aria-hidden="true">${direction === "previous" ? "←" : "→"}</span>`;

  const menu = document.createElement("section");
  menu.className = "slide-menu";
  menu.id = "slide-menu";
  menu.hidden = true;
  menu.setAttribute("aria-label", "Daftar materi presentasi");
  menu.innerHTML = `
      <div class="slide-menu-panel" role="dialog" aria-modal="true" aria-labelledby="slide-menu-title">
        <div class="slide-menu-heading">
          <h2 id="slide-menu-title">Daftar materi</h2>
          <button class="slide-menu-close" type="button" aria-label="Tutup daftar materi">Tutup</button>
        </div>
        <nav class="slide-menu-grid" aria-label="Pilih slide">
          ${pageLinks
            .map(
              ([href, label], index) => `
            <a class="slide-menu-link" href="${href}" ${href === currentHref ? 'aria-current="page"' : ""}>
              <span class="slide-menu-number">${String(index + 1).padStart(2, "0")}</span>
              <span>${label}</span>
            </a>`,
            )
            .join("")}
        </nav>
      </div>`;

  const controls = document.createElement("nav");
  controls.className = "slide-controls";
  controls.setAttribute("aria-label", "Kontrol slideshow");
  controls.innerHTML = `
      ${arrowLink(previous, "previous")}
      <button class="slide-menu-toggle" type="button" aria-expanded="false" aria-haspopup="dialog" aria-controls="slide-menu">
        <span aria-hidden="true">☰</span><span>Menu</span>
      </button>
      <div class="slide-status">
        <span>${String(currentIndex + 1).padStart(2, "0")} / ${String(pageLinks.length).padStart(2, "0")} · ${currentLabel}</span>
        <div class="slide-progress" role="progressbar" aria-label="Progres presentasi" aria-valuemin="1" aria-valuemax="${pageLinks.length}" aria-valuenow="${currentIndex + 1}">
          <span style="width: ${((currentIndex + 1) / pageLinks.length) * 100}%"></span>
        </div>
      </div>
      ${arrowLink(next, "next")}`;

  document.body.append(menu, controls);

  const toggle = controls.querySelector(".slide-menu-toggle");
  const close = menu.querySelector(".slide-menu-close");
  const focusable = [
    ...menu.querySelectorAll("a[href], button:not([disabled])"),
  ];
  const firstFocusable = focusable[0];
  const lastFocusable = focusable[focusable.length - 1];
  const setMenuOpen = (open) => {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    document.querySelector(".main").inert = open;
    controls.inert = open;
    if (open) close.focus();
    else toggle.focus();
  };

  toggle.addEventListener("click", () => setMenuOpen(menu.hidden));
  close.addEventListener("click", () => setMenuOpen(false));
  menu.addEventListener("click", (event) => {
    if (event.target === menu) setMenuOpen(false);
  });
  menu.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
    if (event.key === "Tab") {
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (!menu.hidden) return;
    if (
      event.target.closest(
        "input, textarea, select, button, a, [contenteditable='true']",
      )
    )
      return;
    if (event.key === "ArrowLeft" && previous) navigateToSlide(previous[0]);
    if (event.key === "ArrowRight" && next) navigateToSlide(next[0]);
  });
}

function navigateToSlide(href) {
  document.dispatchEvent(new Event("page-transition-start"));
  window.location.href = href;
}

function initPageLoader() {
  const loader = document.createElement("div");
  loader.className = "page-loader";
  loader.hidden = true;
  loader.setAttribute("role", "status");
  loader.setAttribute("aria-live", "polite");
  loader.setAttribute("aria-atomic", "true");
  loader.innerHTML =
    '<span class="page-loader-spinner" aria-hidden="true"></span><span>Memuat halaman...</span>';
  document.body.appendChild(loader);

  const showLoader = () => {
    loader.hidden = false;
    document.body.setAttribute("aria-busy", "true");
  };
  const hideLoader = () => {
    loader.hidden = true;
    document.body.removeAttribute("aria-busy");
  };

  document.addEventListener("page-transition-start", showLoader);
  document.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest("a[href]");
      if (
        !link ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self")
      )
        return;

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        (destination.pathname === window.location.pathname &&
          destination.search === window.location.search)
      )
        return;

      showLoader();
    },
    true,
  );
  window.addEventListener("pageshow", hideLoader);
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
  const cartList = document.querySelector("#cart-list");
  const addButton = document.querySelector("#add-item");
  const finishButton = document.querySelector("#finish-order");
  const orderActions = document.querySelector("#order-actions");
  const paymentPanel = document.querySelector("#payment-panel");
  const message = document.querySelector("#simulation-message");
  if (
    !form ||
    !menu ||
    !receipt ||
    !customer ||
    !quantity ||
    !payment ||
    !cartList ||
    !addButton ||
    !finishButton ||
    !orderActions ||
    !paymentPanel ||
    !message
  )
    return;

  menu.innerHTML = menuItems
    .map(
      ([name, price], index) =>
        `<option value="${index}">${index + 1}. ${name} - ${formatRupiah(price)}</option>`,
    )
    .join("");

  let orders = [];
  let stage = "ordering";
  let paidAmount = 0;
  let change = 0;
  let statusMessage = "";
  const escapeHtml = (value) =>
    value.replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character],
    );

  const render = () => {
    const total = orders.reduce(
      (sum, order) => sum + menuItems[order.menuIndex][1] * order.quantity,
      0,
    );
    const totalItems = orders.reduce((sum, order) => sum + order.quantity, 0);

    cartList.innerHTML = orders.length
      ? orders
          .map((order, index) => {
            const [name, price] = menuItems[order.menuIndex];
            return `<div class="cart-row"><span>${index + 1}. ${name} | ${formatRupiah(price)} x ${order.quantity}</span><strong>${formatRupiah(price * order.quantity)}</strong><button class="cart-remove" type="button" data-remove-order="${index}" aria-label="Kurangi satu ${name}" ${stage !== "ordering" ? "disabled" : ""}>−</button></div>`;
          })
          .join("")
      : '<p class="muted">Belum ada pesanan.</p>';

    form.querySelector(".order-entry").hidden = stage !== "ordering";
    cartList.querySelectorAll("[data-remove-order]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.removeOrder);
        orders[index].quantity -= 1;
        if (orders[index].quantity === 0) orders.splice(index, 1);
        statusMessage = "Jumlah pesanan dikurangi satu.";
        render();
      });
    });
    finishButton.hidden = stage !== "ordering";
    finishButton.disabled = orders.length === 0;
    orderActions.hidden = stage !== "summary";
    paymentPanel.hidden = stage !== "payment";
    message.textContent = statusMessage;

    const orderLines = orders
      .map((order, index) => {
        const [name, price] = menuItems[order.menuIndex];
        return `${index + 1}. ${name} | ${formatRupiah(price)} x ${order.quantity} = ${formatRupiah(price * order.quantity)}`;
      })
      .join("<br>");
    const paymentDetails =
      stage === "paid"
        ? `<p>Pembayaran: ${formatRupiah(paidAmount)}<br>Kembalian: ${formatRupiah(change)}</p><p class="receipt-status">Pembayaran berhasil. Terima kasih sudah berbelanja.</p>`
        : stage === "payment"
          ? `<p class="receipt-status">${statusMessage || "Masukkan uang pembayaran untuk melanjutkan."}</p>`
          : stage === "summary"
            ? '<p class="receipt-status">Periksa ringkasan, lalu lanjutkan pembayaran atau kembali mengubah pesanan.</p>'
            : `<p class="receipt-status">${orders.length ? "Pesanan dapat ditambah atau dikurangi." : "Tambahkan menu untuk memulai pesanan."}</p>`;
    receipt.innerHTML = `<div class="receipt-title">WARUNG PAK DIN<br>${stage === "paid" ? "STRUK PEMBAYARAN" : "RINGKASAN PESANAN"}</div><p>Pelanggan: ${escapeHtml(customer.value.trim()) || "-"}</p><div class="receipt-orders">${orderLines || "Belum ada pesanan."}</div><div class="receipt-meta">Jumlah jenis pesanan: ${orders.length}<br>Total item: ${totalItems}</div><div class="total-line"><span>Total belanja</span><span>${formatRupiah(total)}</span></div>${paymentDetails}`;
  };

  addButton.addEventListener("click", () => {
    const menuIndex = Number(menu.value);
    const qty = Number(quantity.value);
    if (!Number.isInteger(qty) || qty <= 0) {
      statusMessage = "Jumlah pesanan harus lebih dari 0.";
    } else if (orders.length >= 100) {
      statusMessage = "Pesanan sudah mencapai batas maksimal 100 jenis.";
    } else {
      orders.push({ menuIndex, quantity: qty });
      quantity.value = "1";
      statusMessage = "Pesanan berhasil ditambahkan.";
    }
    render();
  });

  finishButton.addEventListener("click", () => {
    if (orders.length === 0) return;
    stage = "summary";
    statusMessage = "";
    render();
  });
  document.querySelector("#back-to-order").addEventListener("click", () => {
    stage = "ordering";
    statusMessage = "Pesanan dapat ditambah atau dikurangi.";
    render();
  });
  document.querySelector("#start-payment").addEventListener("click", () => {
    stage = "payment";
    statusMessage = "";
    render();
    payment.focus();
  });
  document.querySelector("#submit-payment").addEventListener("click", () => {
    const amount = Number(payment.value);
    const total = orders.reduce(
      (sum, order) => sum + menuItems[order.menuIndex][1] * order.quantity,
      0,
    );
    if (!Number.isInteger(amount) || amount < 0) {
      statusMessage =
        "Masukkan nominal pembayaran berupa bilangan bulat positif.";
    } else if (amount < total) {
      statusMessage = `Uang kurang ${formatRupiah(total - amount)}. Masukkan pembayaran kembali.`;
    } else {
      paidAmount = amount;
      change = amount - total;
      stage = "paid";
      statusMessage = "";
    }
    render();
  });
  customer.addEventListener("input", render);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  render();
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
      const isCorrect = selected?.value === question.dataset.answer;
      const correctOption = [...question.querySelectorAll("input")].find(
        (option) => option.value === question.dataset.answer,
      );
      const correctAnswer = correctOption.closest("label").textContent.trim();
      const feedback = question.querySelector(".question-feedback");
      if (isCorrect) {
        correct += 1;
        feedback.textContent = "Benar.";
      } else if (selected) {
        feedback.textContent = `Belum tepat. Jawaban yang benar: ${correctAnswer}.`;
      } else {
        feedback.textContent = `Belum dijawab. Jawaban yang benar: ${correctAnswer}.`;
      }
      feedback.classList.toggle("is-correct", isCorrect);
      feedback.classList.toggle("is-incorrect", !isCorrect);
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

function initOutputGuess() {
  const form = document.querySelector("#output-guess-form");
  const feedback = document.querySelector("#output-guess-feedback");
  const question = form?.querySelector("[data-answer]");
  if (!form || !feedback || !question) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = form.querySelector("input:checked");
    const isCorrect = selected?.value === question.dataset.answer;
    feedback.textContent = isCorrect
      ? "Tepat. Subtotalnya Rp30.000 + Rp5.000 = Rp35.000, total item 3, dan kembaliannya Rp5.000."
      : "Belum tepat. Hitung tiap subtotal, jumlahkan total item, lalu kurangi Rp40.000 dengan total belanja.";
    feedback.classList.toggle("is-correct", isCorrect);
    feedback.classList.toggle("is-incorrect", !isCorrect);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildSlideNavigation();
  initPageLoader();
  initAccordions();
  initTabs();
  initStepper();
  initSimulation();
  initQuiz();
  initOutputGuess();
});
