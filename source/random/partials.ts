type Goal = {
  definite: boolean;
  shortTimed: boolean;
};

type Person = {
  username: string;
} & Partial<Goal>;

const person: Person = {
  username: "somtodev",
  definite: true,
};

console.log(judgePersonGoals(person));

function judgePersonGoals({ username, definite, shortTimed }: Person) {
  if (!definite) return "Do not waste my time";

  if (shortTimed) return `Nice, ${username}! But Don't Always Be Short Sighted`;

  return `Good Luck ! Remember With Time & Grit All Things Could Be Feasable`;
}
