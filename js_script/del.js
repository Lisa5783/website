// Получаем элемент с ID "delivery_asap" (опция быстрой доставки)
const deliveryAsap = document.getElementById("delivery_asap");

// Получаем элемент с ID "delivery_specific" (опция конкретного времени доставки)
const deliverySpecific = document.getElementById("delivery_specific");

// Получаем элемент с ID "delivery_time_input" (поле ввода времени доставки)
const deliveryTimeInput = document.getElementById("delivery_time_input");

// Получаем элемент с ID "time_label" (метка для поля ввода времени)
const timeLabel = document.getElementById("time_label");

// Получаем элемент с ID "delivery_time_hint" (подсказка для времени доставки)
const deliveryTimeHint = document.getElementById("delivery_time_hint");

// Скрываем поле ввода времени, метку и подсказку по умолчанию
deliveryTimeInput.style.display = "none";
timeLabel.style.display = "none";
deliveryTimeHint.style.display = "none";

// Функция для обработки переключения между опциями доставки
function handleDeliveryTimeToggle() {
  // Проверяем, выбрана ли опция быстрой доставки
  if (deliveryAsap.checked) {
    // Если выбрана быстрая доставка, скрываем элементы, связанные с конкретным временем
    deliveryTimeInput.style.display = "none"; // Скрываем поле ввода времени
    timeLabel.style.display = "none"; // Скрываем метку
    deliveryTimeHint.style.display = "none"; // Скрываем подсказку
    deliveryTimeInput.value = ""; // Очищаем значение поля ввода времени
  } 
  // Проверяем, выбрана ли опция конкретного времени доставки
  else if (deliverySpecific.checked) {
    // Если выбрано конкретное время, показываем соответствующие элементы
    deliveryTimeInput.style.display = "block"; // Показываем поле ввода времени
    timeLabel.style.display = "block"; // Показываем метку
    deliveryTimeHint.style.display = "block"; // Показываем подсказку
  }
}

// Добавляем обработчик события изменения для опции быстрой доставки
deliveryAsap.addEventListener("change", handleDeliveryTimeToggle);

// Добавляем обработчик события изменения для опции конкретного времени доставки
deliverySpecific.addEventListener("change", handleDeliveryTimeToggle);