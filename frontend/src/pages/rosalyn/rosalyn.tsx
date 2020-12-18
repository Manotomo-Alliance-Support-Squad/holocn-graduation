import React from 'react';

import './rosalyn.css';

export interface RosalynPageProps {
}

export interface RosalynPageState {
}

export default class RosalynPage extends React.Component<RosalynPageProps, RosalynPageState> {

    render() {
        return (
            <div>
                <p>
                館長, your voice in your <a href="https://www.bilibili.com/video/BV1zi4y1b7Sz">“this game” cover</a> surprised
                many of us, especially since we were waiting for a mushroom to show up. We’ve
                loved cheering you on, whether it was coming back alive from a mic explosion 事故, strong
                computer PSU 事故, OBS 事故, or just plain playing Hearthstone or Shadowverse.
                </p>

                <p>
                Whether you’re off somewhere playing cards, or going back to your library to whip things
                back to shap, we’re here supporting you!
                </p>
            </div>
        );
    }

}
