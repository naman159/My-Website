import React, { Component } from "react";
import Tilt from 'react-tilt'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

class Otaku extends Component {

  render() {
    return (
      <div className="mt2">
        <div>
        <Fade big>
          <p className="tc">
            <span>Anime, Donghua, Manga, Manhua or Manhwa. You name it, I love it</span>
            <span role="img" aria-label=":)"> 😌</span>
            <span>!</span>
          </p>
        </Fade>
        </div>

        <div className="flex flex-wrap justify-center tl">
          <div className="pr2">
            <div className="inner-element">
              <a href="https://myanimelist.net/animelist/Kyoharato" target="_blank" rel="noopener noreferrer">
                <Tilt>
                <Flip left>
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
                  </Flip>
                  </Tilt>
                </a>
              </div>
          </div>

          <div className="pl3">
            <div className="inner-element">
              <a href="https://www.anime-planet.com/users/kyoharato/manga" target="_blank" rel="noopener noreferrer">
                <Tilt>
                  <Flip right>
                    <div className="br2 ba bw1 pa1 mv3 shadow-5 bc">
                      <h3 className="neon tc dim grow">Manga</h3>
                      <div className="pa1 name">
                        <p>
                          <span className="mr1 neon">▹ </span>
                          <span className="notneonn mr1"># of Titles Read :</span>
                          <span className="notneon ">{this.props.manga.read}</span>
                        </p>
                        <p>
                          <span className="mr1 neon">▹ </span>
                          <span className="notneonn mr1"># of Titles Reading :</span>
                          <span className="notneon">{this.props.manga.reading}</span>
                        </p>
                        <p>
                          <span className="mr1 neon">▹ </span>
                          <span className="notneonn mr1"># of Titles to Read :</span>
                          <span className="notneon">{this.props.manga.wtr}</span>
                        </p>
                        <p>
                          <span className="mr1 neon">▹ </span>
                          <span className="notneonn mr1"># of Titles On Hold :</span>
                          <span className="notneon">{this.props.manga.stalled}</span>
                        </p>
                        <p>
                          <span className="mr1 neon">▹ </span>
                          <span className="notneonn mr1"># of Titles Dropped :</span>
                          <span className="notneon">{this.props.manga.dropped}</span>
                        </p>
                        <p>
                          <span className="mr1 neon">▹ </span>
                          <span className="notneonn mr1"># of Chapters Read :</span>
                          <span className="notneon">12500+</span>
                        </p>
                        <p>
                          <span className="mr1 neon">▹ </span>
                          <span className="notneonn mr1">Time Spent (hours) :</span>
                          <span className="notneon">{this.props.manga.ts}</span>
                        </p>
                        </div>
                    </div>
                    </Flip>
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
