import React, { useState, useEffect } from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addBird } from '../../store/actions/birdAction';
import { RootState } from '../../store/store';

interface MyFormValues {
  birdName: string;
}

export default function Birdies() {
  const [birdName, handleOnSelect] = useState('');
  const [countSelectedBirdies, setCountSelectedBirdies] = useState(0);
  const initialValues: MyFormValues = { birdName: '' };
  const dispatch = useDispatch();
  const selectedBirdName= useSelector((state: RootState)=> state.testBirds);

  function handleBirdSelection(setFieldValue: (field: string, value: any, shouldValidate: boolean) => void ) {
    console.log('countSelectedBirdies:'+countSelectedBirdies)
    if( selectedBirdName[countSelectedBirdies] ) {
      // selectedBirdName.map(() => {
      
      // })
      console.log('birdName in handleBirdSelection then setFieldValue:')
      console.log(selectedBirdName[countSelectedBirdies].name)
      setFieldValue('birdName', selectedBirdName[countSelectedBirdies].name, false);
    };
  }

  function handleButtonClick() {
    dispatch(addBird(birdName));
    setCountSelectedBirdies(countSelectedBirdies+1);
  }

  return (
    <div className="wrapper">
      <Formik
         enableReinitialize 
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           alert(JSON.stringify(values, null, 2));
          //  actions.setSubmitting(false);
         }}
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
            <label>
              <p>Select and Add Bird to Redux Store</p>
              <Field select id="birdName" name="birdName" value={values.birdName} component={TextField} 
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => handleOnSelect(e.target.value)}>
                <MenuItem value="BlueJay" key="BlueJay">BlueJay</MenuItem>
                <MenuItem value="Finch" key="Finch">Finch</MenuItem>
                <MenuItem value="Robin" key="Robin">Robin</MenuItem>
                <MenuItem value="Sparrow" key="Sparrow">Sparrow</MenuItem>
              </Field>
            </label>
            <div>
              <Button type="submit" onClick={handleButtonClick}>Add</Button>
            </div>
          </Form>
           )}
      </Formik> 
    </div>
  );
};

