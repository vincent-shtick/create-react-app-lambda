/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ec23a376f581130e4b4e65c").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class DetailStadView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/DetailStadController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DetailStadView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== DetailStadView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/relais-chateux.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div data-collapse="small" data-animation="default" data-duration={400} role="banner" className="af-class-navbar w-nav">
              <div className="af-class-navbar-container w-container"><a href="#" className="af-class-nav-logo w-nav-brand"><img src="images/Logo-new.png" alt className="af-class-nav-logo-img" /><img src="images/logo.png" alt className="af-class-nav-logo-img-mobile" /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" className="af-class-nav-link w-nav-link">ROUTE&nbsp;DU&nbsp;BONHEUR</a><a href="#" className="af-class-nav-link w-nav-link">STEL&nbsp;JE&nbsp;PAKKET&nbsp;SAMEN</a></nav>
                <div data-w-id="657eeace-471d-bd24-87ea-8fbee81ceb55" className="af-class-menu-button w-nav-button">
                  <div data-w-id="6b2f7e6b-8476-12dc-f521-c5264ef55bec" className="af-class-burger-3">
                    <div className="af-class-b3-top-wrap">
                      <div className="af-class-b3-bar1" />
                      <div className="af-class-b3-middlebar-base">
                        <div className="af-class-b3-middlebar-top" />
                        <div className="af-class-b3-middlebar" />
                      </div>
                      <div className="af-class-b3-bar3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-row">
              <div className="af-class-container">
                <div className="af-class-header">
                  <div className="af-class-header-title">
                    <h1 className="af-class-heading">Ontdek Brugge en omgeving op jouw Route du Bonheur</h1>
                  </div>
                  <div className="af-class-header-line" />
                  <div className="af-class-header-hotel-block">
                    <div className="af-class-header-hotel-img"><img src="images/Brugge-web.jpg" alt className="af-class-image-2" /></div>
                    <div className="af-class-header-hotel-text">
                      <p className="af-class-body-p">Ga je op Route du Bonheur?<br />Verblijf in Hotel Heritage, Brugge</p>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p">BEKIJK&nbsp;HET&nbsp;HOTEL</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-row">
              <div className="af-class-container">
                <div className="af-class-text-block_center">
                  <p className="af-class-body-p">In Brugge Itaquia dipsae et et lam et apit pe voloreprovid eicatio doleseressi serfereium quibea nonsenducim eos era estium verehen diorerro moluptinis veruptatus, et eum cum ipsant dolore eum verfera veliquam nistempori rempos repel eum si utem et la voluptas andundi test re pratemp oritatu sdaecto et porepudit facestis cum lanit alibus et officil lecestrum re consequid mincit aut minctat. Xeratiam essunt. Gitaqui duciducidi con pa simolum rem quae laborero bere sit et dollore rsperum re dolorio dit atio consenda volenti aspelenimi, ommoloreped molorias quis rem aut audam quia quia quatatur aborepe rumque lam, ulparch ictions equiant, </p>
                </div>
              </div>
            </div>
            <div className="af-class-row">
              <div className="af-class-container">
                <div className="af-class-features-grid">
                  <div className="af-class-feature">
                    <div className="af-class-feature-img"><img src="images/Boat-tour.jpg" alt className="af-class-feature-image" /></div>
                    <div className="af-class-feature-text">
                      <h4 className="af-class-h4">Gegidste boottocht op de Brugse Reien </h4>
                      <p className="af-class-body-p">Een bezoek aan Brugge is niet compleet zonder een tochtje op de Brugse reien. Een ideale manier om de meest bijzondere plekjes van de stad vanuit een heel andere hoek te bewonderen.</p>
                    </div>
                  </div>
                  <div className="af-class-feature af-class-feature-left">
                    <div className="af-class-feature-text af-class-feature-left">
                      <h4 className="af-class-h4">Fietstochten vanuit Brugge en uitstap naar Damme</h4>
                      <p className="af-class-body-p">Vanuit Brugge heb je heel wat leuke fietsroutes. &nbsp;Fiets door het Brugse ommeland naar het schilderachtige Damme en Lissewege of trek een dagje naar zee met de fiets.</p>
                    </div>
                    <div className="af-class-feature-img af-class-feature-left"><img src="images/brugge-2.jpg" srcSet="images/brugge-2-p-500.jpeg 500w, images/brugge-2.jpg 590w" sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, 45vw" alt className="af-class-feature-image" /></div>
                  </div>
                  <div className="af-class-feature">
                    <div className="af-class-feature-img"><img src="images/brugge-3.jpg" srcSet="images/brugge-3-p-500.jpeg 500w, images/brugge-3.jpg 590w" sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, 45vw" alt className="af-class-feature-image" /></div>
                    <div className="af-class-feature-text">
                      <h4 className="af-class-h4">Kastelen bezoeken tijdens de Kastelenfietsroute </h4>
                      <p className="af-class-body-p">Volg de kasteelroute met de fiets of trek er met de auto op uit en ontdek 10 kastelen in de bosgebieden van het Brugse Ommeland.</p>
                    </div>
                  </div>
                  <div className="af-class-feature af-class-feature-left">
                    <div className="af-class-feature-text af-class-feature-left">
                      <h4 className="af-class-h4">Flanders Fields bezoeken </h4>
                      <p className="af-class-body-p">Ga op daguitstap naar de Westhoek en herbeleef de geschiedenis van de Eerste Wereldoorlog tijdens een bezoek aan Flanders Fields. </p>
                    </div>
                    <div className="af-class-feature-img"><img src="images/Flanders-Fields---Soldiers.jpg" alt className="af-class-feature-image" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-row">
              <div className="af-class-container">
                <div className="af-class-text-block_title">
                  <p className="af-class-paragraph">Een romantisch uitje, badend in luxe en geschiedenis</p>
                </div>
              </div>
            </div>
            <div className="af-class-row">
              <div className="af-class-container">
                <div className="af-class-hotel-info">
                  <div className="af-class-hotel-info-text">
                    <div className="af-class-hotel-info-title">
                      <div className="af-class-hotel-info-text-title">
                        <h4 className="af-class-h4">Hotel Heritage</h4>
                        <div className="af-class-stars-title">
                          <div className="af-class-star" />
                          <div className="af-class-star" />
                          <div className="af-class-star" />
                          <div className="af-class-star" />
                        </div>
                      </div>
                    </div>
                    <p className="af-class-body-p af-class-bottom-40">Dit elegant en luxueus boetiekhotel in een 19de-eeuws herenhuis draagt de titel van het meest romantische hotel ter wereld. Kan je je een betere plek bedenken om samen als koppel de historische stad te ontdekken? Een ideale uitvalsbasis voor gegidste tochten, ritjes in een authentieke paardenkoets of een rondvaart op de Brugse Reien. Van hieruit verken je het Brugse Ommeland tijdens een fietstocht langs het schilderachtige Damme of volg je de kasteelroute door de bosgebieden. In Hotel Heritage zorgt chef-kok Gregory Slembrouck bovendien voor lokale en seizoensgebonden gerechten in restaurant Le Mystique, door Michelin bekroond met drie rode vorken.</p><a href="#" className="af-class-link">Meer info vind u op de website van het hotel</a>
                    <div className="af-class-hotel-info-specs">
                      <div>
                        <p className="af-class-paragraph-2">TripAdvisor:<br />Gault &amp; Millau:<br />Michelin:</p>
                      </div>
                      <div className="af-class-div-block">
                        <div className="af-class-stars">
                          <div className="af-class-star" />
                          <div className="af-class-star" />
                          <div className="af-class-star" />
                          <div className="af-class-star" />
                          <div className="af-class-star" />
                        </div>
                        <p>1<br />‍3 rode vorken</p>
                      </div>
                    </div>
                    <a href="#" className="af-class-button w-inline-block">
                      <p className="af-class-button-p"><strong>IK WIL EEN PAKKET SAMENSTELLEN</strong></p>
                    </a>
                  </div>
                  <div className="af-class-hotel-info-slider">
                    <div data-animation="slide" data-duration={500} data-infinite={1} className="af-class-slider w-slider">
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <div className="af-class-hotel-slide"><img src="images/brugge-3.jpg" srcSet="images/brugge-3-p-500.jpeg 500w, images/brugge-3.jpg 590w" sizes="(max-width: 479px) 92vw, (max-width: 686px) 86vw, (max-width: 767px) 590px, 45vw" alt className="af-class-image" /></div>
                        </div>
                        <div className="w-slide">
                          <div className="af-class-hotel-slide"><img src="images/Brugge-web.jpg" alt className="af-class-image" /></div>
                        </div>
                      </div>
                      <div className="af-class-left-arrow w-slider-arrow-left">
                        <div className="w-icon-slider-left" />
                      </div>
                      <div className="af-class-right-arrow w-slider-arrow-right">
                        <div className="w-icon-slider-right" />
                      </div>
                      <div className="w-slider-nav w-round" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-row af-class-row-color">
              <div className="af-class-container">
                <div className="af-class-pakket">
                  <div className="af-class-pakket-title">
                    <h2 className="af-class-pakket-title_h">Stel deze zomer je eigen Route du Bonheur samen.</h2>
                  </div>
                  <div className="af-class-pakket-features">
                    <div className="af-class-pakket-features-list">
                      <p className="af-class-pakket-feature"> Selecteer hotels naar keuze. </p>
                      <p className="af-class-pakket-feature">Geniet van de uitzonderlijke voorwaarden van 99 euro per persoon, per nacht (inclusief ontbijt).</p>
                      <p className="af-class-pakket-feature">Bespaar minimaal 80 euro per overnachting.</p>
                      <p className="af-class-pakket-feature">Trek op luxueuze rondreis in eigen land.</p>
                    </div>
                  </div>
                  <div className="af-class-pakket-btn">
                    <a href="#" className="af-class-button w-inline-block">
                      <p className="af-class-button-p"><strong>IK WIL EEN PAKKET SAMENSTELLEN</strong></p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-row">
              <div className="af-class-container-wide">
                <div className="af-class-regio">
                  <p className="af-class-regio-p">Bekijk ook de andere regio's</p>
                  <div className="af-class-regio-item">
                    <div className="af-class-regio-img">
                      <div className="af-class-regio-img-big"><img src="images/Brugge-web.jpg" alt className="af-class-regio-image" /></div><img src="images/ruit.png" alt className="af-class-regio-ruit" /></div>
                    <div className="af-class-regio-text">
                      <h1 className="af-class-regio-title">Het trendy Antwerpen <br />van Hotel Franq</h1>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p"><strong>MEER WETEN</strong></p>
                      </a>
                    </div>
                  </div>
                  <div className="af-class-regio-item af-class-right">
                    <div className="af-class-regio-text af-class-left">
                      <h1 className="af-class-regio-title">De Kempense natuur <br />van La Butte aux Bois</h1>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p"><strong>MEER WETEN</strong></p>
                      </a>
                    </div>
                    <div className="af-class-regio-img">
                      <div className="af-class-regio-img-big"><img src="images/Brugge-web.jpg" alt className="af-class-regio-image" /></div><img src="images/Ruit-kempen.png" alt className="af-class-regio-ruit" /></div>
                  </div>
                  <div className="af-class-regio-item">
                    <div className="af-class-regio-img">
                      <div className="af-class-regio-img-big"><img src="images/Brugge-web.jpg" alt className="af-class-regio-image" /></div><img src="images/Ruit-ardennen.png" alt className="af-class-regio-ruit" /></div>
                    <div className="af-class-regio-text">
                      <h1 className="af-class-regio-title">De pure Ardennen <br />van Château de Vignée</h1>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p"><strong>MEER WETEN</strong></p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-row af-class-row-color">
              <div className="af-class-container-wide">
                <div className="af-class-hotels">
                  <div id="w-node-202e2d258c5c-01b4e65d" className="af-class-hotels-item">
                    <div className="af-class-hotel-item-img"><img src="images/Brugge-web.jpg" alt className="af-class-image-3" /></div>
                    <p className="af-class-body-p af-class-hotel-item-p">Hotel Heritage, Brugge</p>
                    <a href="#" className="af-class-button w-inline-block">
                      <p className="af-class-button-p"><strong>MEER WETEN</strong></p>
                    </a>
                  </div>
                  <div className="af-class-hotels-item">
                    <div className="af-class-hotel-item-img"><img src="images/Brugge-web.jpg" alt className="af-class-image-3" /></div>
                    <p className="af-class-body-p af-class-hotel-item-p">Hotel Franq, Antwerpen</p>
                    <a href="#" className="af-class-button w-inline-block">
                      <p className="af-class-button-p"><strong>MEER WETEN</strong></p>
                    </a>
                  </div>
                  <div className="af-class-hotels-item">
                    <div className="af-class-hotel-item-img"><img src="images/Brugge-web.jpg" alt className="af-class-image-3" /></div>
                    <p className="af-class-body-p af-class-hotel-item-p">Château de Vignée, Rochefort</p>
                    <a href="#" className="af-class-button w-inline-block">
                      <p className="af-class-button-p"><strong>MEER WETEN</strong></p>
                    </a>
                  </div>
                  <div className="af-class-hotels-item">
                    <div className="af-class-hotel-item-img"><img src="images/Brugge-web.jpg" alt className="af-class-image-3" /></div>
                    <p className="af-class-body-p af-class-hotel-item-p">La Butte aux Bois, Lanaken</p>
                    <a href="#" className="af-class-button w-inline-block">
                      <p className="af-class-button-p"><strong>MEER WETEN</strong></p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-row">
              <div className="af-class-container">
                <div className="af-class-footer">
                  <div className="af-class-footer-newsletter">
                    <h1 className="af-class-h4">NEWSLETTER</h1>
                    <p className="af-class-body-p">Get the inside scoop about gourmet experiences &amp; luxurious hotels. Find out the latest news and be the first to know about our exclusive offers, by subscring to our newsletter</p>
                  </div>
                  <div className="af-class-footer-apps">
                    <h1 className="af-class-h4">MOBILE APPS</h1>
                    <p className="af-class-body-p">Download our apps to discover and book our exquisite hotels and fine dining restaurants worldwide</p>
                    <div className="af-class-appstore-images"><a href="#" className="w-inline-block"><img src="images/googleplay.png" alt className="af-class-appstore-img" /></a><a href="#" className="w-inline-block"><img src="images/applestore.png" alt className="af-class-appstore-img" /></a></div>
                    <div className="af-class-social-icons">
                      <div className="af-class-social-icon af-class-twitter" />
                      <div className="af-class-social-icon af-class-facebook" />
                      <div className="af-class-social-icon af-class-pintrest" />
                      <div className="af-class-social-icon af-class-instagram" />
                      <div className="af-class-social-icon af-class-linkedin" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default DetailStadView

/* eslint-enable */