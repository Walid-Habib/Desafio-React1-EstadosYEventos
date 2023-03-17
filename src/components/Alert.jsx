export default function Alerta({ texto, color }) {
  
    return (
      <div className={`alert alert-${color}`} role="alert">
        {texto.toUpperCase()}
      </div>
    );
  }
  