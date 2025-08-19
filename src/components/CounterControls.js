// CounterControls.js
export default function CounterControls({ onIncrement, onDecrement }) {
  return (
    <div className="buttons-container">
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
