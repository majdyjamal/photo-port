import React from 'react'
import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup);

describe("ContactForm Component", () => {
    it("Render", () => {
        render(<ContactForm/>);
    });

    it("Match Snapshot", () => {
       const {asFragment} = render(<ContactForm/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });

    // it("Test invalid email", () => {
    //     const {getByTestId, getByText } = render(<ContactForm/>);

    //     userEvent.type( getByTestId("email"), "test@mail.");
    //     getByText('Submit').focus();
    //     expect(getByTestId("errormessage")).toHaveValue("Your email is invalid.");


    // })
});