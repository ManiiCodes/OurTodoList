// Tab Navigation
const tabs = document.querySelectorAll('.tabs-nav button');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    // Set all tabs aria-selected false, tabindex -1
    tabs.forEach(t => {
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    // Hide all panels
    panels.forEach(panel => panel.classList.remove('active'));

    // Activate current tab and panel
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    panels[i].classList.add('active');
    panels[i].focus();
  });
});

// Modal Elements
const openModalBtn = document.getElementById('openModalBtn');
const loveModal = document.getElementById('loveModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalSaveBtn = document.getElementById('modalSaveBtn');
const modalLoveLetter = document.getElementById('modalLoveLetter');
const modalStatus = document.getElementById('modalStatus');

// Open modal
openModalBtn.addEventListener('click', () => {
  loveModal.classList.add('active');
  modalLoveLetter.focus();
  loveModal.setAttribute('aria-hidden', 'false');
});

// Close modal
modalCloseBtn.addEventListener('click', closeModal);
loveModal.addEventListener('click', (e) => {
  if (e.target === loveModal) closeModal();
});

function closeModal() {
  loveModal.classList.remove('active');
  loveModal.setAttribute('aria-hidden', 'true');
  modalStatus.textContent = '';
  modalLoveLetter.value = '';
  openModalBtn.focus();
}

// Save love letter (for demo, just show a success message)
modalSaveBtn.addEventListener('click', () => {
  const letter = modalLoveLetter.value.trim();
  if (!letter) {
    modalStatus.style.color = 'red';
    modalStatus.textContent = 'Please write something before saving.';
    return;
  }
  modalStatus.style.color = '#4caf50';
  modalStatus.textContent = 'Love letter saved! 💖';

  // Clear after a short delay
  setTimeout(() => {
    closeModal();
  }, 2000);
});
