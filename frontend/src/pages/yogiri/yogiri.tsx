import React from 'react';

import './yogiri.css';

export interface YogiriPageProps {
}

export interface YogiriPageState {
}

export default class YogiriPage extends React.Component<YogiriPageProps, YogiriPageState> {

    render() {
        return (
            <div>
                <p>
                大姐头, there’s too many memories for us to recount and find the words to thank you for
                memories. From your <a href="https://www.bilibili.com/video/av67610922">cover of Cynic</a> you
                mixed yourself, all the way to your <a href="https://www.bilibili.com/video/BV1Hk4y117iz">ultra cute costume</a>,
                we’ll miss spending time with you, your laughs, your songs, and much more.
                </p>

                <p>
                Be a free and wild cat with 饱饱, have some great foods, and maybe accidentally show up one
                day after you’ve had a few bottles.
                </p>
            </div>
        );
    }

}
