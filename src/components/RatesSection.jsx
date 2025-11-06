import { useEffect, useMemo, useState } from 'react';

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function RatesSection() {
  const [rates, setRates] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/currency-data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível carregar as cotações.');
        }
        return response.json();
      })
      .then((data) => {
        setRates(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError('Não foi possível exibir as cotações no momento.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const threshold = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date;
  }, []);

  return (
    <section className="section-card">
      <header className="rates-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="Logo à esquerda"
        />
        <h1>Cotações de Moedas</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="Logo à direita"
        />
      </header>
      {isLoading && <p>Carregando cotações...</p>}
      {error && <p className="error-message">{error}</p>}
      {!isLoading && !error && (
        <table className="rates-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Cotação</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate) => {
              const rateDate = new Date(rate.date);
              const isOld = rateDate < threshold;

              return (
                <tr key={rate.code} className={isOld ? 'old-rate' : 'recent-rate'}>
                  <td>{rate.code}</td>
                  <td>{formatCurrency(rate.value)}</td>
                  <td>{new Date(rate.date).toLocaleDateString('pt-BR')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default RatesSection;
