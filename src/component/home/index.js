
import React from 'react';
import { Link } from 'react-router-dom';
import Dispatch from '../../dispatch';

import Common from '../common/common';
import { List, Avatar, Icon} from 'antd';
import { stringify } from 'querystring';


class Index extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const listData = [];
    for (let i = 1; i < 50; i++) {
      listData.push({
        id:`${i}`,
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }

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
                dataSource={listData}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<Link to={"/details/"+item.id}>{item.title}</Link>}
                      description={item.description}
                      
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </div>
            <div className="side-r fr">
              <div className="infos">
                <Avatar size={100} src="../../assets/images/user.jpg" className="avatarer"/>
                <span className="name">cansolve</span>
              </div>
              <div className="about">
                <p>小生不才，多指教！</p>
                <p>微信公众号：【 码上关注 】</p>
                <p>分享 WEB 全栈开发等相关的技术文章，热点资源，记录成长路上的一点一滴！</p>
              </div>
              <div className="connect">
                <a href="https://github.com/cansolve"><Icon type="github"/></a>
                <a href="https://github.com/cansolve"><Icon type="weibo-circle"/></a>
                <a href="https://github.com/cansolve"><Icon type="wechat"/></a>
                <a href="https://github.com/cansolve"><Icon type="qq"/></a>
              </div>
            </div>
          </div>
        
      </Common>
    )
  }
}

export default Dispatch(Index);