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
                        <button aria-controls="navbar" aria-expanded="false" class="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="/"><span class="green">Coin</span><span>Mixer</span></a>
                      </div>
                    </div>
                  
                  </div>
                </nav>
              </div>
            
              <div class="section-row section-row__expanded">
            
              <section id="content">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <h1 class="text-center">
                        How does it work?
                      </h1>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-5 col-md-offset-1">
                      <img src="/how1.png" class="img-responsive" alt="bitcoin mix service"/>
                    </div>
                    <div class="col-md-5 col-md-offset-1">
                      <p>
                        We provide our clients with the ability to mix their coins and attain safety in the process. Once the coins are sent to us, it is jumbled along with a series of other transactions through our mixer which has a reserve of over 2000 coins. Combining this with the countless transactions we have handled in the past makes it virtually impossible to pinpoint the source and endpoint of the coins. Due to the size of our reserve, we are also able to process transactions almost immediately leaving you with no concern of timely delivery of the coin.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <h2 class="text-center" style={{fontSize: '33pt',margin: '20pt 0 20pt'}}>
                        We mark your bitcoins
                      </h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-5 col-md-offset-1">
                      <p>
                        A few users often display concern of the fact that we could be sending the coins you send us back, with a fee cut on it. However, this is never the case. We mark the coins sent to us algorithmically and ensure coins sent by one user are never sent back to the same person. We understand the implications behind doing so and shy away from engaging in any activity that puts our users at risk. Liberty, freedom, privacy - we find ourselves to be guardians of the same.
                      </p>
                    </div>
                    <div class="col-md-5 col-md-offset-1">
                      <img src="/how2.png" class="img-responsive" alt="btc tumbler"/>
                    </div>
                  </div>
                </div>
              </section>
            
                </div>
                
              </div>
            
              
          
            </body>
        )}
}
