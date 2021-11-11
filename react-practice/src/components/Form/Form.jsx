import React from 'react';
import Button from '../Button';
import Input from '../Input';

const Form = () => (
  <>
    <h2>Simple Form</h2>
    <form action="">
      <Input name="age" />
      <Input name="name" />
      <Input name="last_name" />

      <Input name="yes" type="radio" label="Yes" />
      <Input name="no" type="radio" label="No" />

      <Input name="agree" type="checkbox" />

      <Button type="submit">Save Form</Button>
    </form>
  </>
);

export default Form;
