import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import * as tf from '@tensorflow/tfjs';

export default {
  title: 'Basics'
};

export const TensorFlowVersion = () => (
  <p>The current version of TensorFlow JS is {tf.version.tfjs}</p>
);
