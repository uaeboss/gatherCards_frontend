import "./css/CardSubject.css";

const CardSubject = ({ format }) => {
  return (
    <>
      <div className="cardsubject_container">
        <h2 id="format_h2">{format}</h2>
      </div>
    </>
  );
};

export default CardSubject;
