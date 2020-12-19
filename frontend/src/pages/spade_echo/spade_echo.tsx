import React from 'react';

import './spade_echo.css';

export interface SpadeEchoPageProps {
}

export interface SpadeEchoPageState {
}

export default class SpaceEchoPage extends React.Component<SpadeEchoPageProps, SpadeEchoPageState> {

    render() {
        return (
            <div>
                <p>
                    ECHO, even though you said you’re not good at singing, you bravely came to us
                    with <a href="https://www.youtube.com/watch?v=2h-Ag_zAAUs">a song as introduction</a>, and kept
                    on going with your <a href="https://www.youtube.com/watch?v=ByNUFWPiyeU">original song</a> this
                    year. We’ll never forget all the good times with you, whether it was fumbling
                    with <a href="https://www.youtube.com/watch?v=4FrJvvI91r0">lag when playing games</a> or
                    getting <a href="https://www.youtube.com/watch?v=z2csKn2bZG0">asked for an adult on the phone</a>; all
                    of it were unforgettable memories.
                </p>
                <p>
                    You had stolen many of our hearts and escaped with it. A true 怪盗. We hope you come back
                    and steal us away one day...
                </p>
            </div>
        );
    }

}
