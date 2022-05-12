import React from "react";
import Company from "./Company";

const data = [
  {
    title: "ExperiLabs",
    paragraph:
      "Experilabs (formerly SahaBT) is a leading information technology company in Europe that provides business consulting, software development, onsite and offshore outsourcing to distinguished clients across a wide range of industries. ",
    imgUrl:
      "https://sahabt.com/tr-TR/wp-content/uploads/2021/10/saha_bt_logo_vector.svg",
    url: "https://www.google.com.tr",
  },
  {
    title: "Testinium",
    paragraph:
      "Testinium is an all-in-one open-source based, enterprise ready platform unifies all the functionality you need to shift testing left - and right.We empower millions of customers around the world to make their softwares perfect with our smart testing solutions, award-winning support, and inspiring technologies. Founded in 2010 and headquartered in Istanbul with additional offices in Amsterdam, London and Berlin. ",
    imgUrl: "/testinium-web.svg",
    imgWidth: "150",
    url: "https://www.facebook.com/SahaBilgiTeknolojileri",
  },
  {
    title: "ChainerIST",
    paragraph:
      "ChainerIST is the first web3 technology focused technology agency of the new digital world. It provides software development, consultancy, training or WEB3 transformation on subjects such as Blockchain, NFT, Metaverse, cryptocurrency.It is an initiative that will make its name heard frequently in this field with its strong software staff.",
    imgUrl: "/chainerist.png",
    imgWidth: "100",
    url: "https://www.facebook.com/SahaBilgiTeknolojileri",
  },
  {
    title: "JOXLY",
    paragraph: `Although it started as JOXLY, the new favorite brand of athletes and sports, with the goal of producing textiles on sports products, it has a vision to become the official licensor of sports clubs through takimruhu.com and to convert the licensed products of sports clubs under the brand JOXLY into sales on this website and to increase the profits of the clubs.You may come across with other surprises very soon.`,
    altparagraph: "You may come across with other surprises very soon.",
    imgUrl: "/joxly.png",
    imgWidth: "100",
    url: "https://www.facebook.com/SahaBilgiTeknolojileri",
  },
];
export default function Content() {
  return (
    <div className="content-wrapper">
      <p className="main-text">
        Testinium is an all-in-one open-source based, enterprise ready platform
        unifies all the functionality you need to shift testing left - and
        right. We empower millions of customers around the world to make their
        softwares perfect with our smart testing solutions, award-winning
        support, and inspiring technologies. Founded in 2010 and headquartered
        in Istanbul with additional offices in Amsterdam, London and Berlin.
      </p>
      <div className="company-body">
        {data.map((item) => {
          return (
            <Company
              title={item.title}
              paragraph={item.paragraph}
              imgUrl={item.imgUrl}
              imgWidth={item.imgWidth}
              alt={item.alt}
              buttonText={item.buttonText}
              link={item.link}
              url={item.url}
            />
          );
        })}
      </div>
      <p className="main-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis
        tempor nibh, eget feugiat metus. Donec velit nulla, pharetra ac euismod
        ac, fermentum suscipit libero. Nam eget auctor eros, et congue odio.
        Donec vestibulum vitae neque eget vehicula. Donec pharetra gravida nibh
        eu pretium Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
