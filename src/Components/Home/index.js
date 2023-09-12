import "./index.css";
import NavBar from "../NavBar";
import { v4 as uuidv4 } from "uuid";
import CardItem from "../CardItem";
import { useState } from "react";

let cardContent = [
  {
    id: uuidv4(),
    head: "Basic",
    sideHead: "FOR INDIVIEUALS & SMALL BUSINESSES",
    description:
      "Everything you need to create your store, ship products, and process payments",
    cost: "1,994",
    includecontent: [
      { id: uuidv4(), content: "Basic reports" },
      { id: uuidv4(), content: "Up to 1,000 inventory locations" },
      { id: uuidv4(), content: "2 staff accounts" },
    ],
  },
  {
    id: uuidv4(),
    head: "Shopify",
    sideHead: "FOR SMALL BUSINESSES",
    description:
      "Level up your business with professional reporting and more staff accounts",
    cost: "7,447",
    includecontent: [
      { id: uuidv4(), content: "Professional reports" },
      { id: uuidv4(), content: "Up to 1,000 inventory locations" },
      { id: uuidv4(), content: "5 staff accounts" },
    ],
  },
  {
    id: uuidv4(),
    head: "Advanced",
    sideHead: "FOR MEDIUM TO LARGE BUSINESSES",
    description:
      "Get the best of Shopify with custom reporting and our lowest transcation fees",
    cost: "30,164",
    includecontent: [
      { id: uuidv4(), content: "Custom reports builder" },
      { id: uuidv4(), content: "Up to 1,000 inventory locations" },
      { id: uuidv4(), content: "15 staff accounts" },
    ],
  },
];

const buttonItems = ["Basic", "Shopify", "Advanced"];
const Home = () => {
  const [cardList, setCardList] = useState([cardContent[0]]);
  const onclickButton = (each) => {
    let a = cardContent.filter((eachItem) => each === eachItem.head);
    setCardList(a);
  };
  return (
    <div className="parent_container min-vh-100 pb-5">
      <NavBar />
      <div className="child_container ">
        <div className="mt-5 bgcolor">
          <div className="d-none d-md-block">
            <div className="d-flex justify-content-center align-items-center ">
              <div className="d-flex border_styles">
                <button className="btn  buttonCls m-0">
                  <p className="m-0 text-light">Pay Monthly</p>
                </button>
                <p className="m-0 pl-3 align-self-center ">
                  Pay Yearly (Save 25%)
                </p>
              </div>
            </div>
          </div>

          <ul className=" d-flex justify-content-around list-unstyled d-md-none">
            {buttonItems.map((each) => (
              <li key={each}>
                <button
                  className="btn"
                  value={each}
                  onClick={() => onclickButton(each)}
                >
                  {each}
                </button>
              </li>
            ))}
          </ul>
          <ul className="list-unstyled d-flex cardContainer d-md-none">
            {cardList?.map((each) => (
              <CardItem key={each.id} cardItemDetails={each} />
            ))}
          </ul>
          <div className="d-none d-md-block ">
            <ul className="list-unstyled cardContainer d-flex flex-row">
              {cardContent?.map((each) => (
                <CardItem key={each.id} cardItemDetails={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
