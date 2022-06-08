// My solution
type Union = "user" | "post" | "comment";

type DistributeAndAddId<U extends string | number | bigint | boolean> =
  U extends any ? { type: U } & Record<`${U}id`, string> : never;

type DistributedUnion = DistributeAndAddId<Union>;

const withId: DistributedUnion = {
  type: "comment",
  commentid: "",
};

// Matt Solution
type Entity = { type: "user" } | { type: "post" } | { type: "comment" };
type y = Entity["type"];

type AddedType = {
  [K in Entity["type"]]: { type: K } & Record<`${K}id`, string>;
}[Entity["type"]];

const samer: AddedType = {
  type: "post",
  postid: "",
};


