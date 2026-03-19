export default function Home() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0,
      overflow: 'hidden'
    }}>
      <iframe
        src="/ccb-landscape-presentation.pdf"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="CCB Landscape Services - Digital Marketing Strategy"
      />
    </div>
  );
}
