import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "components/UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
}

// Add 버튼을 누르면 CartButton 내 숫자의 값이 추가되는 논리
// 1. MealItemForm.js에서 Add 버튼을 눌렀을 때 onSubmitHandler 함수를 실행하여 유효성 검증을 한 뒤 총 amount를 계산하고 이를 props.onAddCart로 상위 컴포넌트로 전달한다.
// 2. MealItem.js에서 <MealItemForm onAddCart={addToCartHandler} />를 통해 1.에서 전달받은 값을 addToCartHandler 함수 실행 시 반영한다.
// 3. 전역적으로 사용하기 위해 선언한 CartContext를 불러와서 cartCtx에 저장한 다음, 미리 선언한 메소드 중 하나인 addItem을 실행한다.
// 3-1. 여기서 들어가는 인자는 이름, 가격, (설명), 개수이다.
// -- 여기까지 전역적으로 관라하는 CartContext에, Add 버튼을 클릭 시 3-1의 정보를 담는 것
// 이제 해야할 것은: '개수'에 해당하는 값이 HeaderCartButton에 보이게 하는 것
// 4. HeaderCartButton에도 당연히 3-1의 정보를 가져와야 하므로 전역적으로 사용하는 CartContext를 불러와서 cartCtx에 저장하였고, reduce 메소드를 통해 기존에 갖고 있던 값에 item.amount를 더한다.
// 4-1. 여기서 초기값은 당연히 0이지만, 여러번 추가할 경우 그 때마다 추가하기 이전의 값은 그 전까지 추가해왔던 개수이므로 currentNum이라는 인자가 필요한 것
// 4의 과정을(reduce 메소드 사용) 거친 결과값인 numberOfCartItems를 개수에 해당하는 div에 지정한다.
