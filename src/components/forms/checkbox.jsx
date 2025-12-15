export function Checkbox({ id, label, checked, onChange }) {
  return <div className="form-check">
    <input
      id={id}
      className="form-check-input"
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <label className="form-check-label" htmlFor={id}>
      {label}
    </label>
  </div>
}

// id prop is optional but useful for associating label with input
