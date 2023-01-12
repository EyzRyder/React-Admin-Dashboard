import App from "./App";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    expect(false).toBe(true)
    ReactDOM.unmountComponentAtNode(div);

});