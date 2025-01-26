export const framerSeniorQuestions = [
  {
    id: 1,
    title:
      "How can you optimize Framer Motion animations for performance in large-scale applications?",
    code: null,
    options: [
      "Use the `will-change` CSS property to optimize for animations",
      "Use `motion.div` only when absolutely necessary",
      "Split animations into smaller components",
      "Use `useEffect` to control when animations should be triggered",
    ],
    correctAnswer: 0,
    explanation:
      "The `will-change` property can help optimize performance by hinting to the browser which properties will be animated.",
  },
  {
    id: 2,
    title:
      "What is the difference between `variants` and `animate` props in Framer Motion?",
    code: null,
    options: [
      "`variants` defines reusable states of a component, while `animate` triggers the animation of a component to a specific state",
      "`variants` controls the speed of the animation, while `animate` defines the animation path",
      "`variants` is used to control a single animation, while `animate` is for complex animations",
      "`variants` defines multiple keyframes, while `animate` is used to handle transitions",
    ],
    correctAnswer: 0,
    explanation:
      "`variants` define reusable states, and `animate` triggers the animation to those states.",
  },
  {
    id: 3,
    title:
      "How do you prevent layout shifts when animating elements in Framer Motion?",
    code: null,
    options: [
      "Use the `layout` prop for smooth layout animations",
      "Set `overflow: hidden` to prevent overflow during animations",
      "Disable animations on large elements",
      "Use `position: absolute` to avoid layout shifts",
    ],
    correctAnswer: 0,
    explanation:
      "The `layout` prop ensures that layout changes, like size or position changes, are animated smoothly to prevent layout shifts.",
  },
  {
    id: 4,
    title:
      "How do you synchronize animations with multiple child components using Framer Motion?",
    code: null,
    options: [
      "Use `staggerChildren` in the parent component's `transition` prop",
      "Trigger animations manually with `useAnimation()` in each child component",
      "Use `motion.div` with `animate` in each child component",
      "Use `delayChildren` to stagger each child's animation",
    ],
    correctAnswer: 0,
    explanation:
      "The `staggerChildren` property in the parent component's `transition` prop allows you to synchronize animations for child components.",
  },
  {
    id: 5,
    title:
      "How do you animate a component's layout changes smoothly when it resizes or moves?",
    code: null,
    options: [
      "Use the `layout` prop on the component",
      "Use the `transition` prop with `type: 'spring'`",
      "Animate the `position` property",
      "Wrap the component in `motion.div` and use `whileInView`",
    ],
    correctAnswer: 0,
    explanation:
      "The `layout` prop ensures that layout changes, such as resizing and repositioning, are animated smoothly.",
  },
  {
    id: 6,
    title: "What is the purpose of `motion.custom()` in Framer Motion?",
    code: null,
    options: [
      "It allows you to create custom motion components by wrapping an existing React component",
      "It helps to create animations for third-party libraries",
      "It creates custom animations with no default behavior",
      "It helps to implement custom scroll animations",
    ],
    correctAnswer: 0,
    explanation:
      "`motion.custom()` is used to wrap a custom component and give it the ability to animate with Framer Motion.",
  },
  {
    id: 7,
    title:
      "How can you create a reusable animation sequence for multiple components in Framer Motion?",
    code: null,
    options: [
      "By using `variants` to define animation states and `animate` to apply those states",
      "By setting `initial` and `animate` for each component separately",
      "By using `staggerChildren` on every child element",
      "By controlling animation timing in `useEffect`",
    ],
    correctAnswer: 0,
    explanation:
      "`variants` allow you to define reusable states for components, and `animate` applies those states to animate the components.",
  },
  {
    id: 8,
    title:
      "How can you improve animation performance for complex interactions in Framer Motion?",
    code: null,
    options: [
      "Avoid animating properties like `box-shadow` and `background-color`",
      "Use CSS transitions instead of Framer Motion for simple animations",
      "Limit the use of `whileHover` and `whileTap`",
      "Use `motion.div` for every element, regardless of size or complexity",
    ],
    correctAnswer: 0,
    explanation:
      "Certain properties like `box-shadow` and `background-color` can cause performance issues during animations. It's best to avoid animating them.",
  },
  {
    id: 9,
    title:
      "How can you create complex, chained animations with multiple steps in Framer Motion?",
    code: null,
    options: [
      "By using `animate` with `variants` to define each animation step and `transition` to control the timing",
      "By manually controlling each animation step using `useAnimation()`",
      "By triggering multiple `motion.div` components sequentially with `useEffect`",
      "By using `whileInView` to trigger different animation steps",
    ],
    correctAnswer: 0,
    explanation:
      "You can create complex, chained animations by using `variants` and defining each animation step within the `animate` prop, controlling the sequence with `transition`.",
  },
  {
    id: 10,
    title:
      "How do you implement drag functionality with constraints in Framer Motion?",
    code: `
    import { motion } from 'framer-motion';

    export default function App() {
      return (
        <motion.div
          drag
          dragConstraints={{ top: 0, left: 0, right: 300, bottom: 300 }}
        >
          Drag me
        </motion.div>
      );
    }
    `,
    options: [
      "By using `dragConstraints` to set the drag boundaries for the component",
      "By using `drag` with `initial` values to control the drag movement",
      "By setting `drag` as true and applying `whileDrag` animations",
      "By using `drag` and `motion.div` together without any constraints",
    ],
    correctAnswer: 0,
    explanation:
      "The `dragConstraints` property allows you to set boundaries for the drag functionality, restricting the movement of the component within a defined area.",
  },
]
