const Quote = ({ author, quote }) => {
    return (
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <h2 style={{ color: 'blue' }}>{author}</h2>
        <p style={{ color: 'green' }}>{quote}</p>
      </div>
    );
  };
  
  export default Quote;
  
