import React from 'react';
import { Label } from '../../components/atoms/Label';
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

      <Button size="large" variant="text">
        Text
      </Button>
      <Button size="large" variant="outlined">
        Outlined
      </Button>
      <Button size="large" variant="contained">
        Contained
      </Button>
      <Button size="large">Without variant</Button>

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

      <Button variant="text" size="large">
        <Label size="medium">Text</Label>
      </Button>
      <Button variant="outlined" size="large">
        <Label size="medium">Outlined</Label>
      </Button>
      <Button variant="contained" size="large">
        <Label color="white" size="medium">
          Contained
        </Label>
      </Button>
      <Button size="large">
        <Label size="medium">Without variant</Label>
      </Button>
    </>
  );
};

export default Home;
