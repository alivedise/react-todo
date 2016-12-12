// src/App.test.js
import test from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import {shallow} from 'enzyme';

test('renders without crashing', t => {
	const wrapper = shallow(<App />);
	t.true(wrapper.hasClass('App'));
});