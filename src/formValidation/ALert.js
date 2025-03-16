import "./app.css";
export default function Alert({ isViable, ERROR }) {
  if (isViable) {
    return (
      <>
        <div className="ParentAlert">
          <div>
            <h2 style={{ color: ERROR ? "#6f0000" : "green" }}>
              {ERROR !== ""
                ? ERROR
                : "The Form Has Been Submitted Successfully"}
            </h2>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
