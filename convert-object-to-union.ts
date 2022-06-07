const fruitCounts = {
  apple: 1,
  pear: 2,
  banana:"",
};

type ObjectToObjectUnion<T extends Record<string, any>> = {
  [K in keyof T]: {
    [K2 in K]: T[K2];
  };
}[keyof T];

type SingleFruitCounts = ObjectToObjectUnion<typeof fruitCounts>;

const singleFruitCounts: SingleFruitCounts = {
  apple: 1,
  banana: "string",
  pear: 2,
};
