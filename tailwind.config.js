/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Gray-fondo': '#343333', // Reemplaza '#5a67d8' con tu color hexadecimal deseado
        'Black-fondo': '#1D1B1B',
        'Gray-letrasTitulo': '#c9c5ca',
        'Gray-letrasTexto': '#bbbebc'

      },

      backgroundImage: {
      'image1': 'url("/GraphSVG.svg")',
      'image2': 'url("/GraphSVG.svg")',
      'image3': 'url("/GraphSVG.svg")',
      'image4': 'url("/GraphSVG.svg")',
      'image5': 'url("/GraphSVG.svg")',
      'image6': 'url("/GraphSVG.svg")',
      'image7': 'url("/GraphSVG.svg")',
      'image8': 'url("/GraphSVG.svg")',
      'image9': 'url("/GraphSVG.svg")',
      'image10': 'url("/GraphSVG.svg")',
      'image11': 'url("/GraphSVG.svg")',
      'image12': 'url("/GraphSVG.svg")',
      'image13': 'url("/GraphSVG.svg")',
      'image14': 'url("/GraphSVG.svg")',
      'image15': 'url("/GraphSVG.svg")',
      'image16': 'url("/GraphSVG.svg")',
      'image17': 'url("/GraphSVG.svg")',
      'image18': 'url("/GraphSVG.svg")',
      'imageBorderBottom': 'url("src/assets/components/AboutMe/LineMargintb.png")',
      },


    }
  },
  plugins: [],
    safelist: [
    'bg-image1',
    'bg-image2',
    'bg-image3',
    'bg-image4',
    'bg-image5',
    'bg-image6',
    'bg-image7',
    'bg-image8',
    'bg-image9',
    'bg-image10',
    'bg-image11',
    'bg-image12',
    'bg-image13',
    'bg-image14',
    'bg-image15',
    'bg-image16',
    'bg-image17',
    'bg-image18',
  ],
}
