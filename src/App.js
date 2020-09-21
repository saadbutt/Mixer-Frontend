import React from 'react';
import './App.css';
import Instructions from './Instructions';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
       
      

      <body ng-controller="maintanance" class="ng-scope"><div id="letter_popup_background" class="popup_background" style={{opacity: '0', visibility: 'hidden', backgroundColor: 'black', position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px', zIndex: '100000'}}></div><div id="letter_popup_wrapper" class="popup_wrapper" style={{opacity: '0', visibility: 'hidden', position: 'fixed', overflow: 'auto', zIndex: '100001', width: '100%', height: '100%', top: '0px', left: '0px', textAlign: 'center', display: 'none'}}><div class="popup popup_content" id="letter_popup" data-popup-initialized="true" aria-hidden="true" role="dialog" aria-labelledby="open_98066240" style={{opacity: '0', visibility: 'hidden', display: 'inline-block', outline: 'none', textAlign: 'left', position: 'relative', verticalAlign: 'middle'}}>
          <span class="letter_popup_close close_button"></span>
          <h3>
            Copy and save Letter of a Guarantee
          </h3>
          <textarea class="letter-textarea ng-pristine ng-untouched ng-valid ng-empty" ng-model="operation.current.Letter"></textarea>
          <p class="text-center">
            <button class="button" ng-click="selectLetterText()">Select all</button>
          </p>
        </div><div class="popup_align" style={{display: "inline-block",height: "100%"}}></div></div><div id="accept_popup_background" class="popup_background" style={{opacity: '0', visibility: 'hidden', backgroundColor: 'black', position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px', zIndex: '100000'}}></div><div id="accept_popup_wrapper" class="popup_wrapper" style={{opacity: '0', visibility: 'hidden', position: 'fixed', overflow: 'auto', zIndex: '100001', width: '100%', height: '100%', top: '0px', left: '0px', textAlign: 'center', display: 'none'}}><div class="popup popup_content" id="accept_popup" data-popup-initialized="true" aria-hidden="true" role="dialog" aria-labelledby="open_74745021" style={{opacity: '0', visibility: 'hidden', display: 'inline-block', outline: 'none', textAlign: 'left', position: 'relative', verticalAlign: 'middle'}}>
          <span class="accept_popup_close close_button"></span>
          <div class="popup_content">
            <h3>
              Please check and accept important terms
            </h3>
            <p>
              <label>Incoming address is valid only for 24 hours. All further payments will be ignored. We do not store links between incoming and target addresses after operation is proceeded. Please, download the Letter of Guarantee before you send us coins. This will be a proof of your transaction.</label>
            </p>
            <p>
              <input id="acceptTerms" name="acceptTerms" type="checkbox" ng-model="acceptTerms" class="ng-pristine ng-untouched ng-valid ng-empty" /><label for="acceptTerms"><span></span>Don’t ask me again</label>
            </p>
            <p class="text-center">
              <button class="button accept_popup_close" ng-click="acceptAndSubmit()">Accept</button>
            </p>
          </div>
        </div><div class="popup_align" style={{display: 'inline-block', verticalAlign: 'middle', height: '100%'}}></div></div>

<div class="wrapper" ng-hide="maintanance">
  <div class="section-row">
    <nav class="navbar navbar-default">
      <div class="row">
        <div class="col-md-5">
          <h4 class="header-quest">
            <a href="https://cryptomixer.io/how.html">How does it work? </a>
          </h4>
        </div>
        <div class="col-md-2 logo">
          <div class="navbar-header">
            <button aria-controls="navbar" aria-expanded="false" class="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="https://cryptomixer.io/"><span class="green">Coin</span><span>Mixer</span></a>
          </div>
        </div>
        <div class="col-md-5">
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="nav navbar-nav">
              <li class="nav-item__howitworks">
                <a href="https://cryptomixer.io/how.html">How does it work</a>
              </li>
              <li class="nav-item__why">
                <a href="https://cryptomixer.io/why.html">Why should I mix my coins</a>
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
    <div class="container ng-scope" ng-controller="mixer">
      
      <div class="intro" ng-hide="inited">
        <div class="intro">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 ng-scope" ng-controller="attention">
              <div class="attention ng-binding ng-hide" ng-show="message">
                
              </div>
              
              
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 intro-header">
              <h1 class="text-center">
                High volume Coin mixer
              </h1>
              <h2 class="text-center">Securing your coins since 2016 <a href="https://bitcointalk.org/index.php?topic=1484009.0" target="_blank">[ANN]</a></h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="intro-picture">
                <img src="./CryptoMixer_files/index3.png" class="img-responsive" alt="best bitcoin tumbler" />
              </div>
            </div>
            <div class="col-md-6 intro-why">
              <h3 style={{textTransform: 'uppercase'}}>
                Securing your coins since 2016 <a href="https://bitcointalk.org/index.php?topic=1484009.0" target="_blank">[ANN]</a>
              </h3>
              <p>
                CoinMixer.io was built from ground up with inputs from the <a href="https://bitcointalk.org/index.php?topic=1484009.0" target="_blank">Bitcoin community</a>.
We understand our operation runs on trust and protect our reputation with the highest efforts.
We produce a “Letter of Guarantee” for every transaction within the system.
Our support is ready to be at your service round the clock.
We are on a mission to make transactions safer and untraceable while contributing towards privacy over internet transactions.
              </p>
              <p>
                <a href="https://cryptomixer.io/why.html">Why should I mix my coins?</a>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <button class="button" onClick={<Instructions />}>Start Bitcoin</button>
            </div>
          </div>
        
          <div class="row seo seo_m55">
            <div class="col-md-12">
              <h2 class="seo__header">Warrant Canary</h2>
              <p>We confirm that we take full control of our infrastructure. It has never been compromised or suffered a data breach. We have not disclosed any information of our users, and we have not been forced to modify our system to allow access or data leakage to a third party of any kind.</p>
              <h3 style={{fontWeight: 'normal'}}>As of <span ng-bind="currentDate |  date:&#39;MMMM dd, yyyy&#39;" class="ng-binding">September 01, 2020</span> we state the following:</h3>
              <ul>
                <li>We have NOT received any National Security letters;</li>
                <li>We have NOT received any gag orders;</li>
                <li>We have NOT received any warrants from any government organization.</li>
              </ul>
              <p>We are 100% committed to our zero-logs policy — we never log the activities of our users to ensure their ultimate privacy and security.</p>
            </div>
          </div>
        
          <div class="row seo">
        
            <div class="col-md-12">
              <h2 class="seo__header">Keep your funds untraceable with the reliable
Coin mixer</h2>
              <p>Since the dawn of the digital age, millions of users have made a switch to Blockchain that is claimed to change the way we pay for goods and conduct transactions. No wonder it is a game-changing technology that makes a difference and brings complete privacy. But what you might not know is that Blockchain records all transactions in its publicly available ledger, meaning that third parties can trace them should the need arise. If it’s not that level of confidentiality you’ve expected, be sure to take advantage of our coin mixer.</p>
              <p>CoinMixer is a Bitcoin mixing service (also known as a tumbler or blender) that is centered around the idea of making your digital assets hidden from the public eye for good. As the name implies, it works by mixing your coins with those in our cryptocurrency reserves to ensure private transactions without a trace. CryptoMixer helps you make your BTCs unidentifiable and, thus, allows you to rest easy knowing that neither crypto-hackers nor security agencies can keep track of your financial activities.</p>
              <h3>Why our Bitcoin tumbler stands out from the rest</h3>
              <p>What forms the pillar of CoinMixer is that it has been designed with the needs of Bitcoin community members in mind. It is your privacy and security that underpin our mixing service and encourage us to turn all decentralized opportunities to your advantage. That is why we’ve done our utmost to incorporate the following features into our Bitcoin blender:</p>
              <strong><img src="./CryptoMixer_files/success2.svg" alt="" /> The highest level of protection</strong>
              <p>Our servers use advanced encryption methods to ensure the integrity of all data stored and minimize the risk of the Blockchain analysis. What is more, we provide every user with a unique code to prevent mixing their coins with the ones they’ve sent to us before. Apart from that, we regularly delete all details of your transactions, including incoming Bitcoin addresses.</p>
              <strong><img src="./CryptoMixer_files/success2.svg" alt="" /> Impressive mixing capabilities</strong>
              <p>Whether you’re looking to mix 0.001 BTC or several hundreds of coins, you won’t find a more convenient service than our Bitcoin tumbler. CryptoMixer has over 2000 BTC in its cryptocurrency reserves, which allows you to exchange large amounts of BTC without waiting for other users to send their coins for mixing.</p>
              <strong><img src="./CryptoMixer_files/success2.svg" alt="" /> Low fees and the Letter of Guarantee</strong>
              <p>While other Bitcoin mixing services charge 1% and more for each transaction, CryptoMixer helps you avoid overspending. Our fees start only at 0.5% + 0.0005 BTC and can be customized to make it impossible for third parties to spot the connection between addresses.</p>
            </div>
          </div>
        </div>
      </div>










     







      

      









        
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center wait-payment">
              <a class="update active" ng-class="{active: !operation.isSuccess()}" href="https://cryptomixer.io/#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
              <p ng-show="operation.current.InputCount == 0 || operation.isSuccess()" class="ng-hide">
                <strong>Do you know:</strong> When you use CryptoMixer with the same code, you pay less service fee! Your CryptoMixer code is: <b class="ng-binding"></b>. Save it! See <a href="https://cryptomixer.io/fees.html" target="_blank">Fees</a> for details.
              </p>
              <div ng-show="operation.current.InputCount &gt; 0 &amp;&amp; !operation.isSuccess()" class="ng-hide">
                <p ng-show="operation.current.InputCount == 0" class="ng-binding ng-hide">Received  BTC</p>
                <p ng-show="operation.current.InputCount == 1" class="ng-binding ng-hide">Received  BTC, <ng-pluralize count="operation.current.LastInputConfirmations" when="{&#39;0&#39;: &#39;0 confirmations&#39;, &#39;one&#39;: &#39;1 confirmation&#39;,&#39;other&#39;: &#39;{} confirmations&#39;}"></ng-pluralize></p>
                <p ng-show="operation.current.InputCount &gt; 1" class="ng-binding ng-hide">Total received  BTC, Last has <ng-pluralize count="operation.current.LastInputConfirmations" when="{&#39;0&#39;: &#39;0 confirmations&#39;, &#39;one&#39;: &#39;1 confirmation&#39;,&#39;other&#39;: &#39;{} confirmations&#39;}"></ng-pluralize></p>
                <p ng-show="operation.current.OutputCount &gt; 0" class="ng-hide">
                  Outputs:
                  <span ng-show="!operation.current.PendingOutputAmount" class="ng-binding"> Sent</span>
                  <span ng-show="!operation.current.SentOutputAmount" class="ng-binding"> Pending</span>
                  <span ng-show="operation.current.SentOutputAmount &amp;&amp; operation.current.PendingOutputAmount" class="ng-binding ng-hide"> Sent,  Pending</span>
                </p>
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
            <a href="faq.html">FAQ</a>
          </li>
          <li>
            <a href="javascript:zE.activate()">Contacts</a>
          </li>
          <li>
          </li>
        </ul>
        <div class="donations">Donations: <a href="https://cryptomixer.io/donate.html" target="_blank">1CrypMixXWtTjYGCM5ZJmyQYP1Y39P7aLM</a></div>
        <div>Official TOR mirror: <a href="http://cryptomixns23scr.onion/">cryptomixns23scr.onion</a>

        </div>
      </footer>
    </div>
  </div>

  <div class="feedbackWidget ng-scope" ng-controller="feedbackWidget">
    <div ng-show="opened" class="feedbackButton feedbackButton__mail ng-hide" ng-click="mailto()"></div>
    <div ng-show="opened &amp;&amp; !chatLoading" class="feedbackButton feedbackButton__chat ng-hide" ng-click="openChat()"></div>
    <div ng-show="chatLoading" class="feedbackButton feedbackButton__loading ng-hide"></div>
    <div ng-hide="opened" class="feedbackButton feedbackButton__help" ng-click="open()"></div>
    <div ng-show="opened" class="feedbackButton feedbackButton__close ng-hide" ng-click="close()"></div>
  </div>


  <script src="./CryptoMixer_files/build.js"></script>
</body>

</header>
    </div>
  );
}

export default App;
