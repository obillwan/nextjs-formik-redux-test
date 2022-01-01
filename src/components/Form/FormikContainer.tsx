import React, {useEffect, useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { useDispatch, useSelector } from 'react-redux';
import { addBird } from '../../store/actions/birdAction';
import { RootState } from '../../store/store';

function FormikContainer () {
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
            <p>
          <FormikControl
            control='select'
            label='Select a bird'
            name='selectOption'
            options={dropdownOptions}
          />
          </p>
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
