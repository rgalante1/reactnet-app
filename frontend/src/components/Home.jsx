import React, { Component } from 'react';

export class Home extends Component {
  //static displayName = Home.name;
  state={
    jerseys:[
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
    ]
  }

  render() {
    return (<>
      <div className="d-flex flex-wrap">
        {this.state.jerseys.map((card, index) =>
          <div className="card" style={{width: 17 + 'rem', marginLeft: 4 + '%', marginRight: 4 + '%', marginTop: 1 + '%'}} key={index}>
            <img className="card-img-top" src={card.image} alt={index}/>
            <div className="card-body">
              <h5 className="class-title">{card.playerName}</h5>
              <p className="card-text">{card.price}</p>
            </div>
          </div>
        )}
      </div>
      {/* <footer>
        <button type="button" className="btn btn-info justify-right" onClick={scrollToTop}>Back To Top</button>
      </footer> */}
      </>
    );
  }
}
