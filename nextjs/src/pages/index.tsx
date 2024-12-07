function Home() {
  return (
    <div className="container text-center mt-4">
      <h2 className="text-center text-bg-primary m-2 p-2">
        Bootstrap 5 with Next.js
      </h2>
      <div className="container-fluid m-2 border border-success text-center">
        <h4>Components</h4>
        <div className="row m-2">
          <div className="col-sm">First Component</div>
          <div className="col-sm">Second Component</div>
          <div className="col-sm">Third Component</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
