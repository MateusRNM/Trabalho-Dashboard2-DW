const canvasFinanceGraph = document.getElementById("financeGraph");

const ctx = canvasFinanceGraph.getContext('2d');

const purpleGradient = ctx.createLinearGradient(0, 0, 0, 300);
purpleGradient.addColorStop(0, 'rgba(139, 92, 246, 0.6)');
purpleGradient.addColorStop(1, 'rgba(139, 92, 246, 0.0)'); 

const cyanGradient = ctx.createLinearGradient(0, 0, 0, 300);
cyanGradient.addColorStop(0, 'rgba(6, 182, 212, 0.6)');
cyanGradient.addColorStop(1, 'rgba(6, 182, 212, 0.0)');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'], 
    datasets: [
      {
        label: 'Receita',
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
        label: 'Despesas',
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