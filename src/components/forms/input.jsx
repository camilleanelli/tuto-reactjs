export function Input({ placeholder, value, onChange }) {
  return <div>
    <input
      className="form-control"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
}

