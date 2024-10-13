const personDetails = [
    {
        img: "/images/image-tanya.jpg",
        description: `" I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. "`,
        name: "Tanya Sinclair",
        job: "UX Engineer"
    },
    {
        img: "/images/image-john.jpg",
        description: `" If you want to lay the best foundation possible I’d recommend taking this course. 
      The depth the instructors go into is incredible. I now feel so confident about 
      starting up as a professional developer. "`,
        name: "John Tarkpor",
        job: "Junior Front-end Developer"
    }
];

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const slidePicture = document.getElementById("picture");
const slideDescription = document.getElementById("description");
const slideName = document.getElementById("name");
const slideJob = document.getElementById("job");

let currentIndex = 0; // Start with the first person

// Function to handle typing effect
function typeDescription(text, element) {
    let i = 0;
    element.textContent = ""; // Clear the current description

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i); // Add one character at a time
            i++;
            setTimeout(type, 5); // Delay between each character (50ms for faster typing, adjust if needed)
        }
    }

    type();
}

// Function to update the slide
function updateSlide(index) {
    const person = personDetails[index];

    // Add blur and fade out effect
    slidePicture.classList.add("blur");

    // Delay updating content slightly for smoother transition
    setTimeout(() => {
        slidePicture.src = person.img;
        slideName.textContent = person.name;
        slideJob.textContent = person.job;

        // Start typing after the image transition
        setTimeout(() => {
            typeDescription(person.description, slideDescription); // Typing simulator for description
        }, 0); // Small delay to start typing after image transition

    }, 400); // Half of the transition time (0.8s), allowing the blur to take effect

    // Remove blur effect and fade in after the image has been updated
    setTimeout(() => {
        slidePicture.classList.remove("blur");
    }, 800); // Match the total transition duration (0.8s)
}

// Function to handle the next button
function slideForward() {
    currentIndex = (currentIndex + 1) % personDetails.length; // Increment index and wrap around
    updateSlide(currentIndex);
}

// Function to handle the previous button
function slideBackward() {
    currentIndex = (currentIndex - 1 + personDetails.length) % personDetails.length; // Decrement and wrap around
    updateSlide(currentIndex);
}

// Event listeners for buttons
nextBtn.addEventListener("click", slideForward);
prevBtn.addEventListener("click", slideBackward);

// Initialize the first slide
updateSlide(currentIndex);
