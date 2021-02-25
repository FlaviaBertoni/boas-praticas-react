import React from 'react';
import Label from '../../components/atoms/Label';
import Button from '../../components/atoms/Button';

const Home: React.FC = () => {
  return (
    <>
      <Label size="small" color="primary" weight="normal">
        Home
      </Label>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
      <Button>Without variant</Button>

      <Button width="250px" variant="text">
        Text
      </Button>
      <Button width="250px" variant="outlined">
        Outlined
      </Button>
      <Button width="250px" variant="contained">
        Contained
      </Button>
      <Button width="250px">Without variant</Button>

      <Button variant="text">
        <Label>Text</Label>
      </Button>
      <Button variant="outlined">
        <Label>Outlined</Label>
      </Button>
      <Button variant="contained">
        <Label color="white">Contained</Label>
      </Button>
      <Button>
        <Label>Without variant</Label>
      </Button>

      <Button variant="text" width="250px">
        <Label size="medium">Text</Label>
      </Button>
      <Button variant="outlined" width="250px">
        <Label size="medium">Outlined</Label>
      </Button>
      <Button variant="contained" width="250px">
        <Label color="white" size="medium">
          Contained
        </Label>
      </Button>
      <Button width="250px">
        <Label size="medium">Without variant</Label>
      </Button>
    </>
  );
};

export default Home;
