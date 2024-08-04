function ListGroup() {
  return (
    <>
      <ol className="list-group list-group-numberedfi">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
      </ol>
    </>
  );
}

export default ListGroup;
