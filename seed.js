const db = require('./db/db.js');
const {Student, Campus} = require('./db/models');

const campuses = [
  {
    name: 'Luna',
    imgURL: ''
  },
  {
    name: 'Testing Seed',
    imgURL: ''
  },
  {
    name: 'Mars',
    imgURL: ''
  },
  {
    name: 'Titan',
    imgURL: ''
  }
];

const students = [
  {
    name: 'Gabe',
    email: 'a@a.a',
    campusId: 1
  },
  {
    name: 'Ashi',
    email: 'b@b.b',
    campusId: 2
  },
  {
    name: 'Dan',
    email: 'c@c.c',
    campusId: 3,
  },
  {
    name: 'Marvin',
    email: 'd@d.d',
    campusId: 4
  },
  {
    name: 'Stinky',
    email: 'e@e.e',
    campusId: 1
  }
];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus)
  ))
  .then(() =>
    Promise.all(students.map(student =>
      Student.create(student)
    ))
  );


const main = () =>
  console.log('Syncing db...');
  db.sync({ force: true})
    .then(() => {
      console.log('Seeding database...')
      return seed();
    })
    .catch(err => console.error(err))
    .then(() => {
      db.close();
      return null;
    });

main();
