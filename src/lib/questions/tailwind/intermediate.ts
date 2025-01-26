export const tailwindCSSIntermediateQuestions = [
  {
    id: 1,
    title:
      "How do you apply conditional styles in Tailwind CSS based on a state?",
    code: null,
    options: [
      "By using the ':hover' and ':focus' pseudo-classes",
      "By adding inline styles in the JSX",
      "By using media queries in CSS",
      "By modifying the 'tailwind.config.js' file",
    ],
    correctAnswer: 0,
    explanation:
      "You can apply conditional styles using pseudo-classes like ':hover', ':focus', ':active', etc., to define styles based on the element's state.",
  },
  {
    id: 2,
    title: "How do you create a custom animation in Tailwind CSS?",
    code: null,
    options: [
      "By using the 'animate-[name]' class in the config file",
      "By defining animations in the global CSS file",
      "By adding 'keyframes' to 'tailwind.config.js'",
      "By using 'transition-[property]' class",
    ],
    correctAnswer: 2,
    explanation:
      "To create a custom animation in Tailwind, you need to extend the default theme in 'tailwind.config.js' by adding the 'keyframes' property and defining your animation there.",
  },
  {
    id: 3,
    title: "How do you create a responsive layout with Tailwind CSS?",
    code: null,
    options: [
      "By using responsive prefixes like 'sm:', 'md:', 'lg:'",
      "By using custom media queries in the config file",
      "By wrapping elements with a <div> and setting class 'responsive'",
      "By using CSS Grid instead of Flexbox",
    ],
    correctAnswer: 0,
    explanation:
      "Tailwind CSS provides responsive utilities by adding specific breakpoints using prefixes like 'sm:', 'md:', and 'lg:', which allows you to adjust the layout on different screen sizes.",
  },
  {
    id: 4,
    title: "How can you enable dark mode in Tailwind CSS?",
    code: null,
    options: [
      "By adding a 'dark' class to the body element",
      "By setting the 'darkMode' option in 'tailwind.config.js'",
      "By using the 'dark:[color]' utility class",
      "By manually toggling 'dark' in the HTML file",
    ],
    correctAnswer: 1,
    explanation:
      "To enable dark mode in Tailwind, you need to add 'darkMode' option in the 'tailwind.config.js' file and set it to either 'media' or 'class' to specify how the dark mode should be triggered.",
  },
  {
    id: 5,
    title: "How can you create a custom color in Tailwind CSS?",
    code: null,
    options: [
      "By defining the color in the 'tailwind.config.js' file under 'theme.colors'",
      "By using 'color-[value]' class in the HTML",
      "By adding the color in global CSS",
      "By using the 'bg-color-[value]' class",
    ],
    correctAnswer: 0,
    explanation:
      "To add custom colors, you need to modify the 'colors' property in 'tailwind.config.js' under the 'theme' section and then use the custom color like any other Tailwind class.",
  },
  {
    id: 6,
    title: "What does the 'space-x-[value]' class do in Tailwind?",
    code: null,
    options: [
      "It adds space between elements horizontally",
      "It adds space between elements vertically",
      "It sets a fixed width between elements",
      "It creates a flex container with horizontal alignment",
    ],
    correctAnswer: 0,
    explanation:
      "The 'space-x-[value]' class is used in Tailwind to add horizontal spacing between child elements within a flex container.",
  },
  {
    id: 7,
    title: "How do you add a gradient background in Tailwind CSS?",
    code: null,
    options: [
      "bg-gradient-to-r from-[color] via-[color] to-[color]",
      "background-gradient-[value]",
      "bg-gradient-[color]-[color]",
      "gradient-[direction] from-[color]",
    ],
    correctAnswer: 0,
    explanation:
      "Tailwind provides utilities for gradient backgrounds like 'bg-gradient-to-r', along with 'from-', 'via-', and 'to-' for defining the gradient's color stops.",
  },
  {
    id: 8,
    title: "How do you modify the default Tailwind spacing scale?",
    code: null,
    options: [
      "By adding custom values to the 'spacing' section in 'tailwind.config.js'",
      "By changing the 'spacing' properties in global CSS",
      "By using 'padding' and 'margin' classes only",
      "By using the 'extend' property in 'tailwind.config.js'",
    ],
    correctAnswer: 0,
    explanation:
      "To modify the spacing scale, you can extend the default spacing values in the 'tailwind.config.js' file under the 'theme.spacing' property.",
  },
  {
    id: 9,
    title: "What is the purpose of the 'z-index' utility in Tailwind CSS?",
    code: null,
    options: [
      "It controls the stacking order of elements",
      "It makes elements responsive",
      "It defines the height of an element",
      "It applies margin and padding",
    ],
    correctAnswer: 0,
    explanation:
      "The 'z-index' utility in Tailwind CSS is used to control the stacking order of elements. Higher values of z-index place elements on top of others.",
  },
  {
    id: 10,
    title: "What does the 'absolute' class do in Tailwind CSS?",
    code: null,
    options: [
      "It positions an element absolutely relative to its nearest positioned ancestor",
      "It makes the element occupy the entire width and height",
      "It sets the element's position to fixed at the top-left corner",
      "It removes the element from the document flow",
    ],
    correctAnswer: 0,
    explanation:
      "The 'absolute' utility class in Tailwind sets an element's position to absolute, relative to its nearest positioned ancestor (element with a position other than 'static').",
  },
]
