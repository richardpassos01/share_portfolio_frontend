import React from 'react';

const styles = {
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
  },
  label: {
    fontSize: '16px',
    marginBottom: '4px',
    color: '#3f51b5', // Cor do rótulo
  },
  outlinedInput: {
    border: '1px solid #ccc',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
  },
};

function MyTextField() {
  return (
    <div style={styles.formControl}>
      <label htmlFor="component-outlined" style={styles.label}>
        Namae
      </label>
      <input
        type="text"
        id="component-outlined"
        style={styles.outlinedInput}
        defaultValue="Composed TextField"
      />
    </div>
  );
}

export default MyTextField;
