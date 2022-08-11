import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  useEffect(() => {
    console.log("안녕");
  });

  let { id } = useParams();
  let dataId = props.shoes.find((a) => {
    return a.id === Number(id);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(id) + 1
            }.jpg`}
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{dataId.title}</h4>
          <p>{dataId.content}</p>
          <p>{dataId.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
