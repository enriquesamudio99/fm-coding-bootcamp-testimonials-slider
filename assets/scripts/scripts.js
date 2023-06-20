const slideImg = document.getElementById('slideImg');
const blockquoteText = document.getElementById('blockquoteText');
const studentName = document.getElementById('studentName');
const studentOccupation = document.getElementById('studentOccupation');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

const testimonials = [
    {
        img: "./assets/images/image-tanya.jpg",
        text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        name: "Tanya Sinclair",
        occupation: "UX Engineer"
    },
    {
        img: "./assets/images/image-john.jpg",
        text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        name: "John Tarkpor",
        occupation: "Junior Front-end Developer"
    }
];

document.addEventListener("DOMContentLoaded", () => {

    prevBtn.addEventListener("click", () => changeSlide("prev"));
    nextBtn.addEventListener("click", () => changeSlide("next"));

});

const changeSlide = (step) => {

    if (step === "next") {
        currentSlide++;
    } else {
        currentSlide--;
    }
    
    if (currentSlide < 0) {
        currentSlide = testimonials.length - 1;
    } 

    if (currentSlide >= testimonials.length) {
        currentSlide = 0;
    } 

    updateSlideContent();

}

const updateSlideContent = () => {

    const { img, text, name, occupation } = testimonials[currentSlide];

    slideImg.src = img;
    blockquoteText.textContent = text;
    studentName.textContent = name;
    studentOccupation.textContent = occupation;

}