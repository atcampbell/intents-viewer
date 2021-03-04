import './App.css'
import Layout from './components/Layout'
import { ThemeProvider } from 'styled-components'

// const data = JSON.parse(intents);
// TODDO move this theme somewhere

// scheme 1
// 1d3557
// 457b9d
// a8dadc
// f1faee
// e63946

// scheme 2
// 293241 darkblue
// 3d5a80 darkerblue
// 98c1d9 midblue
// e0fbfc lightblue
// ee6c4d red

// const theme = {
//   primary: "palevioletred",
//   colors: {
//     dark: "#293241",
//     darkBlue: "#3d5a80",
//     midBlue: "#98c1d9",
//     lightBlue: "#e0fbfc",
//     red: "ee6c4d",
//   },
// };

const theme = {
  primary: 'palevioletred',
  colors: {
    dark: '#1d3557',
    darkBlue: '#457b9d',
    midBlue: '#a8dadc',
    lightBlue: '#f1faee',
    redSU: 'e63946',
    textPrimary: '#2b2d42',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  )
}

export default App
