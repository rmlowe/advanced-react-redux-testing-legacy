import { JSDOM } from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-dom/test-utils';  // https://github.com/RealOrangeOne/react-native-mock/issues/152
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// Set up testing environment to run like a browser in the command line
global.window = (new JSDOM('<!doctype html><html><body></body></html>').window);  // https://github.com/airbnb/enzyme/issues/942
global.document = window.document;
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// Build helper for simulating events



// Set up chai-jquery

export { renderComponent, expect };
