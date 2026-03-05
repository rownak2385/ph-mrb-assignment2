# Customer Support Zone

A React-based ticket dashboard where users can view customer tickets, add tasks to an active status panel, and complete tasks with real-time count updates.


## Features

- Figma-matched static layout (Navbar, Banner, Main, Footer)
- Ticket list rendered from local JSON data
- Add tickets to Task Status section
- Complete task flow:
  - Removes from active task list
  - Adds to resolved list
  - Removes from customer ticket list
  - Updates In-Progress and Resolved counts
- React-Toastify notifications (instead of alerts)
- Responsive design for desktop and mobile


## Tech Stack

- React.js
- JavaScript (ES6+)
- CSS
- Vite
- React-Toastify


## React Questions (Assignment)

### 1) What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension that lets us write HTML-like UI code inside JavaScript. It is used because it makes React components easier to read and write, and React converts JSX into regular JavaScript (`React.createElement`) under the hood.

### 2) What is the difference between State and Props?
- Props are read-only inputs passed from parent to child components.
- State is internal, mutable data managed by a component (or lifted to a parent).
- Props help with component communication; state controls dynamic UI behavior.

### 3) What is the `useState` hook, and how does it work?
`useState` is a React hook used to add state to function components.
It returns:
- the current state value
- a setter function to update it

When the setter is called, React re-renders the component with the updated value.

### 4) How can you share state between components in React?
The common approach is lifting state up to the nearest common parent and passing data/actions down via props. For larger apps, state can also be shared using Context API or state libraries.

### 5) How is event handling done in React?
React handles events using camelCase props like `onClick`, `onChange`, and `onSubmit`. You pass a function as the event handler. React uses a synthetic event system to keep behavior consistent across browsers.
