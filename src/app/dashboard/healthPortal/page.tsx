'use client';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Container,
    CardActionArea,
    Box,
    Chip,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    FitnessCenter,
    Restaurant,
    LocalHospital,
    Spa,
    SelfImprovement,
} from '@mui/icons-material';
const Page = () => {
    return <><HealthInfoCards /></>
}
export default Page;



interface HealthCard {
    title: string;
    description: string;
    icon: React.ReactNode;
    category: string;
    link: string;
    imageUrl: string;
}

const healthCards: HealthCard[] = [
    {
        title: "Daily Exercise Routines",
        description: "Find the perfect workout routine for your fitness level and goals. Includes cardio and strength training plans.",
        icon: <FitnessCenter />,
        category: "Fitness",
        link: "https://www.example.com/fitness",
        imageUrl: "/api/placeholder/400/200"
    },
    {
        title: "Nutrition Guidelines",
        description: "Learn about balanced nutrition, meal planning, and healthy eating habits for optimal health.",
        icon: <Restaurant />,
        category: "Nutrition",
        link: "https://www.example.com/nutrition",
        imageUrl: "/api/placeholder/400/200"
    },
    {
        title: "Mental Health Resources",
        description: "Access resources and tips for maintaining good mental health and reducing stress.",
        icon: <Spa />,
        category: "Mental Health",
        link: "https://www.example.com/mental-health",
        imageUrl: "/api/placeholder/400/200"
    },
    {
        title: "Sleep Improvement Tips",
        description: "Discover techniques and habits for better sleep quality and improved rest.",
        icon: <BedtimeIcon />,
        category: "Sleep",
        link: "https://www.example.com/sleep",
        imageUrl: "/api/placeholder/400/200"
    },
    {
        title: "Meditation Practices",
        description: "Learn various meditation techniques for stress relief and mental clarity.",
        icon: <SelfImprovement />,
        category: "Wellness",
        link: "https://www.example.com/meditation",
        imageUrl: "/api/placeholder/400/200"
    },
    {
        title: "Preventive Healthcare",
        description: "Important information about preventive care and regular health checkups.",
        icon: <LocalHospital />,
        category: "Healthcare",
        link: "https://www.example.com/healthcare",
        imageUrl: "/api/placeholder/400/200"
    }
];

function HealthInfoCards() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const handleCardClick = (link: string) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
            <Typography
                variant={isMobile ? 'h5' : 'h4'}
                component="h1"
                gutterBottom
                sx={{
                    mb: { xs: 3, md: 5 },
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
            >
                Health & Wellness Resources
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
                {healthCards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: theme.shadows[8],
                                }
                            }}
                        >
                            <CardActionArea
                                onClick={() => handleCardClick(card.link)}
                                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={card.imageUrl}
                                    alt={card.title}
                                />
                                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Box sx={{ mr: 1, color: 'primary.main' }}>
                                            {card.icon}
                                        </Box>
                                        <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
                                            {card.title}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {card.description}
                                    </Typography>

                                    <Box sx={{ mt: 'auto' }}>
                                        <Chip
                                            label={card.category}
                                            size="small"
                                            color="primary"
                                            sx={{
                                                borderRadius: '4px',
                                                fontSize: '0.75rem'
                                            }}
                                        />
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}