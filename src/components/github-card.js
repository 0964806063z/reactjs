import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import axios from 'axios';
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} />
        <div className='info'>
          <div className='name'>{profile.name}</div>
          <div className='company'>{profile.company}</div>
        </div>
      </div>
    )
  }
}
class ListCard extends React.Component {
  render() {
    const profiles = this.props.profiles;
    const listCard = profiles.map((profile) =>
      <Card key={profile.id} {...profile} />
    );
    return listCard;
  }
}
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unsername: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async handleSubmit(event) {
    event.preventDefault()
    const data = await axios.get(`https://api.github.com/users/${this.state.unsername}`)
    this.props.onSubmit(data.data)
    this.setState({ unsername: '' })
  }
  render() {
    return (
      <form className='github-form' onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Github User Name" required value={this.state.unsername} onChange={e => this.setState({ unsername: e.target.value })} />
        <button>Add card</button>
      </form>
    )
  }
}
class CardsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
    this.addNewProfiles = this.addNewProfiles.bind(this)
  }
  addNewProfiles(profileData) {
    console.log(profileData)
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  componentDidMount() {

  }
  render() {
    return (
      <>
        <div><p>Github username: gaearon, sophiebits, sebmarkbage, bvaughn</p></div>
        <Form onSubmit={this.addNewProfiles} />
        <ListCard profiles={this.state.profiles} />
      </>

    )
  }
}

export default CardsApp;