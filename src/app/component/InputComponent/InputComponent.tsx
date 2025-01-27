import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

interface InputProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    startAdornment?: React.ReactNode;
    required?: boolean;
    fullWidth?: boolean;
    margin?: 'none' | 'dense' | 'normal';
    autoComplete?: string;
}

const InputComponent: React.FC<InputProps> = ({
    id,
    name,
    label,
    value,
    onChange,
    startAdornment,
    required = false,
    fullWidth = true,
    margin = 'normal',
    autoComplete = '',
}) => {
    return (
        <TextField
            margin={margin}
            required={required}
            fullWidth={fullWidth}
            id={id}
            label={label}
            name={name}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            InputProps={{
                startAdornment: startAdornment && (
                    <InputAdornment position="start">{startAdornment}</InputAdornment>
                ),
            }}
        />
    );
};

export default InputComponent;
