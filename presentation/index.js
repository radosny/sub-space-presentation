// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Magic,
  Fill,
  ListItem,
  Link,
  CodePane,
  Image,
  List,
  Quote,
  Slide,
  Text,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  olxLogo: require("../assets/olx-group-logo-dark-23358.png"),
  independence: require("../assets/independence.jpg"),
  olxapp: require("../assets/m.olx.pl_(iPhone 6_7_8 Plus).png"),
  lerna: require("../assets/lerna.png"),
  reactRedux: require("../assets/React-Redux-demo.jpg"),
  subStores: require("../assets/Sub Stores communication.jpg")
};
// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022", //black
    // tertiary: "#03A9FC", //blue
    tertiary: "#b2fba9", //green
    quarternary: "#CECECE" // gray
  },
  {
    primary: "Open Sans Condensed",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Redux subapp
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={2} fit bold>
            as a solution for dealing with large scale/team apps
          </Text>
          <Text fontSize={6} textColor="quarternary" margin="200px 0 0 0">
            Radosław Małecki
          </Text>
          <Text fontSize={6} textColor="tertiary" margin="50px 0 0 0">
          @radoslawmalecki
          </Text>
          <div
            style={{
              margin: "70px 0 0 0",
              padding: "10px",
              background: "#b2fba9"
            }}
          >
            <Image height="60px" src={images.olxLogo.replace("/", "")} />
          </div>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} margin="0 0 50px" textColor="primary" caps>
            concept
          </Heading>
          <CodePane
            lang="jsx"
            theme="dark"
            textSize={18}
            source={`
import React, { Component } from 'react';
import SubApp from './subapp';

class BigApp extends Component {
  render() {
    return (
      <div>
        <SubApp />
        <SubApp />
        <SubApp />
      </div>
    )
  }
}
`}
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Assumptions
          </Heading>
        </Slide>
        <Magic>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary" caps>
              subapps are
            </Heading>
            <Heading size={2} textColor="primary" caps>
              independent
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary" caps>
              won’t share
            </Heading>
            <Heading size={2} textColor="primary" caps>
              data or actions
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary" caps>
              won’t see or
            </Heading>
            <Heading size={2} textColor="primary" caps>
              communicate with
            </Heading>
            <Heading size={2} textColor="primary" caps>
              each other
            </Heading>
          </Slide>
        </Magic>
        <Slide bgColor="tertiary">
          <Heading size={2} textColor="secondary" caps>
            Best for:
          </Heading>
        </Slide>
        <Magic>
          <Slide bgColor="tertiary">
            <Heading size={4} textColor="secondary">
              For enterprise software that groups
            </Heading>
            <Heading size={4} textColor="secondary">
              disparate tools into a unified package
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={4} textColor="secondary">
              Useful for large teams that
            </Heading>
            <Heading size={4} textColor="secondary">
            are divided by product
            </Heading>
            <Heading size={4} textColor="secondary">
            or feature verticals.
            </Heading>
          </Slide>
        </Magic>
        <Slide bgColor="secondary">
          <Heading size={3} margin="0 0 50px" textColor="primary" caps>
            concept - details
          </Heading>
          <CodePane
            lang="jsx"
            theme="dark"
            textSize={18}
            source={`
import React, { Component } from 'react';
import SubApp from './subapp';

class BigApp extends Component {
  render() {
    return (
      <div>
        <SubApp />
        <SubApp />
        <SubApp />
      </div>
    )
  }
}
`}
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} margin="0 0 50px" textColor="primary" caps>
            concept - details
          </Heading>
          <CodePane
            lang="jsx"
            theme="dark"
            textSize={18}
            source={`import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducers'
import App from './App'

const store = createStore(reducer);
const SubApp = () => (
   <Provider store={store}>
       <App />
   </Provider>
);
`}
          />
          <br />
          <Appear>
            <CodePane
              lang="jsx"
              theme="dark"
              textSize={18}
              source={`import React, { Component } from 'react';
import { connect } from 'redux'

class App extends Component { ... }
export default connect(mapStateToProps)(App)
`}
            />
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} textColor="primary" caps>
            Case study
          </Heading>
          <Heading size={4} margin="0 0 30px" textColor={"tertiary"}>
            new mobile web OLX
          </Heading>
          <Image fit src={images.olxapp.replace("/", "")} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} textColor="primary" caps>
            simple classifieds app at the glance
          </Heading>
          <Appear order={1}>
            <Heading size={5} textColor="primary">
              vs.
            </Heading>
          </Appear>
          <Appear order={2}>
            <Heading size={4} textColor="tertiary" caps>
              complicated business logic behind the scenes
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary" textFont="secondary">
            5 independent teams
          </Heading>
          <Appear order={1}>
            <Heading size={5} textColor="primary">
              in
            </Heading>
          </Appear>
          <Appear order={2}>
            <Heading size={2} textColor="tertiary" textFont="secondary">
              2 countries
            </Heading>
          </Appear>
        </Slide>
        <Magic>
          <Slide bgColor="secondary">
            <Heading size={2} textFont="secondary" textColor="primary">
              1 codebase
            </Heading>
            <Heading size={4} textFont="secondary" textColor="tertiary">
              for 7 countries
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textFont="secondary" textColor="primary">
              1 codebase
            </Heading>
            <Heading size={4} textFont="secondary" textColor="tertiary">
              for desktop & mobile
            </Heading>
          </Slide>
        </Magic>
        <Slide bgColor="secondary">
          <Heading size={2} margin="0 0 30px" textColor={"tertiary"}>
            {"new "}
            <span
              style={{
                color: "white",
                textDecoration: "line-through"
              }}
            >
              mobile
            </span>
            {" web OLX"}
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary" textFont="secondary">
            Project structure
          </Heading>
          <Appear order={1}>
            <Heading size={4} textFont="secondary" textColor="tertiary">
              mono vs. multiple
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} textFont="secondary" textColor="tertiary">
            multiple repo
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">
                <span
                  style={{
                    verticalAlign: "middle",
                    display: "inline-block",
                    lineHeight: 1.2
                  }}
                >
                  🤨 working multiple repos at the same time<br /> can be
                  difficult to track
                </span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                <span>🤨 local setup is not "developer friendly"</span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                <span>😍 really useful for code sharing</span>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading
            size={4}
            textFont="secondary"
            textColor="tertiary"
            textFont="secondary"
          >
            Multi-package repo (monorepo)
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">
                <span
                  style={{
                    verticalAlign: "middle",
                    display: "inline-block",
                    lineHeight: 1.2
                  }}
                >
                  😍 single lint, build, test, release process
                </span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                <span>😍 easy to track changes & issues</span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                <span>😍 easy to setup local development</span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                <span>🤨 repo has bigger size</span>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading
            size={3}
            textFont="secondary"
            textColor="tertiary"
            margin="0 0 30px"
            textFont="secondary"
          >
            Lerna - solution for multi-package repo
          </Heading>
          <Appear order={1}>
            <Heading size={5} textColor="primary">
              each lerna package version can be independent or the same for all
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} margin="0 0 50px" textColor="primary" caps>
            Lerna - setup
          </Heading>
          <Appear>
            <CodePane
              lang="js"
              theme="dark"
              margin="0 0 50px"
              textSize={18}
              source={`> lerna init // creates lerna repo
> cd packages; mkdir core; cd core; yarn init // creates new package
> lerna add <package> // adds package into all/specified module
> lerna bootstrap // installs all dependencies & links cross-deps
> lerna run [script] // runs npm script in each package
`}
            />
          </Appear>
          <Appear>
            <Link
              href="https://github.com/lerna/lerna#readme"
              textColor="quarternary"
            >
              https://github.com/lerna/lerna#readme
            </Link>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} margin="0 0 50px" textColor="primary" caps>
            Lerna - example
          </Heading>
          <Image height="600px" src={images.lerna.replace("/", "")} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} margin="0 0 50px" textColor="primary" caps>
            Demo time
          </Heading>
        </Slide>
        <Slide bgImage={images.reactRedux.replace("/", "")} bgPosition="50% 50%" bgRepeat="no-repeat" bgSize="contain"/>
        <Slide bgColor="secondary">
          <Heading size={1} margin="0 0 50px" textColor="primary">
            What is missing?
          </Heading>
        </Slide>
        <Slide bgImage={images.subStores.replace("/", "")} bgPosition="50% 50%" bgRepeat="no-repeat" bgSize="contain"/>
        <Slide bgColor="secondary">
          <Heading size={2} margin="0 0 50px" textColor="primary">
            Why?!
          </Heading>
        </Slide>
        <Magic>
          <Slide bgColor="secondary">
            <Heading size={4} textFont="secondary" textColor="primary">
              Initial app size
            </Heading>
            <Heading size={4} textFont="secondary" textColor="primary">
              needs to be
            </Heading>
            <Heading size={4} textFont="secondary" textColor="primary">
              as minimal as possible
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={4} textFont="secondary" textColor="primary">
              Reduce coupling
            </Heading>
            <Heading size={4} textFont="secondary" textColor="primary">
              between modules
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={4} textFont="secondary" textColor="primary">
              Changes in each module
            </Heading>
            <Heading size={4} textFont="secondary" textColor="primary">
              are more safe
            </Heading>
          </Slide>
        </Magic>
        <Slide bgColor="secondary">
          <Heading size={3} margin="0 0 50px" textColor="primary">
            Last but not least
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Independence is happiness.</Quote>
            <Cite>Susan B. Anthony</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} margin="0 0 50px" textColor="primary">
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
