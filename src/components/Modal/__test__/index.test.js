import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

  const onCloseMock = jest.fn();

describe("Modal Component", () => {
    it("Render", () => {
        // baseline render component test
        render(<Modal currentPhoto={currentPhoto} onClose={onCloseMock}/>);
    })

    it('matches snapshot DOM node structure', () => {
        // Arrange the snapshot - declare variables
        const {asFragment} = render(<Modal currentPhoto={currentPhoto} onClose={onCloseMock}/>);
        // Assert the match
        expect(asFragment()).toMatchSnapshot();
      });
})

describe('Modal Click Event', () => {
    it('calls onClose handler', () => {
      // Arrange: Render Modal
      const {getByText} = render(<Modal currentPhoto={currentPhoto} onClose={onCloseMock}/>);

      // Act: Simulate click event
      fireEvent.click(getByText('Close'));
      // Assert: Expected matcher
      expect(onCloseMock).toBeCalledTimes(1);
    });
  })  

