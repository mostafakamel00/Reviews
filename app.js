const reviews = [
  {
    id: 1,
    name: "mark nobel",
    img: "image/pexels-pixabay-220453.jpg",
    job: "Web Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, inventore consectetur, ut assumenda quo nam minus soluta labore iste aspernatur, architecto maiores sit necessitatibus voluptas id vitae amet? Inventore, labore.",
  },
  {
    id: 2,
    name: "mickel folly",
    img: "image/pexels-teddy-joseph-2955376.jpg",
    job: "Web designer",
    text: "repellat amet esse deserunt deleniti hic corrupti fuga! Qui dolorem expedita accusamus. Voluptatum est illo ex eum repellendus sunt sint tempora sequi, facilis, ad molestias iste ratione sapiente quae quam eaque alias .",
  },
  {
    id: 3,
    name: "messi",
    img: "image/pexels-monstera-5273717.jpg",
    job: "intern",
    text: "inventore tempore est eveniet omnis? Maxime nam ab unde quia totam, voluptates corrupti. Possimus veritatis nam minus voluptas, consectetur cum aperiam. Vero voluptates dolorum, voluptatum error sint adipisci corporis et repellendus mollitia?",
  },
  {
    id: 4,
    name: "ronaldo cr7",
    img: "image/pexels-andrea-piacquadio-3778680.jpg",
    job: "the boss",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, inventore consectetur, ut assumenda quo nam minus soluta labore iste aspernatur, architecto maiores sit necessitatibus voluptas id vitae amet? Inventore, labore.",
  },
  {
    id: 5,
    name: "sara jones",
    img: "image/pexels-daniel-xavier-1239291.jpg",
    job: "ux designer",
    text: "repellat amet esse deserunt deleniti hic corrupti fuga! Qui dolorem expedita accusamus. Voluptatum est illo ex eum repellendus sunt sint tempora sequi, facilis, ad molestias iste ratione sapiente quae quam eaque alias .",
  },
];

const author = document.getElementById("author"),
  img = document.getElementById("person-img"),
  job = document.getElementById("job"),
  info = document.getElementById("info"),
  prevBtn = document.querySelector(".prev-button"),
  nextBtn = document.querySelector(".next-button"),
  randomBtn = document.querySelector(".random-button");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
