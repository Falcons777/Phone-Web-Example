function toggleLike(button) {
    button.classList.toggle("active");
  }
  
  function toggleUnlike(button) {
    button.classList.toggle("active");
  }
  
  function toggleEmoji(emoji) {
    document.getElementById("happyEmoji").style.fontSize = emoji === "happy" ? "4em" : "3em";
    document.getElementById("sadEmoji").style.fontSize = emoji === "sad" ? "4em" : "3em";
  }
  
  function submitRating(button) {
    let container = button.closest(".custom-rating-card");
    let likeActive = container.querySelector(".custom-like-btn").classList.contains("active");
    let unlikeActive = container.querySelector(".custom-unlike-btn").classList.contains("active");
    
    if (!likeActive && !unlikeActive) {
      alert("Ju lutem zgjidhni një mundësi si like ose unlike.");
      return;
    }
    
    alert("Vlerësimi është dërguar!");
  }

  document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("submitKoment").addEventListener("click", function() {
            alert("Koment u dërgua me sukses!");
        });
    });

