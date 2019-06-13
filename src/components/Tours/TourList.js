import React, { Component } from 'react'

import style from '../../css/items.module.css'

import Title from '../Title'
import Tour from './Tour'

export default class TourList extends Component {

  state = {
    tours: [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState({
      tours:this.props.tours.edges,
      sortedTours:this.props.tours.edges
    })
  }

  render() {
    return (
      <section className={style.tours}>
        <Title title="our" subtitle="tours"/>
        <div className={style.center}>
          {
            this.state.sortedTours.map(({node}) => {
              return <Tour key={node.contentful_id} tour={node} />
            })
          }
        </div>
      </section>
    )
  }
}
