import React from 'react';

interface Props {
  name: string;
}

const Hello: React.FC<Props> = ({ name }) => <div>Hello, {name}!</div>;

export default Hello;