import React, { Component } from 'react';
import './App.css';

export default class Instructions extends Component {

    constructor(props){
        super(props)

        this.state = {
            textfield : [""],
            btcAddress: [],
            delay:[],
            checkbtc: false,
            errormessage: [],
            error: false
        }
    }

     status = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return response
      }
      throw new Error(response.statusText)
    }
    
     json = (response) => {
      return response.json()
    }
    
     updateList = (e) => {
         e.preventDefault()
        let temp = this.state.textfield;
        this.setState({
        textfield : (temp.concat(""))
        })
      }

      changedelay = (e) =>  {
        e.preventDefault();

       let temp = e.target.value;
        //setTextField(temp);
          this.setState({
        delay : temp
        })
      }

     changeval = (e, id) =>  {
        e.preventDefault();

        let temp = this.state.textfield;
        temp[id] = e.target.value;
        //setTextField(temp);
          this.setState({
        textfield : temp
        })
      }

      getVal = (e,id) => {
          e.preventDefault();
        console.log("getvalue",this.state.textfield);
        // "addresses":["n3xLq4KuVeH7bLTvTorDupX7JGZH1QUdG4","mv1R2xWdcaUDUGKxLpUqRWe3zt18cXvBJU","mh7EJM9oDwh3bfq2yg4ytfMvCGLLSBStNc"],
        // "delay":1,
        // "coin":"BTC"
        console.log("Check:",this.state.textfield,this.state.delay)
        fetch("http://18.217.94.112:8000/user/generateAddress", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
    },
  "body": JSON.stringify({
    addresses: this.state.textfield,
    delay: this.state.delay,
    coin: "BTC"
  })
})
.then(this.status)
  .then(this.json)
  .then(function(json) {
    this.setState({
      btcAddress : json.data.btcAddress,
      checkbtc: true
      })
      console.log('request succeeded with json response', json.data.btcAddress);

  }.bind(this)).catch(function(error) {
    console.log('request failed', error)
    this.setState({
      errormessage : "Bad request",
      error: true
      })
  }.bind(this))
// .then(function(response){ response.json(); })
// .then(function(data) {
//   console.log("data:",data)
//     const items = data;
//     console.log("items",items)
// })
// .then(response => console.log("response",response.json()))
// .then(response => {
//   console.log("response",response)
// })


      }
    render() {

        const {textfield} = this.state
        return(
<div className="App">
    <header className="App-header">
    <body ng-controller="maintanance">
<div class="wrapper" ng-hide="maintanance">
  <div class="section-row">
    <nav class="navbar navbar-default">
      <div class="row">
        <div class="col-md-5">
          <h4 class="header-quest">
            <a href="how.html">How does it work? </a>
          </h4>
        </div>
        <div class="col-md-2 logo">
          <div class="navbar-header">
            <button aria-controls="navbar" aria-expanded="false" class="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="/"><span class="green">Coin</span><span>Mixer</span></a>
          </div>
        </div>
        <div class="col-md-5">
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="nav navbar-nav">
              <li class="nav-item__howitworks">
                <a href="how.html">How does it work</a>
              </li>
              <li class="nav-item__why">
                <a href="why.html">Why should I mix my coins</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="section-row section-row__expanded">
  
  <section id="content">
    <div class="container" ng-controller="mixer">
      
      <div class="intro" ng-hide="inited">
        <div class="intro">
          <div class="row">
            <div class="col-md-6 col-md-offset-3" ng-controller="attention">
              
              
            </div>
          </div>
          
        



         
        
        
        
        </div>
      </div>

      <div class="mixer" ng-show="inited" ng-class="{__processing: operation.state == 'processing'}" ng-cloak>
        <div class="setup" ng-show="operation.state != 'ready'">

            
          <div class="row">
            <div class="col-md-12 enter-code-wrapper">
             
            </div>
          </div>
        
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 bitchain">
              <div class="addresses">
                <div class="stepped">
                  <p>Please enter bitcoin forward to address: </p>
                  <div class="step">1</div>
                </div>
                <form name="addresses">
                  <div class="code-group" ng-repeat="item in items">
                    <a href="#" class="remove" ng-show="$index > 0" ng-click="remove(item, $event)"></a>
                    {/* <input class="input removable" type="text" ng-model="item.address"  required valid-address no-duplicates/> */}
                    {/* <div class="percent" ng-show="items.length > 1" ng-class="{small: delay}"><span class="value">{{item.percent.toFixed(2)}}%</span></div> */}
                    {/* <div class="delay" ng-show="delay" ng-class="{small: items.length > 1}"><span class="value">{{getItemDelay(item)}}</span>
                    </div> */}
                    
                    {textfield.map((text, i) => {
                            return (
                            <>
                                <input className="input removable" onChange={e => this.changeval(e, i)} required />
                                <a href="#" class="remove" ng-show="$index > 0" ng-click="remove(item, $event)"></a>
                                {/* <button onClick={e => this.getVal(e, i)}>get</button> */}
                                {/* <button onClick={e=>this.removeItem(e, i)}>remove</button> */}
                            </>
                            );
                        })}
                    <div class="col-md-12 text-center">
                        <button className="button-small bitchain_add" onClick={(e)=>this.updateList(e)}>Add address</button>
                        <p>Please choose Delay in Hours[1-24]: </p>
                        <input  onChange={e => this.changedelay(e)}  required />
                    </div>
                  </div>
                
                           <div class="col-md-12 text-center">
                            <>
                                <button  class="button accept_popup_open"  onClick={e => this.getVal(e, 1)}>Continue</button>

                                {/* <button onClick={e=>this.removeItem(e, i)}>remove</button> */}
                            </>
                            </div>
                           
                  {/* <a className="settime" href="#" ng-click="toogleDelay($event)">{{delay ? 'Remove delay' : 'Set delay'}}</a> */}
                 
                  
                </form>
              </div>
              <div class="timedelay">
              <h1>
              <div>
                {this.state.checkbtc ?<h1>Deposit BTC Address</h1> :""}
      {this.state.checkbtc ?this.state.btcAddress :""} 
      {this.state.error?this.state.errormessage:""}
      
    </div>
                   
              </h1>
              </div>
             
              
              <div class="col-md-8"></div>
              <div class="fee">
                {/* <p>
                  Service fee:&nbsp;<span class="percents">{{getFee()}}%</span> - <span class="discount" ng-class="{highlight: discountChanged}">{{getDiscount()}}%</span> (<a href="fees.html" target="_blank">discount</a>) <span class="quest-hint" uib-tooltip-template="'feeTooltipText'">?</span>
                </p> */}
                <script type="text/ng-template" id="feeTooltipText">
                  <span>It is very important to set custom service fee to prevent amount-based blockchain analysis. See FAQ for details.<br/><br/> If you use CryptoMixer often, you get the discount on the service commission fee. See Fees for details.</span>
                </script>
                <div class="fee-slider"></div>
                <div class="security-level col-md-8 "  >
                  <div class="security-level__header" ng-class="{highlight2: isLegacy}" ng-click="isOpenLevesl = !isOpenLevesl">
                    <div class="security-level__label">Security level:</div>
                    <div class="security-level__value"  ng-class="{
                    'security-level__value_open': isOpenLevesl,
                    'security-level__value_gold': tariff == 'Gold',
                    'security-level__value_silver': tariff == 'Silver'
                    }">
                        {/* {{tariff}} */}
                        </div>
                  </div>
        
                  <div ng-if="isOpenLevesl">
                    <div class="security-level__description" ng-show="tariff == 'Standard'">
                      <div class="security-level__item">Fast payouts confirmation</div>
                      <div class="security-level__item security-level__item_checked">Up to 24 hours of configurable delays</div>
                      <div class="security-level__item security-level__item_checked">Up to 2 output addresses</div>
                    </div>
        
                    <div class="security-level__description" ng-show="tariff == 'Silver'">
                      <div class="security-level__item security-level__item_checked">Fast payouts confirmation</div>
                      <div class="security-level__item security-level__item_checked">Up to 48 hours of configurable delays</div>
                      <div class="security-level__item security-level__item_checked">Up to 5 output addresses</div>
                    </div>
        
                    <div class="security-level__description" ng-show="tariff == 'Premium'">
                      <div class="security-level__item security-level__item_checked">Premium plan for old valuable clients *</div>
                      <div class="security-level__item security-level__item_checked">Up to 48 hours of configurable delays</div>
                      <div class="security-level__item security-level__item_checked">Up to 5 output addresses</div>
                      <div class="security-level__item security-level__item_hint">* Plan is valid till Jan 31, 2023</div>
                    </div>
        
        
                    <div class="security-level__description" ng-show="tariff == 'Gold'">
                      <div class="security-level__item security-level__item_checked">​Fast payouts confirmation</div>
                      <div class="security-level__item security-level__item_checked">Up to 96 hours of configurable delays</div>
                      <div class="security-level__item security-level__item_checked">Up to 10 output addresses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              
            </div>
          </div>
          

        </div>

        <div class="status" ng-show="operation.state == 'ready'">
          <div class="row">
            <div class="col-md-3"></div>
          
          </div>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <div class="stepped">
                {/* <p class="headline">
                  Send your coins (min 0.001, max {{operation.current.MaxAmount.toFixed(4)}} BTC) to:
                </p> */}
                <div class="row">
                  <div class="col-md-12 text-center">
                    
                    {/* <div class="operation-error" ng-show="operation.error">{{operation.error.code}}</div> */}
                  </div>
                </div>
                
                <div class="row">
                  
                </div>
                
              </div>
            </div>
            <div class="col-md-3"></div>
          </div>
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center wait-payment">
              <a class="update" ng-class="{active: !operation.isSuccess()}" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
              <p ng-show="operation.current.InputCount == 0 || operation.isSuccess()">
                <strong>Do you know:</strong> When you use CryptoMixer with the same code, you pay less service fee! Your CryptoMixer code is: <b>
                    {/* {{bitcode}} */}
                    </b>. Save it! See <a href="fees.html" target="_blank">Fees</a> for details.
              </p>
              {/* <div ng-show="operation.current.InputCount > 0 && !operation.isSuccess()">
                <p ng-show="operation.current.InputCount == 0">Received {{operation.current.TotalInputAmount}} BTC</p>
                <p ng-show="operation.current.InputCount == 1">Received {{operation.current.TotalInputAmount}} BTC, <ng-pluralize count="operation.current.LastInputConfirmations" when="{'0': '0 confirmations', 'one': '1 confirmation','other': '{} confirmations'}"></ng-pluralize></p>
                <p ng-show="operation.current.InputCount > 1">Total received {{operation.current.TotalInputAmount}} BTC, Last has <ng-pluralize count="operation.current.LastInputConfirmations" when="{'0': '0 confirmations', 'one': '1 confirmation','other': '{} confirmations'}"></ng-pluralize></p>
                <p ng-show="operation.current.OutputCount > 0">
                  Outputs:
                  <span ng-show="!operation.current.PendingOutputAmount">{{operation.current.SentOutputAmount}} Sent</span>
                  <span ng-show="!operation.current.SentOutputAmount">{{operation.current.PendingOutputAmount}} Pending</span>
                  <span ng-show="operation.current.SentOutputAmount && operation.current.PendingOutputAmount">{{operation.current.SentOutputAmount}} Sent, {{operation.current.PendingOutputAmount}} Pending</span>
                </p>
              </div> */}
            </div>
          </div>
        </div>

        

        
      </div>
      
    </div>
  </section>
 
    </div>
    <div class="section-row">
      <footer class="footer">
        <ul class="nav">
          <li>
            <a href="fees.html">Fees</a>
          </li>
          <li>
            <a href="faq.html">FAQ</a>
          </li>
          <li>
            <a href="javascript:zE.activate()">Contacts</a>
          </li>
          <li>
          </li>
        </ul>
        
      </footer>
    </div>
  </div>

  

  

  <script src="/js/build.js?5"></script>
</body>
    </header>

</div>
          
        )
      }
      
}