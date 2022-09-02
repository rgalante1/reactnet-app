import React, { Component } from 'react';
import './Jerseys.css';

export class Jerseys extends Component {
  //static displayName = Home.name;

  state={
    nfl_jerseys:[
      {image: "https://fanatics.frgimages.com/tampa-bay-buccaneers/mens-nike-tom-brady-red-tampa-bay-buccaneers-game-jersey_pi3878000_altimages_ff_3878090-22089ad43b30f453a2adalt1_full.jpg?_hv=2&w=900", 
        playerName: "Tom Brady", price: "$129.99"},
      {image: "https://fanatics.frgimages.com/tampa-bay-buccaneers/mens-nike-tom-brady-red-tampa-bay-buccaneers-game-jersey_pi3878000_altimages_ff_3878090-22089ad43b30f453a2adalt1_full.jpg?_hv=2&w=900", 
        playerName: "Tom Brady", price: "$129.99"},
      {image: "https://fanatics.frgimages.com/tampa-bay-buccaneers/mens-nike-tom-brady-red-tampa-bay-buccaneers-game-jersey_pi3878000_altimages_ff_3878090-22089ad43b30f453a2adalt1_full.jpg?_hv=2&w=900", 
        playerName: "Tom Brady", price: "$129.99"},
      {image: "https://fanatics.frgimages.com/tampa-bay-buccaneers/mens-nike-tom-brady-red-tampa-bay-buccaneers-game-jersey_pi3878000_altimages_ff_3878090-22089ad43b30f453a2adalt1_full.jpg?_hv=2&w=900", 
        playerName: "Tom Brady", price: "$129.99"},
      {image: "https://fanatics.frgimages.com/tampa-bay-buccaneers/mens-nike-tom-brady-red-tampa-bay-buccaneers-game-jersey_pi3878000_altimages_ff_3878090-22089ad43b30f453a2adalt1_full.jpg?_hv=2&w=900", 
        playerName: "Tom Brady", price: "$129.99"},
      {image: "https://fanatics.frgimages.com/tampa-bay-buccaneers/mens-nike-tom-brady-red-tampa-bay-buccaneers-game-jersey_pi3878000_altimages_ff_3878090-22089ad43b30f453a2adalt1_full.jpg?_hv=2&w=900", 
        playerName: "Tom Brady", price: "$129.99"},
      {image: "https://fanatics.frgimages.com/tampa-bay-buccaneers/mens-nike-tom-brady-red-tampa-bay-buccaneers-game-jersey_pi3878000_altimages_ff_3878090-22089ad43b30f453a2adalt1_full.jpg?_hv=2&w=900", 
        playerName: "Tom Brady", price: "$129.99"},
      {image: "https://fanatics.frgimages.com/tampa-bay-buccaneers/mens-nike-tom-brady-red-tampa-bay-buccaneers-game-jersey_pi3878000_altimages_ff_3878090-22089ad43b30f453a2adalt1_full.jpg?_hv=2&w=900", 
        playerName: "Tom Brady", price: "$129.99"},
      {image: "https://fanatics.frgimages.com/dallas-cowboys/mens-nike-dak-prescott-navy-dallas-cowboys-legend-player-jersey_pi3687000_altimages_ff_3687687-6da9731f88f7c4f55464alt1_full.jpg?_hv=2&w=900", 
        playerName: "Dak Prescott", price: "$119.99"},
      {image: "https://fanatics.frgimages.com/dallas-cowboys/mens-nike-dak-prescott-navy-dallas-cowboys-legend-player-jersey_pi3687000_altimages_ff_3687687-6da9731f88f7c4f55464alt1_full.jpg?_hv=2&w=900", 
        playerName: "Dak Prescott", price: "$119.99"},
      {image: "https://fanatics.frgimages.com/dallas-cowboys/mens-nike-dak-prescott-navy-dallas-cowboys-legend-player-jersey_pi3687000_altimages_ff_3687687-6da9731f88f7c4f55464alt1_full.jpg?_hv=2&w=900", 
        playerName: "Dak Prescott", price: "$119.99"},
      {image: "https://fanatics.frgimages.com/dallas-cowboys/mens-nike-dak-prescott-navy-dallas-cowboys-legend-player-jersey_pi3687000_altimages_ff_3687687-6da9731f88f7c4f55464alt1_full.jpg?_hv=2&w=900", 
        playerName: "Dak Prescott", price: "$119.99"}
    ],
    mlb_jerseys:[
      {image: "https://fanatics.frgimages.com/seattle-mariners/mens-nike-ken-griffey-jr-white-seattle-mariners-home-cooperstown-collection-player-jersey_pi3599000_ff_3599467-bdad8605bf20b152270a_full.jpg?_hv=2&w=900",
        playerName: "Ken Griffey Jr.", price: "$134.99"}
    ],
    nba_jerseys:[
      {image: "https://fanatics.frgimages.com/dallas-mavericks/mens-fanatics-branded-luka-doncic-blue-dallas-mavericks-fast-break-replica-jersey-icon-edition_pi3308000_ff_3308742_full.jpg?_hv=2&w=340",
        playerName: "Luka Doncic", price: "$74.99"},
      {image: "https://fanatics.frgimages.com/dallas-mavericks/mens-mitchell-and-ness-dirk-nowitzki-blue-dallas-mavericks-hardwood-classics-1998-99-hyper-hoops-swingman-jersey_pi4845000_altimages_ff_4845363-cc6de66ffea2d9eb3824alt1_full.jpg?_hv=2&w=900",
        playerName: "Dirk Nowitzki", price: "$119.99"}
    ],
    nhl_jerseys:[
      {image: "https://fanatics.frgimages.com/dallas-stars/mens-adidas-jamie-benn-black-dallas-stars-alternate-captain-patch-primegreen-authentic-pro-player-jersey_pi4260000_ff_4260830-02602ab6c68e16ec00ea_full.jpg?_hv=2&w=340",
        playerName: "Jamie Benn", price: "$229.99"}
    ]
  }

  scroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (<>
      <div className="d-flex flex-wrap">
        {this.props.type === 'nfl' && this.state.nfl_jerseys.map((card, index) =>
          <div className="card" style={{width: 17 + 'rem', marginLeft: 4 + '%', marginRight: 4 + '%', marginTop: 1 + '%'}} key={index}>
            <img className="card-img-top" src={card.image} alt={index}/>
            <div className="card-body">
              <h5 className="class-title">{card.playerName}</h5>
              <p className="card-text">{card.price}</p>
            </div>
          </div>
        )}
        {this.props.type === 'nba' && this.state.nba_jerseys.map((card, index) =>
          <div className="card" style={{width: 17 + 'rem', marginLeft: 4 + '%', marginRight: 4 + '%', marginTop: 1 + '%'}} key={index}>
            <img className="card-img-top" src={card.image} alt={index}/>
            <div className="card-body">
              <h5 className="class-title">{card.playerName}</h5>
              <p className="card-text">{card.price}</p>
            </div>
          </div>
        )}
        {this.props.type === 'nhl' && this.state.nhl_jerseys.map((card, index) =>
          <div className="card" style={{width: 17 + 'rem', marginLeft: 4 + '%', marginRight: 4 + '%', marginTop: 1 + '%'}} key={index}>
            <img className="card-img-top" src={card.image} alt={index}/>
            <div className="card-body">
              <h5 className="class-title">{card.playerName}</h5>
              <p className="card-text">{card.price}</p>
            </div>
          </div>
        )}
        {this.props.type === 'mlb' && this.state.mlb_jerseys.map((card, index) =>
          <div className="card" style={{width: 17 + 'rem', marginLeft: 4 + '%', marginRight: 4 + '%', marginTop: 1 + '%'}} key={index}>
            <img className="card-img-top" src={card.image} alt={index}/>
            <div className="card-body">
              <h5 className="class-title">{card.playerName}</h5>
              <p className="card-text">{card.price}</p>
            </div>
          </div>
        )}
      </div>
      <footer>
        <div className='justify-content-end'>
          <button type="button" id="scroll_btn" className="btn btn-secondary btn-sm" onClick={this.scroll}>Back To Top</button>
        </div>
      </footer>
      </>
    );
  }
}
