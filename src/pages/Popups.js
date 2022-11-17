const Edit = props => {
  return (
    <div className="popup-box">
      <div className="card">
        <div className="card-body">
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default Edit;