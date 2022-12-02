const kits = [
  {
    id: "leftCrash",
    className: "cymbols",
    image: "crash.png",
    sound: "crash.mp3",
    key: "q",
  },
  {
    id: "splash",
    className: "cymbols",
    image: "splash.png",
    sound: "splash.mp3",
    key: "r",
  },
  {
    id: "ride",
    className: "cymbols",
    image: "ride.png",
    sound: "ride.mp3",
    key: "t",
  },
  {
    id: "bell",
    className: "bells",
    image: "bell.png",
    sound: "bell.mp3",
    key: "y",
  },
  {
    id: "china",
    className: "cymbols",
    image: "china.png",
    sound: "china.mp3",
    key: "u",
  },
  {
    id: "rightCrash",
    className: "cymbols",
    image: "crash.png",
    sound: "crash.mp3",
    key: "p",
  },
  {
    id: "tom1",
    className: "toms",
    image: "tom1.png",
    sound: "tom1.mp3",
    key: "f",
  },
  {
    id: "tom2",
    className: "toms",
    image: "tom2.png",
    sound: "tom2.mp3",
    key: "g",
  },
  {
    id: "tom3",
    className: "toms",
    image: "tom3.png",
    sound: "tom3.mp3",
    key: "j",
  },
  {
    id: "leftKick",
    className: "kicks",
    image: "kick.png",
    sound: "kick.mp3",
    key: "a",
  },
  {
    id: "rightKick",
    className: "kicks",
    image: "kick.png",
    sound: "kick.mp3",
    key: ";",
  },
  {
    id: "hiHat",
    className: "floors",
    image: "hi-hat.png",
    sound: "hiHat.mp3",
    key: "v",
  },
  {
    id: "sticks",
    className: "stick",
    image: "sticks.png",
    sound: "stick.mp3",
    key: "b",
  },
  {
    id: "snare",
    className: "floors",
    image: "snare.png",
    sound: "snare.mp3",
    key: "n",
  },
];

const drumKitCont = document.querySelector(".drumKit");

kits.forEach((kit) => {
  const img = document.createElement("img");
  img.classList.add(kit.className);
  img.setAttribute("id", kit.id);
  img.src = `./Images/${kit.image}`;
  drumKitCont.appendChild(img);

  const topKey = img.offsetTop - 10;
  const leftKey = img.offsetLeft + 20;

  const keys = document.createElement("span");
  keys.innerText = `" ${kit.key} "`;
  keys.style.top = `${topKey}px`;
  keys.style.left = `${leftKey}px`;
  drumKitCont.appendChild(keys);

  const audio = document.createElement("audio");
  audio.src = `./Sounds/${kit.sound}`;
  drumKitCont.appendChild(audio);

  img.addEventListener("click", () => {
    img.style.scale = 0.9;
    audio.play();
    setTimeout(() => {
      img.style.scale = 1;
    }, 100);
  });
  document.addEventListener("keypress", (e) => {
    if (e.key === kit.key) {
      img.style.scale = 0.9;
      audio.play();
      setTimeout(() => {
        img.style.scale = 1;
      }, 100);
    } else if (e.key === " ") {
      audio.pause();
      audio.currentTime = 0;
    }
  });
});
