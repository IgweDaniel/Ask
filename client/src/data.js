const generateAnswerState = () => Boolean(Math.round(Math.random()));

const getUser = (users) => users[Math.round(Math.random() * users.length)];

export const fullProfileInfo = {
  about:
    "An erudite in search of wisdom and yes i said it.  yes i called myself an erudite Live with it,An erudite in search of wisdom and yes i said it.  yes i called myself an erudite Live with it",
  occupation: "Lawyer",
  email: "theuser@gmail.com",
  location: "Damita, Egypt",
  banner:
    "https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  social: [
    { name: "twitter", handle: "theuser" },
    { name: "instagram", handle: "the_user" },
  ],
  followers_count: 24,
  following_count: 4,
  latest_followers: [],
  latest_following: [],
};

export const users = [
  {
    id: 1,
    name: "Ahmed Hassan",
    status: "Professional",
    stats: { points: 213, questions: 3, answers: 7, best_answer: 10 },
    avatar:
      "https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641__340.jpg",
  },
  {
    id: 2,
    name: "Martin Hope",
    status: "Professional",
    stats: { points: 13, questions: 3, answers: 7, best_answer: 0 },
    avatar:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    id: 3,
    name: "Excel Daniel",
    status: "noob",
    stats: {
      points: 213,
      questions: 0,
      answers: 7,
      best_answer: 6,
    },
    avatar:
      "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 4,
    name: "Jane Doe",
    status: "noob",
    stats: { points: 213, questions: 3, answers: 7, best_answer: 0 },
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

export const questions = [
  {
    id: 1,
    user: getUser(users),
    title:
      "Is this statement, “i see him last night” can be understood as “I saw him last night”?",
    short_detail:
      "In my local language (Bahasa Indonesia) there are no verb-2 or past tense form as time tracker. So, I often forget to use the past form of verb when speaking english. I saw him last night (correct) I see him last night...",
    full_detail:
      "In my local language (Bahasa Indonesia) there are no verb-2 or past tense form as time tracker. So, I often forget to use the past form of verb when speaking english.I saw him last night (correct)I see him last night (incorrect)But i think both has the same meaning and are understandable, Isn’t it? ",
    tags: ["english", "language"],
    views: 4000,
    answers: 8,
    votes: 200,
    time: 1596463800080,
    has_answered: () => Boolean(Math.round(Math.random())),
  },

  {
    id: 2,
    user: getUser(users),
    title: "How do native speakers tell I’m foreign based on my English alone?",
    short_detail:
      "I’m a 19-year-old student from Malaysia. I’ve been introduced to the language at a very young age and I’m capable of conducting any type of conversation. However, some of my English-speaking friends on the internet didn’t take too long to...",
    tags: ["english", "language"],
    full_detail:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quidem mollitia incidunt fuga sequi veritatis facere sed labore repellendus modi harum nesciunt, necessitatibus, laborum corrupti a quibusdam debitis, sapiente quam velit molestias iste nobis eum dicta. Et ipsam, voluptatem totam sint vero nemo labore, accusantium officiis nihil pariatur blanditiis beatae, deserunt odio at quas id cupiditate repellat cumque explicabo. Rem hic quas voluptas libero sapiente tenetur voluptates quis. Obcaecati at quae vitae impedit repudiandae, aliquid est a facere ipsum labore totam, harum maxime commodi! Veniam nam eaque reiciendis quos facilis architecto blanditiis earum esse officiis. Suscipit dolorum quasi ipsum enim.",
    views: 1000,
    answers: 3,
    votes: 51,
    time: 1596291052000,
    has_answered: generateAnswerState(),
  },
  {
    id: 4,
    user: getUser(users),
    title: "How do native speakers tell I’m foreign based on my English alone?",
    short_detail:
      "I’m a 19-year-old student from Malaysia. I’ve been introduced to the language at a very young age and I’m capable of conducting any type of conversation. However, some of my English-speaking friends on the internet didn’t take too long to...",
    tags: ["english", "language"],
    views: 1000,
    full_detail:
      "In my local language (Bahasa Indonesia) there are no verb-2 or past tense form as time tracker. So, I often forget to use the past form of verb when speaking english.I saw him last night (correct)I see him last night (incorrect)But i think both has the same meaning and are understandable, Isn’t it? ",
    answers: 3,
    votes: 51,
    time: 1595427052000,
    has_answered: generateAnswerState(),
  },
  {
    id: 3,
    user: getUser(users),
    title: "Can someone tell me the origin of puns",
    short_detail: "I am fascinated by puns and would like to know their origin",
    tags: ["english", "language"],
    full_detail: "I am fascinated by puns and would like to know their origin",
    views: 1000,
    answers: 3,
    votes: 51,
    time: 1563804652000,
    has_answered: generateAnswerState(),
  },
];

export const answers = [
  {
    id: 1,
    user: getUser(users),
    votes: 51,
    time: 1596463800080,
    text:
      "No, ‘I see him last night’ is always incorrect and will be only just barely understandable. It is a very serious and basic error, and it will be tiring for a native speaker to converse with someone who speaks like this, because they will constantly have to be remembering what the person really means. It will not be ‘immediately obvious without thinking about it’.Someone just asked this question recently, and I replied, saying that ‘I see him last night’ is never correct. That is exactly what i meant.",
  },
  {
    id: 2,
    user: getUser(users),
    votes: 51,
    time: 1596463800080,
    text:
      "No, ‘I see him last night’ is always incorrect and will be only just barely understandable. It is a very serious and basic error, and it will be tiring for a native speaker to converse with someone who speaks like this, because they will constantly have to be remembering what the person really means. It will not be ‘immediately obvious without thinking about it’.Someone just asked this question recently, and I replied, saying that ‘I see him last night’ is never correct. That is exactly what i meant.",
  },
];

export const communities = [
  {
    name: "UI/UX",
    followers: 4000,
    thumb: require("./assets/images/thumb1.jpeg"),
  },
  {
    name: "PWA",
    followers: 100,
    thumb: require("./assets/images/thumb2.jpeg"),
  },
  {
    name: "Coronavirus",
    followers: 4000000,
    thumb: require("./assets/images/thumb3.jpeg"),
  },
];
