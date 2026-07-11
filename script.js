document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calcForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const P = parseFloat(document.getElementById('principal').value) || 0;
    const r = parseFloat(document.getElementById('rate').value) / 100 || 0;
    const t = parseFloat(document.getElementById('years').value) || 0;
    const n = parseFloat(document.getElementById('n').value) || 1;

    if (P <= 0 || r < 0 || t <= 0 || n <= 0) {
      result.textContent = 'Please enter positive numbers for principal, years and compounds per year.';
      return;
    }

    const amount = P * Math.pow(1 + r / n, n * t);
    result.innerHTML = `<strong>Future value:</strong> $${amount.toFixed(2)}<br>
      <small>Principal: $${P.toFixed(2)}, Rate: ${(r*100).toFixed(2)}%, Years: ${t}, Compounds/year: ${n}</small>`;
    console.log('Calculation done', {P, r, t, n, amount});
  });
});
