export const shadcnUISeniorQuestions = [
  {
    id: 1,
    title: "How do you implement dynamic theming with ShadCN UI components?",
    code: `
  import { Button } from 'shadcn-ui';
  import { useState } from 'react';
  
  const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
  
    return (
      <div className={darkMode ? 'dark' : 'light'}>
        <Button onClick={() => setDarkMode(!darkMode)}>
          Toggle Theme
        </Button>
      </div>
    );
  };
    `,
    options: [
      "By using CSS classes like 'dark' and 'light' to switch themes dynamically",
      "By changing the 'theme' prop on each component individually",
      "By using a custom provider for the theme context",
      "By directly editing the component styles based on user interaction",
    ],
    correctAnswer: 0,
    explanation:
      "ShadCN UI supports dynamic theming by using classes like 'dark' and 'light' on parent containers to switch the theme.",
  },
  {
    id: 2,
    title: "How can you customize the icons used in the Button component?",
    code: `
  import { Button } from 'shadcn-ui';
  import { FaReact } from 'react-icons/fa';
  
  const CustomButton = () => (
    <Button startIcon={<FaReact />}>Custom Icon Button</Button>
  );
  `,
    options: [
      "Use the 'startIcon' or 'endIcon' props to pass a custom icon",
      "Change the button's 'icon' prop directly",
      "Use the 'iconPosition' prop to modify icon placement",
      "You cannot customize icons in the Button component",
    ],
    correctAnswer: 0,
    explanation:
      "ShadCN UI allows customization of icons in Button components via the 'startIcon' or 'endIcon' props.",
  },
  {
    id: 3,
    title: "What is the recommended way to manage global state in ShadCN UI?",
    code: null,
    options: [
      "Use the built-in useState hook for global state management",
      "Use a state management library like Redux or Zustand",
      "Pass state through React Context manually",
      "ShadCN UI doesn't support global state management",
    ],
    correctAnswer: 1,
    explanation:
      "For managing global state in ShadCN UI, it's recommended to use a state management library like Redux or Zustand.",
  },
  {
    id: 4,
    title:
      "How can you create a responsive layout with the Grid component in ShadCN UI?",
    code: `
  import { Grid, GridItem } from 'shadcn-ui';
  
  const ResponsiveLayout = () => (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      <GridItem>Content 1</GridItem>
      <GridItem>Content 2</GridItem>
      <GridItem>Content 3</GridItem>
      <GridItem>Content 4</GridItem>
    </Grid>
  );
    `,
    options: [
      "By setting the 'templateColumns' prop and using responsive grid templates",
      "By adding CSS media queries in the stylesheet",
      "By passing a 'responsive' prop directly to the Grid component",
      "Grid doesn't support responsiveness natively",
    ],
    correctAnswer: 0,
    explanation:
      "ShadCN UI's Grid component allows responsive layouts by using the 'templateColumns' prop with values like 'repeat(4, 1fr)' and utilizing media queries if needed.",
  },
  {
    id: 5,
    title: "How can you lazy-load content inside a Modal component?",
    code: `
  import { Modal } from 'shadcn-ui';
  import { useState, useEffect } from 'react';
  
  const LazyModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState(null);
    
    const loadContent = () => {
      setTimeout(() => {
        setContent(<div>Lazy Loaded Content</div>);
      }, 1000);
    };
    
    return (
      <>
        <Button onClick={() => { setIsOpen(true); loadContent(); }}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {content || 'Loading...'}
        </Modal>
      </>
    );
  };
    `,
    options: [
      "By conditionally rendering content inside the Modal based on the state",
      "By using the lazy prop on Modal components",
      "By using the Suspense component around the Modal",
      "ShadCN UI doesn't support lazy-loading content in modals",
    ],
    correctAnswer: 0,
    explanation:
      "You can lazy-load content inside a Modal by conditionally rendering the content based on a state variable, such as after a timeout or API call.",
  },
  {
    id: 6,
    title:
      "How can you prevent a user from closing a Modal when a form is in progress?",
    code: `
  import { Modal, Button } from 'shadcn-ui';
  import { useState } from 'react';
  
  const FormModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
        <Modal isOpen={isOpen} onClose={() => !isFormSubmitting && setIsOpen(false)}>
          <form onSubmit={() => { setIsFormSubmitting(true); /* submit form */ }}>
            {/* form fields */}
            <Button type="submit">Submit</Button>
          </form>
        </Modal>
      </div>
    );
  };
    `,
    options: [
      "By checking the form submission status before allowing the modal to close",
      "By using the 'preventClose' prop on the Modal component",
      "By setting a timeout before allowing the modal to close",
      "This is not possible in ShadCN UI",
    ],
    correctAnswer: 0,
    explanation:
      "You can prevent a Modal from closing while a form is being submitted by checking the form submission status before allowing the modal to close.",
  },
  {
    id: 7,
    title:
      "What is the best approach to handle animations when opening or closing a Modal in ShadCN UI?",
    code: null,
    options: [
      "Use the 'animate' prop to specify a CSS animation class",
      "Use the 'onAnimationStart' and 'onAnimationEnd' events",
      "Integrate ShadCN UI with a third-party animation library like Framer Motion",
      "ShadCN UI modals do not support animations",
    ],
    correctAnswer: 2,
    explanation:
      "For advanced modal animations, you can integrate ShadCN UI with libraries like Framer Motion to animate the opening and closing of modals.",
  },
  {
    id: 8,
    title:
      "How can you integrate a form validation library like 'Yup' with ShadCN UI's Form components?",
    code: `
  import { useForm } from 'react-hook-form';
  import * as Yup from 'yup';
  
  const schema = Yup.object({
    email: Yup.string().email().required('Email is required'),
  });
  
  const FormWithValidation = () => {
    const { register, handleSubmit, errors } = useForm({ validationSchema: schema });
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Enter email" />
        {errors.email && <span>{errors.email.message}</span>}
        <Button type="submit">Submit</Button>
      </form>
    );
  };
    `,
    options: [
      "By using a validation schema in combination with 'useForm' from 'react-hook-form'",
      "By passing a validation function directly to the Form component",
      "By using the 'validate' prop on individual Form fields",
      "ShadCN UI does not support form validation",
    ],
    correctAnswer: 0,
    explanation:
      "You can integrate form validation libraries like 'Yup' with ShadCN UI by using 'react-hook-form' and specifying the validation schema.",
  },
  {
    id: 9,
    title:
      "How can you implement dynamic content loading with infinite scroll in a List component in ShadCN UI?",
    code: null,
    options: [
      "By using the 'onScroll' event to detect when to load more content",
      "By passing a dynamic 'data' prop and using pagination",
      "By using the InfiniteScroll component",
      "ShadCN UI does not support infinite scroll out-of-the-box",
    ],
    correctAnswer: 2,
    explanation:
      "ShadCN UI provides an InfiniteScroll component that can be used to load dynamic content as the user scrolls.",
  },
  {
    id: 10,
    title:
      "How would you manage a multi-step form with navigation in ShadCN UI?",
    code: `
  import { Button } from 'shadcn-ui';
  import { useState } from 'react';
  
  const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    
    return (
      <div>
        <form>
          {step === 1 && <div>Step 1: Personal Information</div>}
          {step === 2 && <div>Step 2: Address Details</div>}
          {step === 3 && <div>Step 3: Payment</div>}
          
          <Button onClick={() => setStep(step + 1)}>Next Step</Button>
        </form>
      </div>
    );
  };
    `,
    options: [
      "By using state to track the current step and conditionally render each step",
      "By using the 'step' prop in the Form component",
      "By using a Tab component to switch between steps",
      "ShadCN UI does not support multi-step forms",
    ],
    correctAnswer: 0,
    explanation:
      "You can manage a multi-step form by using state to track the current step and conditionally render each step of the form.",
  },
]
