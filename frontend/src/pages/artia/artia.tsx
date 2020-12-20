import React from 'react';

import './artia.css';

export interface ArtiaPageProps {
}

export interface ArtiaPageState {
}

export default class ArtiaPage extends React.Component<ArtiaPageProps, ArtiaPageState> {

    render() {
        return (
            <div>
                <p>
                A goodbye.
                </p>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <p>
                But, really, we already miss your poggers moments and memes. Who can forget
                your <a href="https://twitter.com/Kontaruu/status/1235886034824638465">Pepelaugh</a>,
                your elaborate puzzles, your many 12+ hours 耐久 streams...
                </p>
                <p>
                Most of all, we’ll miss you. <img src="https://u.cubeupload.com/zapple/Petia.gif" alt="Petia"/>
                </p>
            </div>
        );
    }

}
