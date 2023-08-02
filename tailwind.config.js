/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    container: {
      center: true,
    },
    

    screens:{

     sm:'480px',
     md:'768px',
     lg:'1024px',
     xl:'1540px',

    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily:{

        sans:['Josefin Sans', 'sans-serif'],
        alata:['Alata']

      },

      colors:{

     },
    },
  },
  plugins: [],
}


