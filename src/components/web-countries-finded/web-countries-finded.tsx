import { Component, h, State, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'web-countries-finded',
  styleUrl: 'web-countries-finded.scss',
  shadow: true,
})
export class WebCountriesFinded {
  /**
   * The countries
   */
  @State() countries: Array<any> = [];

  /**
   * The keyword
   */
  // eslint-disable-next-line @stencil/props-must-be-readonly
  @Prop() keyword: string;

  /**
   * The host
   */
  // eslint-disable-next-line @stencil/element-type
  @Element() host: HTMLElement;

  /**
   * The userInput
   */
  @Event() userInput: EventEmitter<string>;

  private watchHandler(event: Event) {
    console.log(event.target);
    const target = event.target as HTMLInputElement;
    this.keyword = target.value;
  }

  // @Watch('keyword')

  render() {
    return (
      <div class={'web-c-countries-finder'}>
        <input type="text" class="search" name="search" onInput={e => this.watchHandler(e)} />

        {this.countries.length === 0 ? (
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        ) : (
          this.countries.map(country => (
            <div class="country-card">
              <div class="country-card__body">
                <div class="country-card__flag-container">
                  <div class="country-card__flag">
                    <span class="flag flag-ci"></span>
                  </div>
                </div>
                <div class="country-card__text-container">
                  <h3>{country.name.common}</h3>
                  <div class="bottom clearfix">
                    <p>
                      <strong>Official Name: </strong>
                      {country.name.official}
                    </p>

                    <p>
                      <strong>Currency: </strong>
                      {country.currency}
                    </p>
                    <p>
                      <strong>Languages: </strong>
                      <span>{this.mapObjectToArray(country.languages)}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }

  private getDataAndModifyState() {
    const serviceURL = `http://countries-finder-api.webtraining.fun/countries/search/${this.keyword}`;

    fetch(serviceURL)
      .then((response: Response) => response.json())
      .then(response => {
        this.countries = this.mapObjectToArray(response);
      });
  }

  private mapObjectToArray(countriesObj: Object): Array<string> {
    const array = [];
    for (const countryKey in countriesObj) {
      if (Object.prototype.hasOwnProperty.call(countriesObj, countryKey)) {
        array.push(countriesObj[countryKey]);
      }
    }
    return array;
  }

  componentDidRender() {
    this.getDataAndModifyState();
  }
}
