import { TestWindow } from '@stencil/core/testing';
import { CitiPersonalCard } from './citi-personal-card';

describe('citi-personal-card', () => {
  it('should build', () => {
    expect(new CitiPersonalCard()).toBeTruthy();
  });
});
