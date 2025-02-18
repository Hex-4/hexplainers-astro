/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@catppuccin/tailwindcss")({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      prefix: false,
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "mocha",
    }),
  ],
};
