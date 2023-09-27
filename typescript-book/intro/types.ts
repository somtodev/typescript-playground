enum GENDER {
  Male,
  Female,
}

type Member = {
  name: string | String[];
  age: number;
  gender: GENDER;
};

const member: Member = {
  name: "Somtochukwu",
  age: 16,
  gender: GENDER.Male,
};

const showStudentDetails: () => void = () => {
  for (var key in member) {
    console.log(key);
  }
};

showStudentDetails();

// Tuples
type DemoTuple = [string, boolean];

const condition: DemoTuple = ["Human", true];
