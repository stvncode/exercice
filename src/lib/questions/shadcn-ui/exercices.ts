export const shadcnUIExercises = [
  {
    id: 1,
    title: "Create a Button Component with Custom Styles",
    objective:
      "Build a button component using ShadCN UI with the ability to customize colors, size, and shape.",
    codeStarter: `
  import { Button } from "shadcn-ui";
  
  export default function CustomButton() {
    return (
      <Button
        size="lg"
        variant="primary"
        // Customize styles here
      >
        Click me
      </Button>
    );
  }
  `,
    solution: `
  import { Button } from "shadcn-ui";
  
  export default function CustomButton() {
    return (
      <Button
        size="lg"
        variant="primary"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me
      </Button>
    );
  }
  `,
  },
  {
    id: 2,
    title: "Create a Modal with Custom Content",
    objective:
      "Use ShadCN UI to create a modal that displays custom content when triggered.",
    codeStarter: `
  import { Modal, Button } from "shadcn-ui";
  
  export default function CustomModal() {
    return (
      <div>
        <Button onClick={() => {}}>
          Open Modal
        </Button>
        <Modal>
          {/* Modal content goes here */}
        </Modal>
      </div>
    );
  }
  `,
    solution: `
  import { Modal, Button, useModal } from "shadcn-ui";
  
  export default function CustomModal() {
    const { isOpen, open, close } = useModal();
    
    return (
      <div>
        <Button onClick={open}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={close}>
          <div className="p-4">
            <h2 className="text-xl">Custom Modal</h2>
            <p>This is a modal with custom content.</p>
            <Button onClick={close}>Close</Button>
          </div>
        </Modal>
      </div>
    );
  }
  `,
  },
  {
    id: 3,
    title: "Create a Tooltip Component",
    objective:
      "Build a simple tooltip component that shows on hover using ShadCN UI.",
    codeStarter: `
  import { Tooltip } from "shadcn-ui";
  
  export default function CustomTooltip() {
    return (
      <Tooltip content="This is a tooltip">
        <span>Hover over me</span>
      </Tooltip>
    );
  }
  `,
    solution: `
  import { Tooltip } from "shadcn-ui";
  
  export default function CustomTooltip() {
    return (
      <Tooltip content="This is a tooltip" position="top">
        <span className="underline text-blue-500 cursor-pointer">Hover over me</span>
      </Tooltip>
    );
  }
  `,
  },
  {
    id: 4,
    title: "Create a Dropdown Menu",
    objective:
      "Create a dropdown menu that appears when clicking a button using ShadCN UI.",
    codeStarter: `
  import { Dropdown, Button } from "shadcn-ui";
  
  export default function DropdownMenu() {
    return (
      <Dropdown>
        <Button>Open Dropdown</Button>
        {/* Add dropdown items here */}
      </Dropdown>
    );
  }
  `,
    solution: `
  import { Dropdown, Button, DropdownMenu, DropdownItem } from "shadcn-ui";
  
  export default function DropdownMenu() {
    return (
      <Dropdown>
        <Button>Open Dropdown</Button>
        <DropdownMenu>
          <DropdownItem onClick={() => alert('Option 1')}>Option 1</DropdownItem>
          <DropdownItem onClick={() => alert('Option 2')}>Option 2</DropdownItem>
          <DropdownItem onClick={() => alert('Option 3')}>Option 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
  `,
  },
  {
    id: 5,
    title: "Create a Card Component",
    objective:
      "Build a simple card component that displays an image, title, and description.",
    codeStarter: `
  import { Card } from "shadcn-ui";
  
  export default function CardComponent() {
    return (
      <Card>
        {/* Add image, title, and description here */}
      </Card>
    );
  }
  `,
    solution: `
  import { Card, CardHeader, CardBody, CardFooter } from "shadcn-ui";
  
  export default function CardComponent() {
    return (
      <Card className="w-64">
        <CardHeader>
          <img src="https://via.placeholder.com/150" alt="Image" />
        </CardHeader>
        <CardBody>
          <h2 className="text-lg font-semibold">Card Title</h2>
          <p>This is a description of the card content.</p>
        </CardBody>
        <CardFooter>
          <Button>Learn More</Button>
        </CardFooter>
      </Card>
    );
  }
  `,
  },
  {
    id: 6,
    title: "Create a Switch Component",
    objective:
      "Build a toggle switch component using ShadCN UI to toggle between states.",
    codeStarter: `
  import { Switch } from "shadcn-ui";
  
  export default function CustomSwitch() {
    return (
      <Switch />
    );
  }
  `,
    solution: `
  import { Switch, useSwitch } from "shadcn-ui";
  
  export default function CustomSwitch() {
    const { isChecked, toggle } = useSwitch();
    
    return (
      <div>
        <Switch checked={isChecked} onChange={toggle} />
        <p>{isChecked ? "The switch is ON" : "The switch is OFF"}</p>
      </div>
    );
  }
  `,
  },
  {
    id: 7,
    title: "Create a Pagination Component",
    objective:
      "Build a pagination component using ShadCN UI that allows navigation between pages.",
    codeStarter: `
  import { Pagination } from "shadcn-ui";
  
  export default function PaginationComponent() {
    return (
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={(page) => {}}
      />
    );
  }
  `,
    solution: `
  import { Pagination } from "shadcn-ui";
  
  export default function PaginationComponent() {
    const handlePageChange = (page) => {
      console.log("Current page:", page);
    };
    
    return (
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    );
  }
  `,
  },
  {
    id: 8,
    title: "Create a Progress Bar Component",
    objective:
      "Build a progress bar that shows the progress of a task using ShadCN UI.",
    codeStarter: `
  import { ProgressBar } from "shadcn-ui";
  
  export default function ProgressBarComponent() {
    return (
      <ProgressBar value={50} />
    );
  }
  `,
    solution: `
  import { ProgressBar } from "shadcn-ui";
  
  export default function ProgressBarComponent() {
    return (
      <div>
        <ProgressBar value={75} />
        <p>Progress: 75%</p>
      </div>
    );
  }
  `,
  },
  {
    id: 9,
    title: "Create a Form with Input Validation",
    objective:
      "Build a form with input validation using ShadCN UI and display validation messages.",
    codeStarter: `
  import { Form, Input, Button } from "shadcn-ui";
  
  export default function ValidatedForm() {
    return (
      <Form>
        <Input label="Name" required />
        <Button>Submit</Button>
      </Form>
    );
  }
  `,
    solution: `
  import { Form, Input, Button, useForm } from "shadcn-ui";
  
  export default function ValidatedForm() {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data) => {
      console.log(data);
    };
    
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name", { required: "Name is required" })}
          label="Name"
          error={errors.name}
        />
        <Button>Submit</Button>
      </Form>
    );
  }
  `,
  },
  {
    id: 10,
    title: "Create a Snackbar Notification",
    objective:
      "Create a snackbar notification using ShadCN UI that displays a message on the screen.",
    codeStarter: `
  import { Snackbar } from "shadcn-ui";
  
  export default function SnackbarComponent() {
    return (
      <Snackbar message="This is a notification" />
    );
  }
  `,
    solution: `
  import { Snackbar, useSnackbar } from "shadcn-ui";
  
  export default function SnackbarComponent() {
    const { show } = useSnackbar();
    
    return (
      <div>
        <button onClick={() => show("This is a snackbar message!")}>
          Show Snackbar
        </button>
        <Snackbar />
      </div>
    );
  }
  `,
  },
]
