
document.addEventListener("DOMContentLoaded", () => {
    
    const button = document.querySelectorAll(".nav-links a");
  
    
    button.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault(); 
        alert(`You clicked on ${link.textContent} button`);
        console.log(`Button clicked: ${link.textContent}`);
      });
    });
  
    const contactBtn = document.querySelector(".btn");
    if (contactBtn) {
      contactBtn.addEventListener("click", event => {
        event.preventDefault();
        alert("Redirecting to contact page or opening contact form...");
        console.log("Contact Us button clicked");
      });
    }
  });
  
