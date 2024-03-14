import logo from './../../logo.svg'

export const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                This is header
            </p>
            <nav>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </nav>
            
        </header>
    );
}
