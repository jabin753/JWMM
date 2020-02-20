'use strict'

const lecture = {
  interventionType: 'treasures2',
  title: 'Bible Reading',
  length: '4 min. or less',
  description: 'Ge 18:1-19',
  lesson: 12
}
const ministrySchoolVideo = {
  interventionType: 'ministrySchool0',
  title: 'First Return Visit Video',
  length: '5 min.',
  description: 'Discussion. Play the video. Then ask the audience the following questions How did the publisher properly introduce the scripture? How did he make clear the application of the scripture?'
}
const returnVisit = {
  interventionType: 'ministrySchool1',
  title: 'First Return Visit',
  length: '3 min. or less',
  description: 'Use the sample conversation.',
  lesson: 6
}
const returnVisit2 = {
  interventionType: 'ministrySchool2',
  title: 'First Return Visit',
  length: '5 min. or less',
  description: 'Begin with the sample conversation. Then offer the Teach Us book, and discuss the artwork on page 98.',
  lesson: 9
}

module.exports = {
  single: lecture,
  all: [lecture, ministrySchoolVideo, returnVisit, returnVisit2]
}
