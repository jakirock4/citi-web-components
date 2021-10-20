import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'citi-personal-card',
  styleUrl: 'citi-personal-card.scss',
  shadow: true,
})
export class CitiPersonalCard {
  /**
   * The first name
   */
  @Prop() readonly firstName: string;

  /**
   * The last name
   */
  @Prop() readonly lastName: string;

  /**
   * The resume
   */
  @Prop() readonly resume: string;

  /**
   * The photo
   */
  @Prop() readonly photo: string;

  /**
   * The role
   */
  @Prop() readonly role: string = 'Engineer';

  render() {
    return (
      <div class="b-personal-card-box">
        <div class="b-personal-card">
          <div class="b-personal-card__content">
            <div class="b-personal-card__photo-container">
              <img class="b-personal-card__photo" src={this.photo} alt="Esmeralda Rodriguez" />
            </div>
            <h1 class="b-personal-card__full-name ">
              {this.firstName} {this.lastName}
            </h1>
            <h3>{this.role}</h3>
            <div class="b-personal-card__resume">{this.resume}</div>
          </div>
        </div>
      </div>
    );
  }
}
