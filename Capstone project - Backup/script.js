const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Submiting...';

   const serviceID = 'default_service';
   const templateID = 'template_nnps4js';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'SUBMIT';
      alert('Submitted!');
    }, (err) => {
      btn.value = 'SUBMIT';
      alert(JSON.stringify(err));
    });
});