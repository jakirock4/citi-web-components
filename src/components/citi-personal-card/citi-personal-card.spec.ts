import { newSpecPage } from '@stencil/core/testing';
import { CitiPersonalCard } from './citi-personal-card';

describe('citi-personal-card', () => {

  it('Realizar el render sin valores', async () => {
    const { root } = await newSpecPage({
      components: [CitiPersonalCard],
      html: '<citi-personal-card></citi-personal-card>',
    });
    expect(root).toEqualHtml(`
    <citi-personal-card>
        <mock:shadow-root>
          <div class="b-personal-card-box">
            <div class="b-personal-card">
              <div class="b-personal-card__content">
                <div class="b-personal-card__photo-container">
                  <img alt="Esmeralda Rodriguez" class="b-personal-card__photo">
                </div>
                <h1 class="b-personal-card__full-name"></h1>
                <h3>
                  Engineer
                </h3>
                <div class="b-personal-card__resume"></div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </citi-personal-card>
    `);
  });

  it('Realizar el render con valores', async () => {
    const firstname = 'Esmeralda';
    const lastname = 'Rodriguez';
    const resume = 'Master en Scrum';
    const photo = 'https://randomuser.me/api/portraits/women/75.jpg';
    const role = 'Project manager';
    const { root } = await newSpecPage({
      components: [CitiPersonalCard],
      html: `
      <citi-personal-card
        first-name="${firstname}"
        last-name="${lastname}"
        resume="${resume}"
        photo="${photo}"
        role="${role}">
     </citi-personal-card>`,
    });

    expect(root).toEqualHtml(`
    <citi-personal-card first-name="${firstname}" last-name="${lastname}" resume="${resume}" photo="${photo}" role="${role}">
        <mock:shadow-root>
          <div class="b-personal-card-box">
            <div class="b-personal-card">
              <div class="b-personal-card__content">
                <div class="b-personal-card__photo-container">
                  <img alt="Esmeralda Rodriguez" src=${photo} class="b-personal-card__photo">
                </div>
                <h1 class="b-personal-card__full-name">${firstname} ${lastname}</h1>
                <h3>
                ${role}
                </h3>
                <div class="b-personal-card__resume">${resume}</div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </citi-personal-card>
    `);
  });
  
});
