const { Comment } = require('../models');


const commentInfo = [
    {
        comment_text: 'PlaceHolderText',
        user_id: 6,
        post_id: 1
      },
      {
        comment_text: 'PlaceHolderText',
        user_id: 3,
        post_id: 4
      }
]; 

const seedComments = () => Comment.bulkCreate(commentInfo);

module.exports = seedComments;