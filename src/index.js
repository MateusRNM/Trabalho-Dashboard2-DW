const canvasFinanceGraph = document.getElementById("financeGraph");
const canvasSalesGraph = document.getElementById("salesGraph");
const canvasImportExportGraph = document.getElementById("importExportGraph");

const ctx = canvasFinanceGraph.getContext('2d');

const purpleGradient = ctx.createLinearGradient(0, 0, 0, 300);
purpleGradient.addColorStop(0, 'rgba(139, 92, 246, 0.6)');
purpleGradient.addColorStop(1, 'rgba(139, 92, 246, 0.0)'); 

const cyanGradient = ctx.createLinearGradient(0, 0, 0, 300);
cyanGradient.addColorStop(0, 'rgba(6, 182, 212, 0.6)');
cyanGradient.addColorStop(1, 'rgba(6, 182, 212, 0.0)');

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const themeBtn = document.getElementById("theme-button");
  const currentTheme = localStorage.getItem("theme");

  if(currentTheme === 'dark') {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  themeBtn.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if(theme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show-mobile");
  });

  document.addEventListener("click", (event) => {
    const isMenuOpen = sidebar.classList.contains("show-mobile");
    if(isMenuOpen && !sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
      sidebar.classList.remove("show-mobile");
    }
  });
})

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'], 
    datasets: [
      {
        label: 'Income',
        data: [19, 26, 27, 8, 30, 8, 11],
        borderColor: '#8B5CF6',
        backgroundColor: purpleGradient, 
        borderWidth: 2,
        pointBackgroundColor: '#8B5CF6',
        pointRadius: 1,
        fill: true,
        tension: 0
      },
      {
        label: 'Expense',
        data: [8, 19, 15, 6, 12, 6, 8],
        borderColor: '#06B6D4',
        backgroundColor: cyanGradient,
        borderWidth: 2,
        pointBackgroundColor: '#06B6D4',
        pointRadius: 1,
        fill: true,
        tension: 0
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: 0,
        max: 30,
        ticks: {
          stepSize: 5,
          color: '#9CA3AF',
          font: {
            size: 11
          }
        },
        grid: {
          color: '#F3F4F6',
          drawBorder: false
        }
      }
    }
  }
});

new Chart(canvasSalesGraph, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [40, 10, 15, 25, 10], 
      backgroundColor: [
        '#E5E7EB', 
        '#4ADE80',
        '#FB38B4',
        '#A855F7', 
        '#38BDF8',
      ],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '65%', 
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      }
    }
  }
});

new Chart(canvasImportExportGraph, {
  type: 'line',
  data: {
    labels: ['1 Feb', '2 Feb', '3 Feb', '4 Feb', '5 Feb', '6 Feb', '7 Feb', '8 Feb', '9 Feb', '10 Feb', '11 Feb', '12 Feb'], 
    datasets: [
      {
        label: 'Exported',
        data: [15, 4.5, 13, 7, 18, 15, 6, 1.8, 14, 19, 13, 17],
        borderColor: '#8B5CF6',
        backgroundColor: purpleGradient, 
        borderWidth: 2,
        pointBackgroundColor: '#8B5CF6',
        pointRadius: 0,
        fill: true,
        tension: 0.4
      },
      {
        label: 'Imported',
        data: [34, 17, 22, 20.5, 33, 23, 12, 2, 30, 21, 16, 21.5],
        borderColor: '#06B6D4',
        backgroundColor: cyanGradient,
        borderWidth: 2,
        pointBackgroundColor: '#06B6D4',
        pointRadius: 0,
        fill: true,
        tension: 0.4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
            color: '#9CA3AF',
            font: {
                size: 11
            }
        }
      },
      y: {
        min: 0,
        max: 35,
        ticks: {
          stepSize: 5,
          color: '#9CA3AF',
          font: {
            size: 11
          }
        },
        grid: {
          color: '#F3F4F6',
          drawBorder: false
        }
      }
    }
  }
});