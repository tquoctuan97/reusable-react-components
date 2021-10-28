import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Button>Default</Button>
      <Button variant="outline">Default</Button>
      <Button variant="text">Default</Button>
      <Button color="primary" disableShadow>
        Default
      </Button>
      <Button disabled>Default</Button>
      <Button variant="text" disabled>
        Default
      </Button>
      <Button color="primary" startIcon="local_grocery_store">
        Default
      </Button>
      <Button color="primary" endIcon="local_grocery_store">
        Default
      </Button>
      <Button color="primary" size="sm">
        Default
      </Button>
      <Button color="primary" size="md">
        Default
      </Button>
      <Button color="primary" size="lg">
        Default
      </Button>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
}

export default App;
