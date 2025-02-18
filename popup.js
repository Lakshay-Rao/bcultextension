document.getElementById('credentialsForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  chrome.storage.local.set({ username, password }, function() {
      document.getElementById('message').textContent = "Credentials saved!";
      setTimeout(() => { document.getElementById('message').textContent = ""; }, 2000);
  });
});