import logo from './../logo.svg';
import './../scss/app1.scss';

export const App1 = () => {
    return (
        <>
            <header>
                <div className='header-wrapper'>
                <div><img className='logo' src={logo} /></div>
                <div><button className='btn-login'>login</button></div>
                </div>
            </header>
            <section>
                <h1>CSS и HTML на практике</h1>

                <div className='content-wrapper'>
                <div className='card'>
                <h2>Заголовок h2 первой карточки</h2>
                    <img className='card-img' src={logo} />
                    <p>
                    Some text Some text Some text Some text Some text Some text Some text Some text 
                    Some text Some text Some text Some text Some text Some text Some text
                    </p>
                </div>

                <div className='card'>
                <h2>Заголовок h2</h2>
                    <img className='card-img' src={logo} />
                    <p>
                    Some text Some text Some text Some text Some text Some text Some text Some text 
                    Some text Some text Some text Some text Some textSome text Some text Some text Some text Some text Some text Some text Some
                    text Some textSome text Some text Some text Some text Some text Some text Some text
                    </p>
                </div>

                <div className='card'>
                <h2>Заголовок h2</h2>
                    <img className='card-img' src={logo} />
                    <p>
                    Some text Some text Some text Some text Some text Some text Some text Some text 
                    Some text Some text Some text Some text Some text Some textSome text Some text Some text Some text Some text Some text Some text Some text
                    </p>
                </div>
                </div>

            </section>
            <footer>
                <ul>
                <li><a href=''>Ссылка</a></li>
                <li><a href=''>Ещё одна</a></li>
                <li><a href=''>Три</a></li>
                <li><a href=''>Четыре</a></li>
                </ul>
            </footer>
        </>
    );
}