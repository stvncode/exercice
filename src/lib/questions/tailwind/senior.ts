export const tailwindCSSSeniorQuestions = [
  {
    id: 1,
    title: "How do you handle custom breakpoints in Tailwind CSS?",
    code: null,
    options: [
      "By modifying the 'screens' property in 'tailwind.config.js'",
      "By using 'media-query' class in the HTML",
      "By using 'sm:' and 'lg:' with custom values directly in HTML",
      "By adding custom breakpoints in a separate CSS file",
    ],
    correctAnswer: 0,
    explanation:
      "Custom breakpoints can be defined by modifying the 'screens' property in 'tailwind.config.js'. This allows you to define custom responsive breakpoints beyond the default ones.",
  },
  {
    id: 2,
    title: "How can you optimize Tailwind CSS for production?",
    code: null,
    options: [
      "By using 'purge' to remove unused CSS classes in 'tailwind.config.js'",
      "By using the 'minify' class",
      "By compressing the final CSS with Gzip",
      "By switching to an alternative build system like Webpack",
    ],
    correctAnswer: 0,
    explanation:
      "Tailwind offers a 'purge' option in 'tailwind.config.js' that removes unused CSS classes in production builds, making the final CSS bundle smaller and more optimized.",
  },
  {
    id: 3,
    title: "How can you create a custom plugin in Tailwind CSS?",
    code: null,
    options: [
      "By using 'plugin()' function in 'tailwind.config.js'",
      "By creating a new CSS file and linking it in the project",
      "By using 'extend' inside the theme section",
      "By writing JavaScript code inside the 'tailwind.css' file",
    ],
    correctAnswer: 0,
    explanation:
      "To create custom plugins, you can use the 'plugin()' function in 'tailwind.config.js' and extend Tailwind's functionality with your own utilities.",
  },
  {
    id: 4,
    title: "How do you create a custom form control using Tailwind CSS?",
    code: null,
    options: [
      "By using 'form' plugin in 'tailwind.config.js'",
      "By extending Tailwind's default theme for input fields",
      "By styling form elements directly using utility classes",
      "By creating separate CSS rules for form controls",
    ],
    correctAnswer: 2,
    explanation:
      "Form controls can be customized using Tailwind's utilities, such as 'text-input', 'bg-gray-200', 'border-2', etc., directly applied to form elements.",
  },
  {
    id: 5,
    title: "What does the 'group' utility class do in Tailwind CSS?",
    code: null,
    options: [
      "It applies styles to elements within a group when one element is interacted with",
      "It creates a flex container for children elements",
      "It combines multiple CSS rules into one class",
      "It creates a modal window for grouped content",
    ],
    correctAnswer: 0,
    explanation:
      "The 'group' utility allows you to apply styles to child elements when a parent element is in a certain state, such as when hovering over the parent.",
  },
  {
    id: 6,
    title: "How do you create a custom grid layout with Tailwind CSS?",
    code: null,
    options: [
      "By using 'grid-cols-[number]' and 'grid-rows-[number]' utilities",
      "By using 'grid-template' in the 'tailwind.config.js' file",
      "By using 'grid' and 'flex' together in the same element",
      "By adding custom 'grid-template-areas' inside the global CSS",
    ],
    correctAnswer: 0,
    explanation:
      "To create a custom grid, you can use Tailwind's 'grid-cols-[number]' and 'grid-rows-[number]' utilities to define the number of columns and rows.",
  },
  {
    id: 7,
    title: "What is the benefit of using Tailwind CSS with PostCSS?",
    code: null,
    options: [
      "It enables the use of custom Tailwind plugins",
      "It reduces the size of your CSS files",
      "It allows automatic purging of unused classes",
      "It simplifies the Tailwind configuration file",
    ],
    correctAnswer: 1,
    explanation:
      "Using PostCSS with Tailwind allows for CSS minification, optimization, and automatic purging of unused classes during the build process, improving performance.",
  },
  {
    id: 8,
    title: "What does the 'content-['value']' utility do in Tailwind CSS?",
    code: null,
    options: [
      "It generates a pseudo-element with custom content",
      "It adds specific content between elements",
      "It applies a border with the specified content",
      "It adds a background with the given value",
    ],
    correctAnswer: 0,
    explanation:
      "The 'content-['value']' utility in Tailwind CSS generates pseudo-elements with the specified content, typically used with 'before' or 'after' pseudo-elements.",
  },
  {
    id: 9,
    title: "How can you create a custom font family in Tailwind CSS?",
    code: null,
    options: [
      "By adding custom fonts in the 'tailwind.config.js' under 'theme.fontFamily'",
      "By using the 'font-[name]' class in the HTML",
      "By linking fonts via Google Fonts and using the 'import' statement",
      "By defining font styles in an external CSS file",
    ],
    correctAnswer: 0,
    explanation:
      "You can define custom font families in the 'tailwind.config.js' file under the 'theme.fontFamily' property, and then use the custom fonts throughout your Tailwind project.",
  },
  {
    id: 10,
    title:
      "How do you handle circular and elliptical shapes with Tailwind CSS?",
    code: null,
    options: [
      "By using the 'rounded-full' and 'ellipse' utilities",
      "By using 'w-[value]' and 'h-[value]' classes for width and height",
      "By using 'border-radius' properties in the config file",
      "By creating custom shapes in SVG and applying them as background",
    ],
    correctAnswer: 0,
    explanation:
      "The 'rounded-full' class in Tailwind can be used to create circular shapes, and you can adjust the width and height to create elliptical shapes as well.",
  },
]
