// Responsive menu

const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

// Dynamically generating cards

const data = [{
        class: "far fa-life-ring",
        color: "orangered",
        heading: "24/7 Customer Support",
        text: "We provide every facility we can to our cusotmers"
    },
    {
        class: "fab fa-get-pocket",
        color: "green",
        heading: "Easy to use UI",
        text: "Our UI is very easy to use"
    },
    {
        class: "fas fa-users",
        color: "red",
        heading: "User Friendly UX",
        text: "Our UX is very easy to use"
    },
    {
        class: "fas fa-tools",
        color: "black",
        heading: "24/7 Developer Support",
        text: "If you find any bug then pls let us know"
    }
];

let parent = document.querySelector('.mi');

data.forEach(
    (d) => {
        let html = `<div class="mk">
                        <div class="ma">
                            <i class="${d.class}" style="color: ${d.color}"></i>
                        </div>
                        <p>${d.heading}</p>
                        <br>
                        <p style="font-weight: 700;">${d.text}</p>
                    </div>
                    <br>`;
        parent.innerHTML += html;
    }
);