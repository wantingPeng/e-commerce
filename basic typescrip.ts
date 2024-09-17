/* object */
type guiterartist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let menber_1: guiterartist = {
  name: "eddie",
  active: false,

  albums: [1999, 2222, "sing loud"],
};

let menber_2: guiterartist = {
  name: "kimmy",

  albums: [1989, 2222, "sing loud"],
};

/* apply to a function */
const greetGuiter = (artist: guiterartist) => {
  return `hellow ${artist.name}`;
};
console.log(greetGuiter(menber_2));

//enums

enum Grade {
  a,
  w,
  e,
  d,
  s,
  v,
}
