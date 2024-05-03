// Отримуємо всі кнопки "Додати в кошик"
const addToCartButtons = document.querySelectorAll('.btn');
const totalPriceField = document.querySelector('.total-price');
let totalPrice = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const price = parseFloat(this.getAttribute('data-price')); // Отримуємо вартість товару з атрибуту data-price

        const isAdded = this.classList.contains('added-to-cart');

        if (isAdded) {
            this.classList.remove('added-to-cart');
            this.textContent = 'Додати в кошик';
            totalPrice -= price;
        } else {
            this.classList.add('added-to-cart');
            this.textContent = 'Видалити з кошика';
            totalPrice += price;
        }

        totalPrice = parseFloat(totalPrice.toFixed(2)); // Округлюємо загальну вартість до двох знаків після коми

        totalPriceField.textContent = `Загальна вартість: ${totalPrice} грн`;
    });
});
const orderButton = document.querySelector('.order-button');

orderButton.addEventListener('click', function() {
    const totalPriceElement = document.querySelector('.total-price');
    const totalPrice = totalPriceElement.textContent.trim().split(':')[1].trim();
    const orderedItems = [];
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemName = item.querySelector('h3:nth-child(2)').textContent.trim();
        const itemPrice = parseFloat(item.querySelector('.price').dataset.price);
        const quantity = parseInt(item.querySelector('h3:nth-child(4)').textContent.trim().split(':')[1]);

        if (quantity > 0) {
            orderedItems.push({ name: itemName, price: itemPrice, quantity: quantity });
        }
    });

    const orderData = {
        totalPrice: totalPrice,
        items: orderedItems
    };

    // Відправка даних замовлення на сервер
    // Рекомендується використовувати AJAX-запит або інший механізм відправки даних на сервер
});
