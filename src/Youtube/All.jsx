import React, { Component } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';

const categories = [
  'All', 'Music', 'News', 'Dramas', 'Live', 'Mixes', 'Series',
  'Podcasts', 'Documentary', 'Thrillers'
];

const Container = styled.div`
  background-color: #f9f9f9;
  position: fixed;
  margin-left: 250px;
  margin-top: 80px;
  height: 100px;
  width: calc(100% - 250px);
  display: flex;
  align-items: center;
  padding-left: 40px;
  overflow-x: auto;
`;

const CategoryButton = styled.button`
  background-color: ${props => props.active ? 'black' : 'lightgray'};
  color: ${props => props.active ? 'white' : 'black'};
  padding: 8px 16px;
  height: 48px;
  border-radius: 10px;
  margin-left: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowContainer = styled.div`
  margin-left: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export default class All extends Component {
  state = {
    activeCategory: 'All'
  };

  setActiveCategory = (category) => {
    this.setState({ activeCategory: category });
  };

  render() {
    const { activeCategory } = this.state;

    return (
      <Container>
        {categories.map(category => (
          <CategoryButton
            key={category}
            active={activeCategory === category}
            onClick={() => this.setActiveCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
        <ArrowContainer>
          <ArrowForwardIosIcon />
        </ArrowContainer>
      </Container>
    );
  }
}

