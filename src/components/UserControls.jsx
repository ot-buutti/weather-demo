import {Button , Form} from "react-bootstrap";
import { useState } from "react";

const UserControls = ({setSearchConditions}) => {
    const initialValues = {city: "", country: ""};
    const [formValues, setFormValues] = useState(initialValues);

    const submitHandler = (event) => {
        event.preventDefault();
        setSearchConditions(formValues);
    }

    const onChangeHandler = (event) => {
        event.preventDefault();
        setFormValues({...formValues, [event.target.name]: event.target.value});
    }

    const resetOnClick = (event) => {
        event.preventDefault();
        setFormValues(initialValues);
        setSearchConditions(initialValues);
    }

    return (
        <>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City: </Form.Label>
                    <Form.Control value={formValues.city} onChange={onChangeHandler} type="text" name="city" placeholder="Enter city name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCountry">
                    <Form.Label>Country code: </Form.Label>
                    <Form.Control value={formValues.country} onChange={onChangeHandler} type="text" name="country" placeholder="Enter country code (optional)" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={formValues.city === ""}>
                    Submit
                </Button>
                <Button variant="secondary" onClick={resetOnClick} disabled={formValues.city === ""}>
                    Reset
                </Button>
            </Form>
        </>
    )
}

export default UserControls;