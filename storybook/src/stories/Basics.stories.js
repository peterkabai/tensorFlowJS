import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

// this would be a lot faster with @tensorflow/tfjs-node
import * as tf from '@tensorflow/tfjs';


export default {
  title: 'Basics'
};

export const TensorFlowVersion = () => {

  // this initializes the TF backend
  tf.backend()

  return (
    <>
      <p>Version: {tf.version.tfjs}</p>
      <p>Backend: {tf.getBackend()}</p>
      <a 
        href='https://playground.tensorflow.org/'
        target="_blank"
      >
        TensorFlow Playground
      </a>
      <br />
      <a 
        href='https://js.tensorflow.org/api/latest/'
        target="_blank"
      >
        TensorFlow API
      </a>
    </>
  );
}
