export default{
    'name' : 'page',
    'type': 'document',
    'title':'Pages',
    'fields':[
        {
            'name':'title',
            'type':'string',
            'title':'Title'
        },
        {
            'name':'slug',
            'type':'slug',
            'title':'Slug',
            'options':{
                'source':'title',
                'maxLenght':96
            }
        },
        {
            'name':'excerpt',
            'type':'string',
            'title':'Excerpt'
        },
        {
            'name':'body',
            'type':'array',
            'title':'Body',
            'of':[
                {
                    'type':'block'
                }
            ]
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
          }, 
          {
            name: 'active',
            type: 'boolean',
            title: 'Set Active',
            initialValue:'true',
            options: {
              layout: 'switch' // this will render a toggle switch instead of a checkbox
            },
          
            validation: Rule => Rule.required()
          }
    ]
}