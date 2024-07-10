function submitOrder(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;

    // Send email notification
    sendEmailNotification(phone, product);

    // Redirect to thank you page
    window.location.href = `thankyou.html?product=${encodeURIComponent(product)}`;
}

function sendEmailNotification(phone, product) {
    const email = "trc.for.everyone.in.life@gmail.com";
    const subject = "New Plushie Order";
    const body = `A new order has been placed.\n\nProduct: ${product}\nPhone Number: ${phone}\n\nPlease arrange the meeting.`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

