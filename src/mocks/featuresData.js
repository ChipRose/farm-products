import { ReactComponent as PlateImg } from "/src/assets/icons/plate.svg";
import { ReactComponent as GarbageImg } from "/src/assets/icons/garbage.svg";
import { ReactComponent as SproutImg } from "/src/assets/icons/sprout.svg";
import { ReactComponent as NoMeatImg } from "/src/assets/icons/no-meat.svg";

const featuresData = [
  {
    sticker: "Фермерские продукты",
    isPositive: true,
    image: <PlateImg />,
    title: "Еда намного вкуснее",
    description:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники"
  },
  {
    sticker: "Магазинные продукты",
    isPositive: false,
    image: <GarbageImg />,
    title: "Просроченные продукты",
    description:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара"
  },
  {
    sticker: "Фермерские продукты",
    isPositive: true,
    image: <SproutImg />,
    title: "Натуральные продукты",
    description:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений."
  },
  {
    sticker: "Магазинные продукты",
    isPositive: false,
    image: <NoMeatImg />,
    title: "Некачественное мясо",
    description:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов"
  }
];

export default featuresData;
