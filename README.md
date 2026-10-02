This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## AI Usage

AI tools were used during this assignment as a development and learning aid. I remained responsible for the final implementation, technical decisions, and verification of the code.

### Tools Used

- **ChatGPT** — used for technical discussion, architecture review, debugging ideas, and validating implementation approaches.
- **Cursor / Codex** — used for code assistance, refactoring suggestions, documentation, and UI improvements.

### Where AI Was Used

#### Simulation

AI was used to discuss the problem of continuously adding DOM elements with `setInterval` and how uncontrolled DOM growth could eventually cause performance and memory problems.

The main suggestions were:

- Keep data in React state instead of storing JSX elements.
- Clean up `setInterval` when the component unmounts.
- Prevent unbounded DOM growth by limiting the number of active elements.
- Remove expired items after a defined lifetime.
- Consider alternatives such as virtualization or `requestAnimationFrame` for more demanding simulations.

The final implementation uses a bounded list of active items with a maximum item count and item lifetime.

#### Documentation

AI was used to help structure and review the project documentation, including:

- `docs/README.md`
- `docs/architecture.md`
- `docs/simulation.md`
- `docs/pages.md`

The documentation was based on the actual project structure and implementation rather than generated assumptions.

#### UI / Styling

AI was used to suggest improvements to the Simulation page UI, including:

- Responsive layout
- Better spacing and visual hierarchy
- Card-based presentation
- Loading/skeleton states where appropriate
- Reusing existing project components and styling conventions

The existing application logic and simulation behavior were intentionally kept unchanged.

### AI Output

The AI primarily provided:

- Implementation suggestions
- Refactoring ideas
- Documentation structure
- UI/UX suggestions
- Explanations of React lifecycle and DOM performance considerations

For example, one of the main suggestions was to avoid allowing the number of DOM nodes to grow indefinitely and instead maintain a bounded set of active simulation items.

### How I Changed the AI Suggestions

I did not treat AI-generated code as final code.

I reviewed the suggestions against the actual project requirements and changed or rejected suggestions when they did not fit the assignment.

In particular:

- I kept the simulation state data-based rather than storing JSX elements.
- I added interval cleanup through `clearInterval`.
- I limited the number of active rendered items to prevent unbounded DOM growth.
- I kept the implementation simple rather than introducing unnecessary abstractions.
- I avoided adding dependencies when the existing project structure was sufficient.
- UI changes were kept separate from the simulation logic.

Some AI suggestions were intentionally not implemented when they were unnecessary for the current scale of the assignment, such as introducing more complex rendering techniques or additional libraries.

### What I Wrote Myself

I was responsible for:

- Understanding the assignment requirements.
- Making the final architecture and implementation decisions.
- Reviewing and modifying AI-generated suggestions.
- Verifying the behavior of the simulation.
- Deciding how the DOM growth problem should be handled.
- Ensuring the final implementation matches the actual project requirements.
- Testing and validating the final code.

### Honest Assessment

AI was useful for exploring different solutions quickly, explaining unfamiliar concepts, reviewing implementation ideas, and improving documentation.

However, AI suggestions were not always directly applicable to the project. Some suggestions were more complex than necessary or assumed requirements that were not part of the assignment.

The most useful aspect of AI was using it as a second opinion and learning tool rather than treating its output as authoritative.

I reviewed the generated suggestions and made the final implementation decisions myself.
