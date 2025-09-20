import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export default function LoginImage({ image, title, subtitle, features }) {
  return (
    <Box
      sx={{
        flex: 1,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        justifyContent: "center",
        p: 5,
        color: "white",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        },
        "> *": {
          zIndex: 2,
        },
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {subtitle}
      </Typography>
      <List>
        {features.map((feature, idx) => (
          <ListItem key={idx} disableGutters>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "success.main" }} />
            </ListItemIcon>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
