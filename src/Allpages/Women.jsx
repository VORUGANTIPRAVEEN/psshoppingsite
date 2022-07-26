import React from "react";
import "./Mainpage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatethecart } from "../redux/action/index";
import {Helmet} from "react-helmet";
export default function Women() {
  const disptach = useDispatch();
  function Womenselected(id) {
    disptach(updatethecart(id));
  }
  const womens_data = useSelector((state) => state.products);
  return (
    <div className="all_items">
      <Helmet><title>WOMEN PRODUCTS</title></Helmet>
      {Array.from(womens_data)?.map((data) => {
        if (data.category == "women's clothing") {
          return (
            <div key={data.id} className="items_main_dev">
              <Link to={`/Product?${data.id} `}>
                <img className="images" src={data.image} alt="title" />
                <div className="sub_elements">
                  <span className="no_emi item_title">{data.title}</span>
                  <span>Deal of the Day: {data.price} $ M.R.P</span>
                  <span>
                    {" "}
                    {data.count} ratings {data.rating.rate}
                  </span>
                  <span className="no_emi">
                    No Cost EMI: Avail No Cost EMI on select cards for orders
                    above ₹3000 DetailsNo Cost EMI: Avail No Cost EMI on select
                    cards for orders above ₹3000 Details
                  </span>
                </div>
              </Link>
              <button
                className="button_addtocart"
                onClick={() => Womenselected(data.id)}
              >
                Add to cart
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}
