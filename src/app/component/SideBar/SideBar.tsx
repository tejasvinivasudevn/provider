import React from "react";
import Link from "next/link";
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MedicationIcon from '@mui/icons-material/Medication';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import NewspaperIcon from '@mui/icons-material/Newspaper';
export default function Sidebar() {
    return (
        <Box
            sx={{
                width: 250,
                height: "100vh",
                backgroundColor: "#1e293b", // Tailwind's slate-800 equivalent
                color: "white",
                display: "flex",
                flexDirection: "column",
                padding: 2,
            }}
        >
            <Box sx={{ mb: 4 }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>My App</h2>
            </Box>
            <List className="flex flex-col gap-3">
                {/* Dashboard */}
                <Link href="/dashboard/" passHref className="flex flex-row">

                    <ListItemIcon sx={{ color: "white" }}>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />

                </Link>

                <Link href="/dashboard/healthPortal" passHref className="flex flex-row">

                    <ListItemIcon sx={{ color: "white" }}>
                        < NewspaperIcon />
                    </ListItemIcon>
                    <ListItemText primary="Health Portal" />

                </Link>

                <Link href="/dashboard/patient" passHref className="flex flex-row">

                    <ListItemIcon sx={{ color: "white" }}>
                        <MedicationIcon />
                    </ListItemIcon>
                    <ListItemText primary="Patient" />

                </Link>

                <Link href="/dashboard/provider" passHref className="flex flex-row">

                    <ListItemIcon sx={{ color: "white" }}>
                        <EmojiPeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Provider" />

                </Link>

                {/* My Profile */}
                <Link href="/dashboard/profile" passHref className="flex flex-row">

                    <ListItemIcon sx={{ color: "white" }}>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />

                </Link>

                {/* Logout */}
                <Link href="/auth" passHref className="flex flex-row">

                    <ListItemIcon sx={{ color: "white" }}>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </Link>
            </List>
        </Box>
    );
}
