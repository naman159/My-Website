import React, { Component } from "react";
import Tilt from 'react-parallax-tilt';

class Otaku extends Component {
  render() {
    return (
      <div>
        <div>
          <p className="tc">Anime, Donghua, Manga, Manhua & Manhwa. You name it, I love it 😌!</p>
        </div>

        <div className="flex flex-wrap justify-center tl">
          <div className="pr3">
            <div className="inner-element">
              <a href="https://myanimelist.net/animelist/Kyoharato">
                <Tilt glareEnable={true} glareMaxOpacity={0.8} reset={true} glareColor="#ffffff" glarePosition="bottom">
                  <div className="br2 ba bw1 b--white pa1 mv3 shadow">
                    <h3 className="neon tc dim grow">Anime</h3>
                    <div className="pa1 name">
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Anime Watched : 10</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Anime Watching : 10</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Anime to Watch : 10</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Anime On Hold : 10</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Anime Dropped : 10</span>
                      </p>
                      </div>
                  </div>
                  </Tilt>
                </a>
              </div>
          </div>

          <div className="pl3">
            <div className="inner-element">
              <a href="https://www.anime-planet.com/users/kyoharato/manga">
                <Tilt glareEnable={true} glareMaxOpacity={0.8} reset={true} glareColor="#ffffff" glarePosition="bottom">
                  <div className="br2 ba bw1 b--white pa1 mv3 shadow">
                    <h3 className="neon tc dim grow">Manga</h3>
                    <div className="pa1 name">
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Mange Read : 10</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Mange Reading : 10</span>
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
