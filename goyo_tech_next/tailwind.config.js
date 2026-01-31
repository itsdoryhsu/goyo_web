/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9980ff',
        'primary-dark': '#7a66cc',
        secondary: '#6366f1',
        accent: '#ffcdf2',
        'background-light': '#ffffff',
        'background-dark': '#130f23',
        'background-soft': '#fafafa',
        'text-main': '#100c1d',
        'text-muted': '#6b7280',
      },
      fontFamily: {
        'display': ['Chiron Hei HK', 'Inter', 'sans-serif'],
        'body': ['Chiron Hei HK', 'Inter', 'sans-serif'],
        'sans': ['Chiron Hei HK', 'Inter', 'system-ui', 'sans-serif'],
        'chinese': ['Chiron Hei HK', 'sans-serif'],
        'tc': ['Chiron Hei HK', 'sans-serif']
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(at 27% 37%, #ffcdf2 0px, transparent 50%), radial-gradient(at 97% 21%, #e0e7ff 0px, transparent 50%), radial-gradient(at 52% 99%, #f3e8ff 0px, transparent 50%)',
      },
      boxShadow: {
        'primary': '0 10px 25px -5px rgba(153, 128, 255, 0.25)',
        'xl-primary': '0 20px 35px -15px rgba(153, 128, 255, 0.35)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}