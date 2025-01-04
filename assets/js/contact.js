const contactForm = document.querySelector('form');
console.log(contactForm);

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form)

    const data = Object.fromEntries(formData.entries())
    console.log(data);

    const link = document.createElement('a');

    link.href=`mailto:fadhilah1205@gmail.com?subject=&body=Selamat siang. Nama saya ${data.name}.%0D%0ASilahkan hubungi saya di ${data.email}. Berikut pesan saya : ${data.message}`

    link.click();
    form.reset();
})