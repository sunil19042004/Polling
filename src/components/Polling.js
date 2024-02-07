import React, { Component } from 'react';

export default class Polling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                { name: "TVK", votes: 0 },
                { name: "DMK", votes: 0 },
                { name: "ADMK", votes: 0 },
                { name: "Naam Tamilar ", votes: 0 }
            ]
        }
    }
    vote(i) {
        let newLanguages = [...this.state.languages];
        newLanguages[i].votes++;

        function swap(array, i, j) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.setState({ languages: newLanguages });

    }
    render(){
      return(
        <>
          <marquee>Next Rolling Party in Tamilnadu</marquee>
          <div className="languages">
            {
              this.state.languages.map((lang, i) => 
                <div key={i} className="language">
                  <div className="voteCount">
                    {lang.votes}
                  </div>
                  <div className="languageName">
                    {lang.name}
                  </div>
                  <button onClick={this.vote.bind(this, i)}>Click Here</button>
                </div>
              )
            }
          </div>
        </>
      );
    }
  }
