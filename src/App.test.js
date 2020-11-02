import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme'
import App from './App';
import PokemonForm from './PokemonForm';
import PokemonTable from './PokemonTable';
import PokemonItem from './PokemonItem';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const pokemon = {
  name: "pikachu",
  id: "25",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
};
const pokemons = [{
    name: "pikachu",
    id: "25",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    name: "pikachu",
    id: "25",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    name: "pikachu",
    id: "25",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  }
];


test('renders without crash', () => {
  render(<App />);
});
test('renders without crash', () => {
  render(<PokemonForm />);
});

test('renders without crash', () => {
  render(<PokemonItem data={pokemon} />);
});
test('renders without crash', () => {
  render(<PokemonTable  listPokemon={pokemons}/>);
});

describe("Pokemon Item", () => {
  it("accepts pokemon props", () => {
    const wrapper = shallow(<PokemonItem data={pokemon} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Pokemon Table", () => {
  it("accepts pokemons props", () => {
    const wrapper = shallow(<PokemonTable listPokemon={pokemons} />);
    expect(wrapper).toMatchSnapshot();
  });
});

