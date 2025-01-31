import '/src/assets/css/Vinyles.css'


function Vinyles() {

  return (
    <section className="vinyles">

      {/* FIRST ROW OF VINYLES */}

      <div className="firstRowVinyles">
        <div className="vinyleCard">
          <img
            src="/images/vinyles/dockerVinyle.png"
            alt="Docker Vinyle"
            className="vinyle"
          />
          <h3>Docker</h3>
        </div>
        <div className="vinyleCard vinyleSql">
          <img
            src="/images/vinyles/sqlVinyle.png"
            alt="Docker Vinyle"
            className="vinyle "
          />
          <h3>PostgreSQL</h3>
        </div>
        <div className="vinyleCard">
          <img
            src="/images/vinyles/symfonyVinyle.png"
            alt="Docker Vinyle"
            className="vinyle"
          />
          <h3>Symfony</h3>
        </div>
        <div className="vinyleCard">
          <img
            src="/images/vinyles/swiftVinyle.png"
            alt="Docker Vinyle"
            className="vinyle"
          />
          <h3>Swift</h3>
        </div>
      </div >
    </section >
  );
}

export default Vinyles;
