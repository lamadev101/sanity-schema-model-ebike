export default {
  name: 'menubuilder',
  title: 'Menu Builder',
  type: 'document',
  fields: [
    {
      name: 'menu',
      title: 'Menu Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'submenu',
      title: 'Sub Menu',
      type: 'array',
      // options:{
      //   isHighlighted: true
      // },
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
            },
            {
              name: 'item',
              title: 'Item',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'link',
                      title: 'Link',
                      type: 'string',
                    },
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

  ]
}