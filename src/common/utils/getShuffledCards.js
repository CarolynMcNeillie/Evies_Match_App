import {
  shuffleArray,
  doubleArray
} from "common/utils";

const cardSet = [{
    name: "tongue",
    face: "😛",
    isFaceUp: false
  },
  {
    name: "robot",
    face: "🤖",
    isFaceUp: false
  },
  {
    name: "heart",
    face: "❤️",
    isFaceUp: false
  },
  {
    name: "family",
    face: "👨‍👩‍👧",
    isFaceUp: false
  },
  {
    name: "taco",
    face: "🌮",
    isFaceUp: false
  },
  {
    name: "bus",
    face: "🚌",
    isFaceUp: false
  },
  {
    name: "apple",
    face: "🍎",
    isFaceUp: false
  },
  {
    name: "flower",
    face: "🌸",
    isFaceUp: false
  },
  {
    name: "airplane",
    face: "✈️",
    isFaceUp: false
  },
  {
    name: "fairy",
    face: "🧚🏼‍♂️",
    isFaceUp: false
  },
  {
    name: "bear",
    face: "🐻",
    isFaceUp: false
  },
  {
    name: "baby",
    face: "👶🏼",
    isFaceUp: false
  },
  {
    name: "dog",
    face: "🐶",
    isFaceUp: false
  },
  {
    name: "sheep",
    face: "🐑",
    isFaceUp: false
  },
  {
    name: "icecream",
    face: "🍦",
    isFaceUp: false
  }, {
    name: "crayon",
    face: "🖍",
    isFaceUp: false
  }, {
    name: "butterfly",
    face: "🦋",
    isFaceUp: false
  }
];

export const getShuffledCards = (numberOfCards = 5) =>
  shuffleArray(doubleArray(shuffleArray(cardSet).slice(0, numberOfCards)));
