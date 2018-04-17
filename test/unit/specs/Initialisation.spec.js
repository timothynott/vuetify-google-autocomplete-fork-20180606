import { mount, shallow } from 'vue-test-utils';
import VuetifyGoogleAutocomplete from '../../../src/index';

const requiredPropData = {
  id: 'map',
};
let wrapper = null;
beforeEach(() => {
  wrapper = mount(VuetifyGoogleAutocomplete, {
    propsData: requiredPropData,
  });
});

describe('Ensure Component is initialised properly', () => {
  test('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe('Lifecycle Hooks', () => {
  describe('Created', () => {
    test('Sets autocomplete text properly when given v-model.', () => {
      const autocompleteText = 'Some autocomplete text.';

      wrapper = mount(VuetifyGoogleAutocomplete, {
        propsData: {
          ...requiredPropData,
          value: autocompleteText,
        },
      });

      expect(wrapper.vm.autocompleteText).toEqual(autocompleteText);
    });

    test('Sets autocomplete text properly when NOT given v-model.', () => {
      wrapper = mount(VuetifyGoogleAutocomplete, {
        propsData: {
          ...requiredPropData,
        },
      });

      expect(wrapper.vm.autocompleteText).toEqual('');
    });
  });

  describe('Mounted', () => {
    test('vgaMapState should have correct default value when Google Init callback has not yet been called.', () => {
      expect(wrapper.vm.vgaMapState).toEqual({
        initMap: false,
      });
    });
  });

  describe('Mounted', () => {
    test('vgaMapState should have correct value when Google Init callback HAS been called.', () => {
      // Mock out google maps.
      window.google = {
        maps: {
          places: {
            Autocomplete: class {},
          },
        },
      };
      window.initVGAMaps();

      expect(wrapper.vm.vgaMapState).toEqual({
        initMap: true,
      });
    });
  });

  // describe('Destroyed', () => {
  // });
});
