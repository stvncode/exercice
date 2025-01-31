export const framerExercises = [
  {
    id: 1,
    title: "Create a Basic Animation",
    objective:
      "Create a simple animation that moves an element from left to right.",
    codeStarter: `
  import { motion } from 'framer-motion';

  export default function SimpleAnimation() {
    return (
      <motion.div
        transition={{ duration: 2 }}
        style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
      />
    );
  }
  `,
    solution: `
  import { motion } from 'framer-motion';

  export default function SimpleAnimation() {
    return (
      <motion.div
        animate={{ x: 300 }} // Move to 300px to the right
        transition={{ duration: 3 }}
        style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
      />
    );
  }
  `,
  },
  {
    id: 2,
    title: "Create a Hover Animation",
    objective: "Animate a button to scale up when hovered.",
    codeStarter: `
  import { motion } from 'framer-motion';

  export default function HoverAnimation() {
    return (
      <motion.button
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Hover Me!
      </motion.button>
    );
  }
  `,
    solution: `
  import { motion } from 'framer-motion';

  export default function HoverAnimation() {
    return (
      <motion.button
        style={{ padding: '10px 20px', fontSize: '16px' }}
        whileHover={{ scale: 1.3 }} // Scale more when hovered
        whileTap={{ scale: 0.9 }} // Shrink on tap
      >
        Hover or Tap Me!
      </motion.button>
    );
  }
  `,
  },
  {
    id: 3,
    title: "Add a Fade-In Effect",
    objective: "Create a fade-in animation for a component when it appears.",
    codeStarter: `
  import { motion } from 'framer-motion';

  export default function FadeInEffect() {
    return (
      <motion.div
        transition={{ duration: 2 }}
        style={{ width: '200px', height: '200px', backgroundColor: 'green' }}
      />
    );
  }
  `,
    solution: `
  import { motion } from 'framer-motion';

  export default function FadeInEffect() {
    return (
      <motion.div
        initial={{ opacity: 0 }} // Start with invisible
        animate={{ opacity: 1 }}  // Fade in to fully visible
        transition={{ duration: 3, ease: 'easeInOut' }} // Add a smoother transition
        style={{ width: '200px', height: '200px', backgroundColor: 'green' }}
      />
    );
  }
  `,
  },
  {
    id: 4,
    title: "Animate on Scroll",
    objective:
      "Create an animation that triggers when the element scrolls into view.",
    codeStarter: `
  import { motion } from 'framer-motion';

  export default function ScrollAnimation() {
    return (
      <motion.div
        style={{ height: '300px', backgroundColor: 'orange' }}
        transition={{ duration: 1 }}
      >
        Scroll to see me!
      </motion.div>
    );
  }
  `,
    solution: `
  import { motion } from 'framer-motion';

  export default function ScrollAnimation() {
    return (
      <motion.div
        style={{ height: '300px', backgroundColor: 'orange' }}
        whileInView={{ opacity: 1, y: 0 }} // Add vertical movement
        initial={{ opacity: 0, y: 50 }} // Start with a slight downward offset
        transition={{ duration: 1 }}
      >
        Scroll to see me slide up!
      </motion.div>
    );
  }
  `,
  },
  {
    id: 5,
    title: "Create a Bounce Animation",
    objective: "Create a bounce effect using `keyframes`.",
    codeStarter: `
  import { motion } from 'framer-motion';

  export default function BounceEffect() {
    return (
      <motion.div
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 1.5 }}
        style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
      />
    );
  }
  `,
    solution: `
  import { motion } from 'framer-motion';

  export default function BounceEffect() {
    return (
      <motion.div
        animate={{ y: [0, -70, 0, -70, 0] }} // Increase the bounce height
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 1 }}
        style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
      />
    );
  }
  `,
  },
  {
    id: 6,
    title: "Create a Staggered Animation",
    objective: "Animate multiple elements with staggered delays.",
    codeStarter: `
  import { motion } from 'framer-motion';

  export default function StaggeredAnimation() {
    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <motion.div>
          Item 1
        </motion.div>
        <motion.div>
          Item 2
        </motion.div>
        <motion.div>
          Item 3
        </motion.div>
      </div>
    );
  }
  `,
    solution: `
  import { motion } from 'framer-motion';

  export default function StaggeredAnimation() {
    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Item 1
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Item 2
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Item 3
        </motion.div>
      </div>
    );
  }
  `,
  },
  {
    id: 7,
    title: "Create a Rotate Animation",
    objective: "Create an animation that rotates an element infinitely.",
    codeStarter: `
  import { motion } from 'framer-motion';

  export default function RotateAnimation() {
    return (
      <motion.div
        style={{ width: '100px', height: '100px', backgroundColor: 'purple' }}
      />
    );
  }
  `,
    solution: `
  import { motion } from 'framer-motion';

  export default function RotateAnimation() {
    return (
      <motion.div
        animate={{ rotate: 360 }} // Rotate infinitely
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 2 }}
        style={{ width: '100px', height: '100px', backgroundColor: 'purple' }}
      />
    );
  }
  `,
  },
  {
    id: 8,
    title: "Create a Slide-in Effect",
    objective:
      "Create an element that slides in from the left when it appears.",
    codeStarter: `
  import { motion } from 'framer-motion';

  export default function SlideInEffect() {
    return (
      <motion.div
        transition={{ duration: 2 }}
        style={{ width: '200px', height: '200px', backgroundColor: 'pink' }}
      />
    );
  }
  `,
    solution: `
  import { motion } from 'framer-motion';

  export default function SlideInEffect() {
    return (
      <motion.div
        initial={{ x: -200 }} // Start from the left
        animate={{ x: 0 }}     // Move to the center
        transition={{ duration: 1.5 }}
        style={{ width: '200px', height: '200px', backgroundColor: 'pink' }}
      />
    );
  }
  `,
  },
  {
    id: 9,
    title: "Create a Fade-Out Animation",
    objective:
      "Create an animation that fades out an element when it disappears.",
    codeStarter: `
  import { motion } from 'framer-motion';

  export default function FadeOutEffect() {
    return (
      <motion.div
        transition={{ duration: 2 }}
        style={{ width: '200px', height: '200px', backgroundColor: 'yellow' }}
      >
        Goodbye!
      </motion.div>
    );
  }
  `,
    solution: `
  import { motion } from 'framer-motion';

  export default function FadeOutEffect() {
    return (
      <motion.div
        animate={{ opacity: 0 }} // Fade out
        transition={{ duration: 1.5 }}
        style={{ width: '200px', height: '200px', backgroundColor: 'yellow' }}
      >
        Goodbye!
      </motion.div>
    );
  }
  `,
  },
  {
    id: 10,
    title: "Animate an SVG Path",
    objective:
      "Animate the stroke-dasharray and stroke-dashoffset to reveal an SVG path.",
    codeStarter: `
  import { motion } from 'framer-motion';

  export default function SVGAnimation() {
    return (
      <motion.svg width="200" height="200">
        <motion.path
          d="M10 10 H 90 V 90 H 10 Z"
          fill="transparent"
        />
      </motion.svg>
    );
  }
  `,
    solution: `
  import { motion } from 'framer-motion';

  export default function SVGAnimation() {
    return (
      <motion.svg width="200" height="200">
        <motion.path
          d="M10 10 H 90 V 90 H 10 Z"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3 }}
        />
      </motion.svg>
    );
  }
  `,
  },
]
