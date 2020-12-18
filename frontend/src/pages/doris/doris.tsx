import React from 'react';

import './doris.css';

export interface DorisPageProps {
}

export interface DorisPageState {
}

export default class DorisPage extends React.Component<DorisPageProps, DorisPageState> {

    render() {
        return (
            <div>
                <p>
                Doris, you always talked to us like friends and family, and it’s difficult to
                see you go back to the ocean.
                </p>
                <p>
                You have been, and will be, the best DD Hololive CN housed, and who can forget
                your <a href="https://www.bilibili.com/video/BV1cA41187LW">gachi koi for Rosalyn</a>?
                Thanks for your <a href="https://www.bilibili.com/video/BV19f4y1Y7Ni">first and last song</a>,
                and we won’t forget our promise to count down these next 10 years... To our next meeting!
                </p>
            </div>
        );
    }

}
