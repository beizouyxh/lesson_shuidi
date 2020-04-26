import styled,{ createGlobalStyle} from 'styled-components'
import Stats from '../components/stats'
import CountrySelector from '../components/CountrySelector'
// css in js  js 代码里写css
// jsx   html in js  ts react   babel preset-react
// 首字母大写
const Wrapper = styled.p`
  color: blue;
`

const GlobalStyle =createGlobalStyle`
html{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
export default function IndexPage() {
  return (
      
    <div>Next , ssr in react!
        <createGlobalStyle/>
      {/* <Wrapper>
        Hello World
      </Wrapper> */}

      <Stats url="https://covid19.mathdro.id/api">></Stats>
      <CountrySelector></CountrySelector>
    </div>
  )
}