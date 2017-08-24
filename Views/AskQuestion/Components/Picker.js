import React from 'react';
import { Item, Picker } from 'native-base';

const NewPicker = (props) => {
    const items = props.items.map(item =>
        <Item key={item.id} label={item.name} value={item.id} />);
    return (
        <Picker
          onValueChange={value => props.onValueChange(value)}
          selectedValue={props.selectedValue}
        >
            <Item key={99999} label={'Select one'} value={99999} />
            {items}
        </Picker>
    );
};

export default NewPicker;
