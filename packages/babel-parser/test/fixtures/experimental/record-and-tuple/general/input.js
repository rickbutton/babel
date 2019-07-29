// hash syntax
const r1 = #{};
const r2 = #{ a: 1, b: 2, c: 3 };
const r3 = #{
  a: 1,
  b: #{
    c: 3,
  },
};

const t1 = #[];
const t2 = #[1, 2, 3];
const t3 = #[1, #[2, 3], 4];

// bar syntax
const r4 = {||};
const r5 = {| a: 1, b: 2, c: 3 |};
const r6 = {|
  a: 1,
  b: {|
    c: 3,
  |},
|};

const t4 = [||];
const t5 = [|1, 2, 3|];
const t6 = [|1, [|2, 3|], 4|];
