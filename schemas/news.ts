export default {
    name: 'newsArticle',
    type: 'document',
    title: 'News Article',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Published at'
      },
      {
        name: 'mainImage',
        type: 'image',
        title: 'Main image'
      },
      {
        name: 'excerpt',
        type: 'text',
        title: 'Excerpt'
      },
      {
        name: 'body',
        type: 'array',
        title: 'Body',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image'
          }
        ]
      }
      
    ]
  }