import React, { useEffect } from 'react';
import {
  Formik,
  Form,
  Field
} from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { addBird } from '../../store/actions/birdAction';
import { RootState } from '../../store/store';

interface MyFormValues {
  birdName: string;
}

export default function Birdies() {
  const dispatch = useDispatch();
  const selectedBirdName= useSelector((state: RootState)=> state.testBirds);

  function handleBirdSelection(setFieldValue: (field: string, value: any, shouldValidate: boolean) => void ) {
    // console.log(selectedBirdName[selectedBirdName.length-1].name)
    setFieldValue('selectOption', selectedBirdName[selectedBirdName.length-1].name, false);
  }

  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Bluejay', value: 'bluejay' },
    { key: 'Robin', value: 'robin' },
    { key: 'Sparrow', value: 'sparrow' }
  ]
  const initialValues = {
    selectOption: ''
  }
  const validationSchema = Yup.object({
    selectOption: Yup.string().required('Required'),
  })
  const onSubmit = values => {
    dispatch(addBird(values.selectOption));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({values, errors, setFieldValue}) => (
        <Form>
            {
              useEffect(() => {
                if(selectedBirdName){
                  handleBirdSelection(setFieldValue);
                }
              }, [selectedBirdName])
            }
          <label htmlFor={'selectOption'}>{'Select a topic'}</label>
          <Field as='select' id={'selectOption'} name={'selectOption'}>
              {dropdownOptions.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              )
            })}
          </Field>

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
};

