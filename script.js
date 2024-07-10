function submitOrder() {
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;

    if (!phone) {
        alert('Please enter your phone number.');
        return;
    }

    // Send email notification
    sendEmailNotification(phone, product);

    // Show confirmation message
    alert('Thank you for your purchase! We will meet you in two days at 6:00 PM to deliver your ' + product + '.');
}

function sendEmailNotification(phone, product) {
    const email = "trc.for.everyone.in.life@gmail.com";
    const subject = "New Plushie Order";
    const body = `A new order has been placed.\n\nProduct: ${product}\nPhone Number: ${phone}\n\nPlease arrange the meeting.`;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
