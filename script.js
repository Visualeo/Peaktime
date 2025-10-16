const rmsVoltageInput = document.getElementById('rms-voltage');
const calculateBtn = document.getElementById('calculate-btn');
const peakVoltageSpan = document.getElementById('peak-voltage');

calculateBtn.addEventListener('click', () => {
    const rmsVoltage = parseFloat(rmsVoltageInput.value);

    if (isNaN(rmsVoltage)) {
        alert('Please enter a valid number for RMS Voltage.');
        return;
    }

    const peakVoltage = rmsVoltage * Math.sqrt(2);
    peakVoltageSpan.textContent = peakVoltage.toFixed(2);
});