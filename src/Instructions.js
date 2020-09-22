import React, { Component } from 'react';
import './App.css';

export default class Instructions extends Component {

    constructor(props){
        super(props)

        this.state = {
            textfield : [""]
        }
    }

     updateList = (e) => {
         e.preventDefault()
        let temp = this.state.textfield;
        this.setState({
        textfield : (temp.concat(""))
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
        console.log(this.state.textfield);

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
              <li>
                <a href="fees.html">Fees</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li>
                <a href="mailto:support@cryptomixer.io">Contacts</a>
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
                                <input className="input removable" onChange={e => this.changeval(e, i)} />
                                {/* <button onClick={e => this.getVal(e, i)}>get</button> */}
                                {/* <button onClick={e=>this.removeItem(e, i)}>remove</button> */}
                            </>
                            );
                        })}
                        <button className="bitchain_add" onClick={(e)=>this.updateList(e)}>Add address</button>
                        
                  </div>
                
                           
                            <>
                                <button onClick={e => this.getVal(e, 1)}>get</button>
                                {/* <button onClick={e=>this.removeItem(e, i)}>remove</button> */}
                            </>
                           
                  {/* <a className="settime" href="#" ng-click="toogleDelay($event)">{{delay ? 'Remove delay' : 'Set delay'}}</a> */}
                 
                  
                </form>
              </div>
        
              <div className="timedelay" ng-show="delay">
                <p>
                  Time delay
                </p>
                <div className="delay-slider"></div>
              </div>
              <div class="percentage" ng-show="items.length > 1">
                <p>
                  Percentage distribution
                </p>
                <div class="percentage-slider"></div>
              </div>
              <div class="fee">
                {/* <p>
                  Service fee:&nbsp;<span class="percents">{{getFee()}}%</span> - <span class="discount" ng-class="{highlight: discountChanged}">{{getDiscount()}}%</span> (<a href="fees.html" target="_blank">discount</a>) <span class="quest-hint" uib-tooltip-template="'feeTooltipText'">?</span>
                </p> */}
                <script type="text/ng-template" id="feeTooltipText">
                  <span>It is very important to set custom service fee to prevent amount-based blockchain analysis. See FAQ for details.<br/><br/> If you use CryptoMixer often, you get the discount on the service commission fee. See Fees for details.</span>
                </script>
                <div class="fee-slider"></div>
                <div class="security-level">
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
              <div class="calculator" ng-controller="calculator">
                {/* <div class="toggle"><a href="#" ng-click="toggle($event)">{{show ? 'Hide calculator' :
                  'Show calculator'}}</a></div> */}
                <div class="row" ng-show="show">
                  <div class="col-md-6">
                    <p>You send:</p>
                    <div class="code-group" ng-repeat="item in operation.items" ng-if="operation.items.length">
                      <input class="input btc" type="text" ng-model="sentAmount[$index]" ng-keyup="updateAmounts()"/>
                      <div class="address">
                        BTC <span ng-show="operation.state == 'ready'">to 
                        {/* <em>{{getShotAddress(item.InputAddress)}}</em> */}
                        </span>
                      </div>
                    </div>
              
              
                     <div class="code-group" ng-if="!operation.items.length">
                      <input class="input btc" type="text" ng-model="sentAmount[0]" ng-keyup="updateAmounts()"/>
                      <div class="address">BTC</div>
                    </div>
                  </div>
              
                  <div class="col-md-6">
                    <p>You receive <span class="quest-hint"
                                         tooltip-placement="bottom"
                                         uib-tooltip-template="'receiveAmount'">?</span>:</p>
                    <script type="text/ng-template" id="receiveAmount">
                      <span>Received amounts could randomly vary to prevent amount-based analysis</span>
                    </script>
                    <div class="code-group" ng-repeat="item in items | filter:item.address.$valid">
                      <input class="input btc" type="text" ng-model="amounts[$index]" ng-keyup="updateFromReceive($index)"/>
                      <div class="address">
                        BTC 
                        {/* <span ng-show="items.length > 1">({{item.percent.toFixed(2)}}%)</span> */}
                       
                        {/* <span
              
                            ng-show="delay && item.delay > 0">after <em>{{getItemDelay(item)}}</em></span> */}
                        {/* <span ng-hide="delay && item.delay > 0">immediately</span> */}
                        <br/>
                        {/* <span ng-show="item.address">to <em>{{getShotAddress(item.address)}}</em></span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" ng-show="show">
                  <div class="col-md-12">
                    {/* <p class="hint">
                      Your personal fee {{getFee() - getDiscount()}}%+{{fixFee}} BTC for every forward address
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div class="row continue">
            <div class="col-md-12 text-center">
              {/* <div class="error" ng-show="operation.state == 'error'">{{operation.error.code}}</div> */}
              <button class="button accept_popup_open" ng-hide="!!acceptTerms" ng-disabled="addresses.$invalid">Continue</button>
              <button class="button" ng-show="!!acceptTerms" ng-click="submit()" ng-disabled="addresses.$invalid">Continue</button>
              <p class="lets">
                Mix my bitcoins
              </p>
            </div>
          </div>
        </div>

        <div class="status" ng-show="operation.state == 'ready'">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <div class="stepped step__letter">
                <div class="headline" ng-hide="operation.items.length > 1">
                  <form action="{{operation.getLetterUrl(operation.current['Id'])}}" method="GET" target="letter_frame">
                      <p>
        
                        <button class="button__letter visible-lg-inline" type="submit" ng-click="operation.download()">Download the Letter of Guarantee</button>
                        <button class="button__letter hidden-lg letter_popup_open" ng-click="operation.download()">Save the Letter of Guarantee</button>
                        before send us coins
                      </p>
                  </form>
                </div>
                <div class="headline" ng-show="operation.items.length > 1">
                  <p>
                    <span class="visible-lg-inline">Download Letters of Guarantee</span>
                    <span class="hidden-lg">Save Letters of Guarantee</span>
                    before send us coins:
                  </p>
        
                  <div ng-repeat="item in operation.items">
                    {/* <form action="{{operation.getLetterUrl(item['Id'])}}" method="GET" target="letter_frame">
                      <button class="button__letter visible-lg-inline" type="submit" ng-click="operation.download($index)">Letter of Guarantee #{{$index + 1}}</button>
                      <button class="button__letter hidden-lg letter_popup_open" ng-click="operation.download($index)">Letter of Guarantee #{{$index + 1}}</button>
                    </form> */}
                  </div>
                </div>
                <iframe id="letter_frame" name="letter_frame" style={{position: 'absolute', top: '-2000px', left: '-2000px'}}></iframe>
                <div class="step">2</div>
              </div>
            </div>
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
                    <div class="recipient">
                      <ul>
                        <li ng-repeat="item in operation.items">
                          {/* <label>
                            <input type="radio" ng-model="operation.currentIndex" ng-change="operation.setCurrent($index + 1)" ng-show="operation.items.length > 1" value="{{$index + 1}}">
                            <span class="bitaddress">{{item.InputAddress}}</span>  
                          </label> */}
                        </li>
                      </ul>

                      <div class="add-address" ng-click="operation.duplicate()" ng-hide="operation.duplicating">Add incoming address</div>
                      <div class="loading" ng-show="operation.duplicating"></div>
                    </div>
                    {/* <div class="operation-error" ng-show="operation.error">{{operation.error.code}}</div> */}
                  </div>
                </div>
                <div class="calculator" ng-controller="calculator">
                  {/* <div class="toggle"><a href="#" ng-click="toggle($event)">{{show ? 'Hide calculator' :
                    'Show calculator'}}</a></div> */}
                  <div class="row" ng-show="show">
                    <div class="col-md-6">
                      <p>You send:</p>
                      <div class="code-group" ng-repeat="item in operation.items" ng-if="operation.items.length">
                        <input class="input btc" type="text" ng-model="sentAmount[$index]" ng-keyup="updateAmounts()"/>
                        <div class="address">
                          BTC 
                          {/* <span ng-show="operation.state == 'ready'">to <em>{{getShotAddress(item.InputAddress)}}</em></span> */}
                        </div>
                      </div>
                
                
                       <div class="code-group" ng-if="!operation.items.length">
                        <input class="input btc" type="text" ng-model="sentAmount[0]" ng-keyup="updateAmounts()"/>
                        <div class="address">BTC</div>
                      </div>
                    </div>
                
                    <div class="col-md-6">
                      <p>You receive <span class="quest-hint"
                                           tooltip-placement="bottom"
                                           uib-tooltip-template="'receiveAmount'">?</span>:</p>
                      <script type="text/ng-template" id="receiveAmount">
                        <span>Received amounts could randomly vary to prevent amount-based analysis</span>
                      </script>
                      <div class="code-group" ng-repeat="item in items | filter:item.address.$valid">
                        <input class="input btc" type="text" ng-model="amounts[$index]" ng-keyup="updateFromReceive($index)"/>
                        <div class="address">
                          BTC 
                          {/* <span ng-show="items.length > 1">({{item.percent.toFixed(2)}}%)</span> */}
                          {/* <span
                
                              ng-show="delay && item.delay > 0">after <em>{{getItemDelay(item)}}</em></span>
                          <span ng-hide="delay && item.delay > 0">immediately</span>
                          <br/><span ng-show="item.address">to <em>{{getShotAddress(item.address)}}</em></span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row" ng-show="show">
                    <div class="col-md-12">
                      {/* <p class="hint">
                        Your personal fee {{getFee() - getDiscount()}}%+{{fixFee}} BTC for every forward address
                      </p> */}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    {/* <div class="qr-code" ng-if="!operation.isSuccess() && operation.current.InputAddress">
                      <img src="/images/loading.svg" class="img-responsive qr-preloader"/>
                      <img class="qr img-responsive" ng-src="{{utils.qrCodeLink(operation.current.InputAddress, 225)}}" imageonload/>
                    </div>
                    <div class="qr-code" ng-if="!operation.isSuccess() && !operation.current.InputAddress">
                      preloader
                    </div> */}
                    <div class="success" ng-show="operation.isSuccess()"></div>
                  </div>
                </div>
                <div class="step">3</div>
                {/* <div class="row" ng-if="operation.current.TotalInputAmount <= 0.001 && operation.current.InputCount > 0 && !operation.isSuccess()">
                  <div class="col-md-12 wait-warning">
                    Amount is less than required
                  </div>
                </div> */}
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

        <div class="popup" id="accept_popup">
          <span class="accept_popup_close close_button"></span>
          <div class="popup_content">
            <h3>
              Please check and accept important terms
            </h3>
            <p>
              <label>Incoming address is valid only for 24 hours. All further payments will be ignored. We do not store links between incoming and target addresses after operation is proceeded. Please, download the Letter of Guarantee before you send us coins. This will be a proof of your transaction.</label>
            </p>
            <p>
              <input id="acceptTerms" name="acceptTerms" type="checkbox" ng-model="acceptTerms" /><label for="acceptTerms"><span></span>Don’t ask me again</label>
            </p>
            <p class="text-center">
              <button class="button accept_popup_close" ng-click="acceptAndSubmit()">Accept</button>
            </p>
          </div>
        </div>

        <div class="popup" id="letter_popup">
          <span class="letter_popup_close close_button"></span>
          <h3>
            Copy and save Letter of a Guarantee
          </h3>
          <textarea class="letter-textarea" ng-model="operation.current.Letter"></textarea>
          <p class="text-center">
            <button class="button" ng-click="selectLetterText()">Select all</button>
          </p>
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