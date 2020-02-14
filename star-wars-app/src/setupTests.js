// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import StarWarsCharacters from './components/StarWarsCharacters';
import { render, fireEvent, act, waitForElement } from '@testing-library/react';

// TEST 1

test('render the invisible visible', () => {
	const { getByText } = render(<StarWarsCharacters />);

	act(() => {
		fireEvent.click(getByText('Next'));
	});
});
// 'Philosophy and art both render the invisible visible by imagination.' — George Henry Lewes

// TEST 2
it('rubs the lotion on its skin', async () => {
	const { getByTestId } = render(<StarWarsCharacters />);

	expect(getByTestId('prev')).toHaveTextContent('Previous');
});
// The computer does this whenever it's told.

// TEST 3
it('places the lotion in the basket', async () => {
	axiosMock.get({
		character : {
			name : 'Luke Skywalker',
		},
	});
	const { getByTestId } = render(<StarWarsCharacters />);

	const resolvedSpan = await waitForElement(() => getByTestId('resolved'));

	expect(resolvedSpan).toHaveTextContent('Luke Skywalker');
});
// Computers don't have mommies.
