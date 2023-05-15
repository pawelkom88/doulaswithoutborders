/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: "var(--heading-font), sans-serif",
      },
      backgroundImage: {
        "hero-pattern": "url('../public/images/a-newborn-child-holded-by-a-doctor.webp')",
      },
      fontSize: {
        heading: "clamp(2rem, 1rem + 2.5vw, 6rem);",
        heading2: "clamp(1.5rem, 0.5rem + 1.3vw, 3rem);",
        heading3: "clamp(1.2rem, 0.3rem + 1.2vw, 2.7rem);",
      },
      maxWidth: {
        readable: "75ch",
      },
      colors: {
        "primary-clr": "var(--primary-clr)",
        "secondary-clr": "var(--secondary-clr)",
        "accent-clr": "var(--accent-clr)",
      },
    },
  },
  plugins: [],
};
