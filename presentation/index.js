// Import React
import React from "react";
import { Card, Icon, Tag, Timeline } from "antd";
import PropTypes from "prop-types";

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
  rightCard: { width: 500 },
  timeline: { textAlign: "left", marginTop: 24, color: "#03A9FC" },
  timelineItem: { fontSize: 16 }
};

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

CardTitle.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string
};

class CardContent extends React.Component {
  static defaultProps = {
    fontSize: "14px"
  };

  render() {
    return (
      <Text margin="10px 0 0" textColor="tertiary" textSize={this.props.fontSize}>
        {this.props.content}
      </Text>
    );
  }
}

CardContent.propTypes = {
  content: PropTypes.string,
  fontSize: PropTypes.string
};

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
              <Timeline
                style= {style.timeline}
              >
                <Timeline.Item style={style.timelineItem}>
                  {`Use React and Spring Boot to design operation tool,
                  which can manage and control the environment`}
                </Timeline.Item>
              </Timeline>
            </Card>
            <Card title={<CardTitle first="Intern Test Development Engineer" second="Tecent" />}
              bordered={false} style={style.rightCard}
            >
              <CardContent content="Mobile QQ Zone, Protocol Resolver Tool" />
              <CardContent content="2016.8 -- 2014.9" />
              <Timeline
                style= {style.timeline}
              >
                <Timeline.Item style={style.timelineItem}>
                  {`Develop the terminal protocol package tampering tool using Java,
                  resolve the data packet to the protocol`}
                </Timeline.Item>
              </Timeline>
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
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Project Experience</Heading>
          <div style={{ display: "flex", alignItems: "center", fontSize: 32, fontFamily: "Helvetica" }} >
            <Card title={<CardTitle first="Moving target detection" second="through wall based on Wi-Fi signal" />}
              bordered={false} style={style.leftCard}
            >
              <div>
                <Timeline
                  style= {style.timeline}
                >
                  <Timeline.Item style={style.timelineItem}>
                    leverage Wi-Fi signals to detect the moving target behind the wall
                  </Timeline.Item>
                  <Timeline.Item style={style.timelineItem}>
                    Utilize software defined radio equipment and Python to release the detection system
                  </Timeline.Item>
                  <Timeline.Item style={style.timelineItem}>
                    Signal processing and data analysis of the received signal by Matlab and Python
                  </Timeline.Item>
                </Timeline>
              </div>
            </Card>
            <Card title={<CardTitle first="Phonemeter" second="Bringing EMF Detection to Smartphones" />}
              bordered={false} style={{ ...style.rightCard, height: "380px" }}
            >
              <Timeline
                style= {style.timeline}
              >
                <Timeline.Item style={style.timelineItem}>
                  {`Leverage Java to design an android App
                  to release communication between phone headset and external device`}
                </Timeline.Item>
              </Timeline>
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
            <Tag color="green" >Spring Boot</Tag>
            <Tag color="cyan">React</Tag>
            <Tag color="blue" >Java</Tag>
            <Tag color="blue">Python</Tag>
            <Tag color="black">Linux</Tag>
            <br />
            <span><Icon type="heart" /> </span>
            <Tag color="red">Git</Tag>
            <Tag color="purple">Kotlin</Tag>
            <Tag color="purple">Shell</Tag>
            <Tag color="purple">PostgreSQL</Tag>
            <Tag color="purple">Quartz</Tag>
            <br />
            <span><Icon type="html5" /> </span>
            <Tag color="cyan">Redux</Tag>
            <Tag color="purple">Ant Design</Tag>
            <Tag color="purple">React Sagas</Tag>
            <Tag color="purple">Material UI</Tag>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondar" caps>Publications</Heading>
          <Timeline
            style= {style.timeline}
          >
            <Timeline.Item style={style.timelineItem}>
              <Link href="https://dl.acm.org/citation.cfm?id=2996537&dl=ACM&coll=DL&CFID=990886953&CFTOKEN=63538975" target="_blank" >
                {`Zhihao Zhang, Chongrong Fang, Yuanchao Shu, Zhiguo Shi, Jiming Chen. Demo Abstract: FindIt: 
                Real-time Through-Wall Human Motion Detection Using Narrow Band SDR. SenSys 2016.`}
              </Link>
            </Timeline.Item>
            <Timeline.Item style={style.timelineItem}>
              <Text textSize="16px" textColor="tertiary">
                {`Yang Zhou, Yuanchao Shu, Zhihao Zhang, Peng Cheng, Jiming Chen, 
                Phonemeter: Bringing EMF Detection to Smartphones, 
                IEEE Communications Society 2014 Student Competition 
                “Communications technology changing the world” Honorary certificate of appreciation`}
              </Text>
            </Timeline.Item>
            <Timeline.Item style={style.timelineItem}>
              <Link href="http://www.microwavejournal.com/articles/22406-a-wide-stopband-lowpass-filter-with-three-transmission-zeros?v=preview" target="_blank" >
                {`Zhang Z H, Li L, Yang L L, et al. A Wide Stopband Lowpass Filter with Three Transmission Zeros[J]. 
                Microwave Journal, 2014, 57(6).`}
              </Link>
            </Timeline.Item>
            <Timeline.Item style={style.timelineItem}>
              <Link href="http://ieeexplore.ieee.org/document/6495359/" target="_blank" >
                {`Zhang Z H, Li L, Wu Q H, et al. A Stopband-Expanded Low-Pass Filter with Five Transmission Zeros[C]
                //Information Science and Engineering (ISISE), 2012 International Symposium on. IEEE, 2012: 335-338.`}
              </Link>
            </Timeline.Item>
          </Timeline>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondar" caps>Publications</Heading>
          <List>
            <ListItem textSize="28px">
              2016 Merit Student, Excellent graduate students
            </ListItem>
            <ListItem textSize="28px">
              2015 Zhejiang University “Five” teaching team construction scholarship
            </ListItem>
            <ListItem textSize="28px">
              The first prize of the Challenge Cup, Zhejiang Province 2013
            </ListItem>
            <ListItem textSize="28px">
              Jinfuchun innovation and entrepreneurship scholarship, 2013
            </ListItem>
            <ListItem textSize="28px">
              First-class Scholarship, 2012 2011
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Thank you for viewing!</Quote>
            <Cite>Zhihao Zhang</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
