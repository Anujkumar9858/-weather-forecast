import React from 'react';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function InfoBox({ info }) {
  const getEmoji = (weather) => {
    const w = weather.toLowerCase();
    if (w.includes("cloud")) return "☁️";
    if (w.includes("rain")) return "🌧️";
    if (w.includes("clear")) return "☀️";
    if (w.includes("snow")) return "❄️";
    if (w.includes("haze") || w.includes("fog") || w.includes("mist")) return "🌫️";
    if (w.includes("thunder")) return "⛈️";
    if (w.includes("hot")) return "🔥";
    if (w.includes("cold")) return "🧊";
    return "🌡️";
  };

  const getImage = (weather) => {
    const w = weather.toLowerCase();
    if (w.includes("cloud")) return "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600";
    if (w.includes("rain")) return "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600";
    if (w.includes("clear")) return "https://images.unsplash.com/photo-1691848746386-d5de9f5c05a2?w=600";
    if (w.includes("snow")) return "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80";
    if (w.includes("haze") || w.includes("fog") || w.includes("mist")) return "https://images.unsplash.com/photo-1609778890377-e800d0541d0c?w=600";
    if (w.includes("thunder")) return "https://images.unsplash.com/photo-1743528184831-f90a3f4a9a71?w=600";
    if (w.includes("hot")) return "https://images.unsplash.com/photo-1543960544-4e010259d718?w=600";
    if (w.includes("cold")) return "https://images.unsplash.com/photo-1717148070923-fdcf1b079223?w=600";
    return `https://images.unsplash.com/photo-1637723251080-be611f2f5f65?w=600`;
  };

  return (
    <div className="InfoBox container d-flex flex-column align-items-center justify-content-center mt-5">

      <motion.h1
        className="text-center mb-4 fw-bold"
        style={{
          fontSize: "2.5rem",
          fontFamily: "'Playfair Display', serif",
          color: "#1E3A8A"  // Dark Blue for better visibility
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {info.city} Weather {getEmoji(info.weather)}
      </motion.h1>

      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 250 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <Card
          sx={{
            width: 360,
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.18)"
          }}
        >
          <CardMedia
            sx={{ height: 180 }}
            image={getImage(info.weather)}
            title={`Weather in ${info.city}`}
          />
          <CardContent className="text-center">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontFamily: "'Playfair Display', serif", fontWeight: "bold" }}
            >
              {info.weather.toUpperCase()}
            </Typography>
            <Typography variant="body2" sx={{ color: "#333" }} component={"div"}>
              <p><strong>🌡 Temp:</strong> {info.temp}&deg;C</p>
              <p><strong>💧 Humidity:</strong> {info.humidity}%</p>
              <p><strong>🔽 Min:</strong> {info.tempMin}&deg;C | <strong>🔼 Max:</strong> {info.tempMax}&deg;C</p>
              <p><i>Feels like</i> {info.feelslike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default InfoBox;
