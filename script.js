document.addEventListener("DOMContentLoaded", function () {
    // Function to open a modal
    window.openModal = function (eventId) {
        const modal = document.getElementById(eventId);
        if (modal) {
            modal.style.display = "flex";
        }
    };

    // Function to close a modal
    window.closeModal = function (eventId) {
        const modal = document.getElementById(eventId);
        if (modal) {
            modal.style.display = "none";
        }
    };

    // Close modal when clicking outside of the content
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // Expand & Contract Buttons
    const timeline = document.querySelector(".timeline");

    document.getElementById("expand").addEventListener("click", function () {
        timeline.style.transform = "scale(1.2)";
        timeline.style.transition = "transform 0.3s ease-in-out";
    });

    document.getElementById("contract").addEventListener("click", function () {
        timeline.style.transform = "scale(1)";
        timeline.style.transition = "transform 0.3s ease-in-out";
    });

    // More Like This Navigation
    document.querySelectorAll(".nav-buttons button").forEach(button => {
        button.addEventListener("click", function () {
            const targetEvent = this.getAttribute("data-target");
            document.querySelectorAll(".modal").forEach(modal => {
                modal.style.display = "none";
            });
            const targetModal = document.getElementById(targetEvent);
            if (targetModal) {
                targetModal.style.display = "flex";
            }
        });
    });
});
