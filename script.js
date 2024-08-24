function animatedName() {
    const phrases = [
        "Frontend Developer",
        "React Js Developer",
        "JavaScript Developer"
    ];
    
    let container = document.querySelector("#myName"); // Use a valid selector (assuming ID for demonstration)
    let phraseIndex = 0; // Index for the current phrase
    let charIndex = 0; // Index for the current character in the phrase
    let isAdding = true; // True when adding characters, false when removing characters

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isAdding) {
            if (charIndex < currentPhrase.length) {
                container.innerHTML += currentPhrase.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            } else {
                isAdding = false;
                setTimeout(typeWriter, 2000); // Pause before starting to delete
            }
        } else {
            if (charIndex > 0) {
                container.innerHTML = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeWriter, 100);
            } else {
                isAdding = true;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
                setTimeout(typeWriter, 2000); // Pause before starting to type the next phrase
            }
        }
    }

    typeWriter();
}
window.onload = animatedName;

 let hamb=document.querySelector(".hambargar i");
  hamb.onclick=function(){
    let navul=document.querySelector("nav ul");
    navul.classList.toggle('slide-show')
  }
 
