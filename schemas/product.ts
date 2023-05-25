// schemas/pet.js
export default {
    name: 'product',
    type: 'document',
    title: 'Products',
    fields: [
      {
        'name': 'name',
        'type': 'string',
        'title': 'Name'
      },
      {
        'name':'banner',
        'type':'image'
      },
      {
        'name':'description',
        'type':'string',
        'title':'Description'
      },
      {
        'name':'features',
        'title':'Features',
        'type':'document',
        'fields':[
            {
                'name':'name',
                'title':'Feature List Title',
                'type':'string'

            },
            {
                'name':'description',
                'title':'Feature List Description',
                'type':'string'
            },
            {
                'name':'image',
                'title':'Feature List Image',
                'type':'image'
            },
            {
                'name':'note',
                'title':'Feature Note',
                'type':'string'
            },
            {
                'name':'featureList',
                'title':'Feature Items',
                'type':'array',
                'of':[
                    {
                        'type':'object',
                        'fields':[
                            {
                                'name':'title',
                                'title':'Feature Title',
                                'type':'string'
                            },
                            {
                                'name':'description',
                                'title':'Feature Description',
                                'type':'text'
                            },
                            {
                                'name':'image',
                                'title':'Feature Image',
                                'type':'image'
                            }
        
                            
                        ]
                    }
                ]
            }
            
        ]
      },
      {
        'name':'topFeatures',
        'title':'Top Features',
        'type':'array',
        'of':[
            {
                'type':'object',
                'fields':[
                    {
                        'name':'title',
                        'type':'string',
                        'title':'Feature Name'
        
                    },
                    {
                        'name':'description',
                        'type':'string',
                        'title':'Feature Description'
        
                    },
                    {
                        'name':'image',
                        'type':'image',
                        'title':'Feature Image'
        
                    },
                    {
                        'name':'note',
                        'type':'string',
                        'title':'Feature Note'
        
                    },
                    {
                        'name':'layout',
                        'Title':'Select Feature Layout',
                        'type':'string',
                        'options':{
                            'list':[
                                {'title':'Normal', 'value':'normal'},
                                {'title':'Left-Right', 'value':'leftRight'},
                                {'title':'Top-Left', 'value':'topLeft'},
                                {'title':'Top-Right', 'value':'topRight'},
                                {'title':'Bottom-Right', 'value':'bottomRight'},
                                {'title':'Bottom-Left', 'value':'bottomLeft'},
                                {'title':'Center', 'value':'center'},
                            ]
                        }
                    }
                    
                ]
            }
            
        ]
      },
      {
        'name':'colors',
        'title':'Colors',
        'type':'array',
        'of':[
            {
                'type':'object',
                'fields':[
                    {
                        'name':'title',
                        'title':'Color Name',
                        'type':'string'
                    },
                    {
                        'name':'image',
                        'title':'Image',
                        'type':'image'
                    },
                    {
                        'name':'color',
                        'title':'Color Code',
                        'type':'color'
                    }
                ]
            }
        ]
      },
      {
        'name':'performance',
        'title':'Performance and Engine',
        'type':'array',
        'of':[
            {
                'type':'object',
                'fields':[
                    {
                        'name':'name',
                        'title':'Specification Name',
                        'type':'string'
                    },
                    {
                        'name':'desc',
                        'title':'Specification Description',
                        'type':'string'
                    }
                ]
            }
        ]
      },
      {
        'name':'size',
        'title':'Size and Weight',
        'type':'array',
        'of':[
            {
                'type':'object',
                'fields':[
                    {
                        'name':'name',
                        'title':'Specification Name',
                        'type':'string'
                    },
                    {
                        'name':'desc',
                        'title':'Specification Description',
                        'type':'string'
                    }
                ]
            }
        ]
      },
      {
        'name':'battery',
        'title':'Battery',
        'type':'array',
        'of':[
            {
                'type':'object',
                'fields':[
                    {
                        'name':'name',
                        'title':'Specification Name',
                        'type':'string'
                    },
                    {
                        'name':'desc',
                        'title':'Specification Description',
                        'type':'string'
                    }
                ]
            }
        ]
      },
      {
        'name':'equipment',
        'title':'Equipment',
        'type':'array',
        'of':[
            {
                'type':'object',
                'fields':[
                    {
                        'name':'name',
                        'title':'Specification Name',
                        'type':'string'
                    },
                    {
                        'name':'desc',
                        'title':'Specification Description',
                        'type':'string'
                    }
                ]
            }
        ]
      },
      {
        'name':'videos',
        'title':'Videos',
        'type':'array',
        'of':[
            {
                'type':'object',
                'fields':[
                    {
                        'name':'name',
                        'title':'Video Name',
                        'type':'string'
                    },
                    {
                        'name':'url',
                        'title':'Video Url',
                        'type':'url'
                    }
                ]
            }
        ]
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