let expect = require('chai').expect;
let db = require('../server/db/db');

describe('Sequelize Database Behavior', function () {
  describe('Remtext columns', function () {
    it('should have id, text, and done columns with correct datatypes', function () {
      let target = {
        id: 1,
        text: 'Durrhurr',
        done: 'false'
      }
      console.log('found user')
      db.User.findOrCreate({
        where: {
          username: 'Lala'
        }
      })
      .then(function (data) {
        
        db.Reminder.create({
            userId: data[0].dataValues.id,
            text: 'Teehee',
            done: false
          })
          .then(function () {
            return Reminder.find({
              where: {
                text: 'Teehee'
              },
              include: [db.User]
            });
          })
          .then(function (data) {
            expect(data.dataValues.text).to.equal('Teehee');
            console.log(data.dataValues.id);
            expect(data.dataValues.id).to.equal(11);
            expect(data.dataValues.userId).to.equal(3);
          })
          .catch(function(e) {
            console.log('error fetching reminder', e.message);
          });
      });

    });
  });


});