import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({title, placeholder}) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <label className="block text-gray-400 text-md">
                {title}:
            </label>
            <FormControl sx={{ minWidth: 120 }} className='w-[100%] mt-4 bg-white'>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className='p-0'
                >
                    <MenuItem value="">
                        <p className='text-gray-400'>{placeholder}</p>
                    </MenuItem>
                    <MenuItem value={'Resume Service'}>Resume Services</MenuItem>
                    <MenuItem value={'Cover Letter Service'}>Cover Letter Services</MenuItem>
                    <MenuItem value={'Resume & Cover Letter Services'}>Resume & Cover Letter Services</MenuItem>
                    <MenuItem value={'Resume & Website Services'}>Resume & Website Services</MenuItem>
                    <MenuItem value={'Resume, Cover Letter & Website Services'}>Resume, Cover Letter & Website Services</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
