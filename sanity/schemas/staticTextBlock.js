export default {
  name: 'staticTextBlock',
  title: 'Page Text Block',
  type: 'document',
  fields: [
		{
			name:'page',
			type:'string',
			title:'Page',

		},
		{
			name: 'section',
			title: 'Section',
			type:'string'

		},
		{
			name:'sectionIndex',
			title:'Text Block # within Section',
			type:'number'
		},
		{
			name:'content',
			title:'Text:',
			type:'string'
		}
	]
}
