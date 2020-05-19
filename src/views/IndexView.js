/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ec23a376f581130e4b4e65c").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

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
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {

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
                <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">ROUTE&nbsp;DU&nbsp;BONHEUR</a><a href="#" className="af-class-nav-link w-nav-link">STEL&nbsp;JE&nbsp;PAKKET&nbsp;SAMEN</a></nav>
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
              <div className="af-class-container" />
            </div>
            <div className="af-class-row">
              <div className="af-class-container">
                <div className="af-class-text-left">
                  <p className="af-class-body-p af-class-body-p-alone">Leuke wandelpaden, fietstochten langs velden en bossen of hoeves met lekkere streekproducten. Er zijn verrassend veel verborgen parels dicht bij huis. Dus wat dacht je ervan om deze zomer in alle comfort het eigen land te herontdekken? Op rondreis langs historische centra, creatieve cultuursteden, verrassende boetiekjes, zonnige terrasjes, mooie natuurgebieden en de heerlijke restaurantkeukens. We nemen je mee op de Route Du Bonheur. Een naam die waarmaakt wat hij belooft. Want België heeft alles voor een onvergetelijke zomervakantie. </p>
                </div>
              </div>
            </div>
            <div className="af-class-row">
              <div className="af-class-container">
                <h1 className="af-class-h2-center">Beleef België tijdens een luxerondreis zonder zorgen.</h1>
              </div>
            </div>
            <div className="af-class-row-mega">
              <div className="af-class-container-mega-wide">
                <div className="af-class-about">
                  <div className="af-class-mega-half">
                    <div data-animation="slide" data-duration={500} data-infinite={1} className="af-class-slider-2 w-slider">
                      <div className="w-slider-mask">
                        <div className="w-slide" />
                        <div className="w-slide" />
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
                  <div className="af-class-mega-half">
                    <div className="af-class-about-content">
                      <p className="af-class-paragraph-3">Herontdek de romantiek en de geschiedenis van Brugge of trek met de fiets het Brugse Ommeland in. Ga op citytrip in het kloppend hart van Antwerpen en beleef de stad op wandelafstand. Geniet van de natuur in Rochefort, in het hart van de Ardennen. &nbsp;Ga in Lanaken wandelen in het Nationaal Park Hoge Kempen of laat er jezelf helemaal verwennen. Beleef België tijdens de Route du Bonheur, een concept van de gerenommeerde Relais &amp; Châteaux hotels. </p>
                      <div className="af-class-about-regios">
                        <p className="af-class-body-p">Je kiest je eigen vakantie-ervaring. Je stelt dus zelf je ideale rondreis samen. Altijd in hedendaagse luxe, met topgastronomie op Michelin niveau, met alle aandacht voor je welzijn en gezondheid. En bovendien aan uitzonderlijke tarieven.</p>
                        <a href="#" className="af-class-button-whte af-class-top-20 w-inline-block">
                          <p className="af-class-button-p"><strong>ONTDEK&nbsp;DE&nbsp;4&nbsp;REGIO'S</strong></p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-row af-class-row-color">
              <div className="af-class-container">
                <div className="af-class-pakket-redirect">
                  <div className="af-class-pakket-redirect-text">
                    <h2 className="af-class-pakket-r-title_h">Stel deze zomer je eigen Route du Bonheur samen.</h2>
                    <div className="af-class-pakket-r-features-list">
                      <p className="af-class-pakket-feature"> Selecteer hotels naar keuze. </p>
                      <p className="af-class-pakket-feature">Geniet van de uitzonderlijke voorwaarden van 99 euro per persoon, per nacht (inclusief ontbijt).</p>
                      <p className="af-class-pakket-feature">Bespaar minimaal 80 euro per overnachting.</p>
                      <p className="af-class-pakket-feature">Trek op luxueuze rondreis in eigen land.</p>
                    </div>
                    <a href="#" className="af-class-button w-inline-block">
                      <p className="af-class-button-p"><strong>IK WIL EEN PAKKET SAMENSTELLEN</strong></p>
                    </a>
                  </div>
                  <div className="af-class-pakket-redirect-img">
                    <div className="af-class-div-block-2"><img src="images/Brugge-web.jpg" alt className="af-class-image-6" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-row">
              <div className="af-class-container-wide">
                <div className="af-class-regio">
                  <p className="af-class-regio-p">4 gerenommeerde Relais &amp; Châteaux hotels voor een overgetelijke rondreis in eigen land</p>
                  <div className="af-class-regio-item af-class-right">
                    <div className="af-class-regio-text af-class-left">
                      <h1 className="af-class-regio-title">Het romantische Brugge van Hotel Heritage</h1>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p"><strong>MEER WETEN</strong></p>
                      </a>
                    </div>
                    <div className="af-class-regio-img">
                      <div className="af-class-regio-img-big"><img src="images/Brugge-web.jpg" alt className="af-class-regio-big-image" /></div><img src="images/Ruit-brugge.png" alt className="af-class-regio-ruit" /></div>
                  </div>
                  <div className="af-class-regio-item">
                    <div className="af-class-regio-img">
                      <div className="af-class-regio-img-big"><img src="images/Brugge-web.jpg" alt className="af-class-regio-big-image" /></div><img src="images/Ruit-ardennen.png" alt className="af-class-regio-ruit" /></div>
                    <div className="af-class-regio-text">
                      <h1 className="af-class-regio-title">De pure Ardennen van Château de Vignée</h1>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p"><strong>MEER WETEN</strong></p>
                      </a>
                    </div>
                  </div>
                  <div className="af-class-regio-item af-class-right">
                    <div className="af-class-regio-text af-class-left">
                      <h1 className="af-class-regio-title">Het veelzijdige Limburg van La Butte aux Bois</h1>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p"><strong>MEER WETEN</strong></p>
                      </a>
                    </div>
                    <div className="af-class-regio-img">
                      <div className="af-class-regio-img-big"><img src="images/Brugge-web.jpg" alt className="af-class-regio-big-image" /></div><img src="images/Ruit-kempen.png" alt className="af-class-regio-ruit" /></div>
                  </div>
                  <div className="af-class-regio-item">
                    <div className="af-class-regio-img">
                      <div className="af-class-regio-img-big"><img src="images/Brugge-web.jpg" alt className="af-class-regio-big-image" /></div><img src="images/ruit-antwerpen.png" alt className="af-class-regio-ruit" /></div>
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
            <div className="af-class-row">
              <div className="af-class-container">
                <div className="af-class-oproute">
                  <h2 className="af-class-h2-center">Ga samen met ons op Route du Bonheur. <br />Een luxueuze rondreis doorheen het land.</h2>
                  <div className="af-class-oproute-text">
                    <div className="af-class-oproute-text-block">
                      <p className="af-class-body-p">Kies jij ervoor om deze zomer te genieten van het eigen land? Heb je zin om onze toeristische troeven te herontdekken in alle comfort? Gebruik dan onze Route du Bonheur-aanbieding. <br />‍<br />Combineer minstens twee hotels met telkens minstens één overnachting per &nbsp;hotel en maak gebruik van het uitzonderlijk voordeeltarief van 99 euro per persoon, per nacht (inclusief ontbijt). Zo bespaar je makkelijk 80 euro per nacht voor een luxeverblijf in deze sterrenhotels.</p>
                    </div>
                    <div className="af-class-oproute-text-block">
                      <p className="af-class-body-p">Vul hier je aanvraagformulier in, selecteer de hotels en je data en we koppelen snel naar je terug met een bevestiging van beschikbaarheid en uitgewerkt voorstel. <br /><br />We nemen de normen voor hygiëne en netheid zeer serieus en nemen maatregelen om de veiligheid van onze gasten en medewerkers te waarborgen. Wij hebben de verklaringen van de Nationale Veiligheidsraad en de Wereldgezondheidsorganisatie (WHO) met betrekking tot het coronavirus (COVID-19) nauwlettend gevolgd.</p>
                    </div>
                  </div>
                  <a href="#" className="af-class-button w-inline-block">
                    <p className="af-class-button-p"><strong>IK&nbsp;WIL&nbsp;OP&nbsp;DE&nbsp;ROUTE&nbsp;DU&nbsp;BONHEUR.</strong></p>
                  </a>
                </div>
              </div>
            </div>
            <div className="af-class-row-mega">
              <div className="af-class-container-super-wide">
                <div className="af-class-container-wide">
                  <div className="af-class-hotels-img-grid">
                    <div><img src="images/Ruit-brugge.png" alt className="af-class-hotels-img-grid-item" /></div>
                    <div><img src="images/ruit.png" alt className="af-class-hotels-img-grid-item" /></div>
                    <div><img src="images/Ruit-ardennen.png" alt className="af-class-hotels-img-grid-item" /></div>
                    <div><img src="images/Ruit-kempen.png" alt className="af-class-hotels-img-grid-item" /></div>
                  </div>
                </div>
                <div className="af-class-color-50-height" />
              </div>
              <div className="af-class-container-super-wide af-class-container-color">
                <div className="af-class-container-wide">
                  <div className="af-class-hotels-info-grid">
                    <div className="af-class-hotels-info-block">
                      <p>Hotel Heritage, Brugge<br /><br />4-sterren superior <br />Gastronomisch restaurant <br />Meest romantisch hotel ter wereld<br /></p>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p"><strong>MEER&nbsp;WETEN</strong></p>
                      </a>
                    </div>
                    <div className="af-class-hotels-info-block">
                      <p>Hotel Franq, Antwerpen<br />‍<br />4-sterren superior <br />1 Michelin ster <br />Parel in voormalig bankgebouw<br /></p>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p"><strong>MEER&nbsp;WETEN</strong></p>
                      </a>
                    </div>
                    <div className="af-class-hotels-info-block">
                      <p>Château de Vignée, Rochefort<br />‍<br />4-sterren superior <br />1 Michelin ster<br />Luxueuze wellness<br /></p>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p"><strong>MEER&nbsp;WETEN</strong></p>
                      </a>
                    </div>
                    <div className="af-class-hotels-info-block">
                      <p>La Butte aux Bois, Lanaken<br />‍<br />5 sterren<br />2 Michelin sterren<br />Luxueuze wellness<br /></p>
                      <a href="#" className="af-class-button w-inline-block">
                        <p className="af-class-button-p"><strong>MEER&nbsp;WETEN</strong></p>
                      </a>
                    </div>
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

export default IndexView

/* eslint-enable */