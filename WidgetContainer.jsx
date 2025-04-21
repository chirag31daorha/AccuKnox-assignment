import React, { useState } from 'react';

const WidgetContainer = () => {
  const [widgets, setWidgets] = useState([
    { id: 1, name: 'Widget 1', text: 'Some data for Widget 1' },
    { id: 2, name: 'Widget 2', text: 'Some data for Widget 2' },
  ]);

  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');
  const [search, setSearch] = useState('');

  const addWidget = () => {
    if (newName && newText) {
      const newWidget = {
        id: Date.now(),
        name: newName,
        text: newText,
      };
      setWidgets([...widgets, newWidget]);
      setNewName('');
      setNewText('');
    }
  };

  const removeWidget = (id) => {
    setWidgets(widgets.filter((w) => w.id !== id));
  };

  const filtered = widgets.filter((w) =>
    w.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ marginTop: '40px' }}>
      <h3>Widgets</h3>
      <input
        placeholder="Search widget..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '5px', width: '200px', marginBottom: '10px' }}
      />

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {filtered.map((widget) => (
          <div
            key={widget.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              width: '200px',
              backgroundColor: '#fff',
              position: 'relative',
            }}
          >
            <button
              onClick={() => removeWidget(widget.id)}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                cursor: 'pointer',
              }}
              >
              ×
            </button>
            <strong>{widget.name}</strong>
            <p>{widget.text}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Widget name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Widget text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={addWidget} style={{ padding: '5px 10px' }}>
          + Add Widget
        </button>
      </div>
    </div>
  );
};

export default WidgetContainer;
