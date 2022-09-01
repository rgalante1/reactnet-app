import React, { Component } from 'react';
import './Splash.css'

export class Splash extends Component {
  //static displayName = Home.name;

  render() {
    return (<>
      <div className='d-flex flex-row'>

        <div className="card" style={{width: 17 + 'rem', marginLeft: 4 + '%', marginRight: 4 + '%'}}>
          <img className="card-img-top" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="team #1"/>
          <div className="card-body">
            <h5 className="class-title">Team #1 Name</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        
        <div className="card" style={{width: 17 + 'rem', marginLeft: 4 + '%', marginRight: 4 + '%'}}>
          <img className="card-img-top" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="team #2"/>
          <div className="card-body">
            <h5 className="class-title">Team #2 Name</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card" style={{width: 17 + 'rem', marginLeft: 4 + '%', marginRight: 4 + '%'}}>
          <img className="card-img-top" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="text #3"/>
          <div className="card-body">
            <h5 className="class-title">Team #3 Name</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card" style={{width: 17 + 'rem', marginLeft: 4 + '%', marginRight: 4 + '%'}}>
          <img className="card-img-top" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="text #4"/>
          <div className="card-body">
            <h5 className="class-title">Team #4 Name</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

      </div>

      <div className="card text-center" style={{marginTop: 2 + '%'}}>

        <div className="card-body">

          <h5 className="card-title">
            Website Overview
          </h5>
          <p className="card-text">
            This website is a one stop shop for sports jerseys from many different sports leagues such as NFL, NHL, NBA, and the MLB. Here you can view a wide variety of jerseys, search for your favorite player, and make purchases.
          </p>
          <span></span>
          <h5 classname="card-title">
            How To
          </h5>
          <p className="card-text">
            From the home page, you can view the jerseys in stock and use the navbar above to navigate to a particular league. Upon finding a jersey you like, you can select it to get more details and eventually add it to your cart. When you are ready to checkout, you can enter your payment information and shipping address to complete your order.
          </p>
          <span></span>
          <p className="card-text">
            Ready? Click the button below to begin shopping!
          </p>
          <span></span>
          <a className="btn btn-success" href="/home" role="button">Get Started!</a>

        </div>
        
      </div>
    </>
    );
  }
}