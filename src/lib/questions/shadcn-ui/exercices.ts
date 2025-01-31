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
    title: "Create a Dialog with Custom Content",
    objective:
      "Use ShadCN UI to create a modal that displays custom content when triggered.",
    codeStarter: `
  import { Dialog, Button } from "shadcn-ui";
  
  export default function CustomModal() {
    return (
      <div>
        <Button onClick={() => {}}>
          Open Dialog
        </Button>
        <Dialog>
          {/* Dialog content goes here */}
        </Dialog>
      </div>
    );
  }
  `,
    solution: `
  import { Dialog, Button } from "shadcn-ui";
  
  export default function CustomModal() {
const [open, setIsOpen] = useState(false)
    
    return (
      <div>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
          <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <h2>Dialog Title</h2>
            <p>This is the modal content.</p>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DialogContent>
        </Dialog>
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
        <TooltipTrigger className="underline text-blue-500 cursor-pointer">Hover over me</TooltipTrigger>
        <TooltipContent className="bg-gray-800 text-white p-2 rounded">
          This is a tooltip
        </TooltipContent>
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
  import { DropdownMenu, Button } from "shadcn-ui";
  
  export default function DropdownMenu() {
    return (
      <DropdownMenu>
      </DropdownMenu>
    );
  }
  `,
    solution: `
  import { DropdownMenu, Button, DropdownMenu, DropdownItem } from "shadcn-ui";
  
  export default function DropdownMenu() {
    return (
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open DropdownMenu</Button>
      </DropdownMenuTrigger>
        <DropdownMenuConten>
          <DropdownMenuItem onClick={() => alert('Option 1')}>Option 1</DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert('Option 2')}>Option 2</DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert('Option 3')}>Option 3</DropdownItem>
        </DropdownMenuConten>
      </DropdownMenu>
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
  import { Card, CardHeader, CardContent, CardFooter } from "shadcn-ui";
  
  export default function CardComponent() {
    return (
      <Card className="w-64">
        <CardHeader>
          <img src="https://via.placeholder.com/150" alt="Image" />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-semibold">Card Title</h2>
          <p>This is a description of the card content.</p>
        </CardContent>
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
  import { Switch } from "shadcn-ui";
  
  export default function CustomSwitch() {
const [isChecked, setIsChecked] = useState(false);
    
    return (
      <div>
        <Switch checked={isChecked} onCheckChanged={setIsChecked} />
        <p>{isChecked ? "The switch is ON" : "The switch is OFF"}</p>
      </div>
    );
  }
  `,
  },

  {
    id: 7,
    title: "Create a Form with Input Validation",
    objective:
      "Build a form with input validation using ShadCN UI and display validation messages.",
    codeStarter: null,
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
]
