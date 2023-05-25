export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'bio',
        type: 'text',
        title: 'Bio'
      }
    ]
  }