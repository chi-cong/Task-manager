import "./Checkbox.css";

export const Checkbox = ({ checkboxLabel }) => {
  return (
    <label className='checkbox-container'>
      <input type='checkbox' name='checkbox' className='custom-checkbox' />
      <span className='checkbox-label'>{checkboxLabel}</span>
    </label>
  );
};
