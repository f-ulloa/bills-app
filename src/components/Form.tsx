import { useState } from 'react';
import '../styles/components/Form.css';

const Formulario = () => {
  const [nombreCuenta, setNombreCuenta] = useState('');
  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fecha = new Date().toLocaleDateString();
    const data = {
      nombreCuenta,
      categoria,
      monto,
      fecha,
    };
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="text-center">
        <div className="form-group mx-4 my-3">
          <label htmlFor="nombreCuenta">Nombre de la Cuenta</label>
          <input
            type="text"
            className="form-control"
            id="nombreCuenta"
            value={nombreCuenta}
            onChange={(e) => setNombreCuenta(e.target.value)}
            placeholder="Ingrese el nombre de la cuenta"
            required
          />
        </div>
        <div className="form-group mx-4 my-3">
          <label htmlFor="categoria">Categoría</label>
          <select
            className="form-control"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Seleccione una categoría</option>
            <option value="Necesidad">Necesidad</option>
            <option value="Cuentas Casa">Cuentas Casa</option>
            <option value="Gustos">Gustos</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className="form-group mx-4 my-3">
          <label htmlFor="monto">Monto</label>
          <input
            type="number"
            className="form-control"
            id="monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Ingrese el monto"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
