function Error(params) {
    return (
      <>
      <style>{`
        @media screen and (max-width: 800px){
          .h1{
            width: 50%;
            text-align: center;
            font-size: 24px;
          }
        }
      `}
      </style>
      <div
        className="app"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          backgroundColor:"#BBBFBA",
          width: "100%",
          color:"black"
        }}
      >
        <h1 className="h1">ERROR 404 NOT FOUND</h1>
        <br />
        <h4>Sorry for the inconvenience</h4>
      </div>
      </>
    );
  }
  export default Error;
  