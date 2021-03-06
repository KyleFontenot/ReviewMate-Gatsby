export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
		{
			name:'coreFeatures',
			type:'document',
			title:'Core Features',
			fields:
			[{
				name:'header',
				type:'string',
				title:'Header'
			},
			{
				name:'section1',
				type:'document',
				title:'Section1',
				fields:
				[{
					name:'subheader',
					type:'string',
					title:'Section1 subheader'
				},
				{
					name:'paragraph',
					type:'text',
					title:'Text:'
				}]
			},
			{
				name:'section2',
				type:'document',
				title:'Section2',
				fields:
				[{
					name:'subheader',
					type:'string',
					title:'Section2 subheader'
				},
				{
					name:'paragraph',
					type:'text',
					title:'Text:'
				}]
			},
			{
				name:'section3',
				type:'document',
				title:'Section3',
				fields:
				[{
					name:'subheader',
					type:'string',
					title:'Section3 subheader'
				},
				{
					name:'paragraph',
					type:'text',
					title:'Text:'
				}]
			}],
		}],

}
