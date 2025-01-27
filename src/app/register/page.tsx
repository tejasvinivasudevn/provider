'use client';
import { Container, Card, CardContent, Typography, Box, TextField, InputAdornment, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WcIcon from '@mui/icons-material/Wc';
import { Password } from "@mui/icons-material";

const Page = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        role: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEnumChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/health-tracking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                dob: '',
                gender: '',
                role: '',
                password: ''
            });

            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again.');
        }
    };
    return <>
        <Container maxWidth="sm">
            <Card sx={{ mt: 4, mb: 4 }}>
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
                        Register
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoComplete="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lastName" value={formData.lastName} onChange={handleChange} InputProps={{ startAdornment: (<InputAdornment position="start"><PersonIcon /></InputAdornment>), }}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField margin="normal" required fullWidth id="password" label="Password" type="password" name="password" autoComplete="Password" value={formData.password} onChange={handleChange}
                            InputProps={{ startAdornment: (<InputAdornment position="start"><Password /></InputAdornment>), }}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="Phone Number"
                            name="phone"
                            autoComplete="tel"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Date of Birth Field */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="dob"
                            label="Date of Birth"
                            name="dob"
                            type="date"
                            value={formData.dob}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarTodayIcon />
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{
                                shrink: true, // Ensures the label stays visible with type="date"
                            }}
                        />

                        {/* Gender Field */}
                        <FormControl fullWidth required margin="normal">
                            <InputLabel id="gender-label">Gender</InputLabel>
                            <Select
                                labelId="gender-label"
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={(e) => { handleEnumChange(e.target.name, e.target.value) }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <WcIcon />
                                    </InputAdornment>
                                }
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Role Type Field */}
                        <FormControl fullWidth required margin="normal">
                            <InputLabel id="role-label">Role Type</InputLabel>
                            <Select
                                labelId="role-label"
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={e => { handleEnumChange(e.target.name, e.target.value) }}
                            >
                                <MenuItem value="patient">Patient</MenuItem>
                                <MenuItem value="provider">Provider</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    </>
}

export default Page;


