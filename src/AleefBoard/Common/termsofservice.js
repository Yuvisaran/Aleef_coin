import React from 'react';
import Header from './header';
import Footer from './footer';
import {NavLink} from 'react-router-dom';
import SocialShare from './socialShare';

export default class TermsOfService extends React.Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                {/* <nav className="navbar navbar-fixed-top" id="mainNav">
					<div className="container">
						<div className="navbar-header"> */}
							{/* <Notifications />
							{this.props.loading && <div className='loaderBg'>
								<div className='loaderimg'>
									<ScaleLoader
										size={180}
										color={'#fff'}
										loading={this.props.loading}
									/>
								</div>
							</div>} */}
							{/* <button type="button" className="navbar-toggle js-scroll-trigger" data-toggle="collapse" data-target="#myNavbar">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#"><img src="src/public/img/logo.png" /></a>
						</div>
						<div className="collapse navbar-collapse" id="myNavbar">
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#" className="js-scroll-trigger">Home</a></li>
								<li><a href="#aboutUs" className="js-scroll-trigger">About Us </a></li>
								<li><a href="#ico" className="js-scroll-trigger">ICO/Referrals </a></li>
								<li><a href="#white" className="js-scroll-trigger">White Paper</a></li>
								<li><a href="#roadmap" className="js-scroll-trigger">Road Map</a></li>
								<li><a href="#team" className="js-scroll-trigger">Our Team</a></li>
								<li><a href="#feature" className="js-scroll-trigger">Features</a></li>
								<li><a href="#wallet" className="js-scroll-trigger">Wallet</a></li>
								<li><a href="#contact" className="js-scroll-trigger">Contact Us</a></li>
							</ul>
						</div>
					</div>
				</nav> */}
                <section className="contentSection">
                    <div className="termsbanner">
                        <div className="container">
                            <h2>Terms Of Service</h2>
                            <span className="breadcrumbs"><NavLink to='/'>Home</NavLink>&nbsp; /  &nbsp; Terms Of Service</span>
                        </div>

                    </div>
                    <div className="contentDetailsBg">
                        <div className="container">
                            <h3>Acceptance of Terms</h3>
                            <p>Welcome to Aleef Coin. By reading and continuing to use our site you ("You" or "Your) agree to the following Terms of Use ("ToU") and <a href="privacyPolicy.html">Privacy Policy</a>. This website is operated by Aleef Coin, Inc. ("Aleef Coin", "we" "us" "our"), #109, Al Tayera Building, Bur Dubai, Dubai, UAE. These Terms of Use govern, and constitute an Agreement between you and us regarding, your use of aleefcoin.io and all other websites operated by us, including websites dedicated to our Consensus and Construct conferences, any mobile applications operated or approved by us and any other communication tools including e-mail or any other content delivery method (collectively, the "Aleef Coin Sites").</p>
                            <p>We reserve the right at any time to:</p>
                            <ul className="contentUl">
                                <li>Change the terms and conditions of the ToU;</li>
                                <li>Change all or any portion of the Aleef Coin Sites, including eliminating or discontinuing any content or feature of the Aleef Coin Sites; or</li>
                                <li>Change other conditions for use of the Aleef Coin Sites including fees or other changes for Research (with reasonable notice, in our sole discretion).</li>
                            </ul>
                            <p>Any changes we make to the ToU will be effective immediately after we post the modified ToU on aleefcoin.io.</p>
                            <h3>Content on the Aleef Coin Sites</h3>
                            <p>All of the information and other content displayed on, transmitted through, or used in connection with the Aleef Coin Sites, including for example, advertising, directories, guides, articles, opinions, reviews, text, photographs, images, illustrations, audio clips, video, html, source and object code, software, data, the selection and arrangement of the aforementioned and the "look and feel" of the Aleef Coin Sites (collectively, the "Content"), are protected under applicable copyrights and other proprietary (including but not limited to intellectual property) rights and are the intellectual property of Aleef Coin, and its affiliated companies, licensors and suppliers. Aleef Coin actively protects its rights to the Content to the fullest extent of the law.</p>
                            <p>You may use the Content online and solely for your personal, non-commercial use, and you may download or print a single copy of any portion of the Content for your personal, non-commercial use, provided you do not remove any trademark, copyright or other notice contained in such Content. You may not, for example, republish the Content on any Internet, Intranet or Extranet site or incorporate the Content in any database, compilation, archive or cache or store the Content in electronic form on your computer or mobile device unless otherwise expressly permitted by Aleef Coin. You may not distribute any of the Content to others, whether or not for payment or other consideration, and you may not modify, copy, frame, reproduce, sell, publish, transmit, display or otherwise use any portion of the Content, except as permitted by the ToU or by securing the prior written consent of Aleef Coin.</p>
                            <p>The Content includes logotypes, trademarks and service marks (collectively "Marks") owned by Aleef Coin, and Marks owned by other information providers and third parties. For example, "Aleef" is a registered trademark of Aleef Coin, Inc. No Marks may be used in any manner unless approved in advance, in writing by Aleef Coin.</p>
                            <p>Requests to use the Content for any purpose other than as permitted in the ToU should be submitted to <a href="">info@aleefcoin.io</a>.</p>
                            <h3>Infringement Complaints</h3>
                            <p>Aleef Coin respects the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement or are aware of any infringing material placed by any third party on the Website, please contact our designated copyright agent, in writing, by email at <a href="">info@aleefcoin.io</a> , and provide the following information as required by the Online Copyright Infringement Liability Limitation Act of the Digital Millennium Copyright Act, 17 U.S.C. Section 512(c) (3):</p>
                            <ul>
                                <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
                                <li>Identification of the copyright work claimed to have been infringed;</li>
                                <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to locate the material;</li>
                                <li>Information sufficient to permit us to contact the complaining party, including address, telephone number, and e-mail address;</li>
                                <li>A statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;</li>
                                <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                            </ul>
                            <h3>Disclaimer of Warranty and Limitation of Liability</h3>
                            <p>The information, products and services on the Aleef Coin Sites are provided on a strictly "as is," "where is" and "where available" basis. Aleef Coin does not provide any warranties (either express or implied) with respect to the information provided on any Aleef Coin site and/or your use of any of the Aleef Coin Sites generally or for any particular purpose. Aleef Coin expressly disclaims any implied warranties, including but not limited to, warranties of title, non-infringement, merchantability or fitness for a particular purpose. Aleef Coin will not be responsible for any loss or damage that could result from interception by third parties of any information made available to you via the Aleef Coin Sites or any of them. Although the information provided to you on this website is obtained or compiled from sources we believe to be reliable, Aleef Coin cannot and does not guarantee the accuracy, validity, timeliness, or completeness of any information or data made available to you for any particular purpose. Neither Aleef Coin, nor any of its affiliates, directors, officers or employees, nor any third party providers of content, software and/or technology (collectively, the "Aleef Coin parties"), will be liable or have any responsibility of any kind for any loss or damage that you incur in the event of any failure or interruption of any Aleef Coin site, or resulting from the act or omission of any other party involved in making any Aleef Coin site, the data contained therein or the products or services offered thereby available to you, or from any other cause relating to your access to, inability to access, or use of any Aleef Coin site or the materials contained therein, whether or not the circumstances giving rise to such cause may have been within the control of Aleef Coin or of any vendor providing software or services.</p>
                            <p>In no event will Aleef Coin or any of the Aleef Coin parties be liable to you, whether in contract or tort, for any direct, special, indirect, consequential or incidental damages or any other damages of any kind even if Aleef Coin or any other such party has been advised of the possibility thereof. This limitation on liability includes, but is not limited to, the transmission of any viruses which may infect a user's equipment, failure of mechanical or electronic equipment or communication lines, telephone or other interconnect problems (e.g., you cannot access your internet service provider), unauthorized access, theft, operator errors, strikes or other labor problems or any force majeure. Aleef Coin cannot and does not guarantee continuous, uninterrupted or secure access to any of the Aleef Coin Sites.</p>
                            <h3>Disclaimer</h3>
                            <p>All writers' opinions are their own and do not constitute financial advice in any way whatsoever. Nothing published by Aleef Coin constitutes an investment recommendation, nor should any data or Content published by Aleef Coin be relied upon for any investment activities.</p>
                            <p>Aleef Coin strongly recommends that you perform your own independent research and/or speak with a qualified investment professional before making any financial decisions.</p>
                            <h3>Links to other sites</h3>
                            <p>Certain links, including hypertext links, in our site will take you to external websites. These are provided for your convenience and inclusion of any link does not imply endorsement or approval by Aleef Coin of the linked site, its operator or its content. Each of those websites have their own "Terms and Conditions." We are not responsible for the content of any website outside of the Aleef Coin Sites. We do not monitor and assume no duty to monitor the content of any such third-party websites.</p>
                            <h3>Use of cookies</h3>
                            <p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
                            <p>These cookies are used to collect information about how visitors use our site. We use the information to compile reports and to help us improve the site. The cookies collect information in an anonymous form, including the number of visitors to the site, where visitors have come to the site from and the pages they visited.</p>
                            <p>By using our website, you agree that we can place these types of cookies on your device.</p>
                            <h3>Choice of Law</h3>
                            <p>The ToU and the agreement formed hereby ("Agreement") shall be governed by, and construed and enforced in accordance with, the laws of the State of New York, without regard to conflicts of laws provisions. Unless otherwise agreed in writing by you and us, any dispute arising out of or relating to the Agreement, or the breach hereof, shall be finally resolved by arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules, or such arbitration body as required by law, rule or regulation, and judgment upon the award rendered by the arbitrator may be entered in any court having jurisdiction. The arbitration will be conducted in the English language before a single arbitrator in the City of New York, New York. Such arbitration must be commenced within one (1) year after the claim or cause of action arises. If for any reason any provision of this Agreement, or a portion thereof, shall be unenforceable, that provision shall be enforced to the maximum extent permissible so as to effect the intent of this Agreement, and the remainder of this Agreement shall continue in full force and effect. This Agreement constitutes the entire agreement between us and you with respect to the Aleef Coin Sites and it supersedes all prior or contemporaneous communications, agreements and understandings between us and you with respect to the subject matter hereof. A printed version of this Agreement shall be admissible in judicial or administrative proceedings.</p>
                        </div>
                    </div>

                </section>

                {/* <aside className="shareSocialBg">
                    <ul>
                        <li className="share"><a ><img src="src/public/img/sharing.png" /></a></li>
                        <li className="facebook"><a className="w-inline-block social-share-btn fb" href="https://www.facebook.com/sharer/sharer.php?u=&t=" title="Share on Facebook" target="_blank" onClick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;"><img src="src/public/img/facebook.png" /></a></li>
                        <li className="twitter"><a className="w-inline-block social-share-btn tw" href="https://twitter.com/intent/tweet?" target="_blank" title="Tweet" onClick="window.open('https://twitter.com/intent/tweet?text=%20Check%20up%20this%20awesome%20content' + encodeURIComponent(document.title) + ':%20 ' + encodeURIComponent(document.URL)); return false;"><img src="src/public/img/twitter.png" /></a></li>
                        <li className="googlePlus"><a className="w-inline-block social-share-btn gplus" href="https://plus.google.com/share?url=" target="_blank" title="Share on Google+" onClick="window.open('https://plus.google.com/share?url=' + encodeURIComponent(document.URL)); return false;"><img src="src/public/img/google-plus.png" /></a></li>
                        <li className="linked"><a className="w-inline-block social-share-btn lnk" href="http://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=" target="_blank" title="Share on LinkedIn" onClick="window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title)); return false;"><img src="src/public/img/linkedin.png" /></a></li>
                        <li className="reddit"><a className="w-inline-block social-share-btn redd" href="http://www.reddit.com/submit?url=&title=" target="_blank" title="Submit to Reddit" onClick="window.open('http://www.reddit.com/submit?url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title)); return false;"> <img src="src/public/img/reddit.png" /></a></li>
                    </ul>
                </aside> */}
                <SocialShare/>
                <Footer/>
            </div>
        )
    }
}