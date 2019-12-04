import React from 'react';

import { action } from '@storybook/addon-actions';
import { Test as TestComponent } from './Test.js.js';

export default {
  title: 'Test'
};

export const Test = () => <TestComponent />;

Test.story = {
  name: 'Test'
};
