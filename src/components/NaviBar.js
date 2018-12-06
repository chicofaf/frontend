import React from 'react';

import '../css/NaviBar.css';

import { Row, Col, Button } from 'antd';
import ModalTweet from '../ModalTweet';

export const NaviBar = props => {
    return (
        <Row className='naviBar'>
            <Col span={7}>
                <div className="avatarProfile">
                    <img src={"https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_400x400.jpg"} className="imageAvatar" alt="avatar" />
                </div>
            </Col>
            <Col span={1}>
                <a className="ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="tweets" href="/Twitter" data-original-title="8,273 Tweets">
                    <span class="ProfileNav-label" aria-hidden="true">Tweets</span>
                    <span class="ProfileNav-value" data-count="8273" data-is-compact="false">{props.contador_tweets}
                    </span>
                </a>
            </Col>
            <Col span={1}>
                <div style={{textAlign:"center"}} class="ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="tweets" href="/Twitter" data-original-title="8,273 Tweets">
                    <span class="ProfileNav-label" aria-hidden="true">Following</span>
                    <span class="ProfileNav-value"  data-count="8273" data-is-compact="false">{props.contador_following}
                    </span>
                </div>
            </Col>
            <Col span={1}>
                <div style={{textAlign:"center"}} class="ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="tweets" href="/Twitter" data-original-title="8,273 Tweets">
                    <span class="ProfileNav-label" aria-hidden="true">Followers</span>
                    <span class="ProfileNav-value" data-count="8273" data-is-compact="false">{props.contador_followers}
                    </span>
                </div>
            </Col>
            <Col span={1}>
                <div style={{textAlign:"center"}} class="ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="tweets" href="/Twitter" data-original-title="8,273 Tweets">
                    <span class="ProfileNav-label" aria-hidden="true">Likes</span>
                    <span class="ProfileNav-value" data-count="8273" data-is-compact="false">{props.contador_likes}
                    </span>
                </div>
            </Col>
            <Col span={1}>
                <div  style={{textAlign:"center"}} class="ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="tweets" href="/Twitter" data-original-title="8,273 Tweets">
                    <span class="ProfileNav-label" aria-hidden="true">Lists</span>
                    <span class="ProfileNav-value" data-count="8273" data-is-compact="false">{props.contador_lists}
                    </span>
                </div>
            </Col>
            <Col span={1}>
                <div style={{textAlign:"center"}} class="ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="tweets" href="/Twitter" data-original-title="8,273 Tweets">
                    <span class="ProfileNav-label" aria-hidden="true">Moments</span>
                    <span class="ProfileNav-value" data-count="8273" data-is-compact="false">{props.contador_moments}
                    </span>
                </div>
            </Col>
            <Col span={2} style={{marginLeft:"40px"}}>
                <ModalTweet/>
            </Col>
        </Row>
    );
}