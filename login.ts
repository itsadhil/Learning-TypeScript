window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm') as HTMLFormElement;
  const errorMsg = document.getElementById('error') as HTMLParagraphElement;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const password = (document.getElementById('password') as HTMLInputElement).value.trim();

    if (!email || !password) {
      errorMsg.textContent = 'Please fill in all fields.';
      errorMsg.classList.remove('hidden');
      return;
    }

    // Handle login logic (replace this with your own logic)
    console.log('Logging in with:', { email, password });

    errorMsg.classList.add('hidden');
    alert('Login successful! (Dummy)');
  });
});
