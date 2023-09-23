const bestCourses = {
    name: 'bestCourses',
    title: 'Best Courses',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        title: 'Photo',
        name: 'photo',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
      }
    ],
  }
  
  export default bestCourses;