import "./Checkbox.css";

export const Checkbox = ({ checkboxLabel, formRegister }) => {
  return (
    <label className='checkbox-container'>
      <input
        type='checkbox'
        name='checkbox'
        className='custom-checkbox'
        {...formRegister.register(formRegister.registerName)}
      />
      <span className='checkbox-label'>{checkboxLabel}</span>
    </label>
  );
};
