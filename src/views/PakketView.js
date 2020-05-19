/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ec23a376f581130e4b4e65c").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class PakketView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PakketController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PakketView

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
    const proxies = Controller !== PakketView ? transformProxies(this.props.children) : {

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
            <div className="af-class-row af-class-row-color">
              <div className="af-class-container">
                <div className="af-class-pakket-info">
                  <div className="af-class-pakket-info-block">
                    <h1 className="af-class-h4">WIL JIJ&nbsp;DEZE ZOMER OOK OP ROUTE DU BONHEUR?</h1>
                    <p className="af-class-body-p">Een rondreis zonder zorgen in eigen land. Luxeverblijven in historische steden of temidden van de natuur. Fietsen, wandelen, stadsbezoeken, shoppen, genieten van terrasjes of topgastronomie en vooral jezelf eens verwennen. De Route du Bonheur van 4 Relais &amp; Châteaux hotels zorgt dat je straks een heerlijke vakantie beleeft.</p>
                  </div>
                  <div className="af-class-pakket-info-block">
                    <h1 className="af-class-h4">WAT BELOVEN WE JOU?</h1>
                    <ul role="list">
                      <li>
                        <p className="af-class-body-p">Een topverblijf in prachtige boetiekhotels</p>
                      </li>
                      <li>
                        <p className="af-class-body-p">Uitzonderlijke voorwaarden van 99 Euro per persoon, per nacht, inclusief ontbijt</p>
                      </li>
                      <li>
                        <p className="af-class-body-p">Tot wel 30% besparing op het normaal geldend tarief</p>
                      </li>
                      <li>
                        <p className="af-class-body-p">Een combinatiereis die je zelf samenstelt volgens jouw persoonlijke voorkeur</p>
                      </li>
                      <li>
                        <p className="af-class-body-p">Jij kiest voor Brugge, Antwerpen, Rochefort of Lanaken</p>
                      </li>
                      <li>
                        <p className="af-class-body-p">We nemen de normen voor hygiëne en netheid zeer serieus en nemen maatregelen om de veiligheid van onze gasten en medewerkers te waarborgen. Wij hebben de verklaringen van de Nationale Veiligheidsraad en de Wereldgezondheidsorganisatie (WHO) met betrekking tot het coronavirus (COVID-19) nauwlettend gevolgd.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-row">
              <div className="af-class-container">
                <div className="af-class-form-block w-form">
                  <h1 className="af-class-h4-form">HOE GEBRUIK MAKEN VAN DIT AANBOD?</h1>
                  <p className="af-class-body-p">Via het aanvraagformulier kan je jouw rondreis samenstellen. Om van het aanbod te kunnen genieten selecteer je minstens 2 hotels waar je telkens minimaal 1 nacht verblijft. Deze promotie is enkel geldig bij het boeken via het reservatie-formulier op de website en niet combineerbaar met andere acties.</p>
                  <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form">
                    <div className="af-class-form-section"><label htmlFor="email" className="af-class-field-label">VOORNAAM</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name" data-name="Name" placeholder id="name" /><label htmlFor="email-2" className="af-class-field-label">NAAM</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /><label htmlFor="email-2" className="af-class-field-label">E-MAIL</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" /><label htmlFor="email-2" className="af-class-field-label">TELEFOON</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder id="name-4" /><label htmlFor="email-2" className="af-class-field-label">AFREISDATUM</label><input type="email" className="af-class-text-field w-input" maxLength={256} name="email" data-name="Email" placeholder id="email" required /></div>
                    <div className="af-class-hr-line" />
                    <div className="af-class-form-section">
                      <h1 className="af-class-h4-form">KIES DE HOTELS NAAR VOORKEUR&nbsp;EN AANTAL NACHTEN</h1>
                      <p className="af-class-body-p">Via het aanvraagformulier kan je jouw rondreis samenstellen. Om van het aanbod te kunnen genieten selecteer je minstens 2 hotels waar je telkens minimaal 1 nacht verblijft. Deze promotie is enkel geldig bij het boeken via het reservatie-formulier op de website en niet combineerbaar met andere acties.</p>
                      <div><label className="w-checkbox af-class-checkbox-field"><input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" className="w-checkbox-input af-class-checkbox" /><span className="af-class-checkbox-label w-form-label">HOTEL HERITAGE (BRUGGE)</span></label>
                        <div className="af-class-checkbox-fields-block">
                          <div className="af-class-checkbox-date-box"><label className="af-class-checkbox-date-label">van</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-2" data-name="Field 2" id="field-2" required /></div>
                          <div className="af-class-checkbox-date-box"><label className="af-class-checkbox-date-label">tot</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-2" data-name="Field 2" id="field-2" required /></div>
                        </div>
                      </div>
                      <div><label className="w-checkbox af-class-checkbox-field"><input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2" className="w-checkbox-input af-class-checkbox" /><span className="af-class-checkbox-label w-form-label">HOTEL FRANQ (ANTWERPEN)</span></label>
                        <div className="af-class-checkbox-fields-block">
                          <div className="af-class-checkbox-date-box"><label className="af-class-checkbox-date-label">van</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-2" data-name="Field 2" id="field-2" required /></div>
                          <div className="af-class-checkbox-date-box"><label className="af-class-checkbox-date-label">tot</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-2" data-name="Field 2" id="field-2" required /></div>
                        </div>
                      </div>
                      <div><label className="w-checkbox af-class-checkbox-field"><input type="checkbox" id="checkbox-3" name="checkbox-3" data-name="Checkbox 3" className="w-checkbox-input af-class-checkbox" /><span className="af-class-checkbox-label w-form-label">CH<strong>â</strong>TEAU&nbsp;DE&nbsp;VIGNéE (ROCHEFORT)</span></label>
                        <div className="af-class-checkbox-fields-block">
                          <div className="af-class-checkbox-date-box"><label className="af-class-checkbox-date-label">van</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-2" data-name="Field 2" id="field-2" required /></div>
                          <div className="af-class-checkbox-date-box"><label className="af-class-checkbox-date-label">tot</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-2" data-name="Field 2" id="field-2" required /></div>
                        </div>
                      </div>
                      <div><label className="w-checkbox af-class-checkbox-field"><input type="checkbox" id="checkbox-4" name="checkbox-4" data-name="Checkbox 4" className="w-checkbox-input af-class-checkbox" /><span className="af-class-checkbox-label w-form-label">LA&nbsp;BUTTE&nbsp;AUX&nbsp;BOIS (LAKAKEN)</span></label>
                        <div className="af-class-checkbox-fields-block">
                          <div className="af-class-checkbox-date-box"><label className="af-class-checkbox-date-label">van</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-2" data-name="Field 2" id="field-2" required /></div>
                          <div className="af-class-checkbox-date-box"><label className="af-class-checkbox-date-label">tot</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-2" data-name="Field 2" id="field-2" required /></div>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-hr-line" />
                    <div className="af-class-form-section"><label htmlFor="email-2" className="af-class-field-label"><strong>OPMERKINGEN</strong></label><textarea placeholder="Example Text" maxLength={5000} id="field" name="field" className="af-class-area-field w-input" defaultValue={""} /></div><input type="submit" defaultValue="IK VOLTOOI MIJN AANVRAAG" data-wait="Please wait..." className="af-class-button w-button" />
                    <div className="af-class-hr-line" />
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
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

export default PakketView

/* eslint-enable */