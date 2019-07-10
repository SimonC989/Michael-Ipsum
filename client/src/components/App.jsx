import React from 'react';
import styled from 'styled-components';

const NavBox = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.i`
`;

const MenuIconSize = styled.span`
  font-size: 25px;
  color: #3d4452;
`;

const ResourceBox = styled.div`
  background-color: green;
  display: flex;
  flex-direction: row;
  margin-left: 30%;
`;

const Resource = styled.div`
  background-color: grey;
  margin: 10px;
  font-size: 18px;
`;

const ResourceIconSize = styled.span`
  font-size: 20px;
  color: #3d4452;
  margin: 5px;
`;

const UserBox = styled.div`
  background-color: purple;
  display: flex;
  margin-left: 10%;
`;

const UserButtons = styled.div`
  background-color: pink;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 20px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const CitizenInfoBox = styled.div`
  background-color: #598224;
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 50%;
`;

const CitizenBox = styled.div`
  background-color: #2a5cdb;
  display: flex;
  align-items: center;
  margin: 15px;
`;

const ProfessionBox = styled.div`
  background-color: #2ad5db;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
`;

const Profession = styled.div`
  background-color: #91b6f2;
  margin: 10px;
`;

const ProfessionCountBox = styled(ProfessionBox)`
  background-color: red;
  margin: 0px;
`;

const ProfessionCount = styled(Profession)`
`;

const ProfessionAssignmentBox = styled(ProfessionBox)`
  background-color: #57f25f;
  height: 200px;
  margin-top: 28%;
`;

const ProfessionInputBox = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfessionInput = styled.input`
  margin: 10px;
`;

const HireButton = styled.button`
  width: 20%;
  height: 10%;
`;

const MilitaryBox = styled(CitizenInfoBox)`
  background-color: #32afd1;
`;

const MilitaryRank = styled(Profession)`
`;

const MilitaryCount = styled(ProfessionBox)`
`;

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavBox>
          <MenuIconSize>
            <Icon className="fas fa-bars" />
          </MenuIconSize>
          <ResourceBox>
            <Resource>
              <ResourceIconSize>
                <Icon className="fas fa-coins" />
              </ResourceIconSize>
              Gold : 100,000
            </Resource>
            <Resource>
              <ResourceIconSize>
                <Icon className="fas fa-drumstick-bite" />
              </ResourceIconSize>
              Food : 50,000
            </Resource>
            <Resource>
              <ResourceIconSize>
                <Icon className="fas fa-tree" />
              </ResourceIconSize>
              Wood : 25,000
            </Resource>
            <Resource>
              <ResourceIconSize>
                <Icon className="fas fa-cubes" />
              </ResourceIconSize>
              Metal : 30,000
            </Resource>
          </ResourceBox>
          <UserBox>
            <UserButtons>
              Sign Up
            </UserButtons>
            <UserButtons>
              Login
            </UserButtons>
          </UserBox>
        </NavBox>
        <InfoBox>
          <CitizenInfoBox>
            <CitizenBox>
              Citizens Available: 50
            </CitizenBox>
            <ProfessionBox>
              <Profession>
                Gold Miner:
              </Profession>
              <Profession>
                Farmer:
              </Profession>
              <Profession>
                Lumberjack:
              </Profession>
              <Profession>
                Metal Miner:
              </Profession>
            </ProfessionBox>
            <ProfessionCountBox>
              <ProfessionCount>
                9,000
              </ProfessionCount>
              <ProfessionCount>
                9,001
              </ProfessionCount>
              <ProfessionCount>
                4,500
              </ProfessionCount>
              <ProfessionCount>
                10,000
              </ProfessionCount>
            </ProfessionCountBox>
            <ProfessionInputBox>
              <ProfessionAssignmentBox>
                <ProfessionInput />
                <ProfessionInput />
                <ProfessionInput />
                <ProfessionInput />
              </ProfessionAssignmentBox>
                <HireButton> Hire </HireButton>
            </ProfessionInputBox>
          </CitizenInfoBox>
          <MilitaryBox>
            <ProfessionBox>
              <MilitaryRank>
                Footman
              </MilitaryRank>
              <MilitaryRank>
                Archer
              </MilitaryRank>
              <MilitaryRank>
                Cavalry
              </MilitaryRank>
            </ProfessionBox>
          </MilitaryBox>
        </InfoBox>
      </div>
    )
  }
}

export default App;