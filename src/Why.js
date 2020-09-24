import React, { Component } from 'react';
import './App.css';
import history from './history';


export default class How extends Component {
    render() {
        return (
            <body ng-controller="maintanance">
            <div class="wrapper" ng-hide="maintanance">
              <div class="section-row">
                <nav class="navbar navbar-default">
                  <div class="row">
                    <div class="col-md-5">
                      <h4 class="header-quest">
                        <a onClick={() => history.push('/How')}>How does it work? </a>
                      </h4>
                    </div>
                    <div class="col-md-2 logo">
                      <div class="navbar-header">
                        <button aria-controls="navbar" aria-expanded="false" class="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="http://18.217.94.112:5000/"><span class="green">coin</span><span>Mixer</span></a>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="collapse navbar-collapse" id="navbar">
                        <ul class="nav navbar-nav">
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            
              <section id="content">
    <div class="container">
      <h1>Why should I mix my coins?</h1>
      <p>Bitcoins are a unique way to make purchases, donations, peer to peer payments and interact with the global economy with incredible ease. However, the mainstream narrative that these transactions are anonymous are deceiving and hurtful to individuals in regimes that closely monitor the nature of the transactions happening within national borders. The blockchain or the global ledger tracking transactions is an open database open for anyone to run a chain analysis and see how the flow of money has happened across parties. Additionally economic entities such as exchanges that convert your currency to fiat often require heavy forms of identity verification, especially for last mile exchanges towards fiat currency. </p>
      <p>In simple terms, Bitcoin a currency that was essentially to be anonymous in nature is currently the most scrutinized form of currency due to its open and easy access nature. In order to circumvent this and ensure individual privacy and safety users of the network need to use a high quality mixer that work at scale, speed and volume. This gives one the possibility of mixing each transaction with a multitude of other transactions to ensure privacy is ensured. As security for transactions increase we are able to ensure the liberty, privacy and freedom of individuals from all corners of the globe.</p>
      <p>Read more:</p>
      <ul>
        <li><a onClick={() => history.push('/How')}>How does mixing work?</a></li>
      </ul>
    </div>
  </section>
              </div>
            
              
            
            
            </body>
        )}
}
