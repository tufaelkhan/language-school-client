import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div>
        <h1>404 - Page Not Found</h1>
        <img
          src="https://file.mockplus.com/image/2018/02/b2eaaf72-8f21-4390-b113-b5b6fc98261c.jpg" 
          alt="Error"
        //   style={{ width: '500px', height: 'auto' }}
        />
        <Link to='/'><button className="btn btn-primary justify-center">Go Back Home</button></Link>
        <p>Oops! The page you`re <span>{status || 404}</span> This url does not exists.</p>
        <h3>{error?.message}</h3>
      </div>
    );
};

export default Error;