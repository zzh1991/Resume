// Import React
import React from "react";
import { Card, Icon, Tag } from "antd";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const style = {
  leftCard: { width: 500, marginRight: 24 },
  rightCard: { width: 500 }
}

class CardTitle extends React.Component {
  render() {
    return (
      <div>
        <Text margin="10px 0 0" textColor="tertiary" textSize="24px" bold>
          {this.props.first}
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" textSize="20px" bold>
          {this.props.second}
        </Text>
      </div>
    );
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <Text margin="10px 0 0" textColor="tertiary" textSize="16px">
        {this.props.content}
      </Text>
    );
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Curriculum Vitae
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize="56px" bold>
            Zhihao Zhang
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" bold>
            Java Development Engineer
          </Text>
          <div style={{ float: "right", fontSize: 20, marginTop: 16, color: "#03A9FC" }} >
            <Text textSize="20px" textColor="tertiary" >
              <Icon type="environment" /> Shanghai, China 
            </Text>
            <Text textSize="20px" textColor="tertiary" ><Icon type="phone" /> (+86) 18768127659</Text>
            <Link href="mailto:zhihaozhangv5@gmail.com" >
              <Icon type="mail" /> zhihaozhangv5@gmail.com
            </Link>
            <br />
            <Link href="https://zzh1991.github.io/" target="_blank" >
              <Icon type="github" /> https://zzh1991.github.io
            </Link>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Work Experience</Heading>
          <div style={{ display: "flex", alignItems: "center", fontSize: 32, fontFamily: "Helvetica" }} >
            <Card title={<CardTitle first="Software Development Engineer" second="Works Application" />}
              bordered={false} style={style.leftCard}
            >
              <CardContent content="SRE, Operation Tools" />
              <CardContent content="2017.4 -- now" />
            </Card>
            <Card title={<CardTitle first="Intern Test Development Engineering" second="Tecent" />}
              bordered={false} style={style.rightCard}
            >
              <CardContent content="Mobile QQ Zone, Protocol Resolver Tool" />
              <CardContent content="2016.8 -- 2014.9" />
            </Card>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Education</Heading>
          <div style={{ display: "flex", alignItems: "center", fontSize: 32, fontFamily: "Helvetica" }} >
            <Card title={<CardTitle first="Master of Science" second="Zhejiang University" />}
              bordered={false} style={style.leftCard}
            >
              <CardContent content="Control Science and Engineering" />
              <CardContent content="State Key Laboratory of Industrial Control Technology" />
              <CardContent content="Wireless Sensor Network and Control Research Group" />
              <CardContent content="2014.9 -- 2017.3" />
            </Card>
            <Card title={<CardTitle first="Bacherlor" second="Zhejiang Sci-Tech University" />}
              bordered={false} style={style.rightCard}
            >
              <CardContent content="Communication Engineering" />
              <CardContent content="Qixin College" />
              <CardContent content="Telecom Experiment Class" />
              <CardContent content="2010.9 - 2014.6" />
            </Card>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondar" caps>Skills</Heading>
          <List>
            <ListItem textSize="32px">
              Familiar with Java, data structures and algorithms
            </ListItem>
            <ListItem textSize="32px">
              Web Development: React and Spring Boot
            </ListItem>
            <ListItem textSize="32px">Familiar with Python, Linux, Kotlin</ListItem>
            <ListItem textSize="32px">React and Java eco systems</ListItem>
          </List>
          <div>
            <span><Icon type="star" /> </span>
            <Tag color="green" >{'Spring Boot'}</Tag>
            <Tag color="cyan">{'React'}</Tag>
            <Tag color="blue" >{'Java'}</Tag>
            <Tag color="blue">{'Python'}</Tag>
            <Tag color="black">{'Linux'}</Tag>
            <br />
            <span><Icon type="heart" /> </span>
            <Tag color="red">{'Git'}</Tag>
            <Tag color="purple">{'Kotlin'}</Tag>
            <Tag color="purple">{'Shell'}</Tag>
            <Tag color="purple">{'PostgreSQL'}</Tag>
            <Tag color="purple">{'Quartz'}</Tag>
            <br />
            <span><Icon type="html5" /> </span>
            <Tag color="cyan">{'Redux'}</Tag>
            <Tag color="purple">{'Ant Design'}</Tag>
            <Tag color="purple">{'React Sagas'}</Tag>
            <Tag color="purple">{'Material UI'}</Tag>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
