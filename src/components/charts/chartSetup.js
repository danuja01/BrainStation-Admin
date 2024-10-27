import {
    Chart as ChartJS,
    CategoryScale,   // Required for category scales (x-axis in bar charts)
    LinearScale,     // Required for y-axis (numeric values)
    BarElement,      // Required for bar charts
    ArcElement,      // Required for pie charts
    Title,           // For chart titles
    Tooltip,         // For tooltips
    Legend           // For legends
  } from 'chart.js';
  
  // Register the components globally
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
  