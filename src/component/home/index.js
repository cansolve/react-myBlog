
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dispatch from '../../dispatch';

import Common from '../common/common';
import { List, Avatar, Icon, Card } from 'antd';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      listData : []
    }
  }
  componentWillMount() {
    // let _this = this;
    // let data = {"key":"841757192","id":"1147906982"};
    // axios.post('https://api.bzqll.com/music/tencent/songList?'+data)
    //   .then(function (response) {
    //     console.log(response)
    //     let val =response.data.songs;
    //     _this.setState({
    //       listData : val
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
  render() {

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    return (
      <Common {...this.props} >
        <div>
          <div className="side-l fl">
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 5,
              }}
              dataSource={this.state.listData}
              renderItem={item => (
                <List.Item
                  key={item.csentence}
                  actions={[<IconText type="star-o" text={item.integer} />, <IconText type="like-o" text={item.float} />, <IconText type="message" text={item.now} />]}
                  extra={<img width={180} alt="logo" src={item.image} />}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<Link to={"/details/" + item.id}>{item.csentence}</Link>}

                  />
                  {item.cparagraph}
                </List.Item>
              )}
            />
          </div>
          <div className="side-r fr">
            <div className="infos">
              <Avatar size={100} src="../../assets/images/user.jpg" className="avatarer" />
              <span className="name">cansolve</span>
            </div>
            <div className="about">
              <p>小生不才，多指教！</p>
              <p>微信公众号：【 码上关注 】</p>
              <p>分享 WEB 全栈开发等相关的技术文章，热点资源，记录成长路上的一点一滴！</p>
            </div>
            <div className="connect">
              <a href="https://github.com/cansolve"><Icon type="github" /></a>
              <a href="https://github.com/cansolve"><Icon type="weibo-circle" /></a>
              <a href="https://github.com/cansolve"><Icon type="wechat" /></a>
              <a href="https://github.com/cansolve"><Icon type="qq" /></a>
            </div>
            <Card
              title="Card title"
              style={{ width: 250 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </div>

      </Common>
    )
  }
}

export default Dispatch(Index);