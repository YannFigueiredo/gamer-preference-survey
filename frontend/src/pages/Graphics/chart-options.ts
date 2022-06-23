export const pieOptions = {
  chart: {
    background: "transparent",
    foreColor: "red",
  },
  colors: ["#a8dadc", "#D7DF01", "#01DF01", "#ffd6a5"],
  legend: {
    show: false,
  },
  tooltip: {
    enabled: true,
  },
  dataLabels: {
    enabled: true,
    offsetX: 100,
    offsetY: 100,
    style: {
      colors: ["#a8dadc", "#D7DF01", "#01DF01", "#ffd6a5"],
      fontSize: "20px",
      fontFamily: "Play, sans-serif",
      fontWeight: 700,
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.7,
      expandOnClick: false,
      dataLabels: {
        offset: 60,
      },
    },
  },
};
  
export const barOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ["#D7DF01"],
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      endingShape: "rounded",
      startingShape: "rounded",
      barHeight: "60px",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#0A2A12"]
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: [
    {
      labels: {
        maxWidth: 360,
        style: {
          colors: "#01DF01",
          fontSize: "18px",
          fontFamily: "Play, sans-serif",
          fontWeight: 700,
        },
      },
    },
  ],
};