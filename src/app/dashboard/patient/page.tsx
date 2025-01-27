

'use client';

import { useEffect, useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Collapse,
    IconButton,
    Grid,
    Container,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    useTheme,
    useMediaQuery,
    Divider
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    Person,
    Email,
    Phone,
    AccessTime,
    DirectionsRun,
    LocalDrinkOutlined,
    Bed
} from '@mui/icons-material';
import { fetchAllPatients } from '@/app/api/service';

interface DailyGoal {
    date: string;
    sleep_hrs: number;
    total_steps: number;
    water_intake: string;
}

interface Patient {
    patient_id: number;
    first_name: string;
    last_name: string | null;
    phone: string;
    email: string;
    dob: string;
    daily_goals: DailyGoal[];
    created_at: string;
    updated_at: string;
}

// Sample data array
const patients: Patient[] = [
    {
        patient_id: 1,
        first_name: "Kumai",
        last_name: 'Lokesh',
        phone: "2313232123",
        email: "kalaii@gmail.com",
        dob: "1997-11-30",
        daily_goals: [
            {
                date: "22/01/1997",
                sleep_hrs: 1,
                total_steps: 2,
                water_intake: "2lts"
            },
            {
                date: "23/01/1997",
                sleep_hrs: 1,
                total_steps: 2,
                water_intake: "2lts"
            },
            {
                date: "24/01/1997",
                sleep_hrs: 1,
                total_steps: 2,
                water_intake: "2lts"
            },
            {
                date: "25/01/1997",
                sleep_hrs: 1,
                total_steps: 2,
                water_intake: "2lts"
            },
            {
                date: "26/01/1997",
                sleep_hrs: 1,
                total_steps: 2,
                water_intake: "2lts"
            }
        ],
        created_at: "2025-01-27T11:49:10.862Z",
        updated_at: "2025-01-27T12:23:40.105Z"
    },
    {
        patient_id: 2,
        first_name: "kalai",
        last_name: 'Selvi',
        phone: "2313232123",
        email: "kalaii@gmail.com",
        dob: "1997-11-30",
        daily_goals: [
            {
                date: "22/01/1997",
                sleep_hrs: 1,
                total_steps: 2,
                water_intake: "2lts"
            },
            {
                date: "23/01/1997",
                sleep_hrs: 1,
                total_steps: 2,
                water_intake: "2lts"
            },
            {
                date: "24/01/1997",
                sleep_hrs: 1,
                total_steps: 2,
                water_intake: "2lts"
            },
            {
                date: "25/01/1997",
                sleep_hrs: 1,
                total_steps: 2,
                water_intake: "2lts"
            },
            {
                date: "26/01/1997",
                sleep_hrs: 1,
                total_steps: 2,
                water_intake: "2lts"
            }
        ],
        created_at: "2025-01-27T11:49:10.862Z",
        updated_at: "2025-01-27T12:23:40.105Z"
    },
    {
        patient_id: 3,
        first_name: "Tejasvini",
        last_name: 'Vasudev',
        phone: "2313232123",
        email: "kalaii@gmail.com",
        dob: "1997-11-30",
        daily_goals: [
            {
                date: "22/01/1997",
                sleep_hrs: 7,
                total_steps: 2000,
                water_intake: "2lts"
            },
            {
                date: "23/01/1997",
                sleep_hrs: 8,
                total_steps: 4000,
                water_intake: "2lts"
            },
            {
                date: "24/01/1997",
                sleep_hrs: 5,
                total_steps: 4000,
                water_intake: "2lts"
            },
            {
                date: "25/01/1997",
                sleep_hrs: 10,
                total_steps: 5000,
                water_intake: "2lts"
            },
            {
                date: "26/01/1997",
                sleep_hrs: 10,
                total_steps: 200,
                water_intake: "2lts"
            }
        ],
        created_at: "2025-01-27T11:49:10.862Z",
        updated_at: "2025-01-27T12:23:40.105Z"
    },
    {
        patient_id: 4,
        first_name: "Sampana",
        last_name: 'Yadav',
        phone: "2313232123",
        email: "kalaii@gmail.com",
        dob: "1997-11-30",
        daily_goals: [
            {
                date: "22/01/1997",
                sleep_hrs: 7,
                total_steps: 200,
                water_intake: "2lts"
            },
            {
                date: "23/01/1997",
                sleep_hrs: 6,
                total_steps: 600,
                water_intake: "2lts"
            },
            {
                date: "24/01/1997",
                sleep_hrs: 9,
                total_steps: 2000,
                water_intake: "2lts"
            },
            {
                date: "25/01/1997",
                sleep_hrs: 9,
                total_steps: 1000,
                water_intake: "2lts"
            },
            {
                date: "26/01/1997",
                sleep_hrs: 6,
                total_steps: 2000,
                water_intake: "2lts"
            }
        ],
        created_at: "2025-01-27T11:49:10.862Z",
        updated_at: "2025-01-27T12:23:40.105Z"
    },
    // Add more patient data here...
];

export default function PatientList() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const handleExpandClick = (patientId: number) => {
        setExpandedId(expandedId === patientId ? null : patientId);
    };

    const [patientsData, setPatientsData] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllPatients();
                console.log(data);
                setPatientsData(data?.rows ?? []);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData(); // Call the async function

    }, []);







    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
            <Typography
                variant={isMobile ? 'h5' : 'h4'}
                component="h1"
                gutterBottom
                sx={{
                    mb: { xs: 2, md: 4 },
                    fontWeight: 'bold'
                }}
            >
                Patient Records
            </Typography>
            {loading && <>Loading records</>}
            {error && <> error fetching records</>}
            <Grid container spacing={2}>
                {patientsData.map((patient: any) => (
                    <Grid item xs={12} key={patient.patient_id}>
                        <Card
                            sx={{
                                '&:hover': {
                                    boxShadow: theme.shadows[4]
                                }
                            }}
                        >
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Person color="primary" />
                                        <Typography variant="h6">
                                            {patient.first_name} {patient.last_name}
                                        </Typography>
                                        <Chip
                                            label={`ID: ${patient.patient_id}`}
                                            size="small"
                                            color="primary"
                                            variant="outlined"
                                        />
                                    </Box>
                                    <IconButton
                                        onClick={() => handleExpandClick(patient.patient_id)}
                                        sx={{
                                            transform: expandedId === patient.patient_id ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: theme.transitions.create('transform', {
                                                duration: theme.transitions.duration.shortest,
                                            }),
                                        }}
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </Box>

                                <Collapse in={expandedId === patient.patient_id} timeout="auto" unmountOnExit>
                                    <Box sx={{ mt: 2 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={6}>
                                                <Paper sx={{ p: 2 }}>
                                                    <Typography variant="h6" gutterBottom>Personal Information</Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                            <Email fontSize="small" color="action" />
                                                            <Typography>{patient.email}</Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                            <Phone fontSize="small" color="action" />
                                                            <Typography>{patient.phone}</Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                            <AccessTime fontSize="small" color="action" />
                                                            <Typography>DOB: {formatDate(patient.dob)}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Paper sx={{ p: 2 }}>
                                                    <Typography variant="h6" gutterBottom>Daily Goals History</Typography>
                                                    <TableContainer>
                                                        <Table size={isMobile ? "small" : "medium"}>
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell>Date</TableCell>
                                                                    <TableCell align="right">
                                                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                                                                            <Bed fontSize="small" />
                                                                            Sleep (hrs)
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell align="right">
                                                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                                                                            <DirectionsRun fontSize="small" />
                                                                            Steps
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell align="right">
                                                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                                                                            <LocalDrinkOutlined fontSize="small" />
                                                                            Water
                                                                        </Box>
                                                                    </TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {patient.daily_goals?.map((goal: any, index: any) => (
                                                                    <TableRow key={index}>
                                                                        <TableCell>{goal.date}</TableCell>
                                                                        <TableCell align="right">{goal.sleep_hrs}</TableCell>
                                                                        <TableCell align="right">{goal.total_steps}</TableCell>
                                                                        <TableCell align="right">{goal.water_intake}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Paper>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Paper sx={{ p: 2 }}>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Created: {formatDate(patient.created_at)}
                                                        <br />
                                                        Last Updated: {formatDate(patient.updated_at)}
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Collapse>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}