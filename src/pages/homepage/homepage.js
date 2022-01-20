import React from 'react';

import Directory from '../../components/directory/directory.component';

//import styled-components
import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
    return (
        <HomePageContainer>
          <Directory />
        </HomePageContainer>  
    )
}

export default HomePage
