/* eslint-disable @typescript-eslint/no-require-imports */

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    './src/lib/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
    './src/hooks/**/*.{ts,tsx,js,jsx}',
    './src/utils/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.5vw + 0.5rem, 1rem)',
        'fluid-sm': 'clamp(0.875rem, 1vw + 0.5rem, 1.125rem)',
        'fluid-base': 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)',
        'fluid-lg': 'clamp(1.25rem, 2vw + 0.5rem, 1.5rem)',
        'fluid-xl': 'clamp(1.5rem, 2.5vw + 0.5rem, 2rem)',
      },

      // Responsive spacing with fluid approach
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 1vw, 1rem)',
        'fluid-sm': 'clamp(1rem, 2vw, 1.5rem)',
        'fluid-md': 'clamp(1.5rem, 3vw, 2rem)',
        'fluid-lg': 'clamp(2rem, 4vw, 3rem)',
        'fluid-xl': 'clamp(3rem, 5vw, 4rem)',
      },

      // Advanced grid and flex utilities
      gridTemplateColumns: {
        'auto-fit-sm': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fit-md': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-lg': 'repeat(auto-fit, minmax(300px, 1fr))',
      },

      // Responsive container max-widths with fluid approach
      maxWidth: {
        'fluid-container': 'clamp(100%, 90vw, 1440px)',
      },

      // Enhanced gap utilities
      gap: {
        'fluid-sm': 'clamp(0.5rem, 2vw, 1rem)',
        'fluid-md': 'clamp(1rem, 3vw, 1.5rem)',
        'fluid-lg': 'clamp(1.5rem, 4vw, 2rem)',
      }
    },

    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    function({ addUtilities }) {
      const responsiveContainer = {
        '.responsive-container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'max(1rem, 4vw)',
          paddingRight: 'max(1rem, 4vw)',
          maxWidth: 'clamp(100%, 90vw, 1440px)',
        }
      };
      addUtilities(responsiveContainer);
    }
  ]
}
