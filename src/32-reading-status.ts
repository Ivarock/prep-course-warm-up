export {};

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (libraryStatus: {title: string, author: string, isRead: boolean}[]) => {
  return libraryStatus.forEach(readingStatus => {
    if (readingStatus.isRead) {
      console.log(`Already read '${readingStatus.title}' by ${readingStatus.author}`)
    } else {
      console.log(`You still need to read '${readingStatus.title}' by ${readingStatus.author}`)
    }
  })
};

showStatus(library);

/*
  Expected output:

  Already read 'The Road Ahead' by Bill Gates.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
