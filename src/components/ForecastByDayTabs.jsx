import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ForecastGraph from "./ForecastGraph";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const ForecastByDayTabs = ({ forecastByDayData, units }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Forecast by day tabs"
        >
          {forecastByDayData.map((day, index) => (
            <Tab
              key={day.dt}
              value={index}
              label={day.date}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>

      {forecastByDayData.map((forecastData, idx) => (
        <TabPanel key={forecastData.dt} value={value} index={idx}>
          <ForecastGraph
            key={forecastData.id}
            forecastData={forecastData.list}
            units={units}
          />
        </TabPanel>
      ))}
    </Box>
  );
};

export default ForecastByDayTabs;
