export default {
    name: 'siteInfo',
    title: 'Site Info',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },

      {
        name: 'keyWords',
        title: 'Key Words',
        type: 'text'
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image'
      },
      {
        name: 'favicon',
        title: 'Favicon',
        type: 'image'
      },
      {
        name: 'socialLinks',
        title: 'Social Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string'
              },
              {
                name: 'url',
                title: 'URL',
                type: 'url'
              }
            ]
          }
        ]
      },
      {
        name: 'contactDetails',
        title: 'Contact Details',
        type: 'object',
        fields: [
          {
            name: 'email',
            title: 'Email Address',
            type: 'string'
          },
          {
            name: 'phone',
            title: 'Phone Number',
            type: 'string'
          }
          ,
          {
            name: 'address',
            title: 'Address',
            type: 'string'
          }
        ]
      },
      
      {
        name: 'mapUrl',
        title: 'Map URL',
        type: 'url'
      }
    ]
  }