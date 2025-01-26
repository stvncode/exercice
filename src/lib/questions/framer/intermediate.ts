export const framerIntermediateQuestions = [
  {
    id: 1,
    title:
      "What is the difference between `animate` and `initial` props in Framer Motion?",
    code: null,
    options: [
      "`animate` sets the final state of an animation, while `initial` sets the initial state before the animation starts",
      "`animate` controls the timing of the animation, while `initial` sets the speed",
      "`initial` defines the animation properties on hover, while `animate` is for the final state",
      "`animate` is for controlling the layout, and `initial` is for the opacity",
    ],
    correctAnswer: 0,
    explanation:
      "`animate` defines the animation's final state, while `initial` sets the state before the animation starts.",
  },
  {
    id: 2,
    title:
      "How do you create a layout transition for a component using Framer Motion?",
    code: null,
    options: [
      "By using the `layout` prop on the component",
      "By animating the `x` and `y` positions",
      "By wrapping the component in a `motion.div`",
      "By using the `transition` prop",
    ],
    correctAnswer: 0,
    explanation:
      "The `layout` prop allows Framer Motion to animate the layout changes of a component smoothly.",
  },
  {
    id: 3,
    title:
      "How can you synchronize animations for multiple components in Framer Motion?",
    code: `
    import { motion, useAnimation } from 'framer-motion';

    export default function App() {
      const controls = useAnimation();

      const startAnimation = () => {
        controls.start({ opacity: 1, scale: 1 });
      };

      return (
        <div>
          <motion.div animate={controls}>Component 1</motion.div>
          <motion.div animate={controls}>Component 2</motion.div>
          <button onClick={startAnimation}>Start Animation</button>
        </div>
      );
    }
    `,
    options: [
      "Use a shared animation control with `useAnimation()`",
      "Use `animate` with `scale` and `opacity` properties for each component",
      "Animate the components individually with `whileHover`",
      "Use `transition` to delay each component's animation",
    ],
    correctAnswer: 0,
    explanation:
      "Using `useAnimation()` allows you to control the animation of multiple components at the same time.",
  },
  {
    id: 4,
    title:
      "Which prop is used to delay the start of an animation in Framer Motion?",
    code: null,
    options: ["delay", "transition", "animate", "initial"],
    correctAnswer: 0,
    explanation:
      "The `delay` prop can be used in combination with `transition` to delay the start of an animation.",
  },
  {
    id: 5,
    title:
      "How would you animate a `div`'s position relative to its parent element in Framer Motion?",
    code: null,
    options: [
      "By setting the `x` and `y` values in the `animate` prop",
      "By animating `left` and `top` with `transition`",
      "By using `relative` positioning in CSS",
      "By changing the `translateX` and `translateY` values",
    ],
    correctAnswer: 0,
    explanation:
      "You can animate the position of a `div` using the `x` and `y` properties in the `animate` prop.",
  },
  {
    id: 6,
    title: "What is the purpose of the `exit` prop in Framer Motion?",
    code: null,
    options: [
      "It defines the animation when an element is leaving the screen",
      "It sets the starting position of the animation",
      "It triggers the animation on click",
      "It is used for looping animations",
    ],
    correctAnswer: 0,
    explanation:
      "The `exit` prop is used to define the animation when an element leaves the screen.",
  },
  {
    id: 7,
    title: "How do you create a staggered animation effect in Framer Motion?",
    code: null,
    options: [
      "Use the `staggerChildren` property in the parent element's `transition` prop",
      "Use the `animate` prop with `stagger: true`",
      "Use the `initial` prop with `stagger` for children",
      "Use `useEffect` to animate the elements one by one",
    ],
    correctAnswer: 0,
    explanation:
      "The `staggerChildren` property in the parent element's `transition` prop is used to create staggered animations for child components.",
  },
  {
    id: 8,
    title:
      "How do you prevent an animation from being triggered when the component is mounted?",
    code: null,
    options: [
      "Use `initial={{ opacity: 0 }}`",
      "Use `animate={{ opacity: 0 }}`",
      "Use `exit={{ opacity: 0 }}`",
      "Use `whileHover` to disable the animation",
    ],
    correctAnswer: 0,
    explanation:
      "Setting `initial={{ opacity: 0 }}` ensures the component starts with an opacity of 0 when it is mounted.",
  },
  {
    id: 9,
    title: "Which of the following can be animated using Framer Motion?",
    code: null,
    options: [
      "Text shadows",
      "CSS variables",
      "CSS pseudo-elements",
      "CSS Grid layout properties",
    ],
    correctAnswer: 1,
    explanation:
      "Framer Motion can animate any animatable CSS properties, including CSS variables.",
  },
  {
    id: 10,
    title:
      "How do you trigger an animation when the component is scrolled into view using Framer Motion?",
    code: `
    import { motion, useInView } from 'framer-motion';

    export default function App() {
      const [isInView, setInView] = useInView();

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
        >
          Scroll into view to see me fade in!
        </motion.div>
      );
    }
    `,
    options: [
      "By using the `useInView` hook to track when the element is in view",
      "By using `whileInView={{ opacity: 1 }}`",
      "By adding a `scroll` event listener to trigger the animation",
      "By using `motion.div` with `animate={{ opacity: 1 }}`",
    ],
    correctAnswer: 0,
    explanation:
      "The `useInView` hook allows you to detect when the component is in view and trigger the animation.",
  },
]
