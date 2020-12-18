import React from 'react';

import './civia.css';

export interface CiviaPageProps {
}

export interface CiviaPageState {
}

export default class CiviaPage extends React.Component<CiviaPageProps, CiviaPageState> {

    render() {
        return (
            <div>
            <p>
            Civia, as you <a href="https://www.youtube.com/watch?v=iAp27FRlQnI">just started on YouTube</a>, we’ve
            already have to bid goodbye to you… We hope you’ve already gotten past those tears. We could never
            forget the your 459 messages before your B站 debut and, of course, the moments we spent playing
            Undertale together.
            </p>
            <p>
            We will continue your legacy - after all DD will bring world peace.
            </p>
            <p>
            P.S. Also, we’ll also never forget <a href="https://www.youtube.com/watch?v=2fvZfHVPMP4">your love for Aqua senpai</a>.
            </p>
            </div>
        );
    }

}
