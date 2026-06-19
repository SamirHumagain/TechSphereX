import foodiehoImg from "../../public/foodieho.png";
import rewardizImg from "../../public/Rewardiz.jpg";
import loopscartImg from "../../public/loopscart.png";

export const products = [
  {
    slug: "foodieho",
    tag: "MOBILE AND WEB BASED",
    img: foodiehoImg,
    title: "Foodieho: Restaurant Management System",
    desc: "A Restaurant Management System (RMS) is a comprehensive software solution that streamlines operations in a restaurant. It includes features for order processing, inventory management, table reservations, employee scheduling, and customer relationship management.",
    bullets: [
      "Streamlines order processing, inventory management, and table reservations.",
      "Reduces waste and optimizes resource use.",
      "Provides valuable analytics for informed decision-making.",
    ],
    right: true,
  },
  {
    slug: "rewardiz",
    tag: "MOBILE AND WEB BASED",
    img: rewardizImg,
    title: "Rewardiz: Loyalty and Rewards Management System",
    desc: "A Loyalty Management System is a software solution designed to track and reward customer loyalty. It manages loyalty programs, tracks customer purchases, and offers personalized rewards and incentives, enhancing customer retention and encouraging repeat business.",
    bullets: [
      "Encourages repeat business through rewards and incentives.",
      "Personalizes customer interactions and experiences.",
      "Boosts revenue by motivating repeat purchases.",
      "Differentiates your business by offering exclusive rewards.",
    ],
    right: false,
  },
  {
    slug: "spherecart",
    tag: "MOBILE AND WEB BASED",
    img: loopscartImg,
    title: "SphereCart: E-commerce",
    desc: "A full-featured e-commerce engine with product catalog, checkout, payments, order management, and analytics for online stores.",
    bullets: [
      "Allows customers to shop anytime, increasing sales opportunities.",
      "Expands market reach beyond geographical limitations.",
      "Simplifies browsing, purchasing, and payment processes.",
      "Automates stock tracking and order fulfillment.",
    ],
    right: true,
  },
];
