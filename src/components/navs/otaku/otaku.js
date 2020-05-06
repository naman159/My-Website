import React, { Component } from "react";
import Tilt from 'react-tilt'

class Otaku extends Component {

  render() {
    return (
      <div className="mt2">
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
                        <span className="notneonn mr1"># of Shows Watched :</span>
                        <span className="notneon ">{this.props.anime.completed}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Shows Watching :</span>
                        <span className="notneon">{this.props.anime.watching}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Shows to Watch :</span>
                        <span className="notneon">{this.props.anime.plan_to_watch}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Shows On Hold :</span>
                        <span className="notneon">{this.props.anime.on_hold}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Shows Dropped :</span>
                        <span className="notneon">{this.props.anime.dropped}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Episodes Watched :</span>
                        <span className="notneon">{this.props.anime.episodes_watched}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1">Time Spent (hours) :</span>
                        <span className="notneon">{this.props.anime.days_watched*24 | 0}</span>
                      </p>
                      </div>
                  </div>
                  </Tilt>
                </a>
              </div>
          </div>

          <div className="pl3">
            <div className="inner-element">
              <a href="https://www.anime-planet.com/users/kyoharato/manga" target="_blank" rel="noopener noreferrer">
                <Tilt>
                  <div className="br2 ba bw1 pa1 mv3 shadow-5 bc">
                    <h3 className="neon tc dim grow">Manga</h3>
                    <div className="pa1 name">
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Shows Watched :</span>
                        <span className="notneon ">{this.props.anime.completed}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Shows Watching :</span>
                        <span className="notneon">{this.props.anime.watching}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Shows to Watch :</span>
                        <span className="notneon">{this.props.anime.plan_to_watch}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Shows On Hold :</span>
                        <span className="notneon">{this.props.anime.on_hold}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Shows Dropped :</span>
                        <span className="notneon">{this.props.anime.dropped}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1"># of Episodes Watched :</span>
                        <span className="notneon">{this.props.anime.episodes_watched}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneonn mr1">Time Spent (hours) :</span>
                        <span className="notneon">{this.props.anime.days_watched*24 | 0}</span>
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
