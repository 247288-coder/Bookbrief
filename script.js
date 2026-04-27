// ---- Navbar Scroll Effect ----
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNavbar');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');

  const btn = document.getElementById('scrollTopBtn');
  if (window.scrollY > 400) btn.classList.add('visible');
  else btn.classList.remove('visible');
});

// ---- Scroll to Top ----
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- Fill Search ----
function fillSearch(title) {
  document.getElementById('heroSearchInput').value = title;
  document.getElementById('heroSearchInput').focus();
}

// ---- Book Data ----
const bookData = {
  "atomic habits": {
    title: "Atomic Habits",
    summary: "Atomic Habits by James Clear is a comprehensive guide on building good habits and breaking bad ones. Clear's core argument is that small, consistent improvements — just 1% better every day — compound into remarkable results over time. The book introduces the Four Laws of Behavior Change: make it obvious, make it attractive, make it easy, and make it satisfying.",
    takeaways: [
      "Habits are the compound interest of self-improvement.",
      "Your identity shapes your habits — focus on who you want to become.",
      "The 2-Minute Rule: start any habit in under 2 minutes.",
      "Environment design is more powerful than willpower.",
      "Habit stacking links new habits to existing ones."
    ],
    plan: [
      { day: "Day 1", task: "Identify ONE habit you want to build. Write down your identity statement: 'I am a person who ___'." },
      { day: "Day 2", task: "Design your environment: remove cues for bad habits, make good habits obvious." },
      { day: "Day 3", task: "Apply the 2-Minute Rule. Start your new habit for just 2 minutes today. No excuses." },
      { day: "Day 4", task: "Use habit stacking: 'After I [current habit], I will [new habit].'" },
      { day: "Day 5", task: "Track your habit with a simple X on a calendar. Never miss twice." },
      { day: "Day 6", task: "Reward yourself immediately after completing your habit to reinforce it." },
      { day: "Day 7", task: "Reflect: What friction slowed you down? Remove one obstacle to make the habit easier." }
    ]
  },
  "think and grow rich": {
    title: "Think and Grow Rich",
    summary: "Napoleon Hill's classic distills the mindset principles of 500 of the most successful people of the 20th century. The central premise is that thoughts are things — and with a burning desire, faith, and a definite plan, the mind can attract wealth and success. Hill outlines 13 principles including desire, faith, specialized knowledge, and the mastermind group.",
    takeaways: [
      "A burning desire is the starting point of all achievement.",
      "Faith amplifies the power of thought into reality.",
      "Your subconscious mind doesn't distinguish real from imagined.",
      "A mastermind group accelerates your success dramatically.",
      "Persistence is the direct result of habit."
    ],
    plan: [
      { day: "Day 1", task: "Write your definite major purpose — a specific goal with a deadline and what you'll give in return." },
      { day: "Day 2", task: "Read your purpose statement aloud twice daily, morning and night, with emotion." },
      { day: "Day 3", task: "Identify your mastermind group: 3 people who will support and challenge your growth." },
      { day: "Day 4", task: "Visualize your goal as already achieved for 10 minutes. Feel the emotions of success." },
      { day: "Day 5", task: "Replace one self-limiting belief with a positive affirmation. Write it 10 times." },
      { day: "Day 6", task: "Take one concrete step today toward your goal — no matter how small." },
      { day: "Day 7", task: "Review your week. What fears appeared? Write how you'll overcome each one." }
    ]
  },
  "the psychology of money": {
    title: "The Psychology of Money",
    summary: "Morgan Housel explores how people think about money, and why financial success has more to do with behavior than intelligence. The book argues that wealth is what you don't spend — it's invisible — and that your personal history shapes your relationship with risk and money more than any market formula.",
    takeaways: [
      "Getting wealthy and staying wealthy are very different skills.",
      "Compounding is the 8th wonder of the world — give it time.",
      "Save without a specific reason — it buys freedom.",
      "Reasonable is better than rational in financial decisions.",
      "Your financial history shapes your risk tolerance more than data."
    ],
    plan: [
      { day: "Day 1", task: "Track every rupee/dollar you spend today. Awareness is the foundation of financial health." },
      { day: "Day 2", task: "Identify one unnecessary expense. Redirect that money to savings this week." },
      { day: "Day 3", task: "Define what 'enough' means for you. Write it down clearly." },
      { day: "Day 4", task: "Set up or review an emergency fund. Aim for 3-6 months of expenses." },
      { day: "Day 5", task: "Research one long-term investment option and take a small step toward it." },
      { day: "Day 6", task: "Reflect on a past money mistake. What did it teach you about your behavior?" },
      { day: "Day 7", task: "Write your personal money philosophy — your 'why' behind every financial decision." }
    ]
  },
  "deep work": {
    title: "Deep Work",
    summary: "Cal Newport argues that the ability to focus without distraction on a cognitively demanding task — what he calls 'deep work' — is becoming increasingly rare and valuable. He makes the case that cultivating a deep work habit is essential in today's distracted economy, and provides practical rules and strategies for doing so.",
    takeaways: [
      "Deep work is the superpower of the 21st century economy.",
      "Shallow work is abundant but low-value; deep work is rare but high-value.",
      "Schedule deep work like a meeting — protect it fiercely.",
      "Boredom is necessary to train focus — embrace it.",
      "Quit social media unless it clearly serves your goals."
    ],
    plan: [
      { day: "Day 1", task: "Identify your most important deep work task. Clear 90 minutes in your calendar for it tomorrow." },
      { day: "Day 2", task: "Do your first 90-minute deep work block. No phone, no tabs — full focus." },
      { day: "Day 3", task: "Track your hours of deep work today. Aim for at least 1 hour." },
      { day: "Day 4", task: "Delete or mute one social media app for the rest of the week." },
      { day: "Day 5", task: "Practice being bored: no phone during meals or commutes. Let your mind wander." },
      { day: "Day 6", task: "Design your ideal deep work schedule for next week. Block the time now." },
      { day: "Day 7", task: "Review: How many hours of deep work did you log? Set a higher target for next week." }
    ]
  },
  "default": {
    title: "",
    summary: "This is a powerful book filled with transformative ideas that challenge the way we think and behave. The author draws on research, personal stories, and timeless wisdom to present a framework for personal growth that is both practical and deeply insightful. At its core, the book argues that lasting change comes from shifting our mindset, habits, and daily routines.",
    takeaways: [
      "Mindset is the foundation of all lasting change.",
      "Small daily actions compound into life-changing results.",
      "Self-awareness is the first step to transformation.",
      "Consistency beats intensity every time.",
      "Your environment shapes your behavior more than willpower."
    ],
    plan: [
      { day: "Day 1", task: "Write 3 things from the book that resonated with you most." },
      { day: "Day 2", task: "Identify the ONE area of your life this book speaks to. Set a clear goal." },
      { day: "Day 3", task: "Apply the book's first key principle to a real situation you're facing today." },
      { day: "Day 4", task: "Share one insight from the book with a friend and discuss it." },
      { day: "Day 5", task: "Start a small habit inspired by the book. Do it for just 5 minutes today." },
      { day: "Day 6", task: "Journal: How has this book challenged your current thinking?" },
      { day: "Day 7", task: "Create a 30-day follow-up plan to keep applying the book's lessons." }
    ]
  }
};

// ---- Generate Summary ----
function generateSummary() {
  const input = document.getElementById('heroSearchInput').value.trim();
  if (!input) {
    showToast('Oops!', 'Please enter a book title first.');
    return;
  }

  const key = input.toLowerCase();
  let data = bookData['default'];
  for (const k in bookData) {
    if (k !== 'default' && (key.includes(k) || k.includes(key.split(' ')[0]))) {
      data = bookData[k];
      break;
    }
  }

  document.getElementById('resultBookTitle').textContent =
    `📖 ${data.title || input} — Summary & Action Plan`;
  document.getElementById('resultSummary').textContent = data.summary;

  const ul = document.getElementById('resultTakeaways');
  ul.innerHTML = data.takeaways.map(t => `<li>${t}</li>`).join('');

  const planDiv = document.getElementById('actionPlan');
  planDiv.innerHTML = data.plan.map(p => `
    <div class="action-day-item">
      <div class="action-day-label">${p.day}</div>
      <div class="action-day-task">${p.task}</div>
      <button class="btn btn-sm btn-outline-success check-btn" onclick="markComplete(this)">
        <i class="bi bi-check2"></i>
      </button>
    </div>
  `).join('');

  const resultSection = document.getElementById('resultSection');
  resultSection.classList.remove('d-none');
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  showToast('✅ Done!', `Summary for "${input}" is ready!`);
}

// ---- Mark Day Complete ----
function markComplete(btn) {
  const item = btn.closest('.action-day-item');
  item.classList.toggle('completed');
  btn.innerHTML = item.classList.contains('completed')
    ? '<i class="bi bi-check2-circle"></i>'
    : '<i class="bi bi-check2"></i>';
}

// ---- Close Result ----
function closeResult() {
  document.getElementById('resultSection').classList.add('d-none');
}

// ---- Step Visual Switch ----
function setStep(num) {
  document.querySelectorAll('.step-item').forEach((el, i) => {
    el.classList.toggle('active', i + 1 === num);
  });
  document.querySelectorAll('.step-visual-content').forEach((el, i) => {
    el.classList.toggle('d-none', i + 1 !== num);
  });
}

// ---- Enter Key Trigger ----
document.getElementById('heroSearchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') generateSummary();
});

// ---- Load More Books (Demo) ----
function loadMoreBooks() {
  showToast('Coming Soon!', 'Full book browser launching soon. Upgrade to Pro to unlock all 50K+ books!');
}

// ---- Newsletter Subscribe ----
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value;
  if (!email || !email.includes('@')) {
    showToast('Oops!', 'Please enter a valid email address.');
    return;
  }
  showToast('🎉 Subscribed!', 'Welcome! Your first summary arrives Sunday.');
  document.getElementById('newsletterEmail').value = '';
}

// ---- Toast Notification ----
function showToast(title, message) {
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastBody').textContent = message;
  const toastEl = document.getElementById('liveToast');
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

// ---- Scroll Reveal Animation ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) el.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .book-card, .testi-card, .price-card, .step-item')
  .forEach(el => observer.observe(el));