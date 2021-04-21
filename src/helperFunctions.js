
  const starImages = (c) => {
    if (c === 1) {
      return <img className="star" alt="star" src={Star}></img>;
    }
    if (c === 2) {
      return (
        <div>
          <img className="star" alt="star" src={Star}></img>
          <img className="star" alt="star" src={Star}></img>
        </div>
      );
    }
    if (c > 2) {
      return (
        <div>
          <img className="star" alt="star" src={Star}></img>
          <img className="star" alt="star" src={Star}></img>
          <img className="star" alt="star" src={Star}></img>
        </div>
      );
    }
  };