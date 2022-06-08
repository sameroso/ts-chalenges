type Obj = { prop1: "Banana"; prop2: "Pear"; jeremias: { jagunço: "sad" } };

// Solution with Object Mapping
type UnionObjValues<TObj extends Record<string, any>> = {
  [K in keyof TObj]: TObj[K];
}[keyof TObj];


// simple Solution
type UnionStringObjValues<T extends Record<string, any>> = T[keyof T];



const test: UnionStringObjValues<Obj> = { jagunço: "sad" };
