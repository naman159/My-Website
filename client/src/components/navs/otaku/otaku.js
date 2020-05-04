import React, { Component } from "react";
import Tilt from 'react-tilt'

class Otaku extends Component {

  render() {
    return (
      <div>
        <div>
          <p className="tc">
            <span>Anime, Donghua, Manga, Manhua or Manhwa. You name it, I love it</span>
            <span role="img" aria-label=":)"> 😌</span>
            <span>!</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center tl">
          <div className="pr2">
            <div className="inner-element">
              <a href="https://myanimelist.net/animelist/Kyoharato" target="_blank" rel="noopener noreferrer">
                <Tilt>
                  <div className="br2 ba bw1 pa1 mv3 shadow-5 bc">
                    <h3 className="neon tc dim grow">Anime</h3>
                    <div className="pa1 name">
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Shows Watched : {this.props.anime.completed}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Shows Watching : {this.props.anime.watching}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Shows to Watch : {this.props.anime.plan_to_watch}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Shows On Hold : {this.props.anime.on_hold}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Shows Dropped : {this.props.anime.dropped}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Episodes Watched : {this.props.anime.episodes_watched}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon">Time Spent (hours) : {this.props.anime.days_watched*24 | 0}</span>
                      </p>
                      </div>
                  </div>
                  </Tilt>
                </a>
              </div>
          </div>

          <div className="pl2">
            <div className="inner-element">
              <a href="https://www.anime-planet.com/users/kyoharato/manga" target="_blank" rel="noopener noreferrer">
                <Tilt glareEnable={false} glareMaxOpacity={0.8} reset={true} glareColor="#ffffff" glarePosition="bottom">
                  <div className="br2 ba bw1 pa1 mv3 shadow-5 bc">
                    <h3 className="neon tc dim grow">Manga</h3>
                    <div className="pa1 name">
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Manga Read : 10</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Manga Reading : 10</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Manga to Read : 10</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Manga On Hold : 10</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Manga Dropped : 10</span>
                      </p>
                      </div>
                  </div>
                  </Tilt>
                </a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Otaku;
