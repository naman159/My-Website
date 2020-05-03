import React, { Component } from "react";
import Typical from 'react-typical';
//▹
class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <h4 className="tc neon">I am an avid watcher of anime... and I read a lot of manga as well. </h4>
        </div>
        <div className="flex flex-wrap justify-center neon">
          <p className="mr1">▹ I </p>
          <p className='dim'>
            <Typical
              steps={[
                "have watched 200 anime",
                1500,
                "am watching 15 anime",
                1500,
                "am planning to watch 20 anime"
                ]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default Code;
