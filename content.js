function autofillCredentials() {
  chrome.storage.local.get(["username", "password"], (data) => {
      if (!data.username || !data.password) {
          console.log("No stored credentials found.");
          return;
      }

      const usernameInput = document.getElementById("ft_un");
      const passwordInput = document.getElementById("ft_pd");
      const submitButton = document.querySelector("input[type='submit'][value='Continue']");

      if (usernameInput && passwordInput) {
          usernameInput.value = data.username;
          passwordInput.value = data.password;

          setTimeout(() => {
              if (submitButton) {
                  submitButton.click();
                  console.log("Form submitted automatically.");
              }
          }, 500);
      } else {
          console.log("Login fields not detected.");
      }
  });
}
window.addEventListener("load", autofillCredentials);