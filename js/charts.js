/* =========================================================
   ClientFlow Digital — charts.js
   Chart.js initialization for the Analytics dashboard.
   Loaded only on analytics.html (after Chart.js CDN script).
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof Chart === "undefined") return;

  Chart.defaults.color = "#CBD5E1";
  Chart.defaults.font.family = "Inter, sans-serif";
  Chart.defaults.borderColor = "rgba(255,255,255,0.08)";

  const gridColor = "rgba(255,255,255,0.06)";

  /* ---------- 1. Traffic Trend — Line Chart ---------- */
  const trafficTrendEl = document.getElementById("trafficTrendChart");
  if (trafficTrendEl) {
    const ctx = trafficTrendEl.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 280);
    gradient.addColorStop(0, "rgba(91, 75, 255, 0.45)");
    gradient.addColorStop(1, "rgba(91, 75, 255, 0)");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Sessions",
          data: [18200, 19850, 21200, 24500, 26800, 29200, 31500, 33800, 36200, 38900, 40100, 41200],
          borderColor: "#7A5FFF",
          backgroundColor: gradient,
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#5B4BFF",
          pointHoverBorderColor: "#fff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#131c33",
            borderColor: "rgba(122,95,255,0.4)",
            borderWidth: 1,
            padding: 12,
            titleFont: { family: "Poppins" }
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: gridColor }, ticks: { callback: v => (v / 1000) + "k" } }
        }
      }
    });
  }

  /* ---------- 2. Traffic Sources — Doughnut Chart ---------- */
  const trafficSourcesEl = document.getElementById("trafficSourcesChart");
  if (trafficSourcesEl) {
    new Chart(trafficSourcesEl.getContext("2d"), {
      type: "doughnut",
      data: {
        labels: ["Organic", "Social", "Paid", "Direct", "Referral"],
        datasets: [{
          data: [38, 27, 18, 11, 6],
          backgroundColor: ["#5B4BFF", "#7A5FFF", "#34D399", "#FBBF24", "#F87171"],
          borderColor: "#0F172A",
          borderWidth: 3,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 10, padding: 16 } },
          tooltip: { backgroundColor: "#131c33", padding: 12 }
        }
      }
    });
  }

  /* ---------- 3. Device Breakdown — Pie Chart ---------- */
  const deviceEl = document.getElementById("deviceChart");
  if (deviceEl) {
    new Chart(deviceEl.getContext("2d"), {
      type: "pie",
      data: {
        labels: ["Desktop", "Mobile", "Tablet"],
        datasets: [{
          data: [42, 51, 7],
          backgroundColor: ["#5B4BFF", "#7A5FFF", "#CBD5E1"],
          borderColor: "#0F172A",
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 10, padding: 16 } },
          tooltip: { backgroundColor: "#131c33", padding: 12 }
        }
      }
    });
  }

  /* ---------- 4. Monthly Conversions — Bar Chart ---------- */
  const conversionsEl = document.getElementById("conversionsChart");
  if (conversionsEl) {
    new Chart(conversionsEl.getContext("2d"), {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Conversions",
          data: [610, 640, 700, 760, 810, 890, 940, 1005, 1080, 1150, 1190, 1235],
          backgroundColor: "#5B4BFF",
          borderRadius: 8,
          maxBarThickness: 28,
          hoverBackgroundColor: "#7A5FFF"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { backgroundColor: "#131c33", padding: 12 }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: gridColor } }
        }
      }
    });
  }
});
