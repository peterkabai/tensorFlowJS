import React, { useState } from 'react';
import Img from 'react-image'
import { withKnobs, files } from '@storybook/addon-knobs';
import * as mobilenet from '@tensorflow-models/mobilenet';

import defaultImage from '../images/dog.jpg'

export default {
  title: 'Images',
  decorators: [withKnobs]
};

export const ImageClassification = () => {

  const [state, setState] = useState({
    rows: []
  })

  const image = files('Image', '.jpg, .jpeg, .png', [defaultImage], 'Choose Image');

  const classify = () => {
    const img = document.getElementById('img');
    mobilenet.load().then(model => {
      model.classify(img).then(predictions => {
        setState({
          rows: predictions.map((prediction, i) => {
            return (
              <tr key={i}>
                <td>{(prediction.probability * 100).toFixed(0) + "%"}</td>
                <td>{prediction.className}</td>
              </tr>
            )
          })
        })
      })
    })
  }

  return (
    <>
      <link 
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
      <Img
        id={"img"}
        onLoad={() => { classify() }}
        width={"500"}
        src={image}
      />
      <br/>
      <table id='results'>
        <tbody>
          {state.rows}
        </tbody>
      </table>
    </>
  );
}
