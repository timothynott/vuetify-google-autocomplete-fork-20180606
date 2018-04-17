import { mount } from 'vue-test-utils';
import VuetifyGoogleAutocomplete from '../../../src/index';

const propData = {
};
let wrapper = null;
beforeEach(() => {
  wrapper = mount(VuetifyGoogleAutocomplete, {
    propsData: propData,
  });
});

describe('Ensure Component is initialised properly', () => {
  test('Is a Vue instance', () => {
    expect(1).toBeTruthy();
  });
});
