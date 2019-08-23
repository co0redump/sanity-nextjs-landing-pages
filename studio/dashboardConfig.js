export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d5fc6c02a5dba60b866ee94',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t9szjn3b',
                  apiId: '6288f45f-bb04-4384-b8de-e8ada95d3a73'
                },
                {
                  buildHookId: '5d5fc6c0d4a6d2060586dada',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8pycpw2m',
                  apiId: '6c6097d0-fb3e-4120-9bb3-a456e5e1ea2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/co0redump/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8pycpw2m.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
