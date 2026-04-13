"use client";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";

const features = [
  {
    title: "Fast team reservations",
    description:
      "Book spots for your entire hackathon team and get instant confirmation.",
    icon: <EventAvailableIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: "Mentor matching",
    description:
      "Connect with mentors, workshops, and track information in one dashboard.",
    icon: <GroupsIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: "Prize-ready planning",
    description: "Share your schedule, rules, and rounds with participants clearly.",
    icon: <EmojiEventsIcon color="primary" sx={{ fontSize: 40 }} />,
  },
];

export default function Home() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <AppBar position="static" elevation={0} color="transparent" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar sx={{ justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
            HackReserve
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Schedule</Button>
            <Button color="inherit" variant="outlined">
              Reserve
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="overline" color="secondary" sx={{ letterSpacing: 1.5 }}>
                Hackathon booking made effortless
              </Typography>
              <Typography variant="h2" component="h1" sx={{ mt: 2, fontWeight: 800, lineHeight: 1.05 }}>
                Reserve your hackathon spot in minutes.
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mt: 3, maxWidth: 560 }}>
                Modern registration, team coordination, mentor signups, and prize tracking built for your next event.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button variant="contained" size="large" color="error">
                Book a seat
              </Button>
              <Button variant="outlined" size="large" color="primary">
                View schedule
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ borderRadius: 4, py: 4, px: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Reserve in 3 steps
                </Typography>
                <Box sx={{ mt: 2, display: "grid", gap: 2 }}>
                  {[
                    "Choose your hackathon track",
                    "Register your team and volunteers",
                    "Confirm payment and arrival details",
                  ].map((step, index) => (
                    <Box key={step} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                      <Box sx={{ minWidth: 32, minHeight: 32, bgcolor: "primary.main", color: "primary.contrastText", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                        {index + 1}
                      </Box>
                      <Typography>{step}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
            Build excitement before the event
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} md={4} key={feature.title}>
                <Card elevation={1} sx={{ borderRadius: 4, height: "100%" }}>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                      {feature.icon}
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography color="text.secondary">{feature.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 10, py: 8, px: 4, borderRadius: 4, bgcolor: "background.paper", boxShadow: 3 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                Launch your hackathon registration page today
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 680 }}>
                Keep registrations open, manage mentors, and publish deadlines with a clean Material-inspired experience designed for organizers and participants alike.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button variant="contained" size="large" color="secondary">
                  Start reservation
                </Button>
                <Button variant="outlined" size="large" color="primary">
                  See event features
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ borderRadius: 4, bgcolor: "primary.light", color: "primary.contrastText" }}>
                <CardContent>
                  <Typography variant="subtitle2" sx={{ mb: 1, textTransform: "uppercase", letterSpacing: 1.2 }}>
                    Next event
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Global HackFest 2026
                  </Typography>
                  <Typography sx={{ mb: 4 }}>
                    48 hours of hacking, networking, and prizes. Reserve your spot before registration closes.
                  </Typography>
                  <Box sx={{ display: "grid", gap: 1.5 }}>
                    {[
                      { label: "Date", value: "June 14–16, 2026" },
                      { label: "Location", value: "Downtown Innovation Center" },
                      { label: "Capacity", value: "250 reserved seats" },
                    ].map((item) => (
                      <Box key={item.label} sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography>{item.label}</Typography>
                        <Typography sx={{ fontWeight: 700 }}>{item.value}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
