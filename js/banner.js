function updateCountdown() {
   // Set target date to August 15, 2025 23:59:59
   const targetDate = new Date("2025-08-19T23:59:59").getTime();
   const now = new Date().getTime();
   const timeLeft = targetDate - now;

   if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      const formattedDays = String(days).padStart(2, "0");
      const formattedHours = String(hours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");

      document.getElementById("countdown").textContent = `${formattedDays}d : ${formattedHours}h : ${formattedMinutes}m : ${formattedSeconds}s`;
   } else {
      document.getElementById("countdown").textContent = "00d : 00h : 00m : 00s";
   }
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);


const banner = document.getElementById("banner");

function closeBanner() {
   banner.style.display = "none";
}
