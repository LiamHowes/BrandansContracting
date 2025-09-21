export default function handleSubmit() {
    const form = document.getElementById('request-quote-form');
    const thankYou = document.getElementById('form-thankyou');
    console.log(form);
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // prevent normal form submission

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            });

            if (response.ok) {
            // Hide form and show thank-you message
            form.style.display = 'none';
            thankYou.style.display = 'block';
            } else {
            alert('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    });
}