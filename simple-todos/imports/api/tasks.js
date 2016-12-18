

import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

import { check } from 'meteor/check';

 

export const Tasks = new Mongo.Collection('tasks');

 

Meteor.methods({

  'tasks.insert' (task) {

    check(task.title, String);

 

    // Make sure the user is logged in before inserting a task

    if (!Meteor.userId()) {

      throw new Meteor.Error('not-authorized');

    }

 

    Tasks.insert({

      title:task.title,

      description:task.description, 

      thumbnail:task.thumbnail,

      url:task.url,

      createdAt: new Date(),

      owner: Meteor.userId(),

      username: Meteor.user().username,

    });

  },

  'tasks.remove' (taskId) {

   check(taskId, String);

 

    Tasks.remove(taskId);

  }

});







