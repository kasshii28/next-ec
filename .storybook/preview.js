import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../src/themes"
import * as NextImage from "next/image"

export const parameters = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decoratoes:[
      (story) => (
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          {story()}
        </ThemeProvider>
      )
    ]
  },
};

const GlobalStyle = createGlobalStyle`
html,
body,
textarea{
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
*{
  box-sizing: border-box;
}
a{
  text-decoration: none;
  transition: .25s;
  color: #000000;
}
`

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default',{
  configurable: true,
  value: (props) => typeof props.src === 'string' ?(
    <OriginalNextImage{...props} unoptimized blurDateURL={props.src}/>
  ): (
    <OriginalNextImage{...props} unoptimized/>
  ),
})

export default preview;
