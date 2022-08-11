import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  let { id } = useParams();
  let dataId = props.shoes.find((a) => {
    return a.id === Number(id);
  });
  let [alert, setAlert] = useState(true);
  let [numberAlert, setNumberAlert] = useState();
  let [inputText, setInputText] = useState();

  useEffect(() => {
    console.log(isNaN(inputText));
    if (isNaN(inputText)) {
      setNumberAlert(false);
    } else {
      setNumberAlert(true);
    }
  }, [inputText]);

  return (
    <div className="container">
      {alert ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
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
        {!numberAlert ? (
          <div className="alert alert-danger">경고: 숫자만입력하세요</div>
        ) : null}
        <input
          type="text"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
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
