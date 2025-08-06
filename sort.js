const friends = ["Alamin", "Rifat", "Masum", "Sabbir", "Main", "Habib"];
console.log(friends);
friends.sort();
console.log(friends);

const ages = [5, 64, 34, 35, 22, 65, 39, 45];
console.log(ages);
ages.sort();
console.log(ages);
// ascending

const sorted_ages = ages.sort(function (a, b) {
  return a - b;
});
console.log(sorted_ages);

// descending
const shorted_ages_desc = ages.sort(function (a, b) {
  return b - a;
});
console.log(shorted_ages_desc);
