import React from 'react';
import { Form } from 'react-bootstrap';

const Filters = () => {
    return (
        <Form.Select aria-label="Filter option">
            <option>Filter 1</option>
            <option>Filter 2</option>
            <option>Filter 3</option>
        </Form.Select>
    );
};

export default Filters;
