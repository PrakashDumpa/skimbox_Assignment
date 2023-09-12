import "./index.css";
import { BiCheck } from "react-icons/bi";

const CardItem = ({ cardItemDetails }) => {
  const { head, sideHead, description, cost, includecontent } = cardItemDetails;

  return (
    <li className="col-12 col-md-6 col-lg-4 mt-5">
      <div className={`card  p-4 ${head === "Basic" && "parent"} `}>
        <div className={`${head === "Basic" && "most d-block"} d-none`}>
          <p className="font-weight-bold m-0">Most Popular</p>
        </div>
        <div>
          <h1 className="h2 mb-3 m-0">{head}</h1>
          <h6 className="h6 font-weight-bold m-0">{sideHead}</h6>
          <p className="text-secondary mt-2">{description}</p>
          <div className="d-flex mt-2 mb-2">
            <h1 className="font-weight-bold">₹{cost}</h1>
            <div>
              <p className="m-0">INR</p>
              <p className="m-0">/mo</p>
            </div>
          </div>
        </div>
        <div className="text-center offer_container p-2">
          <p className="m-0 font-weight-bold">
            Get your first 3 months for ₹20/mo
          </p>
        </div>
        <p className="font-weight-bold m-0 mt-3 mb-2">
          What's included on Basic
        </p>
        <ul className="list-unstyled">
          {includecontent.map((each) => (
            <li key={each.id} className=" d-flex">
              <BiCheck className="icon_color" size={25} />
              <p>{each.content}</p>
            </li>
          ))}
        </ul>
        <button className="btn btn-dark buttonCls p-2">Try for free</button>
      </div>
    </li>
  );
};

export default CardItem;
