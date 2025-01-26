export const tailwindCSSExercises = [
  {
    id: 1,
    title: "Create a Responsive Card Layout",
    objective:
      "Create a responsive card layout using Tailwind CSS. The cards should adjust their layout based on the screen size.",
    codeStarter: `
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white p-6 shadow-lg rounded-lg">
      <h3 class="text-xl font-semibold mb-4">Card Title</h3>
      <p class="text-gray-600">Card content goes here. Use this as a placeholder text.</p>
    </div>
    <!-- Repeat for more cards -->
  </div>
  `,
    solution: `
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white p-6 shadow-lg rounded-lg">
      <h3 class="text-xl font-semibold mb-4">Card Title</h3>
      <p class="text-gray-600">Card content goes here. Use this as a placeholder text.</p>
    </div>
    <div class="bg-white p-6 shadow-lg rounded-lg">
      <h3 class="text-xl font-semibold mb-4">Card Title</h3>
      <p class="text-gray-600">Card content goes here. Use this as a placeholder text.</p>
    </div>
    <div class="bg-white p-6 shadow-lg rounded-lg">
      <h3 class="text-xl font-semibold mb-4">Card Title</h3>
      <p class="text-gray-600">Card content goes here. Use this as a placeholder text.</p>
    </div>
  </div>
  `,
  },
  {
    id: 2,
    title: "Create a Dark Mode Toggle",
    objective:
      "Create a toggle that switches between light and dark mode using Tailwind's utility classes for colors and backgrounds.",
    codeStarter: `
  <button id="darkModeToggle" class="bg-gray-800 text-white p-2 rounded-md">
    Toggle Dark Mode
  </button>

  <div id="content" class="bg-white text-black p-8">
    <p>Toggle dark mode to see the changes in the background and text color.</p>
  </div>
  `,
    solution: `
  <button id="darkModeToggle" class="bg-gray-800 text-white p-2 rounded-md">
    Toggle Dark Mode
  </button>

  <div id="content" class="bg-white text-black p-8">
    <p>Toggle dark mode to see the changes in the background and text color.</p>
  </div>

  <script>
    const toggleButton = document.getElementById('darkModeToggle');
    const content = document.getElementById('content');

    toggleButton.addEventListener('click', () => {
      content.classList.toggle('bg-gray-900');
      content.classList.toggle('text-white');
    });
  </script>
  `,
  },
  {
    id: 3,
    title: "Create a Flexbox Navigation Bar",
    objective:
      "Create a flexible navigation bar with Tailwind CSS that includes a logo on the left and navigation links on the right.",
    codeStarter: `
  <nav class="flex items-center justify-between p-4 bg-blue-600 text-white">
    <div class="font-bold">Logo</div>
    <div class="space-x-4">
      <a href="#" class="hover:underline">Home</a>
      <a href="#" class="hover:underline">About</a>
      <a href="#" class="hover:underline">Services</a>
      <a href="#" class="hover:underline">Contact</a>
    </div>
  </nav>
  `,
    solution: `
  <nav class="flex items-center justify-between p-4 bg-blue-600 text-white">
    <div class="font-bold">Logo</div>
    <div class="space-x-4">
      <a href="#" class="hover:underline">Home</a>
      <a href="#" class="hover:underline">About</a>
      <a href="#" class="hover:underline">Services</a>
      <a href="#" class="hover:underline">Contact</a>
    </div>
  </nav>
  `,
  },
  {
    id: 4,
    title: "Create a Button with Hover and Active States",
    objective:
      "Create a button that changes its background color on hover and click using Tailwind CSS utility classes.",
    codeStarter: `
  <button class="bg-blue-500 text-white p-4 rounded-lg">
    Hover and Active Button
  </button>
  `,
    solution: `
  <button class="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700 active:bg-blue-900">
    Hover and Active Button
  </button>
  `,
  },
  {
    id: 5,
    title: "Create a Responsive Grid for Images",
    objective:
      "Create a responsive grid layout for images that adjusts the number of columns based on screen size using Tailwind's grid classes.",
    codeStarter: `
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <img src="image1.jpg" class="w-full h-auto rounded-lg" alt="Image 1" />
    <img src="image2.jpg" class="w-full h-auto rounded-lg" alt="Image 2" />
    <img src="image3.jpg" class="w-full h-auto rounded-lg" alt="Image 3" />
    <!-- Add more images as needed -->
  </div>
  `,
    solution: `
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <img src="image1.jpg" class="w-full h-auto rounded-lg" alt="Image 1" />
    <img src="image2.jpg" class="w-full h-auto rounded-lg" alt="Image 2" />
    <img src="image3.jpg" class="w-full h-auto rounded-lg" alt="Image 3" />
    <img src="image4.jpg" class="w-full h-auto rounded-lg" alt="Image 4" />
    <img src="image5.jpg" class="w-full h-auto rounded-lg" alt="Image 5" />
    <img src="image6.jpg" class="w-full h-auto rounded-lg" alt="Image 6" />
  </div>
  `,
  },
  {
    id: 6,
    title: "Create a Footer with Links and Social Icons",
    objective:
      "Design a footer that includes multiple links and social media icons, styled using Tailwind CSS.",
    codeStarter: `
  <footer class="bg-gray-800 text-white p-8">
    <div class="flex justify-between">
      <div>© 2025 Company</div>
      <div class="space-x-6">
        <a href="#" class="text-gray-400 hover:text-white">Facebook</a>
        <a href="#" class="text-gray-400 hover:text-white">Twitter</a>
        <a href="#" class="text-gray-400 hover:text-white">Instagram</a>
      </div>
    </div>
  </footer>
  `,
    solution: `
  <footer class="bg-gray-800 text-white p-8">
    <div class="flex justify-between">
      <div>© 2025 Company</div>
      <div class="space-x-6">
        <a href="#" class="text-gray-400 hover:text-white">Facebook</a>
        <a href="#" class="text-gray-400 hover:text-white">Twitter</a>
        <a href="#" class="text-gray-400 hover:text-white">Instagram</a>
      </div>
    </div>
  </footer>
  `,
  },
  {
    id: 7,
    title: "Create a Modal with Tailwind CSS",
    objective:
      "Create a modal with a close button and a content area using Tailwind CSS. The modal should be hidden by default.",
    codeStarter: `
  <div class="fixed inset-0 bg-black bg-opacity-50 hidden" id="modal">
    <div class="bg-white p-6 rounded-lg mx-auto mt-20 w-1/3">
      <h2 class="text-xl font-bold mb-4">Modal Title</h2>
      <p>Modal content goes here.</p>
      <button id="closeModal" class="mt-4 bg-red-500 text-white p-2 rounded">Close</button>
    </div>
  </div>
  `,
    solution: `
  <div class="fixed inset-0 bg-black bg-opacity-50 hidden" id="modal">
    <div class="bg-white p-6 rounded-lg mx-auto mt-20 w-1/3">
      <h2 class="text-xl font-bold mb-4">Modal Title</h2>
      <p>Modal content goes here.</p>
      <button id="closeModal" class="mt-4 bg-red-500 text-white p-2 rounded">Close</button>
    </div>
  </div>

  <script>
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModal');

    closeModalButton.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  </script>
  `,
  },
  {
    id: 8,
    title: "Create a Card with Hover Effect",
    objective:
      "Create a card that has a shadow effect on hover and grows slightly using Tailwind CSS utilities.",
    codeStarter: `
  <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
    <h3 class="text-xl font-semibold mb-4">Card Title</h3>
    <p class="text-gray-600">Content goes here.</p>
  </div>
  `,
    solution: `
  <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
    <h3 class="text-xl font-semibold mb-4">Card Title</h3>
    <p class="text-gray-600">Content goes here.</p>
  </div>
  `,
  },
  {
    id: 9,
    title: "Create a Loading Spinner",
    objective:
      "Design a loading spinner with Tailwind CSS that is centered on the page.",
    codeStarter: `
  <div class="flex justify-center items-center min-h-screen">
    <div class="border-t-4 border-blue-600 border-solid rounded-full w-16 h-16 animate-spin"></div>
  </div>
  `,
    solution: `
  <div class="flex justify-center items-center min-h-screen">
    <div class="border-t-4 border-blue-600 border-solid rounded-full w-16 h-16 animate-spin"></div>
  </div>
  `,
  },
  {
    id: 10,
    title: "Create a Navbar with Dropdown Menu",
    objective:
      "Create a navigation bar with a dropdown menu using Tailwind CSS. The dropdown should appear when the user hovers over the menu item.",
    codeStarter: `
  <nav class="bg-gray-800 text-white p-4">
    <ul class="flex space-x-4">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li class="relative">
        <a href="#">Services</a>
        <ul class="absolute hidden bg-white text-black p-4 space-y-2">
          <li><a href="#">Web Design</a></li>
          <li><a href="#">SEO</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  `,
    solution: `
  <nav class="bg-gray-800 text-white p-4">
    <ul class="flex space-x-4">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li class="relative group">
        <a href="#">Services</a>
        <ul class="absolute hidden bg-white text-black p-4 space-y-2 group-hover:block">
          <li><a href="#">Web Design</a></li>
          <li><a href="#">SEO</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  `,
  },
]
