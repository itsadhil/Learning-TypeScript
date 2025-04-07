window.addEventListener('DOMContentLoaded', () => {
  interface FormElements {
    email: HTMLInputElement;
    password: HTMLInputElement;
    form: HTMLFormElement;
    errorMsg: HTMLParagraphElement;
  }

  const REQUIRED_FIELDS = ['email', 'password'];
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const getElements = (): FormElements => {
    const elements = {
      form: document.getElementById('loginForm') as HTMLFormElement,
      email: document.getElementById('email') as HTMLInputElement,
      password: document.getElementById('password') as HTMLInputElement,
      errorMsg: document.getElementById('error') as HTMLParagraphElement
    };

    Object.entries(elements).forEach(([key, element]) => {
      if (!element) {
        throw new Error(`Required element "${key}" not found in the DOM`);
      }
    });

    return elements;
  };

  const validateForm = (email: string, password: string): string | null => {
    if (!email || !password) {
      return 'Please fill in all fields.';
    }
    if (!EMAIL_REGEX.test(email)) {
      return 'Please enter a valid email address.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return null;
  };

  const { form, errorMsg } = getElements();
  errorMsg.classList.add('hidden');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, password } = getElements();
    
    const error = validateForm(email.value.trim(), password.value.trim());
    if (error) {
      errorMsg.textContent = error;
      errorMsg.classList.remove('hidden');
      return;
    }

    errorMsg.classList.add('hidden');
    console.log('Logging in with:', { email: email.value });
    alert('Login successful! (Dummy)');
  });
});
