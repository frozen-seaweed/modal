const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modalContainer = document.getElementById('modalContainer');
const closeModal = function() {
    modalContainer.classList.remove('active');
}

openBtn.addEventListener('click', function () {
    modalContainer.classList.add('active');
});

closeBtn.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal)
