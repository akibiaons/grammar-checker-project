let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
// Below I will manipulate the storyWords array by creating a count variable = 0, and iterating over the storyWords array with the .forEach() method.
let count = 0;
//The higher order function makes count of the characters and filters out unessecary words.
storyWords.forEach((word) => {
  console.log(count++);
  storyWords = storyWords.filter((word) => {
    if (word !== unnecessaryWord) {
      return word; //I need to uncomment for entire paragraph
    }
  });
  // Below we replace the misspelt word beautiful
  storyWords = storyWords.map((word) => {
    if (word === misspelledWord) {
      return "beautiful";
    } else {
      return word;
    }
  });
  // Below I will declare a variable to rm bad word "string"
  let badWordIndex = storyWords.findIndex(word => {
    return word === 'freaking';
  });
  // Below I printed the index of 'freaking' to replace with 'really' by reassigning the array element...
  console.log(badWordIndex);
  storyWords[78] = 'really';
  // Below this I will use the .every() to check each element and make sure they are below 10 characters.
  let lengthCheck = storyWords.every(word => {
    return word <= 10;
  });
  //console.log(lengthCheck);
  // Above I printed out a truthy or falsy method to check if there are words with more that 10 characters.
  // Below I will access the word and change it to a shorter version.
  let replaceWord = storyWords.findIndex(word => {
    return word === 'breathtaking';
  });
  console.log(replaceWord);
  storyWords[111] = 'stunning';
  // Above I replaced 111 which was over 10 characters with stunning...
});
// Below I used console.log() to view the entire story and used .join() with string space to legibly view the array data...
console.log(storyWords.join(' '));