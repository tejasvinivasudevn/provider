'use client';
import { Button, Card, CardContent, Container, InputAdornment, TextField, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import { Password } from "@mui/icons-material";
import Link from "next/link";
import Router, { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter()

    const [formData, setFormData] = useState<{ email: string, password: string }>({
        email: '',
        password: '',

    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return <>
        <Container maxWidth="sm">
            <Card sx={{ mt: 4, mb: 4 }}>
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
                        Login
                    </Typography>
                    <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="Email" value={formData.email} onChange={handleChange}
                        InputProps={{ startAdornment: (<InputAdornment position="start"><PersonIcon /></InputAdornment>), }}
                    />
                    <TextField margin="normal" required fullWidth id="password" label="Password" type="password" name="password" autoComplete="Password" value={formData.password} onChange={handleChange}
                        InputProps={{ startAdornment: (<InputAdornment position="start"><Password /></InputAdornment>), }}
                    />
                    <div className="flex flex-row justify-between mt-3 ">
                        <Link href="#" onClick={() => alert('Forgot Password')}>

                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Forgot Password?
                            </Button>
                        </Link>
                        <Link href='/register' className="text-" onClick={() => router.push('/register', { scroll: false })}>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                New User? Register here
                            </Button>
                        </Link>
                    </div>

                </CardContent>

            </Card>
        </Container>

    </>
}

export default Page;