const { Post } = require('../models');

const postinfo = [
    {
        title: 'Success In A Bootcamp Setting',
        content: 'I think one key to being successful in a bootcamp is time management. If this is something you struggle with, really work on it because if you fall behind, it is very easy to stay behind and feel lost.',
        user_id: 10
      },
      {
        title: 'BackEnd or FrontEnd?',
        content: 'I think I personally enjoy front end more. Thats what I am comfortable doing. But I really want to enjoy backend as well.',
        user_id: 9
      },
      {
        title: 'My Enjoyment',
        content: 'I am really enjoying learning throughout this course. I think this is a step into the right direction of your future.',
        user_id: 5
      },
      {
        title: 'The Future',
        content: 'I think that this a job that will never go away. The world is always going to need coders, and new developers. So this is a great start to that.',
        user_id: 2
      },
      {
        title: 'My TakeAway',
        content: 'My biggest take away from this course is hard work, determination and grit. You can not give up when it gets hard, you have to keep going and keeo pursuing. Hard work now will set up a great future for yourself.',
        user_id: 1
      },
      {
        title: 'To Any New Comers',
        content: 'To anyone just starting this course, it is hard. Expect many challenges, late nights and frustration. But just know, it will all pay off in the future when you become a very successful developer.',
        user_id: 3
      },
];

const seedPosts = () => Post.bulkCreate(postinfo);

module.exports = seedPosts;