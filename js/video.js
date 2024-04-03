// Получаем элемент видео
var videoElement = document.getElementById('myVideo');

// Добавляем слушателя события нажатия на видео
videoElement.addEventListener('click', function() {
  // Проверяем, включен звук или нет
  if (videoElement.muted) {
    // Если звук выключен, включаем его
    videoElement.muted = false;
  } else {
    // Если звук включен, выключаем его
    videoElement.muted = true;
  }
});