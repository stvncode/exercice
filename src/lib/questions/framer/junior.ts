export const framerJuniorQuestions = [
  {
    id: 1,
    title: "What is Framer Motion?",
    code: null,
    options: [
      "A CSS framework for animations",
      "A JavaScript library for adding animations to React components",
      "A tool for designing UI components",
      "A package for optimizing React performance",
    ],
    correctAnswer: 1,
    explanation:
      "Framer Motion is a popular JavaScript library for adding animations to React components.",
  },
  {
    id: 2,
    title: "Which Framer Motion hook is used to animate a component?",
    code: null,
    options: ["useAnimate", "motion", "useEffect", "useState"],
    correctAnswer: 1,
    explanation:
      "The `motion` component is used to animate elements in Framer Motion.",
  },
  {
    id: 3,
    title:
      "Which of the following is a valid way to animate an element with Framer Motion?",
    code: `
    import { motion } from 'framer-motion';

    export default function App() {
      return (
        <motion.div animate={{ opacity: 1 }} />
      );
    }
    `,
    options: [
      "The code is valid",
      "We need to use useAnimate for it to work",
      "This won't work because there are no initial props",
      "We need to provide a transition prop for this to work",
    ],
    correctAnswer: 0,
    explanation:
      "The code is valid, and the animation will change the opacity of the element to 1.",
  },
  {
    id: 4,
    title: "How do you make a button grow when hovered using Framer Motion?",
    code: `
    import { motion } from 'framer-motion';

    export default function App() {
      return (
        <motion.button whileHover={{ scale: 1.2 }}>
          Hover me
        </motion.button>
      );
    }
    `,
    options: [
      "Use `whileHover={{ scale: 1.2 }}` to scale the button on hover",
      "Use `animate={{ scale: 1.2 }}` inside the motion button",
      "Use `initial={{ scale: 1.2 }}` on the button",
      "Use `onHover={{ scale: 1.2 }}`",
    ],
    correctAnswer: 0,
    explanation:
      "The `whileHover` prop is used to scale the element when hovered.",
  },
  {
    id: 5,
    title:
      "Which Framer Motion transition property controls the duration of an animation?",
    code: null,
    options: ["duration", "speed", "time", "delay"],
    correctAnswer: 0,
    explanation:
      "The `duration` property controls the time the animation takes to complete.",
  },
  {
    id: 6,
    title: "What is the purpose of the `initial` prop in Framer Motion?",
    code: null,
    options: [
      "To define the animation starting point",
      "To trigger the animation on click",
      "To make the component visible",
      "To set the animation's delay",
    ],
    correctAnswer: 0,
    explanation:
      "`initial` defines the starting state of the element before the animation begins.",
  },
  {
    id: 7,
    title: "Which of the following can you animate using Framer Motion?",
    code: null,
    options: ["Position (x, y)", "Rotation", "Opacity", "All of the above"],
    correctAnswer: 3,
    explanation:
      "Framer Motion allows you to animate a variety of properties, including position, rotation, and opacity.",
  },
  {
    id: 8,
    title: "What is the `whileTap` prop used for in Framer Motion?",
    code: null,
    options: [
      "To scale an element on hover",
      "To animate an element while being clicked",
      "To set the initial animation state",
      "To add transition effects to the animation",
    ],
    correctAnswer: 1,
    explanation:
      "`whileTap` allows you to animate an element while it's being clicked.",
  },
  {
    id: 9,
    title:
      "How would you prevent an animation from looping indefinitely in Framer Motion?",
    code: null,
    options: [
      "Use `repeat: 0` in the transition prop",
      "Use `repeatType: 'none'`",
      "Use `animate: false`",
      "Use `infinite: false`",
    ],
    correctAnswer: 0,
    explanation:
      "Setting `repeat: 0` in the transition prevents the animation from looping.",
  },
  {
    id: 10,
    title:
      "How do you create a fade-out effect when a component leaves the screen in Framer Motion?",
    code: `
    import { motion } from 'framer-motion';

    export default function App() {
      return (
        <motion.div
          animate={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          Goodbye!
        </motion.div>
      );
    }
    `,
    options: [
      "Use `animate={{ opacity: 0 }}`",
      "Use `initial={{ opacity: 0 }}`",
      "Use `exit={{ opacity: 0 }}`",
      "Use `whileExit={{ opacity: 0 }}`",
    ],
    correctAnswer: 2,
    explanation:
      "To animate the element when it leaves the screen, use the `exit` prop with `opacity: 0`.",
  },
]
