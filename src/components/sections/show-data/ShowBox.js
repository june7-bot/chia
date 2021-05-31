function ShowBox(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h5 style={{ paddingLeft: "25px", color: "white" }}>{props.title}</h5>
      <h5 style={{ paddingRight: "1rem", color: "white" }}>{props.content}</h5>
    </div>
  );
}

export default ShowBox;
