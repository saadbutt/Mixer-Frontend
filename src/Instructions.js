import React, { Component } from 'react';

export default class Instructions extends Component {

    render() {
        return(
<div>
    <div class="mixer ng-hide" ng-show="inited" ng-class="{__processing: operation.state == &#39;processing&#39;}">
            <div class="setup" ng-show="operation.state != &#39;ready&#39;">
            <div class="row">
                <div class="col-md-12 enter-code-wrapper">
                <div class="enter-code">
                    <input class="input ng-pristine ng-untouched ng-valid ng-empty" placeholder="Enter CryptoMixer code" type="text" ng-model="bitcode" /><span class="quest" tooltip-placement="bottom" uib-tooltip-template="&#39;bitcodeTooltipText&#39;">?</span>
                    <script type="text/ng-template" id="bitcodeTooltipText">

                    </script>
                </div>
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
                <form name="addresses" class="ng-pristine ng-valid-valid-address ng-valid-no-duplicates ng-invalid ng-invalid-required">
                    
                    <div class="code-group ng-scope" ng-repeat="item in items">
                    <a href="https://cryptomixer.io/#" class="remove ng-hide" ng-show="$index &gt; 0" ng-click="remove(item, $event)"></a>
                    <input class="input removable ng-pristine ng-untouched ng-valid-valid-address ng-valid-no-duplicates ng-empty ng-invalid ng-invalid-required" type="text" ng-model="item.address" ng-style="{&#39;border-color&#39;: items.length &gt; 1 ? colors[$index] : &#39;&#39;}" required="" valid-address="" no-duplicates="" />
                    <div class="percent ng-hide" ng-show="items.length &gt; 1" ng-class="{small: delay}"><span class="value ng-binding">100.00%</span></div>
                    <div class="delay ng-hide" ng-show="delay" ng-class="{small: items.length &gt; 1}"><span class="value ng-binding">4h 45m</span></div>
                    </div>
        
                    <a class="settime ng-binding" href="https://cryptomixer.io/#" ng-click="toogleDelay($event)">Set delay</a>
                    <a class="bitchain_add" href="https://cryptomixer.io/#" ng-click="add($event)" ng-hide="items.length &gt;= 10">Add address</a>
                </form>
                </div>
        
                <div class="timedelay ng-hide" ng-show="delay">
                <p>
                    Time delay
                </p>
                <div class="delay-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><a class="ui-slider-handle ui-state-default ui-corner-all" href="https://cryptomixer.io/#" style={{left: '4.94792%'}}></a></div>
                </div>
                <div class="percentage ng-hide" ng-show="items.length &gt; 1">
                <p>
                    Percentage distribution
                </p>
                <div class="percentage-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false" style={{backgroundImage: '-webkit-linear-gradient(left, rgb(159, 202, 104), rgb(159, 202, 104))'}}><a class="ui-slider-handle ui-state-default ui-corner-all" href="https://cryptomixer.io/#" style={{left: '0%'}}></a></div>
                </div>
                <div class="fee">
                <p>
                    Service fee:&nbsp;<span class="percents ng-binding">1.8994%</span> - <span class="discount ng-binding" ng-class="{highlight: discountChanged}">0.00%</span> (<a href="https://cryptomixer.io/fees.html" target="_blank">discount</a>) <span class="quest-hint" uib-tooltip-template="&#39;feeTooltipText&#39;">?</span>
                </p>
                <script type="text/ng-template" id="feeTooltipText">
                    <span>It is very important to set custom service fee to prevent amount-based blockchain analysis. See FAQ for details.<br/><br/> If you use CryptoMixer often, you get the discount on the service commission fee. See Fees for details.</span>
                </script>
                <div class="fee-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><a class="ui-slider-handle ui-state-default ui-corner-all" href="https://cryptomixer.io/#" style={{left: '55.9772%'}}></a></div>
                <div class="security-level">
                    <div class="security-level__header" ng-class="{highlight2: isLegacy}" ng-click="isOpenLevesl = !isOpenLevesl">
                    <div class="security-level__label">Security level:</div>
                    <div class="security-level__value ng-binding security-level__value_silver" ng-class="{
                    &#39;security-level__value_open&#39;: isOpenLevesl,
                    &#39;security-level__value_gold&#39;: tariff == &#39;Gold&#39;,
                    &#39;security-level__value_silver&#39;: tariff == &#39;Silver&#39;
                    }">Silver</div>
                    </div>
        
                </div>
                </div>
            </div>
            <div class="col-md-2"></div>
            </div>
            <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="calculator ng-scope" ng-controller="calculator">
                <div class="toggle"><a href="https://cryptomixer.io/#" ng-click="toggle($event)" class="ng-binding">Show calculator</a></div>
                <div class="row ng-hide" ng-show="show">
                    <div class="col-md-6">
                    <p>You send:</p>
                    </div><div class="code-group ng-scope" ng-if="!operation.items.length">
                        <input class="input btc ng-pristine ng-untouched ng-valid ng-empty" type="text" ng-model="sentAmount[0]" ng-keyup="updateAmounts()" />
                        <div class="address">BTC</div>
                    </div>
                    </div>
                
                    <div class="col-md-6">
                    <p>You receive <span class="quest-hint" tooltip-placement="bottom" uib-tooltip-template="&#39;receiveAmount&#39;">?</span>:</p>
                    <script type="text/ng-template" id="receiveAmount">
                        <span>Received amounts could randomly vary to prevent amount-based analysis</span>
                    </script>
                        <div class="code-group ng-scope" ng-repeat="item in items | filter:item.address.$valid">
                        <input class="input btc ng-pristine ng-untouched ng-valid ng-empty" type="text" ng-model="amounts[$index]" ng-keyup="updateFromReceive($index)" />
                        <div class="address">
                        BTC <span ng-show="items.length &gt; 1" class="ng-binding ng-hide">(100.00%)</span>
                        <span ng-show="delay &amp;&amp; item.delay &gt; 0" class="ng-hide">after <em class="ng-binding">4h 45m</em></span>
                        <span ng-hide="delay &amp;&amp; item.delay &gt; 0">immediately</span>
                        <br/><span ng-show="item.address" class="ng-hide">to <em class="ng-binding"></em></span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row ng-hide" ng-show="show">
                    <div class="col-md-12">
                    <p class="hint ng-binding">
                        Your personal fee 1.8994%+0.0005 BTC for every forward address
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-md-2"></div>
            </div>
            <div class="row continue">
            <div class="col-md-12 text-center">
                <div class="error ng-binding ng-hide" ng-show="operation.state == &#39;error&#39;"></div>
                <button class="button accept_popup_open" ng-hide="!!acceptTerms" ng-disabled="addresses.$invalid" disabled="disabled" data-popup-ordinal="0" id="open_74745021">Continue</button>
                <button class="button ng-hide" ng-show="!!acceptTerms" ng-click="submit()" ng-disabled="addresses.$invalid" disabled="disabled">Continue</button>
                <p class="lets">
                Mix my bitcoins
                </p>
            </div>
            </div>
        </div>




    <div class="status ng-hide" ng-show="operation.state == &#39;ready&#39;">
            <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="stepped step__letter">
                <div class="headline" ng-hide="operation.items.length &gt; 1">
                    <form action="https://cryptomixer.io/api/v2/operations/undefined/letterOfGuarantee?downloadAsText=true" method="GET" target="letter_frame" class="ng-pristine ng-valid">
                        <p>
        
                        <button class="button__letter visible-lg-inline" type="submit" ng-click="operation.download()">Download the Letter of Guarantee</button>
                        <button class="button__letter hidden-lg letter_popup_open" ng-click="operation.download()" data-popup-ordinal="0" id="open_98066240">Save the Letter of Guarantee</button>
                        before send us coins
                        </p>
                    </form>
                </div>
                <div class="headline ng-hide" ng-show="operation.items.length &gt; 1">
                    <p>
                    <span class="visible-lg-inline">Download Letters of Guarantee</span>
                    <span class="hidden-lg">Save Letters of Guarantee</span>
                    before send us coins:
                    </p>
        
                </div>
                {/* <iframe id="letter_frame" name="letter_frame" style="position: absolute; top: -2000px; left: -2000px" src="./CryptoMixer_files/saved_resource.html"></iframe>
                <div class="step">2</div> */}
                </div>
            </div>
            <div class="col-md-3"></div>
            </div>
            <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="stepped">
                <p class="headline ng-binding">
                    Send your coins (min 0.001, max  BTC) to:
                </p>
                <div class="row">
                    <div class="col-md-12 text-center">
                    <div class="recipient">
                        <ul>

                        </ul>

                        <div class="add-address" ng-click="operation.duplicate()" ng-hide="operation.duplicating">Add incoming address</div>
                        <div class="loading ng-hide" ng-show="operation.duplicating"></div>
                    </div>
                    <div class="operation-error ng-binding ng-hide" ng-show="operation.error"></div>
                    </div>
                </div>
                <div class="calculator ng-scope" ng-controller="calculator">
                    <div class="toggle"><a href="https://cryptomixer.io/#" ng-click="toggle($event)" class="ng-binding">Show calculator</a></div>
                    <div class="row ng-hide" ng-show="show">
                    <div class="col-md-6">
                        <p>You send:</p>
                
                
                        </div><div class="code-group ng-scope" ng-if="!operation.items.length">
                        <input class="input btc ng-pristine ng-untouched ng-valid ng-empty" type="text" ng-model="sentAmount[0]" ng-keyup="updateAmounts()" />
                        <div class="address">BTC</div>
                        </div>
                    </div>
                
                    <div class="col-md-6">
                        <p>You receive <span class="quest-hint" tooltip-placement="bottom" uib-tooltip-template="&#39;receiveAmount&#39;">?</span>:</p>
                        <script type="text/ng-template" id="receiveAmount">
                        <span>Received amounts could randomly vary to prevent amount-based analysis</span>
                        </script>
                        <div class="code-group ng-scope" ng-repeat="item in items | filter:item.address.$valid">
                        <input class="input btc ng-pristine ng-untouched ng-valid ng-empty" type="text" ng-model="amounts[$index]" ng-keyup="updateFromReceive($index)" />
                        <div class="address">
                            BTC <span ng-show="items.length &gt; 1" class="ng-binding ng-hide">(100.00%)</span>
                            <span ng-show="delay &amp;&amp; item.delay &gt; 0" class="ng-hide">after <em class="ng-binding">4h 45m</em></span>
                            <span ng-hide="delay &amp;&amp; item.delay &gt; 0">immediately</span>
                            <br /><span ng-show="item.address" class="ng-hide">to <em class="ng-binding"></em></span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="row ng-hide" ng-show="show">
                    <div class="col-md-12">
                        <p class="hint ng-binding">
                        Your personal fee 1.8994%+0.0005 BTC for every forward address
                        </p>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                    <div class="qr-code ng-scope" ng-if="!operation.isSuccess() &amp;&amp; !operation.current.InputAddress">
                        preloader
                    </div>
                    <div class="success ng-hide" ng-show="operation.isSuccess()"></div>
                    </div>
                </div>
                <div class="step">3</div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>

</div>
          
        )
      }
      
}