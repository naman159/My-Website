import React, { Component } from "react";
//import Tilt from 'react-parallax-tilt';
import Tilt from 'react-tilt'
const jikanjs  = require('jikanjs');

class Otaku extends Component {

  constructor(props){
    super(props);
    this.state = {
      anime:''
    }
  }

  componentDidMount(){
    jikanjs.loadUser('kyoharato', 'profile').then((response) => {
      this.setState({anime: response.anime_stats});
      console.log(this.state.anime);
    })
    .catch((err) => {
    console.error(err); // in case a error happens
})
  }


  render() {
    return (
      <div>
        <div>
          <p className="tc">Anime, Donghua, Manga, Manhua & Manhwa. You name it, I love it 😌!</p>
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
                        <span className="notneon"># of Shows Watched : {this.state.anime.completed}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Shows Watching : {this.state.anime.watching}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Shows to Watch : {this.state.anime.plan_to_watch}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Shows On Hold : {this.state.anime.on_hold}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Shows Dropped : {this.state.anime.dropped}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon"># of Episodes Watched : {this.state.anime.episodes_watched}</span>
                      </p>
                      <p>
                        <span className="mr1 neon">▹ </span>
                        <span className="notneon">Time Spent (hours) : {this.state.anime.days_watched*24 | 0}</span>
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
