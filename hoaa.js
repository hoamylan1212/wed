// script.js

document.addEventListener('DOMContentLoaded', function () {
    const acceptButton = document.getElementById('accept');
    const rejectButton = document.getElementById('reject');
    const responseMessage = document.getElementById('responseMessage');

    acceptButton.addEventListener('click', function () {
        responseMessage.textContent = "Yay! Hảo yêu con khác!";
        responseMessage.style.color = "#4caf50"; // Màu xanh lá cho thông báo đồng ý
    });

    rejectButton.addEventListener('click', function () {
        responseMessage.textContent = "Oh no! Em yêu người khác";
        responseMessage.style.color = "#f44336"; // Màu đỏ cho thông báo từ chối

        // Thêm lớp 'move' và 'disabled' vào nút "Từ chối"
        rejectButton.classList.add('move');
        rejectButton.classList.add('disabled');
    });
});
