export const shadcnUIIntermediateQuestions = [
  {
    id: 1,
    title:
      "How do you control the visibility of a Tooltip component in ShadCN UI?",
    code: null,
    options: [
      "Use the isVisible prop",
      "Use the open prop",
      "Use the isOpen prop",
      "Use the active prop",
    ],
    correctAnswer: 2,
    explanation:
      "The 'isOpen' prop controls whether the Tooltip is visible or not in ShadCN UI.",
  },
  {
    id: 2,
    title:
      "What ShadCN UI component is most suitable for creating complex content with a flexible layout?",
    code: null,
    options: ["Card", "Table", "Grid", "Modal"],
    correctAnswer: 0,
    explanation:
      "The Card component is most suitable for displaying content in a flexible layout, with header, body, and footer sections.",
  },
  {
    id: 3,
    title: "How can you pass custom styles to a Modal component in ShadCN UI?",
    code: null,
    options: [
      "By passing a className prop to the Modal component",
      "By using the style prop inside the Modal",
      "By editing the CSS file directly",
      "By using the default styles",
    ],
    correctAnswer: 0,
    explanation:
      "You can pass custom styles to the Modal component using the 'className' prop to apply custom CSS classes.",
  },
  {
    id: 4,
    title:
      "In ShadCN UI, how can you customize the size of a Button component?",
    code: null,
    options: [
      "By passing the size prop with values like 'small', 'medium', or 'large'",
      "By using the className prop",
      "By modifying the default CSS styles",
      "By using the type prop",
    ],
    correctAnswer: 0,
    explanation:
      "The size of a Button component in ShadCN UI can be customized by passing the 'size' prop with values like 'small', 'medium', or 'large'.",
  },
  {
    id: 5,
    title:
      "Which component can be used to handle user input validation in ShadCN UI?",
    code: null,
    options: ["Form", "Button", "Input", "Switch"],
    correctAnswer: 0,
    explanation:
      "The Form component can be used for handling user input validation along with other components like Input and Switch.",
  },
  {
    id: 6,
    title:
      "How do you display a progress bar with a dynamic value in ShadCN UI?",
    code: null,
    options: [
      "Use the ProgressBar component and bind it to a dynamic value",
      "Use the LoadingSpinner component",
      "Use a custom component with state",
      "You cannot display dynamic values with a progress bar",
    ],
    correctAnswer: 0,
    explanation:
      "The ProgressBar component in ShadCN UI can display a dynamic value by binding it to a state or dynamic prop.",
  },
  {
    id: 7,
    title:
      "Which hook is used to control the open/close state of a Modal in ShadCN UI?",
    code: null,
    options: ["useModal", "useState", "useEffect", "useToggle"],
    correctAnswer: 0,
    explanation:
      "The useModal hook in ShadCN UI provides methods for controlling the open and close state of a Modal component.",
  },
  {
    id: 8,
    title:
      "How would you handle an event when a user clicks on an item in a DropdownMenu in ShadCN UI?",
    code: null,
    options: [
      "By using the onClick event handler in the DropdownItem",
      "By using the onChange event in Dropdown",
      "By using the onSelect event in DropdownMenu",
      "DropdownMenu does not support events",
    ],
    correctAnswer: 0,
    explanation:
      "You handle click events in ShadCN UI's DropdownMenu by using the 'onClick' event handler in the DropdownItem.",
  },
  {
    id: 9,
    title:
      "What is the correct way to show a notification message after a button click in ShadCN UI?",
    code: `
  import { Button, Snackbar } from "shadcn-ui";
  
  export default function NotificationExample() {
    return (
      <div>
        <Button onClick={/* Show Snackbar */}>Click Me</Button>
        <Snackbar />
      </div>
    );
  }
  `,
    options: [
      "Use the 'show' method of useSnackbar to trigger the Snackbar",
      "Call the 'open' method of the Snackbar",
      "Call the 'show' method of the Button",
      "Snackbar automatically shows when a button is clicked",
    ],
    correctAnswer: 0,
    explanation:
      "To show a notification message with the Snackbar component, use the 'show' method from the useSnackbar hook to trigger it.",
  },
  {
    id: 10,
    title:
      "What prop do you pass to the Switch component in ShadCN UI to set its initial checked state?",
    code: null,
    options: ["checked", "state", "toggle", "defaultChecked"],
    correctAnswer: 0,
    explanation:
      "The 'checked' prop is used to set the initial checked state of the Switch component in ShadCN UI.",
  },
]
