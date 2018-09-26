import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

global.React = React

global._posts = [
  {
    _id: '5b9eeda95744c570b3689035',
    title: 'possimus molestiae mollitia',
    body: 'Architecto nesciunt quidem. Modi ut a aut. Nobis est occaecati quia vitae officia sed adipisci ab odio. Aut enim et. Qui et error ipsum atque ut molestiae reprehenderit dolorum explicabo. Repudiandae dolor fugit non.\n \rEst sapiente voluptatem nihil et magnam et. Quis non et iure. Minima perspiciatis ducimus ab quo aliquid. Fuga molestias et cupiditate nesciunt qui possimus. Delectus asperiores nisi ut dolores ab rerum. Minima vero sit blanditiis impedit et.\n \rEt occaecati est rem quasi. Repellat aut consequatur aut. Quo quas assumenda voluptas cum placeat nam deserunt id. In sed in. Nisi pariatur accusamus animi sequi.',
    summary: 'Labore ipsum sed maxime qui iusto voluptatem quia.'
  }
]

configure({ adapter: new Adapter() })
