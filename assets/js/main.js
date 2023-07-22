// Dummy function to simulate drowsiness detection
function detectDrowsiness() {
    return Math.random() < 0.05; // Simulate 5% chance of drowsiness
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const statusDiv = document.getElementById('status');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
  
    let isMonitoring = false;
  
    function updateStatus(message) {
      statusDiv.textContent = message;
    }
  
    function startMonitoring() {
      isMonitoring = true;
      updateStatus('Monitoring...');
      // Simulate drowsiness detection at intervals (every 2 seconds in this case)
      setInterval(() => {
        if (isMonitoring) {
          const isDrowsy = detectDrowsiness();
          if (isDrowsy) {
            updateStatus('Driver is Drowsy! Please Take a Break!');
          } else {
            updateStatus('Driver is Alert');
          }
        }
      }, 2000);
    }
  
    function stopMonitoring() {
      isMonitoring = false;
      updateStatus('Monitoring Stopped');
    }
  
    startBtn.addEventListener('click', startMonitoring);
    stopBtn.addEventListener('click', stopMonitoring);
  });
  