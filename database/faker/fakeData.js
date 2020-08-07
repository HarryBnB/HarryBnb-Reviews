const faker = require('faker');

const imageUrls = ['https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa1.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa10.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa11.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa12.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa13.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa14.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa15.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa16.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa17.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa18.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa19.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa2.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa20.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa21.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa22.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa23.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa24.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa25.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa3.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa4.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa5.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa6.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa7.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa8.webp', 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa9.webp'];

const getRandomUrl = () => imageUrls[Math.floor(Math.random() * imageUrls.length)];

const getRandomText = () => faker.lorem.sentences(Math.floor(Math.random() * (11 - 2) + 2));

const getRandomRating = () => Math.floor(Math.random() * (6 - 2) + 2);

const getRandomReviews = (number, rooms) => {
  const reviews = [];
  // const randomN = Math.floor(Math.random() * (16 - 6) + 6);
  const roomLen = rooms.length;
  for (let i = 0; i < number; i += 1) {
    // eslint-disable-next-line no-underscore-dangle
    const randomRoomId = rooms[Math.floor(Math.random() * roomLen)]._room_id;
    const review = {
      name: faker.name.findName().toString(),
      image_url: getRandomUrl().toString(),
      created_at: faker.date.between('2015-01-01', '2020-06-15').toString(),
      content: getRandomText().toString(),
      overall: getRandomRating(),
      cleanliness: getRandomRating(),
      communication: getRandomRating(),
      checkin: getRandomRating(),
      accuracy: getRandomRating(),
      location: getRandomRating(),
      value: getRandomRating(),
      room_id: randomRoomId,
    };
    reviews.push(review);
  }
  return reviews;
};

const getRandomRooms = (number = 1) => {
  const rooms = [];
  for (let i = 0; i < number; i += 1) {
    const room = {
      _room_id: (i + 1).toString().padStart(9, 0),
    };
    rooms.push(room);
  }
  return rooms;
};

const randomRooms = getRandomRooms(100);
const randomReviews = getRandomReviews(5000, randomRooms);

module.exports = {
  getRandomRooms, getRandomReviews, randomRooms, randomReviews,
};

// console.log(typeof randomReviews[0].overall);
